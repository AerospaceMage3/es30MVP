// Services batch: home trades, auto, personal care, professional, and pets.
// All businesses and people are fictional.
window.LOCAL_DATA = window.LOCAL_DATA || { businesses: [] };
window.LOCAL_DATA.businesses.push(

  // ───────────────────────────── HOME: PLUMBING ─────────────────────────────
  {
    id: "copperline-plumbing-drain",
    name: "Copperline Plumbing & Drain",
    tagline: "We sweat the pipes so you don't have to.",
    category: "home",
    subcategory: "plumbing",
    city: "everett",
    neighborhood: "glendale",
    address: "88 Ferry St, Everett, MA 02149",
    phone: "(617) 555-0116",
    email: "dispatch@copperlineplumbing.example",
    website: null,
    founded: 2003,
    owner: "Dominic Ferreira",
    ownerTitle: "Master plumber & owner",
    priceLevel: 2,
    serviceArea: "Everett, Malden, Chelsea, Somerville & Charlestown",
    hours: ["7am–5pm", "7am–5pm", "7am–5pm", "7am–5pm", "7am–5pm", "8am–1pm", "24/7 emergency"],
    tags: ["Licensed & insured", "Emergency service", "Free estimates", "Family-owned"],
    brand: { primary: "#7A3B1E", accent: "#E9A469" },
    featured: true,
    story: "Dominic Ferreira apprenticed under his uncle in Glendale for nine years before opening Copperline with one van and a borrowed pipe threader. Today it's three trucks and his daughter Ana running dispatch, but the rule hasn't changed: you get a written price before any wrench turns. They know Everett's old triple-deckers — galvanized supply lines, cast-iron stacks, and all.",
    sellingPoints: [
      { title: "Price before wrench", text: "Every job gets a written, flat-rate quote on site, and you approve it before work starts." },
      { title: "Triple-decker specialists", text: "Two decades of re-piping galvanized and cast iron in Everett and Chelsea multi-families." },
      { title: "Boots off, floors covered", text: "Techs wear shoe covers and lay drop cloths from the door to the work area, every visit." },
      { title: "Real overnight answers", text: "Sunday and after-hours calls go to an on-call licensed plumber, not an answering service." }
    ],
    offerings: [
      { name: "Drain clearing (main line)", description: "Cable or jetting through the cleanout, with camera check on request.", price: "From $245" },
      { name: "Water heater replacement", description: "40–50 gal gas tank, haul-away, permit, and expansion tank included.", price: "From $2,150" },
      { name: "Fixture install", description: "Faucet, toilet, or disposal swap with supply lines and shutoffs.", price: "From $185" },
      { name: "Sewer camera inspection", description: "Recorded video of your line with a written findings sheet.", price: "$275" },
      { name: "Galvanized-to-PEX re-pipe", description: "Per-unit re-pipe for older multi-families, quoted after walkthrough.", price: "Free quote" },
      { name: "Emergency call-out", description: "Nights, weekends, and holidays, applied toward the repair.", price: "$195" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Winterize before the first hard freeze",
        body: "Burst pipes in a triple-decker hit three families at once. Copperline will check every exposed line, insulate the risky runs, and test your shutoffs in one visit.",
        offer: "$149 freeze-proof visit",
        cta: "Book a winter check",
        expires: "2026-12-15"
      },
      {
        kind: "promo",
        headline: "Water heater on its last legs?",
        body: "Flat-rate replacement with permit and haul-away included, usually same or next day. No surprise add-ons on the invoice.",
        offer: "$200 off tank installs",
        cta: "Get a written quote",
        expires: "2026-11-30"
      }
    ],
    reviews: [
      {
        author: "Marisol P.",
        rating: 5,
        date: "2026-02-09",
        title: "2am burst pipe, fixed by 4",
        text: "A pipe in our back stairwell split during the cold snap at 2am. Dominic himself picked up, was there in 35 minutes, shut it down and replaced the section with PEX. Quoted $640 on site, paid $640. He even shop-vacced the water off the landing before leaving.",
        context: "Emergency burst pipe repair",
        helpful: 31,
        ownerReply: "That was a long night for a lot of Everett — glad we caught yours before it reached the second floor. Stay warm, Marisol."
      },
      {
        author: "Greg T.",
        rating: 5,
        date: "2025-09-22",
        title: "Fair water heater price, permit handled",
        text: "Got three quotes for replacing a 14-year-old 40 gal gas heater: $2,900, $2,600, and Copperline at $2,240 including the expansion tank and permit. Ana scheduled me for two days later and the install took about four hours. Old tank hauled away, everything labeled.",
        context: "Water heater replacement",
        helpful: 18,
        ownerReply: null
      },
      {
        author: "Kerry-Ann D.",
        rating: 4,
        date: "2026-06-03",
        title: "Great work, arrival window was wide",
        text: "Main line backup in our basement. They were told 'between 8 and 12' and arrived at 11:50, which was stressful with a flooded floor drain. Once here, Rui cabled the line, found roots at 40 feet on camera, and charged the quoted $245 plus $275 for the camera. Clear explanation of options for fixing the roots long-term.",
        context: "Main drain clearing + camera inspection",
        helpful: 12,
        ownerReply: null
      },
      {
        author: "Bill O.",
        rating: 3,
        date: "2025-04-17",
        title: "Good plumbing, needed two trips",
        text: "Re-did the shutoffs and supply lines under two sinks. The work itself is solid and tidy. But they didn't bring the right size compression fittings for my old 1/2\" lines, so it took a second visit three days later. They didn't charge for the return trip, which I appreciated, but I lost two mornings.",
        context: "Shutoff valve replacement",
        helpful: 9,
        ownerReply: "Fair criticism, Bill — older homes can surprise us, but we should have stocked both sizes. We've added them to every truck's standard kit since."
      },
      {
        author: "Hyun-woo L.",
        rating: 5,
        date: "2024-11-30",
        title: "Re-piped our whole unit cleanly",
        text: "Galvanized to PEX for a 2BR unit in a three-family. Quote was $7,800 and the final bill was $7,800 even after they found a rotted section behind the tub. Three days, plaster openings kept small and neat, and they coordinated water shutoffs with the other two units by text.",
        context: "Unit re-pipe (galvanized to PEX)",
        helpful: 24,
        ownerReply: null
      }
    ]
  },

  // ──────────────────────────── HOME: ELECTRICAL ────────────────────────────
  {
    id: "ampersand-electric",
    name: "Ampersand Electric",
    tagline: "Old wiring, new panels, and straight answers.",
    category: "home",
    subcategory: "electrical",
    city: "somerville",
    neighborhood: "davis-sq",
    address: "214 Highland Ave, Somerville, MA 02144",
    phone: "(617) 555-0117",
    email: "office@ampersandelectric.example",
    website: "ampersandelectric.example",
    founded: 2014,
    owner: "Priya Raman",
    ownerTitle: "Master electrician & founder",
    priceLevel: 3,
    serviceArea: "Somerville, Cambridge, Medford & Arlington",
    hours: ["7:30am–4pm", "7:30am–4pm", "7:30am–4pm", "7:30am–4pm", "7:30am–4pm", "Closed", "Closed"],
    tags: ["Woman-owned", "Licensed & insured", "Free estimates"],
    brand: { primary: "#1F2A6B", accent: "#F4C542" },
    featured: false,
    story: "Priya Raman spent eight years wiring lab buildings in Kendall before starting Ampersand to work on the houses she actually loves — Somerville's knob-and-tube Victorians. Her crew of four does panel upgrades, EV chargers, and the careful rewiring that keeps original plaster and trim intact. Every job ends with a labeled panel directory and a photo log of what's behind your walls.",
    sellingPoints: [
      { title: "Plaster-friendly rewiring", text: "Fish-and-pull techniques mean small openings, patched before they leave." },
      { title: "Photo log of your walls", text: "You get a shared album of every junction and run they touched, for future reference." },
      { title: "Heat pump & EV ready", text: "Load calculations and panel upgrades sized for electrification, with Mass Save paperwork help." }
    ],
    offerings: [
      { name: "200A panel upgrade", description: "New panel, meter coordination with Eversource, permit, and inspection.", price: "From $3,900" },
      { name: "Level 2 EV charger install", description: "Hardwired or 14-50 outlet, up to 30 ft run from the panel.", price: "From $1,150" },
      { name: "Knob-and-tube replacement", description: "Room-by-room rewiring with minimal plaster damage, quoted after inspection.", price: "Free quote" },
      { name: "Electrical safety inspection", description: "Full-home check with written report, great for new buyers.", price: "$225" },
      { name: "Fixture & switch work", description: "Lights, fans, dimmers, and smart switches.", price: "$135/hr" }
    ],
    ads: [
      {
        kind: "spotlight",
        headline: "Knob-and-tube? Keep your plaster.",
        body: "Ampersand rewires Somerville's oldest homes through tiny openings and patches them before leaving. You get a photo log of every wire they touched.",
        offer: null,
        cta: "Book an inspection",
        expires: null
      },
      {
        kind: "promo",
        headline: "Get your panel heat-pump ready",
        body: "Switching to a heat pump this winter? Priya's team handles the load calc, the 200A upgrade, and the Eversource coordination.",
        offer: "Free load calculation",
        cta: "Request a quote",
        expires: "2027-01-31"
      }
    ],
    reviews: [
      {
        author: "Danielle W.",
        rating: 5,
        date: "2026-05-12",
        title: "Panel upgrade, zero drama",
        text: "Upgraded from a 60A fuse box to 200A ahead of a heat pump install. Quote was $4,350; final was $4,350. Priya coordinated the Eversource disconnect so power was out only 6 hours. The new panel directory is printed and laminated, which my old electrician never did.",
        context: "60A to 200A panel upgrade",
        helpful: 22,
        ownerReply: null
      },
      {
        author: "Sam R.",
        rating: 5,
        date: "2025-10-28",
        title: "Rewired three rooms, plaster survived",
        text: "We had live knob-and-tube in two bedrooms and the hall of our 1890s house. Ampersand fished new runs with openings smaller than a playing card and patched them the same day. Took four days instead of the three quoted but the price ($6,200) didn't move.",
        context: "Knob-and-tube rewiring",
        helpful: 17,
        ownerReply: "Those old balloon-frame walls had some fire blocking we didn't expect — thanks for your patience, Sam."
      },
      {
        author: "Aaron F.",
        rating: 4,
        date: "2026-08-19",
        title: "Pricey but clearly the right call",
        text: "EV charger install with a 22 ft run. They were about $250 more than another quote I got, but they also caught that my dryer and charger would overload the existing panel and set up load management instead of an upgrade. Showed up on time, Keisha was very clear.",
        context: "Level 2 EV charger install",
        helpful: 11,
        ownerReply: null
      },
      {
        author: "Lena M.",
        rating: 3,
        date: "2025-03-06",
        title: "Good work, slow to schedule",
        text: "The inspection was thorough and the written report was excellent. But it took nearly four weeks to get on the calendar for the actual repair work, and I had to follow up twice by email to get a date. Once they came, the fixes were done in a morning.",
        context: "Safety inspection + outlet repairs",
        helpful: 8,
        ownerReply: "You're right, Lena — spring 2025 was rough for our backlog. We've since added a fourth electrician and now hold two days a week for small repair jobs."
      }
    ]
  },

  // ─────────────────────────────── HOME: HVAC ───────────────────────────────
  {
    id: "granite-coast-heating-air",
    name: "Granite Coast Heating & Air",
    tagline: "Warm in January, cool in July, honest all year.",
    category: "home",
    subcategory: "hvac",
    city: "quincy",
    neighborhood: "wollaston",
    address: "57 Beale St, Quincy, MA 02170",
    phone: "(617) 555-0118",
    email: "service@granitecoasthvac.example",
    website: null,
    founded: 2009,
    owner: "Kevin Mulcahy",
    ownerTitle: "Owner & lead technician",
    priceLevel: 2,
    serviceArea: "Quincy, Milton, Braintree, Weymouth & Dorchester",
    hours: ["7am–6pm", "7am–6pm", "7am–6pm", "7am–6pm", "7am–6pm", "8am–2pm", "24/7 emergency"],
    tags: ["Veteran-owned", "Licensed & insured", "Emergency service", "Free estimates"],
    brand: { primary: "#2E3E4F", accent: "#E0703A" },
    featured: true,
    story: "Kevin Mulcahy kept ship boilers running for eight years in the Navy, then came home to Wollaston and started fixing his neighbors' furnaces out of his garage. Granite Coast now runs five vans, but Kevin still answers the no-heat line himself on the coldest nights. They service everything from 1950s oil burners to the newest cold-climate heat pumps.",
    sellingPoints: [
      { title: "No-heat priority", text: "Households with kids, elders, or medical needs go to the front of the line on cold nights." },
      { title: "Oil, gas, or heat pump", text: "Techs certified on legacy boilers and modern ductless systems, so advice isn't one-sided." },
      { title: "Rebate paperwork handled", text: "They file your Mass Save heat pump rebate for you at no extra charge." },
      { title: "Repair-or-replace honesty", text: "If a $300 repair buys you five more years, that's what they'll recommend." }
    ],
    offerings: [
      { name: "Boiler or furnace tune-up", description: "Clean, combustion test, and safety check before the heating season.", price: "$189" },
      { name: "No-heat service call", description: "Diagnosis within the hour you're scheduled; fee waived if you proceed.", price: "$149" },
      { name: "Ductless mini-split install", description: "Single-zone cold-climate heat pump, line set, and pad included.", price: "From $5,400" },
      { name: "Whole-home heat pump", description: "Multi-zone design with load calc and rebate filing.", price: "Free quote" },
      { name: "Comfort Club plan", description: "Annual tune-up, priority scheduling, and 15% off repairs.", price: "$19/mo" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Tune up now, skip the January panic",
        body: "Most no-heat calls we get in winter could have been caught in a fall tune-up. Get your boiler or furnace checked by a Navy-trained tech before the first cold snap.",
        offer: "$30 off fall tune-ups",
        cta: "Book a tune-up",
        expires: "2026-11-30"
      },
      {
        kind: "spotlight",
        headline: "Thinking heat pump? Get a straight answer",
        body: "Kevin's team services oil, gas, and heat pumps, so you'll hear what actually makes sense for your house — plus they file the Mass Save rebate for you.",
        offer: null,
        cta: "Schedule a free consult",
        expires: null
      }
    ],
    reviews: [
      {
        author: "Theresa C.",
        rating: 5,
        date: "2026-01-24",
        title: "Heat back on in 90 minutes, -2° night",
        text: "Our boiler died on the coldest night of the year with my 80-year-old mother staying with us. Kevin called back in 10 minutes, was here within the hour, and replaced a failed ignitor and a thermocouple. $149 call plus $210 in parts and labor. He checked back by text the next morning.",
        context: "Emergency boiler repair",
        helpful: 34,
        ownerReply: "Glad your mom was warm by midnight, Theresa. That's exactly who the no-heat line is for."
      },
      {
        author: "Jorge A.",
        rating: 5,
        date: "2025-07-15",
        title: "Two-zone mini-split, rebate filed for us",
        text: "Installed two Mitsubishi heads on the second floor. Quoted $9,600, came in at $9,600. Crew of two, finished in a day and a half, lineset covers painted to match the siding. They filed the rebate paperwork and the check came about eight weeks later.",
        context: "Ductless mini-split install",
        helpful: 20,
        ownerReply: null
      },
      {
        author: "Megan H.",
        rating: 4,
        date: "2025-10-09",
        title: "Thorough tune-up, ran a bit late",
        text: "Annual furnace tune-up. Tech (Darnell) was about 45 minutes past the window but texted ahead. He found a cracked flue connector and showed me photos — fixed on the spot for $95 extra. Very clean, wore booties.",
        context: "Furnace tune-up",
        helpful: 7,
        ownerReply: null
      },
      {
        author: "Phil N.",
        rating: 2,
        date: "2024-12-03",
        title: "Diagnosis fee felt steep",
        text: "Paid $149 for a no-heat call that turned out to be a tripped emergency switch at the top of the basement stairs. The tech was polite and quick but I felt like it should have been a cheaper visit for a 5-minute fix.",
        context: "No-heat service call",
        helpful: 14,
        ownerReply: "Understood, Phil. We've since started walking callers through the switch and reset checks over the phone before dispatching — that would have saved you the trip."
      },
      {
        author: "Siobhan K.",
        rating: 5,
        date: "2026-09-02",
        title: "Talked me out of an unnecessary replacement",
        text: "Another company told me my 18-year-old gas boiler needed replacement for $11k. Kevin came out, replaced a circulator pump for $680, and said I likely had 4–6 more good years. That honesty is rare.",
        context: "Boiler second opinion + circulator replacement",
        helpful: 28,
        ownerReply: null
      }
    ]
  },

  // ────────────────────────────── HOME: CLEANING ─────────────────────────────
  {
    id: "lemon-and-lye-home-cleaning",
    name: "Lemon & Lye Home Cleaning",
    tagline: "Spotless homes, no harsh fumes, same crew every visit.",
    category: "home",
    subcategory: "cleaning",
    city: "boston",
    neighborhood: "dorchester",
    address: "1290 Dorchester Ave, Dorchester, MA 02125",
    phone: "(857) 555-0119",
    email: "hola@lemonandlye.example",
    website: null,
    founded: 2017,
    owner: "Rosa Benítez",
    ownerTitle: "Founder & crew lead",
    priceLevel: 2,
    serviceArea: "Dorchester, South Boston, Milton, Quincy & the South End",
    hours: ["8am–5pm", "8am–5pm", "8am–5pm", "8am–5pm", "8am–5pm", "9am–2pm", "Closed"],
    tags: ["Woman-owned", "Immigrant-owned", "Eco-friendly", "Licensed & insured"],
    brand: { primary: "#3D5A1E", accent: "#F2D541" },
    featured: false,
    story: "Rosa Benítez cleaned houses in Savin Hill for ten years before starting Lemon & Lye with her sister Carmen. They mix their own plant-based cleaners and pay their crew well above the area average, which is why the same two people show up at your door month after month. Most clients found them through a neighbor's recommendation.",
    sellingPoints: [
      { title: "Same crew, every time", text: "You're assigned a two-person team that learns your home and your preferences." },
      { title: "Homemade green products", text: "Citrus, vinegar, and castile-based cleaners safe for kids, pets, and asthma." },
      { title: "Checklist you approve", text: "Every first clean starts with a walkthrough and a written room-by-room checklist." },
      { title: "Bilingual crews", text: "Teams speak English and Spanish; texts and invoices in either language." }
    ],
    offerings: [
      { name: "Standard clean (2BR)", description: "Kitchen, baths, floors, dusting, and beds made.", price: "$165" },
      { name: "Deep clean (2BR)", description: "Inside oven and fridge, baseboards, cabinet fronts, and grout scrub.", price: "$320" },
      { name: "Move-out clean", description: "Empty-unit clean aimed at getting your deposit back.", price: "From $375" },
      { name: "Biweekly plan", description: "Standard clean every other week, same crew, locked-in rate.", price: "$145/visit" },
      { name: "Post-renovation dust-out", description: "HEPA vacuum, wipe-down of all surfaces, and window tracks.", price: "Free quote" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Deep clean before the holidays",
        body: "Hosting this year? Rosa's crew will scrub the oven, fridge, baseboards, and grout with homemade non-toxic cleaners, so your home smells like lemons, not bleach.",
        offer: "$40 off holiday deep cleans",
        cta: "Book your date",
        expires: "2026-12-20"
      }
    ],
    reviews: [
      {
        author: "Courtney B.",
        rating: 5,
        date: "2026-07-21",
        title: "Got my full deposit back",
        text: "Move-out clean for a 2BR in Savin Hill that I'd lived in for six years. Quoted $375, paid $375. Rosa and Yesenia spent five hours and the landlord literally said it was cleaner than when I moved in. Full $2,400 deposit returned.",
        context: "Move-out clean",
        helpful: 26,
        ownerReply: "Six years of memories to clean up — congratulations on the new place, Courtney!"
      },
      {
        author: "Malik J.",
        rating: 5,
        date: "2025-11-14",
        title: "Biweekly for a year, still consistent",
        text: "Same two people every other Thursday for 14 months. They remember that our son's room gets vacuumed but not tidied and that the cat hides under the bed. Products don't trigger my wife's asthma, which was the main reason we switched.",
        context: "Biweekly standard cleaning",
        helpful: 15,
        ownerReply: null
      },
      {
        author: "Eileen G.",
        rating: 4,
        date: "2026-03-30",
        title: "Great deep clean, ran over time",
        text: "Deep clean on a three-bedroom with a dog. Took about 90 minutes longer than estimated and the bill went from $320 to $360, though Carmen called me before going over. Grout looks brand new and the oven is spotless.",
        context: "Deep clean (3BR)",
        helpful: 9,
        ownerReply: null
      },
      {
        author: "Tom S.",
        rating: 3,
        date: "2025-05-08",
        title: "Missed a few things the first time",
        text: "First clean missed the inside of the microwave and the bathroom vent cover, both of which were on our checklist. I mentioned it and they came back two days later to finish at no charge. Second and third visits were perfect.",
        context: "Standard clean (first visit)",
        helpful: 6,
        ownerReply: "Thanks for telling us, Tom — that's exactly what the checklist is for. We now do a final walkthrough with it on every first visit."
      },
      {
        author: "Ngozi A.",
        rating: 5,
        date: "2024-09-19",
        title: "Post-reno dust is GONE",
        text: "After a kitchen renovation there was drywall dust everywhere, including inside cabinets. They quoted $480, brought HEPA vacuums, and took a full day with three people. No dust on anything two weeks later.",
        context: "Post-renovation dust-out",
        helpful: 11,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────── HOME: CARPENTRY & HANDYMAN ─────────────────────────
  {
    id: "plumb-and-square-carpentry",
    name: "Plumb & Square Carpentry",
    tagline: "Small jobs done like they're big ones.",
    category: "home",
    subcategory: "carpentry-handyman",
    city: "cambridge",
    neighborhood: "inman-sq",
    address: "1347 Cambridge St, Cambridge, MA 02139",
    phone: "(617) 555-0120",
    email: "theo@plumbandsquare.example",
    website: null,
    founded: 2016,
    owner: "Theo Lindqvist",
    ownerTitle: "Carpenter & owner",
    priceLevel: 2,
    serviceArea: "Cambridge, Somerville, Belmont & Watertown",
    hours: ["8am–4:30pm", "8am–4:30pm", "8am–4:30pm", "8am–4:30pm", "8am–4:30pm", "By appointment", "Closed"],
    tags: ["Licensed & insured", "Free estimates", "Custom orders"],
    brand: { primary: "#4A3423", accent: "#D9B382" },
    featured: false,
    story: "Theo Lindqvist trained as a boatbuilder in Maine before landing in Inman Square, where he discovered that most contractors won't touch a sticking door or a wobbly stair rail. Plumb & Square takes exactly those jobs — plus built-in shelves, window sash repair, and the punch lists that pile up in old houses. A half-day minimum keeps prices fair for both sides.",
    sellingPoints: [
      { title: "Punch lists welcome", text: "Bring a list of 10 small annoyances and they'll knock out as many as fit in a half-day." },
      { title: "Original sash repair", text: "Restores old wood windows instead of replacing them: new cords, glazing, and weatherstrip." },
      { title: "Built-ins to measure", text: "Custom shelving and window seats built in their Cambridge shop and finished on site." }
    ],
    offerings: [
      { name: "Half-day handyman visit", description: "Up to four hours of repairs from your list; materials extra.", price: "$340" },
      { name: "Full-day visit", description: "Eight hours, ideal for bigger punch lists or small builds.", price: "$640" },
      { name: "Double-hung sash restoration", description: "Per window: new cords, reglaze, and weatherstrip.", price: "From $395" },
      { name: "Built-in bookshelves", description: "Paint-grade poplar, designed to your room and installed.", price: "From $2,800" },
      { name: "Door rehang & adjust", description: "Fix sticking, sagging, or unlatching interior doors.", price: "From $160" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Got a list of little fixes? Bring it.",
        body: "Sticky doors, loose railings, a cabinet that won't close — Theo's half-day visits clear out the punch list most contractors won't touch.",
        offer: "Book 2 half-days, save $60",
        cta: "Send your list",
        expires: "2027-01-15"
      },
      {
        kind: "seasonal",
        headline: "Stop the window drafts this winter",
        body: "Restore your original wood windows with new sash cords, glazing, and weatherstripping. Warmer rooms, and the old glass stays.",
        offer: "10% off 4+ windows",
        cta: "Get a window quote",
        expires: "2026-12-31"
      }
    ],
    reviews: [
      {
        author: "Rachel Z.",
        rating: 5,
        date: "2026-04-11",
        title: "Cleared 11 items in one half-day",
        text: "I sent Theo a list with 14 items: sticky doors, a loose banister, a crooked closet rod, two cabinet hinges, etc. He finished 11 in under four hours for $340 plus $38 in hardware. He swept up and vacuumed the sawdust before leaving.",
        context: "Half-day handyman punch list",
        helpful: 19,
        ownerReply: null
      },
      {
        author: "Ian P.",
        rating: 5,
        date: "2025-11-02",
        title: "Our windows actually open now",
        text: "Restored six original double-hung windows that had been painted shut for decades. Quote was $395 each, final was $2,370 total. Took four days. The bedroom is noticeably less drafty and the old wavy glass is still there.",
        context: "Window sash restoration (6 windows)",
        helpful: 23,
        ownerReply: "Those 1910 sashes were some of the nicest old-growth fir we've seen. Enjoy them, Ian."
      },
      {
        author: "Fatima O.",
        rating: 4,
        date: "2026-08-27",
        title: "Beautiful shelves, took longer than said",
        text: "Built-in bookshelves on either side of our fireplace. They look like they came with the house. Price was $3,400 as quoted, but the install slipped by about two weeks because of a lumber delay. Theo kept me updated the whole time.",
        context: "Custom built-in bookshelves",
        helpful: 10,
        ownerReply: null
      },
      {
        author: "Chris L.",
        rating: 3,
        date: "2025-02-18",
        title: "Good carpentry, hard to book",
        text: "Work on our stair rail was excellent and it hasn't budged since. But it took five weeks to get a half-day slot, and the half-day minimum is a lot for a single 45-minute fix. I'd use him again for a bigger list.",
        context: "Stair railing repair",
        helpful: 8,
        ownerReply: "Thanks Chris — that's the honest tradeoff of a small shop. Tip for everyone: save up a few fixes and you'll get the most from the half-day."
      }
    ]
  },

  // ────────────────────────────── HOME: PAINTING ─────────────────────────────
  {
    id: "second-coat-painting",
    name: "Second Coat Painting & Finishing",
    tagline: "The prep is the paint job. We never skip it.",
    category: "home",
    subcategory: "painting",
    city: "brookline",
    neighborhood: "brookline-village",
    address: "19 Station St, Brookline, MA 02445",
    phone: "(617) 555-0121",
    email: "estimates@secondcoatpainting.example",
    website: null,
    founded: 2011,
    owner: "Luis Ortega",
    ownerTitle: "Owner & lead painter",
    priceLevel: 3,
    serviceArea: "Brookline, Newton, Jamaica Plain & Allston-Brighton",
    hours: ["7am–4pm", "7am–4pm", "7am–4pm", "7am–4pm", "7am–4pm", "By appointment", "Closed"],
    tags: ["Licensed & insured", "Free estimates", "BIPOC-owned", "Family-owned"],
    brand: { primary: "#5B2A4E", accent: "#F0B7A4" },
    featured: false,
    story: "Luis Ortega started painting with his father in Jamaica Plain at 16 and named the business after the one thing they never cut corners on. His six-person crew is EPA lead-safe certified, which matters in Brookline's pre-1978 homes, and they spend as long on scraping, patching, and priming as on the finish coats. Interior jobs include furniture moving and daily cleanup.",
    sellingPoints: [
      { title: "Lead-safe certified", text: "EPA RRP-certified crew with containment and HEPA cleanup for older homes." },
      { title: "Itemized estimates", text: "Prep, primer, and finish coats are priced line by line so you see where money goes." },
      { title: "Daily cleanup", text: "Rooms are livable every evening: tools packed, floors vacuumed, furniture back." },
      { title: "Two-year touch-up warranty", text: "Peeling or flaking on their work gets fixed free for two years." }
    ],
    offerings: [
      { name: "Interior room repaint", description: "Walls and ceiling, two finish coats, minor patching included.", price: "From $650" },
      { name: "Trim & door refresh", description: "Sand, prime, and enamel baseboards, casings, and doors.", price: "From $480" },
      { name: "Exterior repaint", description: "Full scrape, prime, and two coats with lead-safe practices.", price: "Free quote" },
      { name: "Plaster repair", description: "Crack and hole repair with setting compound before painting.", price: "$85/hr" },
      { name: "Kitchen cabinet refinishing", description: "Degrease, sand, prime, and sprayed enamel finish.", price: "From $3,200" }
    ],
    ads: [
      {
        kind: "new",
        headline: "Now booking spring exteriors",
        body: "Brookline's best exterior slots go by January. Lock in your spring date now and Luis's lead-safe crew will do the full scrape-prime-paint right.",
        offer: "5% off if booked by Jan 31",
        cta: "Get a free estimate",
        expires: "2027-01-31"
      }
    ],
    reviews: [
      {
        author: "Judith M.",
        rating: 5,
        date: "2025-09-10",
        title: "Exterior on a 1905 Victorian",
        text: "Full exterior on our three-story Victorian with lots of trim. Quote was $24,800 and they finished at $24,800 in 13 working days. Lead-safe containment was serious: tarps, daily HEPA vac of the yard. Luis walked the house with us at the end and touched up four spots we pointed out.",
        context: "Full exterior repaint",
        helpful: 21,
        ownerReply: null
      },
      {
        author: "Ben C.",
        rating: 4,
        date: "2026-06-22",
        title: "Cabinets look factory-new",
        text: "Painted our oak kitchen cabinets a deep green. Finish is smooth and hard. Took seven days instead of five because they let the primer cure longer in humid weather, which I appreciated in hindsight. Price was $3,650 as quoted.",
        context: "Kitchen cabinet refinishing",
        helpful: 13,
        ownerReply: "Humidity and enamel don't mix — glad the extra cure time paid off, Ben."
      },
      {
        author: "Anika S.",
        rating: 5,
        date: "2026-02-15",
        title: "Living room and hall, super tidy",
        text: "Living room, hallway, and stairwell with lots of cracked plaster. Estimate was itemized: $2,100 paint plus $340 plaster. Final matched. Carlos and Mateo moved the piano and put it back exactly. No paint on anything that shouldn't have it.",
        context: "Interior repaint with plaster repair",
        helpful: 9,
        ownerReply: null
      },
      {
        author: "Doug R.",
        rating: 2,
        date: "2024-10-04",
        title: "Color mix-up cost us two days",
        text: "They put the wrong shade of gray on our dining room (a similar name from a different brand). They repainted it at their cost, but it pushed everything back two days and I had to take another day off work. The final result is good.",
        context: "Interior repaint (3 rooms)",
        helpful: 15,
        ownerReply: "Doug, that was entirely our mistake and I'm sorry for the lost day. We now have clients sign off on a physical swatch with brand and code before any can is opened."
      },
      {
        author: "Wen Y.",
        rating: 5,
        date: "2025-05-27",
        title: "Warranty actually honored",
        text: "A small spot of peeling showed up on a window sill 18 months after our exterior job. Called Luis and he had someone out within the week to scrape, prime, and repaint it at no charge. No argument at all.",
        context: "Warranty touch-up",
        helpful: 17,
        ownerReply: null
      }
    ]
  },

  // ──────────────────────────── HOME: LANDSCAPING (1) ────────────────────────────
  {
    id: "arborway-gardenworks",
    name: "Arborway Gardenworks",
    tagline: "Native gardens that feed the bees and skip the mower.",
    category: "home",
    subcategory: "landscaping",
    city: "boston",
    neighborhood: "jamaica-plain",
    address: "3361 Washington St, Jamaica Plain, MA 02130",
    phone: "(617) 555-0122",
    email: "grow@arborwaygardenworks.example",
    website: "arborwaygardenworks.example",
    founded: 2015,
    owner: "Hannah Okafor",
    ownerTitle: "Garden designer & owner",
    priceLevel: 3,
    serviceArea: "Jamaica Plain, Roslindale, West Roxbury, Brookline & Roxbury",
    hours: ["7am–4pm", "7am–4pm", "7am–4pm", "7am–4pm", "7am–4pm", "By appointment", "Closed"],
    tags: ["Woman-owned", "BIPOC-owned", "Eco-friendly", "Free estimates"],
    brand: { primary: "#22502F", accent: "#E7A6C3" },
    featured: true,
    story: "Hannah Okafor worked as a horticulturist at a nearby arboretum for seven years before starting Arborway to bring native-plant design to ordinary city yards. Her crew replaces thirsty lawns with layered beds of native perennials, shrubs, and grasses that support pollinators and need far less water. They also run seasonal maintenance with electric equipment only — no gas blowers.",
    sellingPoints: [
      { title: "All-electric crew", text: "Battery mowers, trimmers, and blowers mean quiet visits and no fumes." },
      { title: "Native plant design", text: "Plans built around Massachusetts natives that thrive without irrigation once established." },
      { title: "Two-year plant guarantee", text: "Any plant they install that dies within two seasons is replaced free." },
      { title: "Small-yard experts", text: "Designs for triple-decker side yards, front strips, and shady back lots." }
    ],
    offerings: [
      { name: "Garden design consult", description: "On-site visit with a sketched plan and plant list.", price: "$225" },
      { name: "Lawn-to-meadow conversion", description: "Sod removal, soil prep, and native planting per 500 sq ft.", price: "From $4,500" },
      { name: "Fall cleanup", description: "Leaf mulching, perennial cutback, and bed edging.", price: "From $380" },
      { name: "Seasonal maintenance plan", description: "Monthly visits April through November.", price: "$210/visit" },
      { name: "Rain garden install", description: "Captures roof runoff with deep-rooted natives.", price: "Free quote" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Fall is the best time to plant natives",
        body: "Roots grow all autumn while you rest. Book a lawn-to-meadow conversion now and your yard will bloom with bees and butterflies come June.",
        offer: "Free design with any install",
        cta: "Book a consult",
        expires: "2026-11-15"
      },
      {
        kind: "spotlight",
        headline: "Quiet, fume-free yard care",
        body: "Arborway's all-electric crew maintains your garden without the roar of gas blowers. Your neighbors will thank you.",
        offer: null,
        cta: "Ask about maintenance plans",
        expires: null
      }
    ],
    reviews: [
      {
        author: "Priscilla N.",
        rating: 5,
        date: "2025-08-04",
        title: "Our front lawn is now a meadow",
        text: "Converted about 600 sq ft of patchy front lawn to native beds last fall. Quote was $5,200, final $5,200. This summer it was full of coneflower, bee balm, and little bluestem, and I've watered maybe three times. Two plants died and Hannah replaced them without me asking.",
        context: "Lawn-to-meadow conversion",
        helpful: 27,
        ownerReply: "Thank you Priscilla! Your bee balm patch was one of our favorites this summer."
      },
      {
        author: "Leo B.",
        rating: 5,
        date: "2026-05-19",
        title: "Design consult worth every penny",
        text: "Paid $225 for a design visit for my shady back yard. Hannah spent 90 minutes on site and sent a sketched plan with 22 plant suggestions within a week. I did the planting myself and it looks great.",
        context: "Garden design consult",
        helpful: 12,
        ownerReply: null
      },
      {
        author: "Marcy V.",
        rating: 3,
        date: "2025-11-20",
        title: "Nice crew, cleanup left leaves in beds",
        text: "Fall cleanup was $420 versus the $380 estimate because of 'extra volume.' They mulch leaves into the beds on purpose for the soil and insects, which I didn't realize until afterward. Makes sense ecologically, but I wanted them hauled away and that should have been explained up front.",
        context: "Fall cleanup",
        helpful: 16,
        ownerReply: "You're right, Marcy — we should explain our leave-the-leaves approach before the visit, not after. Haul-away is always an option and it's now a checkbox on every estimate."
      },
      {
        author: "Dev K.",
        rating: 4,
        date: "2026-09-08",
        title: "Rain garden works, took a while",
        text: "Installed a rain garden off our downspout to stop basement seepage. It works — dry basement through every storm in August. Install was pushed back three weeks by weather, and the final price was $3,100 versus a $2,800 quote because they found clay that needed amending. Hannah called before adding cost.",
        context: "Rain garden install",
        helpful: 10,
        ownerReply: null
      },
      {
        author: "Gloria F.",
        rating: 5,
        date: "2024-07-12",
        title: "Monthly visits, never a gas blower",
        text: "We've had their maintenance plan for two seasons. Same crew lead (Ama) every month, quiet battery equipment, and she leaves a note about what was done and what's blooming next.",
        context: "Seasonal maintenance plan",
        helpful: 8,
        ownerReply: null
      }
    ]
  },

  // ──────────────────────────── HOME: LANDSCAPING (2) ────────────────────────────
  {
    id: "saltmeadow-landscape-stone",
    name: "Saltmeadow Landscape & Stone",
    tagline: "Patios, walls, and lawns built for the South Shore wind.",
    category: "home",
    subcategory: "landscaping",
    city: "quincy",
    neighborhood: "quincy-center",
    address: "640 Southern Artery, Quincy, MA 02169",
    phone: "(781) 555-0123",
    email: "office@saltmeadowstone.example",
    website: null,
    founded: 1998,
    owner: "Brendan Tierney",
    ownerTitle: "Owner & stonemason",
    priceLevel: 3,
    serviceArea: "Quincy, Braintree, Weymouth, Milton & Hingham",
    hours: ["7am–5pm", "7am–5pm", "7am–5pm", "7am–5pm", "7am–5pm", "8am–12pm", "Closed"],
    tags: ["Family-owned", "Licensed & insured", "Free estimates", "Emergency service"],
    brand: { primary: "#34495E", accent: "#C9B27C" },
    featured: false,
    story: "Brendan Tierney's grandfather cut granite in the Quincy quarries, and Brendan still builds walls the way he was taught — dry-laid, battered back, built to outlast the house. Saltmeadow does patios, walkways, retaining walls, and full-season lawn care for coastal yards that take a beating from salt and wind. In winter, the same trucks run plowing and storm cleanup.",
    sellingPoints: [
      { title: "Third-generation stonework", text: "Dry-laid granite and fieldstone walls built on proper compacted bases." },
      { title: "Coast-tough planting", text: "Salt-tolerant lawn blends and shrubs chosen for windy, sandy South Shore lots." },
      { title: "Storm cleanup crews", text: "After nor'easters, contract clients get downed limbs and debris cleared within 48 hours." }
    ],
    offerings: [
      { name: "Bluestone or paver patio", description: "Excavation, gravel base, and install per 200 sq ft.", price: "From $7,800" },
      { name: "Granite retaining wall", description: "Dry-laid or mortared, priced after site visit.", price: "Free quote" },
      { name: "Weekly lawn service", description: "Mow, trim, and blow for lots under 1/4 acre.", price: "$55/visit" },
      { name: "Spring or fall cleanup", description: "Beds, leaves, edging, and debris haul-away.", price: "From $350" },
      { name: "Seasonal snow plowing", description: "Driveway plowing with walkway shoveling, Nov–Mar contract.", price: "From $650/season" },
      { name: "Storm debris cleanup", description: "Limb removal and yard clearing after storms.", price: "$120/hr" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Lock in your snow plowing contract",
        body: "Contract clients get plowed first and shoveled walkways, every storm, all season. Spots fill fast once the forecasts turn white.",
        offer: "$50 off if signed by Nov 15",
        cta: "Reserve your driveway",
        expires: "2026-11-15"
      },
      {
        kind: "spotlight",
        headline: "Granite walls built to outlast you",
        body: "Brendan builds dry-laid stone walls the way his quarryman grandfather taught him. Tired of a leaning timber wall? Get it rebuilt in Quincy granite.",
        offer: null,
        cta: "Get a free estimate",
        expires: null
      }
    ],
    reviews: [
      {
        author: "Ray D.",
        rating: 5,
        date: "2025-06-30",
        title: "Retaining wall is a work of art",
        text: "Replaced a rotting 40-foot timber wall with dry-laid granite. Quote was $18,500 and the final was $18,500. Brendan and three guys took eight days. Neighbors keep stopping to ask who built it. They also regraded so water drains away from the house now.",
        context: "Granite retaining wall",
        helpful: 25,
        ownerReply: null
      },
      {
        author: "Karen W.",
        rating: 4,
        date: "2026-07-07",
        title: "Beautiful patio, a little dusty",
        text: "Bluestone patio about 300 sq ft. Came in at $11,200, about $400 over quote because of extra ledge they had to break. Looks fantastic and is perfectly level. The cutting dust got on our cars and siding the first two days, though they hosed things down when I asked.",
        context: "Bluestone patio",
        helpful: 11,
        ownerReply: "Thanks Karen — we now set up wet-cut stations by default on tight lots so dust doesn't travel."
      },
      {
        author: "Patrick M.",
        rating: 5,
        date: "2026-02-28",
        title: "Plowed before 6am every storm",
        text: "Third season on their plowing contract ($700). Driveway done before I leave for work every single storm, including the 22-inch one in January. Walkway and steps shoveled too, which most plow guys won't do.",
        context: "Seasonal snow plowing",
        helpful: 14,
        ownerReply: null
      },
      {
        author: "Hui L.",
        rating: 2,
        date: "2024-08-21",
        title: "Lawn crew rushed through",
        text: "Weekly mowing was fine for the first month, but then visits got very quick and they started missing the trim along the back fence. Took a couple of calls to get it addressed. Stone work may be their strength; I ended up cancelling lawn service.",
        context: "Weekly lawn service",
        helpful: 9,
        ownerReply: "Hui, I'm sorry — that summer we lost a crew lead and quality slipped. We've since added a checklist that every lawn crew signs off on, and I'd welcome the chance to earn you back."
      },
      {
        author: "Stephanie O.",
        rating: 5,
        date: "2025-03-18",
        title: "Came out the morning after the storm",
        text: "A big maple limb came down across our yard and fence after the March nor'easter. They had a crew here the next morning, cut and hauled everything in three hours, and billed $360. Cleaned up every twig.",
        context: "Storm debris cleanup",
        helpful: 12,
        ownerReply: null
      },
      {
        author: "Andre G.",
        rating: 4,
        date: "2025-10-24",
        title: "Solid fall cleanup",
        text: "Fall cleanup on a half-acre lot. $520, about $70 more than the estimate for extra leaf volume — they called first. Beds edged nicely and everything was hauled. Took two visits since the oaks drop late.",
        context: "Fall cleanup",
        helpful: 5,
        ownerReply: null
      }
    ]
  },

  // ─────────────────────────────── AUTO: REPAIR ───────────────────────────────
  {
    id: "honest-wrench-garage",
    name: "Honest Wrench Garage",
    tagline: "We show you the old part. Every time.",
    category: "auto",
    subcategory: "auto-repair",
    city: "everett",
    neighborhood: "everett-sq",
    address: "421 Broadway, Everett, MA 02149",
    phone: "(617) 555-0124",
    email: "shop@honestwrench.example",
    website: null,
    founded: 2007,
    owner: "Minh Tran",
    ownerTitle: "Owner & ASE master technician",
    priceLevel: 2,
    serviceArea: null,
    hours: ["7:30am–6pm", "7:30am–6pm", "7:30am–6pm", "7:30am–6pm", "7:30am–6pm", "8am–1pm", "Closed"],
    tags: ["Family-owned", "Immigrant-owned", "Licensed & insured"],
    brand: { primary: "#B23A1F", accent: "#F6C453" },
    featured: false,
    story: "Minh Tran arrived from Da Nang at 19, worked his way through a dealership service department, and opened Honest Wrench in a two-bay garage off Broadway. His wife Linh runs the front desk and texts photos of every worn part before anyone approves a repair. It's also a Massachusetts state inspection station, and their four bays now handle everything from Corollas to work vans.",
    sellingPoints: [
      { title: "Photo-approved repairs", text: "You get pictures of the problem part by text before you're asked to say yes." },
      { title: "Old parts returned", text: "Every replaced part is bagged and offered back to you at pickup." },
      { title: "State inspections", text: "Licensed Massachusetts inspection station with no appointment needed before 3pm." },
      { title: "12-month parts & labor warranty", text: "All repairs are covered for a year or 12,000 miles." }
    ],
    offerings: [
      { name: "MA state inspection", description: "Walk-ins welcome before 3pm.", price: "$35" },
      { name: "Synthetic oil change", description: "Up to 5 qts full synthetic, filter, and multi-point check.", price: "$79" },
      { name: "Front brake pads & rotors", description: "Most sedans and small SUVs, quality ceramic pads.", price: "From $420" },
      { name: "Check-engine diagnosis", description: "Scan plus hands-on testing; credited toward the repair.", price: "$115" },
      { name: "Timing belt service", description: "Belt, tensioner, and water pump on most four-cylinders.", price: "From $890" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Winter-ready check for $49",
        body: "Battery test, tire tread and pressure, wipers, coolant, and brakes — with photos of anything worn. Know what you're driving into before the snow hits.",
        offer: "$49 winter safety check",
        cta: "Book a bay",
        expires: "2026-12-31"
      }
    ],
    reviews: [
      {
        author: "Diana R.",
        rating: 5,
        date: "2026-03-14",
        title: "Saved me $1,100 vs. the dealer",
        text: "Dealer quoted $1,650 for front brakes and rotors plus a 'brake fluid flush' on my RAV4. Linh texted me photos showing the rear brakes were still at 60%, and Minh did fronts only for $540. He handed me the old rotors in a bag.",
        context: "Front brakes & rotors",
        helpful: 29,
        ownerReply: null
      },
      {
        author: "Kwame A.",
        rating: 5,
        date: "2025-12-02",
        title: "Check-engine light finally fixed",
        text: "Two other shops replaced sensors without fixing my intermittent check-engine light. Minh spent the $115 diagnosis time actually smoke-testing and found a cracked intake hose. Total repair $260 and the light hasn't come back in eight months.",
        context: "Check-engine diagnosis + intake repair",
        helpful: 18,
        ownerReply: "Smoke tests find what scanners miss. Thanks for trusting us after a rough run, Kwame."
      },
      {
        author: "Sarah E.",
        rating: 4,
        date: "2026-08-08",
        title: "Fair price, car took an extra day",
        text: "Timing belt and water pump on my Civic. Quoted $890, paid $890. They said it'd be ready Tuesday, but a part came in wrong and it was Wednesday afternoon. Linh called both days to update me and they gave me a ride to work.",
        context: "Timing belt service",
        helpful: 7,
        ownerReply: null
      },
      {
        author: "Victor M.",
        rating: 3,
        date: "2025-01-27",
        title: "Good work, long wait for inspection",
        text: "Came in for a walk-in inspection at 1pm on a Saturday and waited almost 90 minutes. The inspection itself was fine and they didn't try to upsell me. Just go on a weekday morning.",
        context: "MA state inspection",
        helpful: 10,
        ownerReply: "Saturdays are packed, Victor — sorry for the wait. We now post a live wait estimate on the door and text you when we're ready if you want to grab a coffee on Broadway."
      },
      {
        author: "Beth A.",
        rating: 5,
        date: "2024-06-11",
        title: "They told me NOT to fix it",
        text: "Brought in my 2009 Camry for a noisy suspension. Minh said it was a sway bar link, $180 to fix, but honestly fine to wait a few months. Who says that? I've brought all three family cars here since.",
        context: "Suspension noise diagnosis",
        helpful: 22,
        ownerReply: null
      }
    ]
  },

  // ─────────────────────────────── AUTO: DETAILING ───────────────────────────────
  {
    id: "mystic-gloss-detailing",
    name: "Mystic Gloss Detailing",
    tagline: "Showroom shine, delivered to your driveway.",
    category: "auto",
    subcategory: "auto-detailing",
    city: "somerville",
    neighborhood: "assembly-sq",
    address: "31 Foley St, Somerville, MA 02145",
    phone: "(857) 555-0125",
    email: "book@mysticgloss.example",
    website: "mysticgloss.example",
    founded: 2019,
    owner: "Jaylen Brooks",
    ownerTitle: "Founder & lead detailer",
    priceLevel: 2,
    serviceArea: "Somerville, Medford, Cambridge, Charlestown & Everett (mobile)",
    hours: ["8am–6pm", "8am–6pm", "8am–6pm", "8am–6pm", "8am–6pm", "8am–6pm", "By appointment"],
    tags: ["BIPOC-owned", "Eco-friendly", "Licensed & insured"],
    brand: { primary: "#0F4C5C", accent: "#5CE1E6" },
    featured: false,
    story: "Jaylen Brooks started detailing cars in his mom's driveway in Medford to pay for community college, and built Mystic Gloss into a fully mobile operation with two vans that carry their own water and power. They use waterless and rinseless washes that keep soap out of the Mystic River, plus a small shop bay near Assembly Row for paint correction and ceramic coatings.",
    sellingPoints: [
      { title: "Fully self-contained vans", text: "Their own water and power, so they can work in a parking garage or on the street." },
      { title: "River-safe washing", text: "Rinseless methods use under 3 gallons per car and no runoff into storm drains." },
      { title: "Before/after photos", text: "Every job comes with a photo set so you see exactly what changed." }
    ],
    offerings: [
      { name: "Mobile maintenance wash", description: "Rinseless exterior wash, wheels, glass, and quick interior vacuum.", price: "$75" },
      { name: "Full interior detail", description: "Shampoo, steam, leather conditioning, and odor treatment.", price: "From $220" },
      { name: "Complete detail", description: "Interior plus clay bar, polish, and sealant exterior.", price: "From $340" },
      { name: "One-step paint correction", description: "Removes light swirls and haze in the shop bay.", price: "From $550" },
      { name: "Ceramic coating (3-year)", description: "Correction plus pro-grade coating with care kit.", price: "From $1,100" },
      { name: "Pet hair removal add-on", description: "Specialized tools for embedded fur in carpet and seats.", price: "$45" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Seal your paint before road salt season",
        body: "Mass Pike salt eats clear coat. Get a complete detail with a six-month sealant and Jaylen's team will come to you — driveway, garage, or curb.",
        offer: "$40 off complete details",
        cta: "Book a mobile detail",
        expires: "2026-11-30"
      },
      {
        kind: "new",
        headline: "New: monthly maintenance memberships",
        body: "A rinseless wash at your door every month, same detailer, without lifting a finger. Your car stays clean all winter.",
        offer: "First month $49",
        cta: "Join the membership",
        expires: "2027-01-31"
      }
    ],
    reviews: [
      {
        author: "Nicole T.",
        rating: 5,
        date: "2026-06-16",
        title: "Three kids' worth of cheerios, gone",
        text: "Full interior on our minivan, which had years of kid mess and a juice stain on the third row. Quoted $260 with the pet hair add-on, paid $260. Jaylen worked in our driveway for about four hours and sent before/after photos. It smells like nothing, in a good way.",
        context: "Full interior detail",
        helpful: 20,
        ownerReply: null
      },
      {
        author: "Omar S.",
        rating: 5,
        date: "2025-09-03",
        title: "Ceramic coating, worth it",
        text: "Paint correction and 3-year ceramic on a black Mazda3 with bad swirls from automatic car washes. $1,250 total, car was at their Foley St bay for two days. Water beads like crazy and swirls are 90% gone under a flashlight.",
        context: "Paint correction + ceramic coating",
        helpful: 15,
        ownerReply: "Black paint shows everything — that one was a fun transformation. Thanks Omar!"
      },
      {
        author: "Lauren P.",
        rating: 3,
        date: "2026-01-12",
        title: "Good result, rescheduled twice",
        text: "The detail itself was great. But my appointment got moved twice because of cold weather (rinseless products don't work well below freezing apparently). Wish they'd told me that when I booked in January.",
        context: "Complete detail",
        helpful: 11,
        ownerReply: "That's on us, Lauren. We now book December–February mobile jobs only for heated garages or in our shop bay, and we say so at booking."
      },
      {
        author: "Ty W.",
        rating: 4,
        date: "2025-04-25",
        title: "Great wash in a parking garage",
        text: "Got a maintenance wash in my building's garage while I worked — no hose, no mess on the floor. $75 for a solid clean. Interior vacuum was a bit quick, but that's the basic package.",
        context: "Mobile maintenance wash",
        helpful: 6,
        ownerReply: null
      }
    ]
  },

  // ──────────────────────────── PERSONAL: BARBERS ────────────────────────────
  {
    id: "maverick-fade-studio",
    name: "Maverick Fade Studio",
    tagline: "Sharp fades, hot towels, and conversation in two languages.",
    category: "personal",
    subcategory: "barbers-salons",
    city: "boston",
    neighborhood: "east-boston",
    address: "142 Meridian St, East Boston, MA 02128",
    phone: "(617) 555-0126",
    email: "citas@maverickfade.example",
    website: null,
    founded: 2018,
    owner: "Carlos Restrepo",
    ownerTitle: "Owner & master barber",
    priceLevel: 2,
    serviceArea: null,
    hours: ["Closed", "10am–7pm", "10am–7pm", "10am–8pm", "9am–8pm", "8am–6pm", "10am–3pm"],
    tags: ["Immigrant-owned", "Family-owned", "Wheelchair accessible"],
    brand: { primary: "#1A1A2E", accent: "#E94560" },
    featured: false,
    story: "Carlos Restrepo cut hair in Medellín for twelve years before bringing his clippers to Meridian Street. Maverick Fade has four chairs, a wall of vintage barber photos, and a coffee machine that's always on. Walk-ins are welcome, but regulars book through text, and Carlos's son Mateo handles the kids' cuts on Saturdays.",
    sellingPoints: [
      { title: "Fade specialists", text: "Skin fades, tapers, and designs from barbers with a decade-plus each behind the chair." },
      { title: "Hot towel shaves", text: "Straight-razor shaves with pre-shave oil and a cold-towel finish." },
      { title: "Bilingual chairs", text: "Every barber speaks Spanish and English; Portuguese on Fridays." },
      { title: "Text-to-book", text: "Text your preferred barber and time, and get a confirmation within the hour." }
    ],
    offerings: [
      { name: "Classic cut", description: "Scissor or clipper cut with neck shave and style.", price: "$32" },
      { name: "Skin fade", description: "Bald-to-length fade with line-up.", price: "$38" },
      { name: "Cut & beard", description: "Any cut plus beard shaping with hot towel.", price: "$50" },
      { name: "Hot towel straight-razor shave", description: "Full traditional shave, about 40 minutes.", price: "$40" },
      { name: "Kids' cut (12 & under)", description: "Patient barbers, Saturday mornings especially.", price: "$22" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Fresh fade for the holidays",
        body: "Family photos, parties, New Year's Eve — book your cut and beard with a hot towel finish before the December rush fills every chair.",
        offer: "$5 off cut & beard Mon–Wed",
        cta: "Text to book",
        expires: "2026-12-23"
      }
    ],
    reviews: [
      {
        author: "Andrés M.",
        rating: 5,
        date: "2026-09-12",
        title: "Best skin fade in Eastie",
        text: "Been going to Carlos every three weeks for two years. $38 fade, always takes his time on the blend, never rushed even when there's a line. Coffee's always hot.",
        context: "Skin fade",
        helpful: 14,
        ownerReply: null
      },
      {
        author: "Jake H.",
        rating: 5,
        date: "2025-12-19",
        title: "Hot towel shave before my wedding",
        text: "Booked a straight-razor shave the morning of my wedding. Carlos did it in about 40 minutes, no nicks, skin felt great in every photo. $40 and he refused to let me tip extra because 'it's your wedding day.'",
        context: "Hot towel shave",
        helpful: 12,
        ownerReply: "Felicidades, Jake! Hope the day was perfect."
      },
      {
        author: "Brianna C.",
        rating: 5,
        date: "2026-04-05",
        title: "My anxious kid loves Mateo",
        text: "My 6-year-old with sensory issues has screamed through every haircut. Mateo let him hold the clippers, used scissors around his ears, and took 30 minutes for a $22 cut. First tear-free haircut ever.",
        context: "Kids' cut",
        helpful: 19,
        ownerReply: null
      },
      {
        author: "Ron K.",
        rating: 3,
        date: "2025-06-28",
        title: "Great cut, long walk-in wait",
        text: "Walked in at 11am on a Saturday and waited over an hour. Cut was very good once I was in the chair. Next time I'll text ahead like everyone else apparently does.",
        context: "Classic cut (walk-in)",
        helpful: 7,
        ownerReply: "Saturdays are busy, Ron — texting even an hour ahead gets you a slot. Thanks for waiting it out."
      },
      {
        author: "Luis P.",
        rating: 4,
        date: "2024-10-30",
        title: "Solid cut, beard slightly uneven",
        text: "Cut & beard for $50. The fade was perfect, but the beard line was a touch higher on one side. I pointed it out and they fixed it right away, no fuss.",
        context: "Cut & beard",
        helpful: 4,
        ownerReply: null
      }
    ]
  },

  // ──────────────────────────── PERSONAL: TAILORING ────────────────────────────
  {
    id: "needle-and-nap-tailoring",
    name: "Needle & Nap Tailoring",
    tagline: "Alterations so precise, it looks like it was made for you.",
    category: "personal",
    subcategory: "tailoring",
    city: "brookline",
    neighborhood: "coolidge-corner",
    address: "1318 Beacon St, Brookline, MA 02446",
    phone: "(617) 555-0127",
    email: "fittings@needleandnap.example",
    website: null,
    founded: 1996,
    owner: "Armen Petrosyan",
    ownerTitle: "Master tailor & owner",
    priceLevel: 2,
    serviceArea: null,
    hours: ["9am–6pm", "9am–6pm", "9am–6pm", "9am–7pm", "9am–6pm", "9am–4pm", "Closed"],
    tags: ["Immigrant-owned", "Family-owned", "Custom orders", "Wheelchair accessible"],
    brand: { primary: "#3B1F4A", accent: "#D4A373" },
    featured: true,
    story: "Armen Petrosyan learned tailoring in his father's shop in Yerevan and opened Needle & Nap above a Coolidge Corner shoe store thirty years ago. His daughter Nairi now handles bridal and formalwear fittings, while Armen still does every suit jacket by hand. Regulars bring three generations of hems, weddings, and graduations through the door.",
    sellingPoints: [
      { title: "Hand-finished suits", text: "Jacket shoulders, sleeves, and linings altered by hand by a 40-year tailor." },
      { title: "Bridal fittings", text: "Private fitting room with three-way mirror and a dedicated bridal schedule." },
      { title: "Clear turnaround dates", text: "You get a written pickup date at drop-off, and rush service is available." },
      { title: "Prices posted", text: "A printed price list at the counter so you know the cost before the pins go in." }
    ],
    offerings: [
      { name: "Pant hem", description: "Plain or cuffed, with original hem replication for jeans.", price: "$18" },
      { name: "Jacket sleeve shortening", description: "From the cuff, preserving working buttonholes where possible.", price: "From $45" },
      { name: "Suit take-in", description: "Jacket and trousers fitted to your measurements.", price: "From $120" },
      { name: "Bridal gown alterations", description: "Hem, bustle, and bodice fitting across three appointments.", price: "From $350" },
      { name: "Zipper replacement", description: "Jackets, pants, and skirts.", price: "From $25" },
      { name: "Rush service", description: "Next-day turnaround on most alterations.", price: "+$20" }
    ],
    ads: [
      {
        kind: "spotlight",
        headline: "Wedding season fittings now booking",
        body: "Nairi's private bridal fittings fill months ahead for spring and summer weddings. Reserve your three-fitting package now and walk down the aisle in a perfect fit.",
        offer: null,
        cta: "Book a bridal fitting",
        expires: null
      },
      {
        kind: "promo",
        headline: "Bring 3 pants, hem the 4th free",
        body: "New jeans, work slacks, or holiday trousers — Armen's hems are clean, even, and ready in four days.",
        offer: "4th hem free",
        cta: "Drop off this week",
        expires: "2026-12-31"
      }
    ],
    reviews: [
      {
        author: "Hannah L.",
        rating: 5,
        date: "2025-07-29",
        title: "Bridal alterations were flawless",
        text: "Nairi hemmed and bustled my gown and took in the bodice. Quoted $420 at the first fitting, paid $420 after three fittings over six weeks. She sewed tiny loops in for the bustle so it held all night through dancing.",
        context: "Bridal gown alterations",
        helpful: 23,
        ownerReply: "You looked beautiful, Hannah — thank you for the photos!"
      },
      {
        author: "Marcus J.",
        rating: 5,
        date: "2026-02-10",
        title: "Off-the-rack suit looks custom",
        text: "Bought a $300 suit and Armen took in the jacket waist, shortened sleeves, and tapered the trousers. $165 total, ready in a week. Multiple people asked who my tailor was at the interview.",
        context: "Suit alterations",
        helpful: 16,
        ownerReply: null
      },
      {
        author: "Ellen W.",
        rating: 4,
        date: "2026-08-30",
        title: "Great hems, cash or check preferred",
        text: "Four pairs of pants hemmed for $72, ready in four days as promised. Work is perfect. They do take cards but clearly prefer cash, which is a little awkward.",
        context: "Pant hems",
        helpful: 6,
        ownerReply: null
      },
      {
        author: "Ravi P.",
        rating: 2,
        date: "2025-03-22",
        title: "Coat wasn't ready on pickup date",
        text: "Dropped off a wool overcoat for sleeve shortening with a written pickup date. Came back on that date and it wasn't done; had to come back two more days later. The work itself is good, but I took two trips into Coolidge Corner.",
        context: "Overcoat sleeve shortening",
        helpful: 11,
        ownerReply: "Ravi, I apologize — that week we were behind with prom season. Now we text you the day before if anything will be late, and we've waived the fee on your next alteration."
      },
      {
        author: "Grace H.",
        rating: 5,
        date: "2024-05-16",
        title: "Rescued my grandmother's dress",
        text: "Had my late grandmother's 1960s dress altered for my graduation. Armen let the seams out using the original fabric allowance and replaced the zipper with a vintage-style metal one. $95, and he clearly cared about it.",
        context: "Vintage dress alteration",
        helpful: 18,
        ownerReply: null
      }
    ]
  },

  // ──────────────────────────── PERSONAL: FITNESS ────────────────────────────
  {
    id: "kettle-and-kin-strength",
    name: "Kettle & Kin Strength",
    tagline: "Small-group strength training for every body.",
    category: "personal",
    subcategory: "fitness",
    city: "cambridge",
    neighborhood: "central-sq",
    address: "565 Massachusetts Ave, Cambridge, MA 02139",
    phone: "(617) 555-0128",
    email: "hello@kettleandkin.example",
    website: null,
    founded: 2020,
    owner: "Alexis Moreau",
    ownerTitle: "Head coach & co-founder",
    priceLevel: 3,
    serviceArea: null,
    hours: ["6am–8pm", "6am–8pm", "6am–8pm", "6am–8pm", "6am–7pm", "8am–1pm", "9am–12pm"],
    tags: ["LGBTQ+-owned", "Woman-owned", "Wheelchair accessible"],
    brand: { primary: "#6B2737", accent: "#F5B841" },
    featured: false,
    story: "Alexis Moreau was a physical therapy assistant who got tired of watching patients get hurt in crowded gyms. Kettle & Kin caps classes at eight people so coaches can actually correct your form, and every new member starts with a one-on-one movement assessment. The second-floor studio has an elevator and adaptive equipment, and the vibe is welcoming to beginners, older lifters, and people coming back from injury.",
    sellingPoints: [
      { title: "Eight-person max", text: "Every class is capped so the coach sees every rep." },
      { title: "PT-informed coaching", text: "Programs designed with physical therapy principles to build strength without injury." },
      { title: "Beginner-first culture", text: "Most members had never touched a kettlebell before joining." }
    ],
    offerings: [
      { name: "Intro movement assessment", description: "One-on-one session to map mobility and set starting weights.", price: "$45" },
      { name: "Unlimited small-group", description: "All strength and kettlebell classes, any time.", price: "$219/mo" },
      { name: "8-class pack", description: "Use within two months.", price: "$160" },
      { name: "Personal training", description: "One-on-one coaching for specific goals or rehab.", price: "$95/session" },
      { name: "Strong at 60+ class", description: "Twice-weekly class focused on balance, bone density, and strength.", price: "$120/mo" }
    ],
    ads: [
      {
        kind: "new",
        headline: "New Year, new deadlift — start right",
        body: "Begin with a one-on-one movement assessment, then join an eight-person class where your coach actually watches your form. No egos, no mirrors full of influencers.",
        offer: "First 2 weeks for $49",
        cta: "Book your assessment",
        expires: "2027-01-31"
      }
    ],
    reviews: [
      {
        author: "Joan B.",
        rating: 5,
        date: "2026-05-02",
        title: "At 67, deadlifting 135 lbs",
        text: "Joined the Strong at 60+ class after a fall last year. Coach Dani adjusted every exercise for my bad shoulder. Eight months later my bone density scan improved and I can carry groceries up three flights again. $120/month is the best money I spend.",
        context: "Strong at 60+ class",
        helpful: 30,
        ownerReply: "Joan, you're an inspiration to the whole 7am crew. Keep pulling!"
      },
      {
        author: "Tyler N.",
        rating: 5,
        date: "2025-10-16",
        title: "Finally a gym that coaches",
        text: "Did the $45 assessment, then unlimited for six months. Alexis caught that my squat issue was ankle mobility, not my back. Classes really are capped at eight — I've never seen more.",
        context: "Unlimited small-group membership",
        helpful: 13,
        ownerReply: null
      },
      {
        author: "Sun-mi P.",
        rating: 3,
        date: "2026-01-20",
        title: "Great coaching, hard to get into classes",
        text: "The coaching is excellent, but in January the 6pm classes were fully booked by noon most days. Paying $219/month and only getting 2–3 classes a week felt like poor value at that time.",
        context: "Unlimited small-group membership",
        helpful: 15,
        ownerReply: "Totally fair, Sun-mi. We added a 7:15pm class and a Sunday session in February specifically because of January demand, and paused fees for members who couldn't get in."
      },
      {
        author: "Jordan F.",
        rating: 4,
        date: "2024-08-09",
        title: "Welcoming, a bit pricey",
        text: "As a trans guy who's been uncomfortable in big gyms, this place felt safe from day one. Coaches use correct names and pronouns without any fuss. It's more expensive than a big-box gym but you get real coaching.",
        context: "8-class pack",
        helpful: 12,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────────── PROS: ACCOUNTING ─────────────────────────────
  {
    id: "brightledger-tax-bookkeeping",
    name: "Brightledger Tax & Bookkeeping",
    tagline: "Tax season without the dread. Bookkeeping without the mess.",
    category: "pros",
    subcategory: "accounting-tax",
    city: "cambridge",
    neighborhood: "harvard-sq",
    address: "29 Brattle St, Cambridge, MA 02138",
    phone: "(617) 555-0129",
    email: "returns@brightledger.example",
    website: null,
    founded: 2012,
    owner: "Miriam Goldfarb",
    ownerTitle: "CPA & principal",
    priceLevel: 3,
    serviceArea: null,
    hours: ["9am–5pm", "9am–5pm", "9am–5pm", "9am–5pm", "9am–3pm", "By appointment", "Closed"],
    tags: ["Woman-owned", "Licensed & insured"],
    brand: { primary: "#1D4E5F", accent: "#9BD4C9" },
    featured: false,
    story: "Miriam Goldfarb spent a decade at a big accounting firm before opening Brightledger in a second-floor office off Brattle Street. She and two staff accountants specialize in the returns that confuse everyone: freelancers, grad students with fellowships, international scholars, and small shop owners. Fees are quoted in writing before any work begins, and every client gets a plain-English summary of their return.",
    sellingPoints: [
      { title: "Flat fees in writing", text: "You get a fixed price quote after a free 20-minute intake call." },
      { title: "Academic & immigrant returns", text: "Fellowship income, nonresident filings, and treaty benefits are a specialty." },
      { title: "Plain-English summaries", text: "A one-page letter explains what you owe or get back, and why." },
      { title: "Year-round availability", text: "Questions answered in July as quickly as in April." }
    ],
    offerings: [
      { name: "Individual return (simple)", description: "Federal and Massachusetts, W-2 income with standard deductions.", price: "From $275" },
      { name: "Freelancer / Schedule C return", description: "Self-employment income, expenses, and quarterly estimate plan.", price: "From $550" },
      { name: "Nonresident & scholar return", description: "1040-NR, treaty claims, and Form 8843.", price: "From $400" },
      { name: "Monthly small-business bookkeeping", description: "Reconciliation, P&L, and sales tax filing.", price: "From $325/mo" },
      { name: "IRS notice response", description: "Review and written response to IRS or DOR letters.", price: "$175/hr" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Beat the April rush — book now",
        body: "Freelancers and grad students: get on Miriam's calendar before January fills up. Flat fee in writing, plain-English summary, no last-minute panic.",
        offer: "$50 off if booked by Jan 15",
        cta: "Schedule a free intake call",
        expires: "2027-01-15"
      }
    ],
    reviews: [
      {
        author: "Arjun S.",
        rating: 5,
        date: "2026-04-03",
        title: "Fellowship taxes finally made sense",
        text: "Postdoc on a fellowship with no withholding — I'd been guessing for two years. Miriam did my return for $425 as quoted, amended the prior year to recover $1,300 I overpaid, and set up quarterly estimates. Her summary letter was clearer than anything I'd read online.",
        context: "Individual return + amendment",
        helpful: 24,
        ownerReply: null
      },
      {
        author: "Colleen R.",
        rating: 5,
        date: "2025-11-11",
        title: "Bookkeeping saved my shop",
        text: "I run a small gift shop and my books were a shoebox. Brightledger caught up nine months of records for a one-time $900, then $325/month after. They found $2,100 in deductions I'd been missing and filed my sales tax on time for the first time.",
        context: "Monthly bookkeeping",
        helpful: 17,
        ownerReply: "Colleen, going from shoebox to on-time filings in one season was a big win. Proud of you!"
      },
      {
        author: "Felipe D.",
        rating: 4,
        date: "2026-03-18",
        title: "Thorough, took a while in March",
        text: "Freelance designer return. Quoted $600, paid $600. Responses took 3–4 days in March, which was a bit nerve-wracking, but everything was filed with a week to spare and the summary explained my quarterly payments clearly.",
        context: "Schedule C return",
        helpful: 8,
        ownerReply: null
      },
      {
        author: "Ingrid H.",
        rating: 3,
        date: "2025-04-29",
        title: "Good return, final fee higher than quoted",
        text: "Quoted $400 for my nonresident return, but the bill was $475 because I had a second state. Miriam explained it and it's reasonable, but I wish they'd asked about multiple states at the intake call instead of after.",
        context: "Nonresident return",
        helpful: 10,
        ownerReply: "Ingrid, you're right — we added a multi-state question to our intake checklist right after your return. Thank you for the feedback."
      },
      {
        author: "Peter K.",
        rating: 5,
        date: "2024-09-06",
        title: "Handled an IRS letter fast",
        text: "Got a scary CP2000 notice claiming I owed $3,800. Miriam spent about two hours ($350), found the brokerage double-reported a sale, and the IRS closed it with $0 owed.",
        context: "IRS notice response",
        helpful: 21,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────────── PROS: PRINT & DESIGN ─────────────────────────────
  {
    id: "inkwell-union-print-shop",
    name: "Inkwell Union Print Shop",
    tagline: "Your ideas, printed beautifully by neighbors.",
    category: "pros",
    subcategory: "print-design",
    city: "somerville",
    neighborhood: "union-sq",
    address: "76 Bow St, Somerville, MA 02143",
    phone: "(617) 555-0130",
    email: "orders@inkwellunion.example",
    website: null,
    founded: 2013,
    owner: "Gabriel Okonkwo-Reyes",
    ownerTitle: "Designer & print shop owner",
    priceLevel: 2,
    serviceArea: null,
    hours: ["9am–6pm", "9am–6pm", "9am–6pm", "9am–6pm", "9am–6pm", "10am–3pm", "Closed"],
    tags: ["BIPOC-owned", "LGBTQ+-owned", "Custom orders", "Eco-friendly"],
    brand: { primary: "#283618", accent: "#F28F3B" },
    featured: false,
    story: "Gabriel Okonkwo-Reyes designed album covers for Boston bands before opening Inkwell in a converted Bow Street garage. The shop runs a vintage letterpress next to modern digital printers, and does everything from wedding invitations to restaurant menus to neighborhood event posters. All paper is recycled or FSC-certified, and in-house design help is included on most orders.",
    sellingPoints: [
      { title: "Design help included", text: "A free design pass on business cards, menus, and flyers before printing." },
      { title: "Letterpress & digital", text: "Choose tactile letterpress for special pieces or fast digital for everyday prints." },
      { title: "Recycled paper only", text: "Every sheet is recycled or FSC-certified, with soy-based inks." },
      { title: "Proof before print", text: "You approve a physical or PDF proof before anything goes on press." }
    ],
    offerings: [
      { name: "Business cards (250)", description: "Digital print on 16pt recycled stock, design help included.", price: "$65" },
      { name: "Letterpress business cards (250)", description: "Two-color letterpress on thick cotton paper.", price: "$295" },
      { name: "Wedding invitation suite", description: "Invite, RSVP card, and envelopes for 100 guests.", price: "From $650" },
      { name: "Event posters (25)", description: "11x17 full-color on recycled stock.", price: "$85" },
      { name: "Restaurant menus", description: "Design and print, with easy reprint updates.", price: "From $150" },
      { name: "Custom logo design", description: "Three concepts, two rounds of revisions, all file formats.", price: "From $600" }
    ],
    ads: [
      {
        kind: "spotlight",
        headline: "Letterpress cards people actually keep",
        body: "Hand-fed on a 1950s press, deep impression on thick cotton paper. Nothing says you mean business like a card people run their fingers across.",
        offer: null,
        cta: "Visit the Bow St shop",
        expires: null
      },
      {
        kind: "seasonal",
        headline: "Holiday cards, designed and printed local",
        body: "Skip the big-box templates. Inkwell will help design and print your holiday cards on recycled stock, ready in a week.",
        offer: "15% off holiday cards",
        cta: "Start your design",
        expires: "2026-12-10"
      }
    ],
    reviews: [
      {
        author: "Emma S.",
        rating: 5,
        date: "2025-08-12",
        title: "Wedding invites were stunning",
        text: "Letterpress invitation suite for 120 guests. Quote was $780, final $780. Gabriel did two design rounds and mailed us a physical proof. Delivered nine days before our deadline. Guests are still asking where we got them.",
        context: "Wedding invitation suite",
        helpful: 18,
        ownerReply: "Your botanical border design is still one of our favorite runs. Congrats again, Emma!"
      },
      {
        author: "Dimitri P.",
        rating: 5,
        date: "2026-03-05",
        title: "Menus redesigned and printed in 3 days",
        text: "Needed new menus fast for our restaurant's spring launch. Gabriel tidied up our messy Word doc into something gorgeous, printed 60 on heavy stock for $210, and had them ready in three days.",
        context: "Restaurant menus",
        helpful: 11,
        ownerReply: null
      },
      {
        author: "Kim A.",
        rating: 3,
        date: "2026-07-01",
        title: "Nice cards, color was off",
        text: "Business cards came out a muddier green than the PDF proof. Gabriel explained that recycled stock absorbs ink differently and reprinted with an adjusted color for free, but I lost a few days before a conference.",
        context: "Business cards",
        helpful: 8,
        ownerReply: "Thanks for your patience, Kim. We now print a physical color swatch on the actual stock for any brand color before running the full order."
      },
      {
        author: "Ola T.",
        rating: 4,
        date: "2024-11-08",
        title: "Great logo, a bit slow",
        text: "Logo design for my bakery. The three concepts were thoughtful and the final logo is great. $600 as quoted. It took about four weeks instead of the two I was told, partly because of my slow feedback.",
        context: "Custom logo design",
        helpful: 6,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────────── PROS: PHOTOGRAPHY ─────────────────────────────
  {
    id: "brownstone-light-photography",
    name: "Brownstone Light Photography",
    tagline: "Real moments, natural light, no stiff poses.",
    category: "pros",
    subcategory: "photography",
    city: "boston",
    neighborhood: "south-end",
    address: "450 Harrison Ave, Boston, MA 02118",
    phone: "(857) 555-0131",
    email: "studio@brownstonelight.example",
    website: "brownstonelight.example",
    founded: 2015,
    owner: "Simone Achebe",
    ownerTitle: "Lead photographer & owner",
    priceLevel: 3,
    serviceArea: "Greater Boston (on-location shoots)",
    hours: ["By appointment", "10am–6pm", "10am–6pm", "10am–6pm", "10am–6pm", "By appointment", "By appointment"],
    tags: ["Woman-owned", "BIPOC-owned", "Wheelchair accessible"],
    brand: { primary: "#4B2E2A", accent: "#E8C39E" },
    featured: false,
    story: "Simone Achebe photographed news events for a city paper before opening a light-filled studio in a South End warehouse. She shoots families, small-business headshots, and intimate weddings with a documentary eye — more laughing than posing. Every client gets a pre-shoot planning call and a private online gallery within two weeks.",
    sellingPoints: [
      { title: "Two-week gallery delivery", text: "Edited, high-res images in a private gallery within 14 days, guaranteed." },
      { title: "Documentary style", text: "Natural, candid images shot by a former photojournalist." },
      { title: "Headshot mini-days", text: "Group headshot sessions for small businesses with consistent lighting." },
      { title: "All skin tones, lit right", text: "Lighting and editing tuned to flatter every complexion, not just one." }
    ],
    offerings: [
      { name: "Professional headshot", description: "30-minute studio session, 3 retouched images.", price: "$225" },
      { name: "Family session", description: "90 minutes on location, 50+ edited images.", price: "$550" },
      { name: "Team headshot day", description: "Up to 10 people on-site with matching backgrounds.", price: "From $1,400" },
      { name: "Elopement & micro-wedding", description: "Up to 4 hours of coverage with full gallery.", price: "From $2,200" },
      { name: "Small-business brand shoot", description: "Product and behind-the-scenes images for web and social.", price: "From $850" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Fall family photos — last golden weekends",
        body: "Southwest Corridor leaves, golden-hour light, and a photographer who makes kids laugh instead of pose. A few October and November dates remain.",
        offer: "Free 8x10 print with session",
        cta: "Grab a date",
        expires: "2026-11-22"
      },
      {
        kind: "promo",
        headline: "Headshots that look like you",
        body: "Refresh your LinkedIn or website with a 30-minute studio session. Three polished, natural-looking retouched images delivered within a week.",
        offer: "$25 off headshots",
        cta: "Book a headshot",
        expires: "2027-01-31"
      }
    ],
    reviews: [
      {
        author: "Tanya W.",
        rating: 5,
        date: "2025-10-27",
        title: "Our toddler actually smiled",
        text: "Family session in the Southwest Corridor park. Simone got down on the ground and played peekaboo with our 2-year-old for 20 minutes before shooting anything. $550, 64 edited images delivered in 11 days. Best family photos we've ever had.",
        context: "Family session",
        helpful: 20,
        ownerReply: "Your little guy was a natural once the bubbles came out. Thanks, Tanya!"
      },
      {
        author: "Rohan D.",
        rating: 5,
        date: "2026-02-24",
        title: "Team headshots, consistent and quick",
        text: "Brought Simone to our 9-person office for a headshot day. $1,400, she set up in a conference room and got everyone done in three hours. All photos match perfectly for our website, delivered in eight days.",
        context: "Team headshot day",
        helpful: 9,
        ownerReply: null
      },
      {
        author: "Lisa M.",
        rating: 4,
        date: "2026-06-14",
        title: "Beautiful elopement photos",
        text: "Elopement coverage at the Arnold Arboretum. The photos are stunning and very natural. Final bill was $2,450 vs $2,200 quoted because we ran 45 minutes over, which she flagged in the moment. Gallery came in exactly two weeks.",
        context: "Elopement photography",
        helpful: 12,
        ownerReply: null
      },
      {
        author: "Kevin O.",
        rating: 3,
        date: "2024-12-11",
        title: "Good headshot, retouching was heavy",
        text: "Headshot session was easy and fun. But the first round of retouching smoothed my skin more than I liked — didn't quite look like me. Simone redid them with a lighter touch at no charge within two days.",
        context: "Professional headshot",
        helpful: 7,
        ownerReply: "Thanks for speaking up, Kevin. We now ask every client about retouching preferences at booking so the first round lands right."
      },
      {
        author: "Aisha B.",
        rating: 5,
        date: "2025-04-08",
        title: "Perfect brand photos for my bakery",
        text: "Brand shoot for my small bakery's new website. Simone captured product shots and candid photos of us baking at 6am. $900 with two locations. Our online orders went up noticeably after we updated the site.",
        context: "Small-business brand shoot",
        helpful: 14,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────────── PETS: GROOMING ─────────────────────────────
  {
    id: "wag-and-whisker-grooming-parlor",
    name: "Wag & Whisker Grooming Parlor",
    tagline: "Calm grooming for nervous pups and fussy cats.",
    category: "pets",
    subcategory: "pet-grooming",
    city: "brookline",
    neighborhood: "brookline-village",
    address: "8 Harvard St, Brookline, MA 02445",
    phone: "(617) 555-0132",
    email: "appointments@wagandwhisker.example",
    website: null,
    founded: 2010,
    owner: "Colleen Fitzgerald",
    ownerTitle: "Owner & certified master groomer",
    priceLevel: 2,
    serviceArea: null,
    hours: ["Closed", "8am–5pm", "8am–5pm", "8am–5pm", "8am–5pm", "8am–4pm", "Closed"],
    tags: ["Woman-owned", "Family-owned", "Eco-friendly"],
    brand: { primary: "#5C3D8C", accent: "#FFB4A2" },
    featured: false,
    story: "Colleen Fitzgerald worked at a busy veterinary hospital for a decade and opened Wag & Whisker for the pets who panic at big chain groomers. The parlor books one dog at a time per groomer, uses quiet low-heat dryers, and has a separate cat room on a different floor. Many clients are senior dogs, rescues with anxiety, and cats who have bitten other groomers.",
    sellingPoints: [
      { title: "One pet per groomer", text: "No crate time and no waiting room chaos: your pet is the only one on the table." },
      { title: "Separate cat room", text: "A quiet upstairs room just for cats, away from barking." },
      { title: "Fear-free certified", text: "Groomers trained in low-stress handling for anxious and senior pets." },
      { title: "Gentle shampoos", text: "Plant-based, fragrance-free products, with medicated options on request." }
    ],
    offerings: [
      { name: "Small dog full groom", description: "Bath, haircut, nails, ears, and gland expression (under 25 lbs).", price: "From $85" },
      { name: "Large dog full groom", description: "Bath, haircut, nails, and ears for dogs over 50 lbs.", price: "From $135" },
      { name: "Cat groom & lion cut", description: "Shave-down or comb-out in the separate cat room.", price: "From $110" },
      { name: "Bath & tidy", description: "Bath, blow-dry, nails, and face and paw trim.", price: "From $60" },
      { name: "Nail trim (walk-in)", description: "Quick nail trim, Tuesdays through Thursdays.", price: "$20" },
      { name: "De-shedding treatment", description: "Undercoat removal for double-coated breeds.", price: "+$35" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Holiday grooming slots going fast",
        body: "Make sure your pup looks festive for family photos. Book now for December and enjoy a fear-free groom with no crate time.",
        offer: "Free bandana & paw balm",
        cta: "Reserve a holiday slot",
        expires: "2026-12-20"
      }
    ],
    reviews: [
      {
        author: "Nora K.",
        rating: 5,
        date: "2026-07-18",
        title: "Our rescue finally tolerates grooming",
        text: "Our anxious rescue doodle was kicked out of two chain groomers. Colleen did a 15-minute 'meet and treat' visit for free, then a full groom a week later for $125. No crate, no sedation, and he came out wagging. Picked up exactly at the time she said.",
        context: "Large dog full groom",
        helpful: 26,
        ownerReply: "Murphy is a sweetheart once he knows you. See you in six weeks!"
      },
      {
        author: "David G.",
        rating: 5,
        date: "2025-12-04",
        title: "Lion cut on my 'unhandleable' cat",
        text: "My long-haired cat is famous for biting vets. Colleen did a lion cut in the quiet cat room for $120 with no sedation and not a single scratch on either of them. She sent me photos during the groom.",
        context: "Cat lion cut",
        helpful: 17,
        ownerReply: null
      },
      {
        author: "Marie T.",
        rating: 4,
        date: "2026-03-11",
        title: "Great groom, booked out far",
        text: "Senior shih tzu groom was gentle and he looks great. $90 as quoted. The only hard part is booking: next available was three weeks out. They have a waitlist that called me with an earlier cancellation.",
        context: "Small dog full groom",
        helpful: 8,
        ownerReply: null
      },
      {
        author: "Jacob R.",
        rating: 2,
        date: "2025-02-26",
        title: "Haircut shorter than asked",
        text: "Asked for a 'teddy bear' cut on my goldendoodle and he came out shaved much shorter than I wanted, around half an inch. Colleen said there was matting close to the skin that couldn't be brushed out, which may be true, but I wish she'd called me before shaving.",
        context: "Large dog full groom",
        helpful: 13,
        ownerReply: "Jacob, you're right that we should have called first. Our policy now is to call before any shave-down for matting, and I'd like to do his next groom for free."
      },
      {
        author: "Sophie L.",
        rating: 5,
        date: "2024-04-22",
        title: "Quick walk-in nail trim",
        text: "Walked in on a Wednesday for a $20 nail trim on my beagle, who hates his paws touched. In and out in 10 minutes with treats along the way.",
        context: "Walk-in nail trim",
        helpful: 5,
        ownerReply: null
      }
    ]
  }

);
