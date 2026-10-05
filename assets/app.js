// Storefront — single-page app with hash routing. No build step, no dependencies.
(function () {
  "use strict";

  const D = window.LOCAL_DATA;
  const { icon, star, pattern } = window.ICONS;
  const app = document.getElementById("app");

  // ---------------------------------------------------------------- lookups
  const CATS = {}, SUBS = {}, CITIES = {}, HOODS = {};
  D.categories.forEach((c) => {
    CATS[c.id] = c;
    c.subs.forEach((s) => (SUBS[s.id] = { ...s, cat: c.id }));
  });
  D.areas.forEach((a) => {
    CITIES[a.id] = a;
    a.hoods.forEach((h) => (HOODS[h.id] = { ...h, city: a.id }));
  });
  const BIZ = D.businesses.filter((b) => SUBS[b.subcategory] && HOODS[b.neighborhood]);
  const BY_ID = Object.fromEntries(BIZ.map((b) => [b.id, b]));

  // ---------------------------------------------------------------- storage (per-browser conveniences)
  const store = {
    get(k, fallback) {
      try {
        const v = localStorage.getItem("storefront:" + k);
        return v == null ? fallback : JSON.parse(v);
      } catch { return fallback; }
    },
    set(k, v) {
      try { localStorage.setItem("storefront:" + k, JSON.stringify(v)); } catch { /* storage unavailable */ }
    },
  };

  // ---------------------------------------------------------------- utils
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const todayISO = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const parseISO = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  function fmtDate(iso, withYear) {
    const d = parseISO(iso);
    const y = d.getFullYear() !== new Date().getFullYear() || withYear;
    return `${MONTHS[d.getMonth()]} ${d.getDate()}${y ? ", " + d.getFullYear() : ""}`;
  }
  function relDate(iso) {
    const days = Math.floor((new Date() - parseISO(iso)) / 864e5);
    if (days <= 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    if (days < 30) { const w = Math.round(days / 7); return `${w} week${w > 1 ? "s" : ""} ago`; }
    if (days < 365) { const m = Math.round(days / 30); return `${m} month${m > 1 ? "s" : ""} ago`; }
    const y = Math.round(days / 365);
    return `${y} year${y > 1 ? "s" : ""} ago`;
  }
  const plural = (n, word, pl) => `${n} ${n === 1 ? word : pl || word + "s"}`;
  const STOP = new Set(["the", "and", "&", "of", "a", "co.", "co", "+"]);
  function initials(name) {
    const w = name.replace(/[’'"]/g, "").split(/\s+/).filter((x) => !STOP.has(x.toLowerCase()));
    return ((w[0] || "")[0] + ((w[1] || "")[0] || "")).toUpperCase();
  }
  const personInitials = (n) => n.split(/\s+/).map((p) => p[0]).join("").slice(0, 2).toUpperCase();

  // Pick the readable ink (white or near-black) for a background, by WCAG relative luminance.
  function luminance(hex) {
    let h = hex.replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const ch = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255)
      .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
  }
  const inkOn = (hex) => (luminance(hex) > 0.179 ? "#1D1B18" : "#FFFFFF");

  const varCache = new Map();
  function brandVars(b, onAccent = false) {
    const key = b.id + (onAccent ? ":a" : "");
    if (!varCache.has(key)) {
      const { primary: p, accent: a } = b.brand;
      const field = onAccent ? a : p;
      const patColor = inkOn(field) === "#FFFFFF" ? "#FFFFFF" : "#000000";
      varCache.set(key, `--p:${p};--a:${a};--p-ink:${inkOn(p)};--a-ink:${inkOn(a)};--pattern:${pattern(b.subcategory, patColor, onAccent ? 0.09 : 0.1)}`);
    }
    return varCache.get(key);
  }
  const lightInk = (b) => inkOn(b.brand.primary) !== "#FFFFFF";

  let toastTimer;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
  }

  // ---------------------------------------------------------------- hours
  const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dayIdx = (d = new Date()) => (d.getDay() + 6) % 7;

  function parseTime(s, fallbackSuffix) {
    s = s.trim().toLowerCase().replace(/\./g, "");
    if (s === "noon") return 720;
    if (s === "midnight") return 1440;
    const m = s.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
    if (!m) return null;
    const suf = m[3] || fallbackSuffix;
    if (!suf) return null;
    let h = +m[1] % 12;
    if (suf === "pm") h += 12;
    return h * 60 + +(m[2] || 0);
  }
  // "7am–3pm" | "11:30am–2pm, 5pm–10pm" -> [[start,end],...] in minutes; [] if closed; null if unparseable
  function parseRanges(s) {
    if (!s || /closed/i.test(s)) return [];
    const out = [];
    for (const part of s.split(/\s*[,;&]\s*/)) {
      const bits = part.split(/\s*(?:–|—|-|\bto\b)\s*/);
      if (bits.length !== 2) return null;
      const endSuf = (bits[1].match(/(am|pm)/i) || [])[1];
      const a = parseTime(bits[0], endSuf && endSuf.toLowerCase());
      let z = parseTime(bits[1]);
      if (a == null || z == null) return null;
      if (z <= a) z += 1440;
      out.push([a, z]);
    }
    return out;
  }
  function fmtTime(m) {
    m %= 1440;
    const h = Math.floor(m / 60), mm = m % 60;
    const h12 = ((h + 11) % 12) + 1;
    return `${h12}${mm ? ":" + String(mm).padStart(2, "0") : ""}${h < 12 ? "am" : "pm"}`;
  }
  function openStatus(b, now = new Date()) {
    const i = dayIdx(now);
    const mins = now.getHours() * 60 + now.getMinutes();
    const today = b.hours[i] || "";
    if (/24\/7|24 hours/i.test(today)) return { state: "open", label: "Open 24/7" };
    // Late-night spillover from yesterday's hours (e.g. 5pm–1am).
    const y = parseRanges(b.hours[(i + 6) % 7]);
    if (y) for (const [, z] of y) if (z > 1440 && mins < z - 1440) return { state: "open", label: `Open until ${fmtTime(z)}` };
    const r = parseRanges(today);
    if (r == null) return { state: "na", label: today };
    if (!r.length) return { state: "closed", label: "Closed today" };
    for (const [a, z] of r) if (mins >= a && mins < z) return { state: "open", label: `Open until ${fmtTime(z)}` };
    const next = r.find(([a]) => a > mins);
    if (next) return { state: "closed", label: `Opens ${fmtTime(next[0])}` };
    return { state: "closed", label: "Closed now" };
  }
  function openPill(b) {
    const s = openStatus(b);
    if (s.state === "na") return `<span class="open-pill">${esc(s.label)}</span>`;
    return `<span class="open-pill ${s.state}">${esc(s.label)}</span>`;
  }

  // ---------------------------------------------------------------- reviews & stats
  const statCache = new Map();
  function userReviews() { return store.get("reviews", {}); }
  function reviewsOf(b) {
    const mine = (userReviews()[b.id] || []).map((r) => ({ ...r, mine: true }));
    const seed = b.reviews.map((r, i) => ({ ...r, id: `${b.id}#${i}` }));
    return [...mine, ...seed];
  }
  function stats(b) {
    if (!statCache.has(b.id)) {
      const rs = reviewsOf(b);
      const dist = [0, 0, 0, 0, 0];
      let sum = 0;
      rs.forEach((r) => { dist[r.rating - 1]++; sum += r.rating; });
      const latest = rs.reduce((m, r) => (r.date > m ? r.date : m), "");
      statCache.set(b.id, { count: rs.length, avg: rs.length ? sum / rs.length : 0, dist, latest });
    }
    return statCache.get(b.id);
  }
  function starsHTML(avg, size = 15) {
    let s = "";
    for (let i = 0; i < 5; i++) s += star(Math.max(0, Math.min(1, avg - i)), size);
    return `<span class="stars" aria-hidden="true">${s}</span>`;
  }
  function ratingHTML(b, opts = {}) {
    const s = stats(b);
    if (!s.count) return `<span class="rating"><span class="count">No reviews yet</span></span>`;
    const label = `Rated ${s.avg.toFixed(1)} out of 5 from ${plural(s.count, "review")}`;
    const count = opts.link
      ? `<a class="count" href="#/biz/${b.id}/reviews">${plural(s.count, "review")}</a>`
      : `<span class="count">(${s.count})</span>`;
    return `<span class="rating" title="${label}">${starsHTML(s.avg, opts.size || 14)}<strong>${s.avg.toFixed(1)}</strong>${count}<span class="visually-hidden">${label}</span></span>`;
  }
  const helpfulVotes = () => store.get("helpful", {});

  // ---------------------------------------------------------------- ads
  const today = todayISO();
  const activeAds = (b) => b.ads.filter((a) => !a.expires || a.expires >= today);
  const KIND_LABEL = { promo: "Offer", spotlight: "Spotlight", seasonal: "Seasonal", new: "New" };

  // ---------------------------------------------------------------- saved list
  const getSaved = () => store.get("saved", []);
  const isSaved = (id) => getSaved().includes(id);
  function toggleSaved(id) {
    const s = getSaved();
    const i = s.indexOf(id);
    if (i >= 0) s.splice(i, 1); else s.unshift(id);
    store.set("saved", s);
    updateSavedCount();
    return i < 0;
  }
  function updateSavedCount() {
    const n = getSaved().filter((id) => BY_ID[id]).length;
    const el = document.getElementById("saved-count");
    el.hidden = !n;
    el.textContent = n;
  }

  // ---------------------------------------------------------------- search & filter
  const textCache = new Map();
  function searchText(b) {
    if (!textCache.has(b.id)) {
      const sub = SUBS[b.subcategory], cat = CATS[b.category];
      textCache.set(b.id, [
        b.name, b.tagline, sub.label, cat.label, CITIES[b.city].label, HOODS[b.neighborhood].label,
        b.tags.join(" "), b.offerings.map((o) => o.name + " " + o.description).join(" "),
        b.sellingPoints.map((p) => p.title).join(" "), b.story, b.serviceArea || "", b.owner,
      ].join(" ").toLowerCase());
    }
    return textCache.get(b.id);
  }

  function readFilters(params) {
    return {
      q: (params.get("q") || "").trim(),
      city: CITIES[params.get("city")] ? params.get("city") : "",
      hood: HOODS[params.get("hood")] ? params.get("hood") : "",
      cat: CATS[params.get("cat")] ? params.get("cat") : "",
      sub: SUBS[params.get("sub")] ? params.get("sub") : "",
      min: parseFloat(params.get("min")) || 0,
      price: (params.get("price") || "").split(",").map(Number).filter((n) => n >= 1 && n <= 4),
      tags: (params.get("tags") || "").split("|").filter((t) => D.tags.includes(t)),
      open: params.get("open") === "1",
      deals: params.get("deals") === "1",
      sort: params.get("sort") || "recommended",
    };
  }

  function matches(b, f, skip = {}) {
    if (!skip.loc) {
      if (f.city && b.city !== f.city) return false;
      if (f.hood && b.neighborhood !== f.hood) return false;
    }
    if (!skip.cat) {
      if (f.cat && b.category !== f.cat) return false;
      if (f.sub && b.subcategory !== f.sub) return false;
    }
    if (f.q) {
      const t = searchText(b);
      if (!f.q.toLowerCase().split(/\s+/).every((w) => t.includes(w))) return false;
    }
    if (f.min && stats(b).avg < f.min) return false;
    if (f.price.length && !f.price.includes(b.priceLevel)) return false;
    if (f.tags.length && !f.tags.every((t) => b.tags.includes(t))) return false;
    if (f.open && openStatus(b).state !== "open") return false;
    if (f.deals && !activeAds(b).some((a) => a.offer)) return false;
    return true;
  }

  // Bayesian-smoothed rating so one 5-star review doesn't outrank forty 4.8s.
  const smoothed = (b) => { const s = stats(b); return (s.avg * s.count + 4 * 3) / (s.count + 3); };
  const SORTS = {
    recommended: { label: "Recommended", fn: (a, b) => (smoothed(b) + (b.featured ? 0.25 : 0)) - (smoothed(a) + (a.featured ? 0.25 : 0)) },
    rating: { label: "Highest rated", fn: (a, b) => stats(b).avg - stats(a).avg || stats(b).count - stats(a).count },
    reviews: { label: "Most reviewed", fn: (a, b) => stats(b).count - stats(a).count },
    recent: { label: "Recently reviewed", fn: (a, b) => stats(b).latest.localeCompare(stats(a).latest) },
    deals: { label: "Deals ending soon", fn: (a, b) => dealEnd(a).localeCompare(dealEnd(b)) },
    az: { label: "Name (A–Z)", fn: (a, b) => a.name.localeCompare(b.name) },
  };
  function dealEnd(b) {
    const ends = activeAds(b).filter((a) => a.offer).map((a) => a.expires || "9999");
    return ends.length ? ends.sort()[0] : "~";
  }

  // ---------------------------------------------------------------- routing
  function parseHash() {
    const h = location.hash.replace(/^#/, "") || "/";
    const [path, qs = ""] = h.split("?");
    return { path, parts: path.split("/").filter(Boolean), params: new URLSearchParams(qs) };
  }
  function browseHref(f, overrides = {}) {
    const n = { ...f, ...overrides };
    if ("city" in overrides && !("hood" in overrides)) n.hood = "";
    if ("cat" in overrides && !("sub" in overrides)) n.sub = "";
    const p = new URLSearchParams();
    if (n.q) p.set("q", n.q);
    if (n.city) p.set("city", n.city);
    if (n.hood) p.set("hood", n.hood);
    if (n.cat) p.set("cat", n.cat);
    if (n.sub) p.set("sub", n.sub);
    if (n.min) p.set("min", n.min);
    if (n.price && n.price.length) p.set("price", n.price.slice().sort().join(","));
    if (n.tags && n.tags.length) p.set("tags", n.tags.join("|"));
    if (n.open) p.set("open", "1");
    if (n.deals) p.set("deals", "1");
    if (n.sort && n.sort !== "recommended") p.set("sort", n.sort);
    const qs = p.toString();
    return "#/browse" + (qs ? "?" + qs : "");
  }
  const EMPTY_F = readFilters(new URLSearchParams());

  let lastPath = null;
  let filtersOpen = false;
  let reviewUI = null;

  function render() {
    const r = parseHash();
    const [p0, p1, p2] = r.parts;
    let view;
    if (!p0) view = pageHome();
    else if (p0 === "browse") view = pageBrowse(r.params);
    else if (p0 === "biz" && BY_ID[p1] && !p2) view = pageBusiness(BY_ID[p1]);
    else if (p0 === "biz" && BY_ID[p1] && p2 === "reviews") view = pageReviews(BY_ID[p1]);
    else if (p0 === "saved") view = pageSaved();
    else if (p0 === "join") view = pageJoin();
    else view = pageNotFound();

    app.innerHTML = view.html;
    document.title = view.title ? `${view.title} · Storefront` : "Storefront — Local businesses worth supporting";
    if (r.path !== lastPath) {
      window.scrollTo(0, 0);
      app.firstElementChild && app.firstElementChild.classList.add("fade-in");
      filtersOpen = false;
    }
    lastPath = r.path;
    if (view.after) view.after();

    // header state
    document.querySelectorAll(".header-nav .nav-link").forEach((a) => {
      a.classList.toggle("is-active", a.getAttribute("href") === "#/" + (p0 || ""));
    });
    const area = document.getElementById("header-area");
    const q = document.getElementById("q");
    if (p0 === "browse") {
      area.value = r.params.get("city") || "";
      q.value = r.params.get("q") || "";
    } else {
      area.value = store.get("area", "");
      if (document.activeElement !== q) q.value = "";
    }
  }

  // ---------------------------------------------------------------- shared components
  function chip(text, cls = "") { return `<span class="chip ${cls}">${esc(text)}</span>`; }
  function placeLabel(b) { return `${HOODS[b.neighborhood].label}, ${CITIES[b.city].label}`; }

  function saveButton(b, extraCls = "") {
    const on = isSaved(b.id);
    return `<button type="button" class="icon-btn save-btn ${extraCls} ${on ? "is-on" : ""}" data-save="${b.id}" aria-pressed="${on}" aria-label="${on ? "Remove " + esc(b.name) + " from" : "Save " + esc(b.name) + " to"} your list">${icon("heart", { size: 18 })}</button>`;
  }

  function bizCard(b) {
    const ad = activeAds(b)[0];
    const sub = SUBS[b.subcategory];
    return `<article class="card" style="${esc(brandVars(b))}">
      <a class="card-link" href="#/biz/${b.id}"><span class="visually-hidden">${esc(b.name)}</span></a>
      ${saveButton(b)}
      <div class="card-art">
        ${ad ? `<span class="art-badge">${KIND_LABEL[ad.kind] || "Featured"}</span>` : ""}
        <div class="art-icon">${icon(b.subcategory, { size: 132, stroke: 1.1 })}</div>
        <div class="art-headline">${esc(ad ? ad.headline : b.tagline)}</div>
        ${ad && ad.offer ? `<span class="art-offer">${esc(ad.offer)}</span>` : ""}
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${esc(sub.label)}</span><span>·</span><span>${esc(placeLabel(b))}</span></div>
        <div class="card-name"><h3>${esc(b.name)}</h3></div>
        <div class="card-line">${ratingHTML(b)}<span class="dot"></span><span>${"$".repeat(b.priceLevel)}</span><span class="dot"></span>${openPill(b)}</div>
        <p class="card-tagline">${esc(ad ? b.tagline : b.sellingPoints[0].text)}</p>
        <div class="card-tags">${b.tags.slice(0, 2).map((t) => chip(t)).join("")}</div>
      </div>
    </article>`;
  }

  function adPoster(b, ad, opts = {}) {
    const linked = opts.link !== false;
    const tag = linked ? "a" : "div";
    const sub = SUBS[b.subcategory];
    const cta = linked
      ? `<span class="ad-cta">${esc(ad.cta)} ${icon("arrow-right", { size: 15 })}</span>`
      : `<a class="ad-cta" href="tel:${b.phone.replace(/[^\d+]/g, "")}">${esc(ad.cta)} ${icon("arrow-right", { size: 15 })}</a>`;
    return `<${tag} class="ad v-${esc(ad.kind)} ${opts.compact ? "compact" : ""}" ${linked ? `href="#/biz/${b.id}"` : ""} style="${esc(brandVars(b, ad.kind === "spotlight"))}">
      <div class="ad-top">
        <div class="ad-biz"><span class="mono">${esc(initials(b.name))}</span>
          <div style="min-width:0"><div class="ad-biz-name">${esc(b.name)}</div><div class="ad-biz-where">${esc(sub.label)} · ${esc(HOODS[b.neighborhood].label)}</div></div>
        </div>
        <span class="ad-kind">${KIND_LABEL[ad.kind] || "Featured"}</span>
      </div>
      <div class="ad-art">${icon(b.subcategory, { size: 190, stroke: 1 })}</div>
      <div class="ad-body">
        <div class="ad-headline">${esc(ad.headline)}</div>
        ${opts.compact ? "" : `<p class="ad-copy">${esc(ad.body)}</p>`}
        <div class="ad-foot">
          ${ad.offer ? `<span class="ad-offer">${icon("tag", { size: 14 })}${esc(ad.offer)}</span>` : ""}
          ${cta}
        </div>
        ${ad.expires && !opts.compact ? `<div class="ad-expires" style="margin-top:10px">Ends ${fmtDate(ad.expires)}</div>` : ""}
      </div>
    </${tag}>`;
  }

  // ---------------------------------------------------------------- pages: home
  function pageHome() {
    const area = store.get("area", "");
    const inArea = (b) => !area || b.city === area;
    const featured = BIZ.filter((b) => b.featured && activeAds(b).length);

    // Hero collage: three featured ads from different categories, rotating daily.
    const seed = Math.floor(Date.now() / 864e5);
    const pool = featured.slice().sort((a, b) => ((a.name.length * 7 + seed) % 11) - ((b.name.length * 7 + seed) % 11));
    const collage = [];
    const seenCats = new Set();
    for (const b of pool) {
      if (collage.length === 3) break;
      if (seenCats.has(b.category)) continue;
      seenCats.add(b.category);
      collage.push(b);
    }

    // Spotlight row: featured businesses in the chosen area first.
    const spot = featured.slice().sort((a, b) => (inArea(b) - inArea(a)) || smoothed(b) - smoothed(a)).slice(0, 6);

    // Reviews that matter most: services & makers that have nowhere else to be reviewed.
    const quotes = BIZ.filter((b) => !["food", "retail"].includes(b.category))
      .flatMap((b) => b.reviews.filter((r) => r.rating === 5 && r.text.length > 120).map((r) => ({ b, r })))
      .sort((x, y) => y.r.date.localeCompare(x.r.date));
    const seenQ = new Set();
    const topQuotes = quotes.filter(({ b }) => !seenQ.has(b.category) && seenQ.add(b.category)).slice(0, 3);

    const trades = BIZ.filter((b) => ["home", "auto"].includes(b.category)).sort((a, b) => smoothed(b) - smoothed(a)).slice(0, 4);
    const makers = BIZ.filter((b) => b.category === "makers").sort((a, b) => (inArea(b) - inArea(a)) || smoothed(b) - smoothed(a)).slice(0, 4);

    const totalReviews = BIZ.reduce((n, b) => n + stats(b).count, 0);
    const hoodCount = D.areas.reduce((n, a) => n + a.hoods.length, 0);

    const html = `<div>
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <div class="eyebrow">Greater Boston · ${BIZ.length} independent businesses</div>
            <h1 style="margin-top:14px">Great work is happening <em>around the corner.</em></h1>
            <p class="hero-lede">Storefront is the neighborhood directory for people who would rather buy from a neighbor — restaurants, tradespeople, makers and shops, with real reviews for the businesses review sites forgot.</p>
            <form class="hero-search" id="hero-search">
              <label class="field">${icon("search", { size: 18 })}<span class="visually-hidden">What are you looking for?</span><input name="q" placeholder="Try “sourdough”, “electrician”, “CNC”"></label>
              <label class="field">${icon("pin", { size: 18 })}<span class="visually-hidden">Where?</span>
                <select name="city">${areaOptions(area)}</select></label>
              <button class="btn btn-ink" type="submit">Search</button>
            </form>
            <div class="hero-stats">
              <div><strong>${BIZ.length}</strong>local businesses</div>
              <div><strong>${hoodCount}</strong>neighborhoods</div>
              <div><strong>${totalReviews}</strong>neighbor reviews</div>
            </div>
          </div>
          <div class="hero-collage" aria-label="Featured local offers">
            ${collage.map((b) => adPoster(b, activeAds(b)[0], { compact: true })).join("")}
          </div>
        </div>
      </section>

      <section class="section-tight">
        <div class="container">
          <div class="section-head"><div><h2>Browse by what you need</h2><p>From dumplings to dovetail joints — every listing is an independent, locally owned business.</p></div>
            <a class="link-more" href="#/browse">See all ${icon("arrow-right", { size: 16 })}</a></div>
          <div class="cat-grid">
            ${D.categories.map((c) => {
              const n = BIZ.filter((b) => b.category === c.id).length;
              return `<a class="cat-tile" href="${browseHref(EMPTY_F, { cat: c.id, city: area })}">
                <span class="cat-ico">${icon(c.id, { size: 22 })}</span>
                <div><h3>${esc(c.label)}</h3><div class="cat-subs">${c.subs.map((s) => esc(s.label)).join(" · ")}</div></div>
                <span class="cat-count">${plural(n, "business", "businesses")}</span>
              </a>`;
            }).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head"><div><h2>This week on Storefront</h2><p>Offers and spotlights from businesses in ${area ? esc(CITIES[area].label) : "your area"} and nearby.</p></div>
            <a class="link-more" href="${browseHref(EMPTY_F, { deals: true, city: area })}">All current deals ${icon("arrow-right", { size: 16 })}</a></div>
          <div class="ad-row">${spot.map((b) => adPoster(b, activeAds(b)[0])).join("")}</div>
        </div>
      </section>

      <section class="section-tight">
        <div class="container">
          <div class="section-head"><div><h2>Reviews for the businesses nobody reviews</h2><p>Your plumber, your welder, your accountant. Finally, a place to say they did a great job.</p></div></div>
          <div class="quote-grid">
            ${topQuotes.map(({ b, r }) => `<a class="quote-card" href="#/biz/${b.id}/reviews" style="${esc(brandVars(b))}">
              ${starsHTML(r.rating, 15)}
              <blockquote>“${esc(r.text.length > 220 ? r.text.slice(0, 217).replace(/\s+\S*$/, "") + "…" : r.text)}”</blockquote>
              <div class="quote-who"><span class="mono" style="width:32px;height:32px;font-size:13px">${esc(initials(b.name))}</span>
                <div><strong>${esc(b.name)}</strong><br>${esc(r.author)} · ${esc(r.context)}</div></div>
            </a>`).join("")}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head"><div><h2>Trusted trades</h2><p>Licensed, insured, and vouched for by your neighbors.</p></div>
            <a class="link-more" href="${browseHref(EMPTY_F, { cat: "home", city: area })}">All home services ${icon("arrow-right", { size: 16 })}</a></div>
          <div class="biz-grid cols-4">${trades.map(bizCard).join("")}</div>
        </div>
      </section>

      <section class="section-tight">
        <div class="container">
          <div class="section-head"><div><h2>Made right here</h2><p>Local makers and manufacturers — from one-off dining tables to production runs for startups.</p></div>
            <a class="link-more" href="${browseHref(EMPTY_F, { cat: "makers", city: area })}">All makers ${icon("arrow-right", { size: 16 })}</a></div>
          <div class="biz-grid cols-4">${makers.map(bizCard).join("")}</div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head"><div><h2>Explore by neighborhood</h2><p>Pick a city or zoom straight into a neighborhood.</p></div></div>
          <div class="area-directory">
            ${D.areas.map((a) => `<div class="area-col">
              <h3><a href="${browseHref(EMPTY_F, { city: a.id })}">${esc(a.label)}</a><small>${BIZ.filter((b) => b.city === a.id).length}</small></h3>
              <ul>${a.hoods.map((h) => `<li><a href="${browseHref(EMPTY_F, { city: a.id, hood: h.id })}"><span>${esc(h.label)}</span><span>${BIZ.filter((b) => b.neighborhood === h.id).length}</span></a></li>`).join("")}</ul>
            </div>`).join("")}
          </div>
        </div>
      </section>

      <section class="section-tight" style="padding-bottom:72px">
        <div class="container">
          <div class="owner-band">
            <div>
              <div class="eyebrow" style="color:#9C9488">For business owners</div>
              <h2 style="margin-top:12px">You make great things. We'll handle the marketing.</h2>
              <p>No website? No time for SEO? No problem. We visit, learn what makes you great, and turn it into a listing, ads, and a reviews page — so neighbors can find you.</p>
              <a class="btn" href="#/join">List your business free ${icon("arrow-right", { size: 16 })}</a>
            </div>
            <ol class="owner-steps">
              <li><div><strong>We come to you</strong><span>A 20-minute chat about your craft, your best sellers, and your story.</span></div></li>
              <li><div><strong>We write & design your ads</strong><span>Professional copy and on-brand ad cards, refreshed every season.</span></div></li>
              <li><div><strong>Neighbors find & review you</strong><span>Show up in local searches and collect reviews you can actually use.</span></div></li>
            </ol>
          </div>
        </div>
      </section>
    </div>`;

    return {
      html,
      after() {
        document.getElementById("hero-search").addEventListener("submit", (e) => {
          e.preventDefault();
          const fd = new FormData(e.target);
          const city = fd.get("city") || "";
          store.set("area", city);
          location.hash = browseHref(EMPTY_F, { q: (fd.get("q") || "").trim(), city });
        });
      },
    };
  }

  function areaOptions(selected) {
    return `<option value="">All Greater Boston</option>` + D.areas.map((a) => `<option value="${a.id}" ${a.id === selected ? "selected" : ""}>${esc(a.label)}</option>`).join("");
  }

  // ---------------------------------------------------------------- pages: browse
  function pageBrowse(params) {
    const f = readFilters(params);
    const results = BIZ.filter((b) => matches(b, f)).sort(SORTS[f.sort] ? SORTS[f.sort].fn : SORTS.recommended.fn);
    const locPool = BIZ.filter((b) => matches(b, f, { loc: true }));
    const catPool = BIZ.filter((b) => matches(b, f, { cat: true }));

    // Heading
    const what = f.sub ? SUBS[f.sub].label : f.cat ? CATS[f.cat].label : "Local businesses";
    const where = f.hood ? `${HOODS[f.hood].label}, ${CITIES[f.city].label}` : f.city ? CITIES[f.city].label : "Greater Boston";
    const title = f.q ? `“${f.q}” in ${where}` : `${what} in ${where}`;

    const crumbs = [`<a href="#/">Home</a>`, `<a href="${browseHref(EMPTY_F)}">All</a>`];
    if (f.cat) crumbs.push(`<a href="${browseHref(EMPTY_F, { cat: f.cat, city: f.city })}">${esc(CATS[f.cat].label)}</a>`);
    if (f.sub) crumbs.push(`<a href="${browseHref(EMPTY_F, { cat: f.cat, sub: f.sub, city: f.city })}">${esc(SUBS[f.sub].label)}</a>`);

    // Facets
    const locFacet = `<ul class="facet">
      <li><a href="${browseHref(f, { city: "" })}" class="${!f.city ? "is-on" : ""}"><span>All Greater Boston</span><span class="n">${locPool.length}</span></a></li>
      ${D.areas.map((a) => {
        const n = locPool.filter((b) => b.city === a.id).length;
        const on = f.city === a.id;
        return `<li><a href="${browseHref(f, { city: on && !f.hood ? "" : a.id })}" class="${on ? "is-on" : ""} ${!n ? "is-zero" : ""}"><span>${esc(a.label)}</span><span class="n">${n}</span></a>
          ${on ? `<ul class="facet sub">${a.hoods.map((h) => {
            const hn = locPool.filter((b) => b.neighborhood === h.id).length;
            const hon = f.hood === h.id;
            return `<li><a href="${browseHref(f, { city: a.id, hood: hon ? "" : h.id })}" class="${hon ? "is-on" : ""} ${!hn ? "is-zero" : ""}"><span>${esc(h.label)}</span><span class="n">${hn}</span></a></li>`;
          }).join("")}</ul>` : ""}
        </li>`;
      }).join("")}
    </ul>`;

    const catFacet = `<ul class="facet">
      <li><a href="${browseHref(f, { cat: "" })}" class="${!f.cat ? "is-on" : ""}"><span>All categories</span><span class="n">${catPool.length}</span></a></li>
      ${D.categories.map((c) => {
        const n = catPool.filter((b) => b.category === c.id).length;
        const on = f.cat === c.id;
        return `<li><a href="${browseHref(f, { cat: on && !f.sub ? "" : c.id })}" class="${on ? "is-on" : ""} ${!n ? "is-zero" : ""}"><span>${esc(c.label)}</span><span class="n">${n}</span></a>
          ${on ? `<ul class="facet sub">${c.subs.map((s) => {
            const sn = catPool.filter((b) => b.subcategory === s.id).length;
            const son = f.sub === s.id;
            return `<li><a href="${browseHref(f, { cat: c.id, sub: son ? "" : s.id })}" class="${son ? "is-on" : ""} ${!sn ? "is-zero" : ""}"><span>${esc(s.label)}</span><span class="n">${sn}</span></a></li>`;
          }).join("")}</ul>` : ""}
        </li>`;
      }).join("")}
    </ul>`;

    const ratingSeg = `<div class="seg">${[0, 3.5, 4, 4.5].map((m) => `<button type="button" data-href="${browseHref(f, { min: m })}" class="${f.min === m ? "is-on" : ""}">${m ? m + "+ ★" : "Any"}</button>`).join("")}</div>`;
    const priceSeg = `<div class="seg">${[1, 2, 3, 4].map((p) => {
      const on = f.price.includes(p);
      const next = on ? f.price.filter((x) => x !== p) : [...f.price, p];
      return `<button type="button" data-href="${browseHref(f, { price: next })}" class="${on ? "is-on" : ""}" aria-pressed="${on}" aria-label="Price level ${p}">${"$".repeat(p)}</button>`;
    }).join("")}</div>`;
    const usedTags = D.tags.filter((t) => BIZ.some((b) => b.tags.includes(t)));
    const tagChecks = `<div class="check-list">${usedTags.map((t) => {
      const on = f.tags.includes(t);
      const next = on ? f.tags.filter((x) => x !== t) : [...f.tags, t];
      return `<label class="check"><input type="checkbox" data-href="${browseHref(f, { tags: next })}" ${on ? "checked" : ""}>${esc(t)}</label>`;
    }).join("")}</div>`;
    const toggles = `<div class="check-list">
      <label class="check"><input type="checkbox" data-href="${browseHref(f, { open: !f.open })}" ${f.open ? "checked" : ""}>Open now</label>
      <label class="check"><input type="checkbox" data-href="${browseHref(f, { deals: !f.deals })}" ${f.deals ? "checked" : ""}>Has a current deal</label>
    </div>`;

    // Active filter chips
    const active = [];
    if (f.q) active.push([`“${f.q}”`, { q: "" }]);
    if (f.city) active.push([CITIES[f.city].label, { city: "" }]);
    if (f.hood) active.push([HOODS[f.hood].label, { city: f.city, hood: "" }]);
    if (f.cat) active.push([CATS[f.cat].label, { cat: "" }]);
    if (f.sub) active.push([SUBS[f.sub].label, { cat: f.cat, sub: "" }]);
    if (f.min) active.push([`${f.min}+ stars`, { min: 0 }]);
    if (f.price.length) active.push([f.price.map((p) => "$".repeat(p)).join(", "), { price: [] }]);
    f.tags.forEach((t) => active.push([t, { tags: f.tags.filter((x) => x !== t) }]));
    if (f.open) active.push(["Open now", { open: false }]);
    if (f.deals) active.push(["Has a deal", { deals: false }]);

    const resultsHTML = results.length
      ? `<div class="biz-grid">${results.map(bizCard).join("")}</div>`
      : `<div class="empty"><div class="empty-ico">${icon("search", { size: 26 })}</div><h3>Nothing here — yet</h3>
          <p>No businesses match those filters. Try widening your area or removing a filter. Know a great local business that belongs here?</p>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn" href="${browseHref(EMPTY_F)}">Clear all filters</a><a class="btn btn-ink" href="#/join">Suggest a business</a></div></div>`;

    const html = `<div>
      <div class="container browse-head">
        <nav class="crumbs" aria-label="Breadcrumb">${crumbs.join(icon("chevron-right", { size: 12 }))}</nav>
        <h1>${esc(title)}</h1>
        <p>${f.sub || f.cat ? "" : "Independent, locally owned, and reviewed by neighbors."}</p>
      </div>
      <div class="container browse-layout">
        ${filtersOpen ? `<div class="scrim" data-close-filters></div>` : ""}
        <aside class="filters ${filtersOpen ? "is-open" : ""}" id="filters" aria-label="Filters">
          <div class="filters-close"><strong>Filters</strong><button class="icon-btn" type="button" data-close-filters aria-label="Close filters">${icon("x", { size: 18 })}</button></div>
          <div class="filter-group"><h4>Location</h4>${locFacet}</div>
          <div class="filter-group"><h4>Category</h4>${catFacet}</div>
          <div class="filter-group"><h4>Rating</h4>${ratingSeg}</div>
          <div class="filter-group"><h4>Price</h4>${priceSeg}</div>
          <div class="filter-group"><h4>Availability</h4>${toggles}</div>
          <div class="filter-group" style="border-bottom:0"><h4>Highlights</h4>${tagChecks}</div>
        </aside>
        <div>
          <div class="results-bar">
            <span class="count"><strong>${results.length}</strong> ${results.length === 1 ? "business" : "businesses"}</span>
            <div class="results-tools">
              <button class="btn btn-sm filters-toggle" type="button" data-open-filters>${icon("filter", { size: 16 })} Filters${active.length ? ` (${active.length})` : ""}</button>
              <label class="visually-hidden" for="sort">Sort by</label>
              <select class="select" id="sort">${Object.entries(SORTS).map(([k, s]) => `<option value="${k}" ${f.sort === k ? "selected" : ""}>${s.label}</option>`).join("")}</select>
            </div>
          </div>
          ${active.length ? `<div class="active-filters">${active.map(([label, o]) => `<span class="chip">${esc(label)}<button type="button" data-href="${browseHref(f, o)}" aria-label="Remove filter ${esc(label)}">${icon("x", { size: 12, stroke: 2 })}</button></span>`).join("")}<button type="button" class="clear-all" data-href="${browseHref(EMPTY_F)}">Clear all</button></div>` : ""}
          ${resultsHTML}
        </div>
      </div>
    </div>`;

    return {
      html,
      title,
      after() {
        document.getElementById("sort").addEventListener("change", (e) => { location.hash = browseHref(f, { sort: e.target.value }); });
      },
    };
  }

  // ---------------------------------------------------------------- pages: business
  function bizHero(b, tab) {
    const s = stats(b);
    const cat = CATS[b.category], sub = SUBS[b.subcategory];
    const tel = b.phone.replace(/[^\d+]/g, "");
    const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`;
    return `<section class="biz-hero ${lightInk(b) ? "light-ink" : ""}" style="${esc(brandVars(b))}">
      <div class="hero-art">${icon(b.subcategory, { size: 300, stroke: 0.9 })}</div>
      <div class="container biz-hero-inner">
        <nav class="crumbs" aria-label="Breadcrumb">
          <a href="${browseHref(EMPTY_F, { cat: cat.id })}">${esc(cat.label)}</a>${icon("chevron-right", { size: 12 })}
          <a href="${browseHref(EMPTY_F, { cat: cat.id, sub: sub.id })}">${esc(sub.label)}</a>${icon("chevron-right", { size: 12 })}
          <a href="${browseHref(EMPTY_F, { city: b.city, hood: b.neighborhood })}">${esc(placeLabel(b))}</a>
        </nav>
        <div class="biz-id">
          <span class="mono lg">${esc(initials(b.name))}</span>
          <div>
            <h1>${esc(b.name)}</h1>
            <p class="tagline">${esc(b.tagline)}</p>
          </div>
        </div>
        <div class="biz-facts">
          ${s.count ? `<span class="rating">${starsHTML(s.avg, 16)}<strong>${s.avg.toFixed(1)}</strong><a class="count" href="#/biz/${b.id}/reviews">${plural(s.count, "review")}</a></span>` : ""}
          ${openPill(b)}
          <span class="fact">${"$".repeat(b.priceLevel)}<span class="visually-hidden"> price level</span></span>
          <span class="fact">Since ${b.founded}</span>
          <span class="fact">${icon("pin", { size: 15 })}${esc(HOODS[b.neighborhood].label)}</span>
        </div>
        <div class="biz-actions">
          <a class="btn btn-accent" href="tel:${tel}">${icon("phone", { size: 16 })} ${esc(b.phone)}</a>
          <a class="btn btn-on-brand ${lightInk(b) ? "light-ink" : ""}" href="mailto:${esc(b.email)}">${icon("mail", { size: 16 })} Email</a>
          <a class="btn btn-on-brand ${lightInk(b) ? "light-ink" : ""}" href="${maps}" target="_blank" rel="noopener">${icon("directions", { size: 16 })} Directions</a>
          <button class="btn btn-on-brand ${lightInk(b) ? "light-ink" : ""}" type="button" data-save="${b.id}" data-save-label>${icon("heart", { size: 16 })} <span>${isSaved(b.id) ? "Saved" : "Save"}</span></button>
          <button class="btn btn-on-brand ${lightInk(b) ? "light-ink" : ""}" type="button" data-share="${b.id}">Share</button>
        </div>
        <nav class="biz-tabs" aria-label="Business sections">
          <a href="#/biz/${b.id}" class="${tab === "overview" ? "is-on" : ""}" ${tab === "overview" ? 'aria-current="page"' : ""}>Overview</a>
          <a href="#/biz/${b.id}/reviews" class="${tab === "reviews" ? "is-on" : ""}" ${tab === "reviews" ? 'aria-current="page"' : ""}>Reviews<span class="n">${s.count}</span></a>
        </nav>
      </div>
    </section>`;
  }

  function sidebar(b) {
    const ti = dayIdx();
    return `<aside class="biz-side">
      <div class="side-card">
        <h3>Hours</h3>
        <table class="hours"><tbody>${DAYS.map((d, i) => `<tr class="${i === ti ? "today" : ""}"><td>${d}${i === ti ? " (today)" : ""}</td><td>${esc(b.hours[i] || "—")}</td></tr>`).join("")}</tbody></table>
      </div>
      <div class="side-card">
        <h3>Contact & location</h3>
        <ul class="contact-list">
          <li>${icon("pin", { size: 18 })}<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}" target="_blank" rel="noopener">${esc(b.address)}</a></li>
          <li>${icon("phone", { size: 18 })}<a href="tel:${b.phone.replace(/[^\d+]/g, "")}">${esc(b.phone)}</a></li>
          <li>${icon("mail", { size: 18 })}<a href="mailto:${esc(b.email)}">${esc(b.email)}</a></li>
          ${b.website ? `<li>${icon("globe", { size: 18 })}<span>${esc(b.website)}</span></li>` : ""}
          ${b.serviceArea ? `<li>${icon("directions", { size: 18 })}<span><strong style="font-weight:600">Serves</strong> ${esc(b.serviceArea)}</span></li>` : ""}
        </ul>
        ${b.website ? "" : `<div class="no-site">${icon("store", { size: 16 })}<span>${esc(b.name)} doesn't have a website — this page is their storefront online. Reviews you leave here help them grow.</span></div>`}
      </div>
      <div class="side-card">
        <h3>Highlights</h3>
        <div class="tag-cloud">${b.tags.map((t) => `<a class="chip outline" href="${browseHref(EMPTY_F, { tags: [t] })}">${esc(t)}</a>`).join("")}</div>
      </div>
    </aside>`;
  }

  function similar(b, n = 3) {
    return BIZ.filter((x) => x.id !== b.id)
      .map((x) => ({ x, score: (x.subcategory === b.subcategory ? 4 : x.category === b.category ? 2 : 0) + (x.city === b.city ? 1.5 : 0) + smoothed(x) / 10 }))
      .sort((p, q) => q.score - p.score).slice(0, n).map((p) => p.x);
  }

  function reviewItem(b, r, votes) {
    const voted = !!votes[r.id];
    const helpful = (r.helpful || 0) + (voted ? 1 : 0);
    return `<li class="review" id="r-${esc(r.id)}">
      <div class="review-head">
        <span class="avatar">${esc(personInitials(r.author))}</span>
        <div class="review-who"><strong>${esc(r.author)}</strong><span title="${fmtDate(r.date, true)}">${relDate(r.date)}</span></div>
        ${r.mine ? `<span class="chip mine-badge review-badge">Your review</span>` : ""}
      </div>
      <div class="review-rating">${starsHTML(r.rating, 16)}<span class="visually-hidden">${r.rating} out of 5 stars</span>${r.context ? chip(r.context, "outline") : ""}</div>
      <h3>${esc(r.title)}</h3>
      <p class="review-text">${esc(r.text)}</p>
      ${r.ownerReply ? `<div class="owner-reply"><div class="who"><span class="mono">${esc(initials(b.name))}</span>Response from ${esc(b.owner)}, ${esc(b.ownerTitle.split(/[&,]/)[0].trim())}</div><p>${esc(r.ownerReply)}</p></div>` : ""}
      <div class="review-foot">
        ${r.mine
          ? `<button type="button" class="helpful-btn" data-delete-review="${esc(r.id)}">${icon("trash", { size: 14 })} Remove</button>`
          : `<button type="button" class="helpful-btn ${voted ? "is-on" : ""}" data-helpful="${esc(r.id)}" aria-pressed="${voted}">${icon("thumb", { size: 14 })} Helpful${helpful ? ` · ${helpful}` : ""}</button>`}
      </div>
    </li>`;
  }

  function pageBusiness(b) {
    const ads = activeAds(b);
    const rs = reviewsOf(b);
    const votes = helpfulVotes();
    const top = rs.slice().sort((x, y) => (y.helpful || 0) - (x.helpful || 0) || y.rating - x.rating).slice(0, 2);
    const s = stats(b);
    const html = `<div>
      ${bizHero(b, "overview")}
      <div class="container biz-layout" style="${esc(brandVars(b))}">
        <div class="biz-main">
          ${ads.length ? `<section><h2>Current offers</h2><div class="biz-ads">${ads.map((a) => adPoster(b, a, { link: false })).join("")}</div></section>` : ""}
          <section><h2>Why locals choose ${esc(b.name)}</h2>
            <div class="points">${b.sellingPoints.map((p, i) => `<div class="point"><div class="point-n">${i + 1}</div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div>`).join("")}</div>
          </section>
          <section><h2>${b.category === "food" ? "On the menu" : b.category === "makers" || b.category === "retail" ? "What they make & sell" : "Services & pricing"}</h2>
            <ul class="menu">${b.offerings.map((o) => `<li><span class="m-name">${esc(o.name)}</span><span class="m-price">${esc(o.price)}</span><span class="m-desc">${esc(o.description)}</span></li>`).join("")}</ul>
          </section>
          <section><h2>Their story</h2>
            <div class="story">
              <p class="story-text">${esc(b.story)}</p>
              <div class="owner-card"><span class="avatar">${esc(personInitials(b.owner))}</span><div><strong>${esc(b.owner)}</strong><span>${esc(b.ownerTitle)} · serving ${esc(HOODS[b.neighborhood].label)} since ${b.founded}</span></div></div>
            </div>
          </section>
          <section><h2>What neighbors say <span class="subtle">${s.avg.toFixed(1)} average · ${plural(s.count, "review")}</span></h2>
            <ul class="review-list" style="border-top:1px solid var(--line)">${top.map((r) => reviewItem(b, r, votes)).join("")}</ul>
            <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap">
              <a class="btn btn-ink" href="#/biz/${b.id}/reviews">Read all ${plural(s.count, "review")} ${icon("arrow-right", { size: 16 })}</a>
              <a class="btn" href="#/biz/${b.id}/reviews?write=1">${icon("edit", { size: 16 })} Write a review</a>
            </div>
          </section>
        </div>
        ${sidebar(b)}
      </div>
      <section class="section-tight" style="padding-bottom:72px">
        <div class="container">
          <div class="section-head"><div><h2>More like this nearby</h2></div>
            <a class="link-more" href="${browseHref(EMPTY_F, { cat: b.category, sub: b.subcategory })}">All ${esc(SUBS[b.subcategory].label.toLowerCase())} ${icon("arrow-right", { size: 16 })}</a></div>
          <div class="biz-grid">${similar(b).map(bizCard).join("")}</div>
        </div>
      </section>
    </div>`;
    return { html, title: b.name };
  }

  // ---------------------------------------------------------------- pages: reviews
  const REVIEW_SORTS = {
    newest: { label: "Newest", fn: (a, b) => b.date.localeCompare(a.date) },
    helpful: { label: "Most helpful", fn: (a, b) => (b.helpful || 0) - (a.helpful || 0) },
    highest: { label: "Highest rated", fn: (a, b) => b.rating - a.rating || b.date.localeCompare(a.date) },
    lowest: { label: "Lowest rated", fn: (a, b) => a.rating - b.rating || b.date.localeCompare(a.date) },
  };

  function pageReviews(b) {
    const params = parseHash().params;
    if (!reviewUI || reviewUI.id !== b.id || parseHash().path !== lastPath) reviewUI = { id: b.id, stars: 0, sort: "newest", q: "", writing: params.get("write") === "1" };
    const s = stats(b);
    const ctxWord = ["food", "retail"].includes(b.category) ? "What did you order or buy?" : b.category === "makers" ? "What did they make for you?" : "What did you hire them for?";

    const html = `<div>
      ${bizHero(b, "reviews")}
      <div class="container biz-layout" style="${esc(brandVars(b))}">
        <div class="biz-main">
          <section>
            <div class="review-summary">
              <div class="score-big">
                <div class="num">${s.count ? s.avg.toFixed(1) : "—"}</div>
                ${starsHTML(s.avg, 18)}
                <div class="of">${plural(s.count, "review")}</div>
              </div>
              <div>
                <div class="histo" id="histo"></div>
                <button type="button" class="btn btn-ink" style="margin-top:16px" data-write-review>${icon("edit", { size: 16 })} Write a review</button>
              </div>
            </div>
            <div id="write-slot"></div>
            <div class="review-tools">
              <label class="search-mini">${icon("search", { size: 16 })}<span class="visually-hidden">Search reviews</span><input id="review-q" type="search" placeholder="Search reviews" value="${esc(reviewUI.q)}"></label>
              <div style="display:flex;gap:8px;align-items:center">
                <label class="visually-hidden" for="review-sort">Sort reviews</label>
                <select class="select" id="review-sort">${Object.entries(REVIEW_SORTS).map(([k, v]) => `<option value="${k}" ${reviewUI.sort === k ? "selected" : ""}>${v.label}</option>`).join("")}</select>
              </div>
            </div>
            <ul class="review-list" id="review-list"></ul>
          </section>
        </div>
        <aside class="biz-side">
          <div class="side-card">
            <h3>About reviews on Storefront</h3>
            <p class="muted" style="font-size:14.5px">Every review names the job or purchase it's about, so you know exactly what you're reading. Owners can reply publicly — but they can't edit or remove reviews.</p>
          </div>
          <div class="side-card">
            <h3>Get in touch</h3>
            <ul class="contact-list">
              <li>${icon("phone", { size: 18 })}<a href="tel:${b.phone.replace(/[^\d+]/g, "")}">${esc(b.phone)}</a></li>
              <li>${icon("mail", { size: 18 })}<a href="mailto:${esc(b.email)}">${esc(b.email)}</a></li>
              <li>${icon("pin", { size: 18 })}<span>${esc(b.address)}</span></li>
              <li>${icon("clock", { size: 18 })}<span>${openStatus(b).label}</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>`;

    return {
      html,
      title: `Reviews of ${b.name}`,
      after() {
        const list = document.getElementById("review-list");
        const histo = document.getElementById("histo");
        const slot = document.getElementById("write-slot");

        function drawHisto() {
          const st = stats(b);
          histo.innerHTML = [5, 4, 3, 2, 1].map((n) => {
            const c = st.dist[n - 1];
            const pct = st.count ? (c / st.count) * 100 : 0;
            return `<button type="button" data-stars="${n}" class="${reviewUI.stars === n ? "is-on" : ""}" ${c ? "" : "disabled"} aria-pressed="${reviewUI.stars === n}" aria-label="Show ${n}-star reviews (${c})"><span>${n} ★</span><span class="bar"><i style="width:${pct}%"></i></span><span class="n">${c}</span></button>`;
          }).join("");
        }
        function drawList() {
          const votes = helpfulVotes();
          const q = reviewUI.q.toLowerCase();
          let rs = reviewsOf(b);
          if (reviewUI.stars) rs = rs.filter((r) => r.rating === reviewUI.stars);
          if (q) rs = rs.filter((r) => (r.title + " " + r.text + " " + (r.context || "") + " " + r.author).toLowerCase().includes(q));
          rs.sort(REVIEW_SORTS[reviewUI.sort].fn);
          const filterNote = reviewUI.stars || q
            ? `<li style="padding:14px 0;display:flex;gap:10px;align-items:center;color:var(--ink-2);font-size:14px;border-bottom:1px solid var(--line)">Showing ${plural(rs.length, "review")}${reviewUI.stars ? ` with ${reviewUI.stars} stars` : ""}${q ? ` mentioning “${esc(reviewUI.q)}”` : ""}<button type="button" class="clear-all" style="border:0;background:none;text-decoration:underline;text-underline-offset:3px;color:var(--ink)" data-clear-review-filters>Show all</button></li>`
            : "";
          list.innerHTML = filterNote + (rs.length ? rs.map((r) => reviewItem(b, r, votes)).join("") : `<li class="empty" style="margin-top:16px"><h3>No matching reviews</h3><p>Try a different search or star rating.</p></li>`);
        }
        function drawForm() {
          if (!reviewUI.writing) { slot.innerHTML = ""; return; }
          slot.innerHTML = `<form class="write-review" id="review-form" novalidate>
            <h3>Review ${esc(b.name)}</h3>
            <p class="hint">Be specific — what you bought or hired them for, how it went, and whether you'd go back.</p>
            <div class="form-grid">
              <div class="full">
                <span class="field-label" id="rating-label">Your rating</span>
                <div class="star-picker" role="radiogroup" aria-labelledby="rating-label">
                  ${[1, 2, 3, 4, 5].map((n) => `<button type="button" role="radio" aria-checked="false" data-pick="${n}" aria-label="${n} star${n > 1 ? "s" : ""}">${star(1, 30).replace('class="star star-full"', "")}</button>`).join("")}
                  <span class="label" id="pick-label">Tap to rate</span>
                </div>
                <div class="field-error" data-err="rating"></div>
              </div>
              <div><label class="field-label" for="rv-name">Your name</label><input class="input" id="rv-name" name="author" maxlength="40" placeholder="e.g. Sam R."><div class="field-error" data-err="author"></div></div>
              <div><label class="field-label" for="rv-ctx">${ctxWord}</label><input class="input" id="rv-ctx" name="context" maxlength="60" placeholder="${b.category === "food" ? "e.g. Takeout dinner" : "e.g. Kitchen sink repair"}"><div class="field-error" data-err="context"></div></div>
              <div class="full"><label class="field-label" for="rv-title">Headline</label><input class="input" id="rv-title" name="title" maxlength="80" placeholder="Sum it up in a few words"><div class="field-error" data-err="title"></div></div>
              <div class="full"><label class="field-label" for="rv-text">Your review</label><textarea class="textarea" id="rv-text" name="text" maxlength="1500" placeholder="What stood out? Was it on time and on budget? Would you recommend them?"></textarea><div class="field-error" data-err="text"></div></div>
            </div>
            <div class="form-actions">
              <button type="button" class="btn" data-cancel-review>Cancel</button>
              <button type="submit" class="btn btn-ink">Post review</button>
            </div>
          </form>`;
          const form = document.getElementById("review-form");
          let rating = 0;
          const words = ["", "Poor", "Fair", "Good", "Great", "Excellent"];
          const pickers = form.querySelectorAll("[data-pick]");
          const paint = (n) => pickers.forEach((p) => p.classList.toggle("is-on", +p.dataset.pick <= n));
          pickers.forEach((p) => {
            p.addEventListener("mouseenter", () => paint(+p.dataset.pick));
            p.addEventListener("mouseleave", () => paint(rating));
            p.addEventListener("click", () => {
              rating = +p.dataset.pick;
              paint(rating);
              pickers.forEach((x) => x.setAttribute("aria-checked", String(+x.dataset.pick === rating)));
              document.getElementById("pick-label").textContent = words[rating];
              form.querySelector('[data-err="rating"]').textContent = "";
            });
          });
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            const fd = new FormData(form);
            const v = Object.fromEntries([...fd.entries()].map(([k, x]) => [k, String(x).trim()]));
            const errs = {};
            if (!rating) errs.rating = "Choose a star rating.";
            if (v.author.length < 2) errs.author = "Add your name (first name and last initial is fine).";
            if (v.context.length < 3) errs.context = "Tell readers what the review is about.";
            if (v.title.length < 3) errs.title = "Add a short headline.";
            if (v.text.length < 40) errs.text = `A little more detail, please — at least 40 characters (${v.text.length}/40).`;
            form.querySelectorAll("[data-err]").forEach((el) => (el.textContent = errs[el.dataset.err] || ""));
            const firstErr = Object.keys(errs)[0];
            if (firstErr) {
              const el = firstErr === "rating" ? pickers[0] : form.querySelector(`[name="${firstErr}"]`);
              el && el.focus();
              return;
            }
            const all = userReviews();
            const rv = { id: "u" + Date.now(), author: v.author, rating, date: todayISO(), title: v.title, text: v.text, context: v.context, helpful: 0, ownerReply: null };
            (all[b.id] = all[b.id] || []).unshift(rv);
            store.set("reviews", all);
            statCache.delete(b.id);
            reviewUI.writing = false;
            reviewUI.stars = 0;
            reviewUI.sort = "newest";
            toast("Thanks! Your review is posted.");
            render();
            const el = document.getElementById("r-" + rv.id);
            el && el.scrollIntoView({ behavior: "smooth", block: "center" });
          });
          form.querySelector("[data-cancel-review]").addEventListener("click", () => { reviewUI.writing = false; drawForm(); });
          setTimeout(() => { slot.scrollIntoView({ behavior: "smooth", block: "start" }); pickers[0].focus({ preventScroll: true }); }, 50);
        }

        drawHisto();
        drawList();
        drawForm();

        histo.addEventListener("click", (e) => {
          const btn = e.target.closest("[data-stars]");
          if (!btn) return;
          const n = +btn.dataset.stars;
          reviewUI.stars = reviewUI.stars === n ? 0 : n;
          drawHisto(); drawList();
        });
        document.getElementById("review-sort").addEventListener("change", (e) => { reviewUI.sort = e.target.value; drawList(); });
        document.getElementById("review-q").addEventListener("input", (e) => { reviewUI.q = e.target.value; drawList(); });
        list.addEventListener("click", (e) => {
          if (e.target.closest("[data-clear-review-filters]")) {
            reviewUI.stars = 0; reviewUI.q = "";
            document.getElementById("review-q").value = "";
            drawHisto(); drawList();
          }
        });
        app.querySelectorAll("[data-write-review]").forEach((btn) => btn.addEventListener("click", () => { reviewUI.writing = true; drawForm(); }));
      },
    };
  }

  // ---------------------------------------------------------------- pages: saved, join, 404
  function pageSaved() {
    const saved = getSaved().map((id) => BY_ID[id]).filter(Boolean);
    const html = `<div class="container" style="padding-bottom:72px">
      <div class="browse-head">
        <div class="eyebrow">Your support list</div>
        <h1>Saved businesses</h1>
        <p>The local places you want to remember, try, or recommend. Saved on this device.</p>
      </div>
      ${saved.length ? `<div class="biz-grid">${saved.map(bizCard).join("")}</div>`
        : `<div class="empty"><div class="empty-ico">${icon("heart", { size: 26 })}</div><h3>Nothing saved yet</h3><p>Tap the heart on any business to build your list of neighborhood favorites.</p><a class="btn btn-ink" href="#/browse">Start browsing</a></div>`}
    </div>`;
    return { html, title: "Saved" };
  }

  function pageJoin() {
    const html = `<div>
      <section class="join-hero container">
        <div class="eyebrow">For business owners</div>
        <h1>You make it. We'll market it.</h1>
        <p>Most great local businesses don't have the time — or the interest — to run a website, write ads, or chase reviews. That's our job. You keep doing what you're good at.</p>
        <div style="display:flex;gap:10px;justify-content:center;margin-top:28px;flex-wrap:wrap">
          <button type="button" class="btn btn-ink" data-scroll-to="join-form">Get listed free ${icon("arrow-right", { size: 16 })}</button>
          <a class="btn" href="${browseHref(EMPTY_F)}">See example listings</a>
        </div>
      </section>
      <section class="section-tight"><div class="container">
        <div class="join-grid">
          <div class="join-card"><div class="ji">${icon("edit", { size: 22 })}</div><h3>We write your listing</h3><p>A short interview becomes polished copy: your story, what makes you different, and what you sell — with prices if you want them.</p></div>
          <div class="join-card"><div class="ji">${icon("megaphone", { size: 22 })}</div><h3>We design your ads</h3><p>On-brand ad cards for your best products and seasonal offers, shown to neighbors searching for exactly what you do.</p></div>
          <div class="join-card"><div class="ji">${icon("star-line", { size: 22 })}</div><h3>You collect real reviews</h3><p>A review page for businesses that have never had one — plumbers, welders, tailors, machine shops. Reply anytime by text.</p></div>
        </div>
      </div></section>
      <section class="section"><div class="container">
        <div class="section-head"><div><h2>Simple pricing</h2><p>Start free. Upgrade when you see customers coming through the door.</p></div></div>
        <div class="plans">
          <div class="plan">
            <div class="eyebrow">Neighbor</div>
            <div class="price">$0 <small>forever</small></div>
            <p class="muted">Everything you need to be found.</p>
            <ul>
              <li>${icon("check", { size: 16, stroke: 2.2 })}Professionally written listing</li>
              <li>${icon("check", { size: 16, stroke: 2.2 })}Your own reviews page, with owner replies</li>
              <li>${icon("check", { size: 16, stroke: 2.2 })}One ad card, refreshed yearly</li>
            </ul>
          </div>
          <div class="plan dark">
            <div class="eyebrow" style="color:#9C9488">Main Street</div>
            <div class="price">$29 <small>/ month</small></div>
            <p style="color:#BDB6AA">For businesses ready to grow.</p>
            <ul>
              <li>${icon("check", { size: 16, stroke: 2.2 })}Everything in Neighbor</li>
              <li>${icon("check", { size: 16, stroke: 2.2 })}Up to 3 rotating ads & seasonal promos</li>
              <li>${icon("check", { size: 16, stroke: 2.2 })}Featured placement in your neighborhood</li>
              <li>${icon("check", { size: 16, stroke: 2.2 })}Monthly “who found you” report</li>
            </ul>
          </div>
        </div>
      </div></section>
      <section class="section-tight" style="padding-bottom:80px" id="join-form"><div class="container">
        <div class="join-form" id="join-slot">${joinFormHTML()}</div>
      </div></section>
    </div>`;
    return {
      html,
      title: "List your business",
      after() { bindJoinForm(); },
    };
  }

  function joinFormHTML() {
    return `<form class="write-review" id="join" novalidate>
      <h3>Tell us about your business</h3>
      <p class="hint">Takes two minutes. We'll call within two business days to set up a visit — no website, photos, or marketing experience needed.</p>
      <div class="form-grid">
        <div class="full"><label class="field-label" for="j-name">Business name</label><input class="input" id="j-name" name="name" maxlength="80"><div class="field-error" data-err="name"></div></div>
        <div><label class="field-label" for="j-cat">What kind of business?</label>
          <select class="form-select" id="j-cat" name="sub"><option value="">Choose a category</option>${D.categories.map((c) => `<optgroup label="${esc(c.label)}">${c.subs.map((s) => `<option value="${s.id}">${esc(s.label)}</option>`).join("")}</optgroup>`).join("")}<option value="other">Something else</option></select>
          <div class="field-error" data-err="sub"></div></div>
        <div><label class="field-label" for="j-area">Neighborhood</label>
          <select class="form-select" id="j-area" name="hood"><option value="">Choose a neighborhood</option>${D.areas.map((a) => `<optgroup label="${esc(a.label)}">${a.hoods.map((h) => `<option value="${h.id}">${esc(h.label)}</option>`).join("")}</optgroup>`).join("")}<option value="other">Somewhere else</option></select>
          <div class="field-error" data-err="hood"></div></div>
        <div><label class="field-label" for="j-contact">Your name</label><input class="input" id="j-contact" name="contact" maxlength="60"><div class="field-error" data-err="contact"></div></div>
        <div><label class="field-label" for="j-phone">Best phone or email</label><input class="input" id="j-phone" name="reach" maxlength="80"><div class="field-error" data-err="reach"></div></div>
        <div class="full"><label class="field-label" for="j-great">What are you proudest of? <span class="opt">(optional)</span></label><textarea class="textarea" id="j-great" name="pitch" maxlength="1000" placeholder="Your best seller, a skill you've spent years on, the customers who keep coming back…"></textarea></div>
      </div>
      <div class="form-actions"><button type="submit" class="btn btn-ink">Request my free listing</button></div>
    </form>`;
  }

  function bindJoinForm() {
    const form = document.getElementById("join");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = Object.fromEntries([...new FormData(form).entries()].map(([k, x]) => [k, String(x).trim()]));
      const errs = {};
      if (v.name.length < 2) errs.name = "What's the business called?";
      if (!v.sub) errs.sub = "Pick the closest category.";
      if (!v.hood) errs.hood = "Pick your neighborhood.";
      if (v.contact.length < 2) errs.contact = "Who should we ask for?";
      if (v.reach.length < 6) errs.reach = "Add a phone number or email so we can reach you.";
      form.querySelectorAll("[data-err]").forEach((el) => (el.textContent = errs[el.dataset.err] || ""));
      const first = Object.keys(errs)[0];
      if (first) { form.querySelector(`[name="${first}"]`).focus(); return; }
      const apps = store.get("applications", []);
      apps.push({ ...v, submitted: new Date().toISOString() });
      store.set("applications", apps);
      document.getElementById("join-slot").innerHTML = `<div class="empty" style="border-style:solid">
        <div class="empty-ico" style="background:#EAF3EC;color:var(--good)">${icon("check", { size: 26, stroke: 2.2 })}</div>
        <h3>Thanks, ${esc(v.contact.split(" ")[0])} — we'll be in touch.</h3>
        <p>We've got ${esc(v.name)} on our list. Expect a call within two business days to schedule a quick visit.</p>
        <a class="btn" href="#/">Back to Storefront</a></div>`;
    });
  }

  function pageNotFound() {
    return {
      title: "Not found",
      html: `<div class="container" style="padding-top:72px;padding-bottom:72px"><div class="empty"><div class="empty-ico">${icon("store", { size: 26 })}</div><h3>This storefront is empty</h3><p>The page you're looking for doesn't exist — maybe the business moved?</p><a class="btn btn-ink" href="#/browse">Browse businesses</a></div></div>`,
    };
  }

  // ---------------------------------------------------------------- footer
  function renderFooter() {
    document.getElementById("site-footer").innerHTML = `<div class="container">
      <div class="footer-grid">
        <div class="footer-about">
          <a class="logo" href="#/"><span class="logo-mark" aria-hidden="true"></span><span class="logo-word">Storefront</span></a>
          <p>A neighborhood directory for independent businesses — and the people who'd rather buy from them.</p>
        </div>
        <div><h4>Categories</h4><ul>${D.categories.slice(0, 6).map((c) => `<li><a href="${browseHref(EMPTY_F, { cat: c.id })}">${esc(c.label)}</a></li>`).join("")}</ul></div>
        <div><h4>Areas</h4><ul>${D.areas.map((a) => `<li><a href="${browseHref(EMPTY_F, { city: a.id })}">${esc(a.label)}</a></li>`).join("")}</ul></div>
        <div><h4>Storefront</h4><ul>
          <li><a href="#/join">List your business</a></li>
          <li><a href="${browseHref(EMPTY_F, { deals: true })}">Current deals</a></li>
          <li><a href="#/saved">Your saved list</a></li>
        </ul></div>
      </div>
      <div class="footer-legal"><span>MVP demo · all businesses, people and reviews are fictional.</span><span>Made for neighbors.</span></div>
    </div>`;
  }

  // ---------------------------------------------------------------- global events
  document.addEventListener("click", (e) => {
    const save = e.target.closest("[data-save]");
    if (save) {
      e.preventDefault();
      e.stopPropagation();
      const id = save.dataset.save;
      const on = toggleSaved(id);
      document.querySelectorAll(`[data-save="${id}"]`).forEach((btn) => {
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-pressed", String(on));
        const label = btn.querySelector("span");
        if (btn.hasAttribute("data-save-label") && label) label.textContent = on ? "Saved" : "Save";
      });
      toast(on ? `Saved ${BY_ID[id].name} to your list` : `Removed ${BY_ID[id].name} from your list`);
      if (!on && parseHash().parts[0] === "saved") render();
      return;
    }
    const share = e.target.closest("[data-share]");
    if (share) {
      const url = location.href.split("#")[0] + "#/biz/" + share.dataset.share;
      const done = () => toast("Link copied — share it with a friend");
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, () => toast(url));
      else toast(url);
      return;
    }
    const helpful = e.target.closest("[data-helpful]");
    if (helpful) {
      const id = helpful.dataset.helpful;
      const votes = helpfulVotes();
      if (votes[id]) delete votes[id]; else votes[id] = 1;
      store.set("helpful", votes);
      const [bid, idx] = id.split("#");
      const base = BY_ID[bid] ? BY_ID[bid].reviews[+idx].helpful || 0 : 0;
      const n = base + (votes[id] ? 1 : 0);
      helpful.classList.toggle("is-on", !!votes[id]);
      helpful.setAttribute("aria-pressed", String(!!votes[id]));
      helpful.innerHTML = `${icon("thumb", { size: 14 })} Helpful${n ? ` · ${n}` : ""}`;
      return;
    }
    const del = e.target.closest("[data-delete-review]");
    if (del) {
      const id = del.dataset.deleteReview;
      const all = userReviews();
      for (const bid of Object.keys(all)) {
        const before = all[bid].length;
        all[bid] = all[bid].filter((r) => r.id !== id);
        if (all[bid].length !== before) statCache.delete(bid);
      }
      store.set("reviews", all);
      toast("Your review was removed");
      render();
      return;
    }
    const jump = e.target.closest("[data-scroll-to]");
    if (jump) {
      const el = document.getElementById(jump.dataset.scrollTo);
      if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); const f = el.querySelector("input"); f && f.focus({ preventScroll: true }); }
      return;
    }
    const nav = e.target.closest("[data-href]");
    if (nav && nav.tagName !== "INPUT") { location.hash = nav.dataset.href; return; }
    if (e.target.closest("[data-open-filters]")) { filtersOpen = true; render(); return; }
    if (e.target.closest("[data-close-filters]")) { filtersOpen = false; render(); return; }
  });
  document.addEventListener("change", (e) => {
    if (e.target.matches("input[type=checkbox][data-href]")) location.hash = e.target.dataset.href;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && filtersOpen) { filtersOpen = false; render(); }
  });

  // Header search + area
  const headerArea = document.getElementById("header-area");
  headerArea.innerHTML = areaOptions(store.get("area", ""));
  headerArea.addEventListener("change", () => {
    store.set("area", headerArea.value);
    const r = parseHash();
    const f = r.parts[0] === "browse" ? readFilters(r.params) : EMPTY_F;
    location.hash = browseHref(f, { city: headerArea.value });
  });
  document.getElementById("header-search").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("q").value.trim();
    const r = parseHash();
    const f = r.parts[0] === "browse" ? readFilters(r.params) : { ...EMPTY_F, city: headerArea.value };
    location.hash = browseHref(f, { q });
  });
  document.querySelectorAll("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon, { size: 18 })));

  window.addEventListener("hashchange", render);
  renderFooter();
  updateSavedCount();
  render();
})();
