// Line icons on a 24x24 grid, drawn with currentColor strokes.
// SUBJECT icons illustrate a business's trade; UI icons are interface glyphs.
(function () {
  const P = {
    // Subcategory / trade illustrations
    "restaurants": '<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M8 7.5c0-1 1-1.2 1-2.3S8 4 8 3M12 7.5c0-1 1-1.2 1-2.3S12 4 12 3M16 7.5c0-1 1-1.2 1-2.3S16 4 16 3"/>',
    "bakeries-cafes": '<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3.5c0 1 1 1 1 2s-1 1-1 2M12 3.5c0 1 1 1 1 2s-1 1-1 2"/><path d="M3 21.5h14"/>',
    "specialty-grocers": '<path d="M3 10h18l-2 10H5z"/><path d="M8 10l3.5-6M16 10l-3.5-6"/><path d="M9 14v3M12 14v3M15 14v3"/>',
    "breweries-distilleries": '<path d="M5 9h10v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 5 19.5z"/><path d="M15 11.5h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M5 9a2.5 2.5 0 0 1 2.5-3.5 3 3 0 0 1 5 0A2.5 2.5 0 0 1 15 9"/><path d="M8.5 12.5v5M11.5 12.5v5"/>',
    "catering": '<path d="M2.5 17.5h19"/><path d="M4 17.5a8 8 0 0 1 16 0"/><path d="M12 9.5v-2M10 7.5h4"/><path d="M4 20.5h16"/>',
    "plumbing": '<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/><path d="M9 14.5a3 3 0 0 0 3 3"/>',
    "electrical": '<path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12z"/>',
    "hvac": '<path d="M10 4.5a2 2 0 0 1 4 0V14a4 4 0 1 1-4 0z"/><path d="M12 9v7.5"/><path d="M17.5 5h2M17.5 8h2M17.5 11h2"/>',
    "landscaping": '<path d="M5 20c0-9 6-15 15-15 0 9-5.5 15-14.5 15"/><path d="M5 20c3-5.5 6.5-8.5 10.5-10.5"/>',
    "cleaning": '<path d="M11 3l1.8 4.7 4.7 1.8-4.7 1.8L11 16l-1.8-4.7L4.5 9.5l4.7-1.8z"/><path d="M18 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    "carpentry-handyman": '<path d="M3.5 20.5l9-9"/><path d="M10 8l3.5-3.5 2 .5 5 5-2.5 2.5-2-1.5-2.5 2.5z"/>',
    "painting": '<rect x="4" y="3.5" width="13" height="5.5" rx="1"/><path d="M17 6.25h3v5.25h-8V15"/><rect x="10.75" y="15" width="2.5" height="6" rx=".6"/>',
    "auto-repair": '<path d="M3 13l2.2-6h13.6L21 13v5H3z"/><path d="M3 13h18"/><path d="M6.5 18v2.5M17.5 18v2.5"/><path d="M7 15.5h1M16 15.5h1"/>',
    "auto-detailing": '<path d="M2.5 15l1.8-5h11.4l1.8 5v4h-15z"/><path d="M2.5 15h15"/><path d="M6 19v2M14 19v2"/><path d="M19.5 3l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
    "barbers-salons": '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/>',
    "tailoring": '<path d="M6.5 3.5h11M6.5 20.5h11"/><path d="M8 3.5v17M16 3.5v17"/><path d="M8 8l8 2M8 12l8 2M8 16l8 2"/>',
    "fitness": '<path d="M6 6.5v11M18 6.5v11M3 9.5v5M21 9.5v5M6 12h12"/>',
    "accounting-tax": '<rect x="5.5" y="2.5" width="13" height="19" rx="2"/><path d="M8.5 6.5h7"/><path d="M9 11h0M12 11h0M15 11h0M9 14.5h0M12 14.5h0M15 14.5h0M9 18h0M12 18h0M15 18h0" stroke-width="2.2"/>',
    "print-design": '<path d="M6.5 9V3h11v6"/><path d="M6.5 17.5h-2a1.5 1.5 0 0 1-1.5-1.5v-5.5A1.5 1.5 0 0 1 4.5 9h15a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 1-1.5 1.5h-2"/><rect x="6.5" y="13.5" width="11" height="8"/>',
    "photography": '<path d="M3 8.5h4l2-3h6l2 3h4V20H3z"/><circle cx="12" cy="13.5" r="3.5"/>',
    "pet-grooming": '<circle cx="8" cy="6.5" r="1.7"/><circle cx="16" cy="6.5" r="1.7"/><circle cx="4.5" cy="11" r="1.7"/><circle cx="19.5" cy="11" r="1.7"/><path d="M12 11.5c-3 0-5.5 3.2-5.5 5.6 0 1.5 1.2 2.4 2.6 2.4 1.2 0 1.9-.6 2.9-.6s1.7.6 2.9.6c1.4 0 2.6-.9 2.6-2.4 0-2.4-2.5-5.6-5.5-5.6z"/>',
    "woodworking-furniture": '<path d="M7 3v18M17 13v8M7 13h10M7 3h8v10"/><path d="M9.5 6.5h3M9.5 9.5h3"/>',
    "metal-fabrication": '<path d="M12 2.5c1 3 5 5.2 5 10.5a5 5 0 0 1-10 0c0-2.2 1-3.7 2-4.7 0 2 1 3.2 2 3.2 0-3.3 0-6 1-9z"/><path d="M3 21.5h18"/>',
    "textiles-apparel": '<path d="M8 3L3 6l2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 0 1-8 0z"/>',
    "ceramics-glass": '<path d="M9 3h6"/><path d="M10 3v3c-3 1.5-4 4-4 7 0 4 2.5 8 6 8s6-4 6-8c0-3-1-5.5-4-7V3"/><path d="M7 12.5h10"/>',
    "machining-contract": '<circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2"/><path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4M5.3 5.3l2.8 2.8M15.9 15.9l2.8 2.8M5.3 18.7l2.8-2.8M15.9 8.1l2.8-2.8"/>',
    "signs-displays": '<rect x="3.5" y="5" width="17" height="9" rx="1"/><path d="M8 14l-2 7M16 14l2 7M12 2v3"/><path d="M7 9.5h10"/>',
    "soaps-candles": '<rect x="8.5" y="10" width="7" height="11" rx="1"/><path d="M12 3c1.5 1.8 2 3 2 4a2 2 0 0 1-4 0c0-1 .5-2.2 2-4z"/><path d="M12 9v1"/>',
    "bookstores": '<path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z"/><path d="M12 6v14"/>',
    "florists": '<path d="M12 21v-9"/><path d="M7 3.5c0 5 2 8.5 5 8.5s5-3.5 5-8.5l-2.5 2.2L12 3 9.5 5.7z"/><path d="M12 18c-2-2.2-4.2-2.6-6.5-2.6.3 2.4 2.5 4.2 6.5 4.2"/>',
    "bike-shops": '<circle cx="5.5" cy="16" r="3.5"/><circle cx="18.5" cy="16" r="3.5"/><path d="M5.5 16l4-7h6l3 7M9.5 9l2.5 7h-6.5M14 6h2.5"/>',
    "hardware": '<rect x="3" y="9" width="18" height="11" rx="1.5"/><path d="M9 9V6h6v3M3 13.5h18M10 13.5v2h4v-2"/>',

    // Category groups
    "food": '<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M8 7.5c0-1 1-1.2 1-2.3S8 4 8 3M12 7.5c0-1 1-1.2 1-2.3S12 4 12 3M16 7.5c0-1 1-1.2 1-2.3S16 4 16 3"/>',
    "home": '<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/>',
    "auto": '<path d="M3 13l2.2-6h13.6L21 13v5H3z"/><path d="M3 13h18"/><path d="M6.5 18v2.5M17.5 18v2.5"/><path d="M7 15.5h1M16 15.5h1"/>',
    "personal": '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/>',
    "pros": '<rect x="3" y="7.5" width="18" height="12.5" rx="1.5"/><path d="M9 7.5V5h6v2.5M3 13h18"/>',
    "pets": '<circle cx="8" cy="6.5" r="1.7"/><circle cx="16" cy="6.5" r="1.7"/><circle cx="4.5" cy="11" r="1.7"/><circle cx="19.5" cy="11" r="1.7"/><path d="M12 11.5c-3 0-5.5 3.2-5.5 5.6 0 1.5 1.2 2.4 2.6 2.4 1.2 0 1.9-.6 2.9-.6s1.7.6 2.9.6c1.4 0 2.6-.9 2.6-2.4 0-2.4-2.5-5.6-5.5-5.6z"/>',
    "makers": '<path d="M3 21V10.5l5 3v-3l5 3v-3l5 3V4h3v17z"/><path d="M7 17.5h2M12 17.5h2"/>',
    "retail": '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9v11h16V9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M10 20v-5h4v5"/>',

    // UI
    "search": '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
    "pin": '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    "heart": '<path d="M12 20s-7.5-4.6-9-9.5C2 7 4.3 4.5 7.2 4.5c2 0 3.6 1.2 4.8 3 1.2-1.8 2.8-3 4.8-3 2.9 0 5.2 2.5 4.2 6C19.5 15.4 12 20 12 20z"/>',
    "phone": '<path d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.6 6.6l1.4-2.3 4.5 1.8V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.1A1.5 1.5 0 0 1 5 3.5z"/>',
    "mail": '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
    "globe": '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z"/>',
    "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "chevron-right": '<path d="M9 5l7 7-7 7"/>',
    "chevron-down": '<path d="M5 9l7 7 7-7"/>',
    "arrow-right": '<path d="M4 12h16M14 6l6 6-6 6"/>',
    "arrow-left": '<path d="M20 12H4M10 6l-6 6 6 6"/>',
    "filter": '<path d="M4 6h16M7 12h10M10 18h4"/>',
    "check": '<path d="M4.5 12.5l5 5 10-11"/>',
    "x": '<path d="M6 6l12 12M18 6L6 18"/>',
    "thumb": '<path d="M7 10.5V20H4.5a1 1 0 0 1-1-1v-7.5a1 1 0 0 1 1-1z"/><path d="M7 10.5l3.6-6.8a1.8 1.8 0 0 1 3.3 1.3l-.9 3.9h5.3a2 2 0 0 1 2 2.4l-1.4 6.6a2.5 2.5 0 0 1-2.4 2.1H7"/>',
    "directions": '<path d="M12 2.5l9.5 9.5-9.5 9.5L2.5 12z"/><path d="M9 14.5v-2.5a1.5 1.5 0 0 1 1.5-1.5H15M13 8.5l2 2-2 2"/>',
    "sparkle": '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    "quote": '<path d="M9.5 7C6.5 8 5 10.5 5 13.5V17h4.5v-4.5H7c0-2 1-3.6 2.5-4.3zM18.5 7c-3 1-4.5 3.5-4.5 6.5V17h4.5v-4.5H16c0-2 1-3.6 2.5-4.3z"/>',
    "store": '<path d="M4 9l1.5-5h13L20 9"/><path d="M4 9v11h16V9"/><path d="M4 9a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M10 20v-5h4v5"/>',
    "edit": '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    "trash": '<path d="M4 7h16M10 7V4.5h4V7M6 7l1 13h10l1-13"/>',
    "tag": '<path d="M3.5 12.5V4.5a1 1 0 0 1 1-1h8l8 8-9 9z"/><circle cx="8" cy="8" r="1.4"/>',
    "users": '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.3-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.5 3.5 5.2"/>',
    "megaphone": '<path d="M3.5 10v4a1 1 0 0 0 1 1H7l9 5V4L7 9H4.5a1 1 0 0 0-1 1z"/><path d="M7 15l1.5 5.5h2.5L10 15.5M19 9.5a3 3 0 0 1 0 5"/>',
    "star-line": '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
  };

  const STAR = '<path d="M12 2.8l2.85 5.9 6.45.85-4.7 4.5 1.17 6.4L12 17.4l-5.77 3.05 1.17-6.4-4.7-4.5 6.45-.85z"/>';

  function icon(name, opts = {}) {
    const size = opts.size || 20;
    const sw = opts.stroke || 1.6;
    const cls = opts.cls ? ` class="${opts.cls}"` : "";
    const body = P[name] || P["store"];
    return `<svg${cls} width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
  }

  // Filled star with an optional fractional fill (0..1) via a clip rect.
  let starSeq = 0;
  function star(fill = 1, size = 16) {
    if (fill >= 1) return `<svg class="star star-full" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">${STAR}</svg>`;
    if (fill <= 0) return `<svg class="star star-empty" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">${STAR}</svg>`;
    const id = `sc${++starSeq}`;
    return `<svg class="star star-part" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true"><defs><clipPath id="${id}"><rect x="0" y="0" width="${24 * fill}" height="24"/></clipPath></defs><g class="star-bg">${STAR}</g><g class="star-fg" clip-path="url(#${id})">${STAR}</g></svg>`;
  }

  // Tiled background pattern of a trade icon, for brand art panels.
  function pattern(name, color, opacity = 0.12) {
    const body = P[name] || P["store"];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><g fill="none" stroke="${color}" stroke-opacity="${opacity}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(6 6)">${body}</g><g transform="translate(42 42) rotate(-12 12 12)">${body}</g></g></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }

  window.ICONS = { icon, star, pattern, has: (n) => n in P };
})();
