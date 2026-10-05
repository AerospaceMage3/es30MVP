// Makers & Manufacturing — fictional Greater Boston businesses.
window.LOCAL_DATA = window.LOCAL_DATA || { businesses: [] };
window.LOCAL_DATA.businesses.push(

  // ───────────────────────── Woodworking & Furniture ─────────────────────────
  {
    id: "ledgerline-table-works",
    name: "Ledgerline Table Works",
    tagline: "Tables built for forty years of Thanksgivings.",
    category: "makers",
    subcategory: "woodworking-furniture",
    city: "everett",
    neighborhood: "glendale",
    address: "58 Spring St, Everett, MA 02149",
    phone: "(617) 555-0133",
    email: "studio@ledgerlinetables.example",
    website: null,
    founded: 2014,
    owner: "Tomasz Wieczorek",
    ownerTitle: "Founder & furniture maker",
    priceLevel: 4,
    serviceArea: null,
    hours: ["9am–5pm", "9am–5pm", "9am–5pm", "9am–5pm", "9am–5pm", "10am–2pm", "Closed"],
    tags: ["Custom orders", "Immigrant-owned", "Eco-friendly", "Delivery"],
    brand: { primary: "#4A2E1F", accent: "#D9A066" },
    featured: true,
    story: "Tomasz learned joinery in his uncle's shop outside Kraków and spent a decade restoring Back Bay staircases before opening Ledgerline in a former bottling garage on Spring Street. Every table starts as rough-sawn lumber from a sawyer in central Massachusetts, and you're invited to come pick your own boards off the rack. He draws each design by hand at the kitchen table with the family who'll use it.",
    sellingPoints: [
      { title: "Pick your own boards", text: "Walk the lumber rack with Tomasz and choose the exact slabs your top will come from." },
      { title: "Local, traceable wood", text: "White oak, cherry, and walnut sourced from a sawmill in Barre, MA, all within 70 miles." },
      { title: "Joinery, not hardware", text: "Drawbored mortise-and-tenon bases that can be knocked down and moved without a single screw." },
      { title: "Lifetime refinishing", text: "Bring it back any year for a free sand-and-oil refresh of the top." }
    ],
    offerings: [
      { name: "Trestle dining table", description: "Seats 6–8, white oak or cherry, oil-wax finish.", price: "From $3,800" },
      { name: "Live-edge walnut slab table", description: "Single or book-matched slabs on a steel or timber base.", price: "From $5,200" },
      { name: "Matching bench", description: "Through-tenoned bench sized to your table.", price: "From $950" },
      { name: "Coffee table", description: "Low, sturdy, built from your table's offcuts if you like.", price: "From $1,400" },
      { name: "Design consultation", description: "An hour at the shop with sketches and board selection.", price: "Free" },
      { name: "Refinishing (any maker)", description: "Strip, repair, and re-oil a solid-wood table top.", price: "From $450" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Order by Oct 31, eat on it Thanksgiving",
        body: "We have four build slots left before the holidays. Pick your boards this month and we'll deliver and level your new table before the turkey's out of the oven.",
        offer: "Free delivery inside I-95",
        cta: "Book a board-picking visit",
        expires: "2026-10-31"
      },
      {
        kind: "spotlight",
        headline: "One table. Four generations.",
        body: "Solid New England hardwood, hand-cut joinery, and a lifetime refinishing promise. Come smell the shop.",
        offer: null,
        cta: "Visit the Glendale shop",
        expires: null
      }
    ],
    reviews: [
      {
        author: "Rebecca H.",
        rating: 5,
        date: "2026-01-12",
        title: "Our forever table",
        text: "We picked two cherry boards with Tomasz on a Saturday in September and had the trestle table in our Medford dining room by mid-November. He even laid out the top so a knot sits right where my daughter always sits, because she asked. It's gorgeous and rock solid with 10 people leaning on it.",
        context: "Cherry trestle dining table",
        helpful: 31,
        ownerReply: "Tell Ellie that knot is officially hers. Thank you for trusting us with your family table!"
      },
      {
        author: "Marcus T.",
        rating: 5,
        date: "2025-06-03",
        title: "Worth every dollar",
        text: "Not cheap, and he's upfront about that. But the walnut slab table he built us is the nicest thing we own. Delivery crew carried it up three flights in Somerville without a scratch on the walls.",
        context: "Walnut slab table",
        helpful: 18,
        ownerReply: null
      },
      {
        author: "Priya N.",
        rating: 4,
        date: "2025-11-20",
        title: "Beautiful, but plan ahead",
        text: "The bench came out perfect and matches our table exactly. Lead time was about 11 weeks, which is longer than the 8 I was quoted, so build in a cushion if you have a deadline. Tomasz kept us updated with photos the whole way.",
        context: "Custom bench",
        helpful: 9,
        ownerReply: "Fair point, Priya. That fall the kiln was backed up and I should have flagged it sooner. Enjoy the bench."
      },
      {
        author: "Dave O.",
        rating: 5,
        date: "2024-09-08",
        title: "Saved Grandma's table",
        text: "Brought in a water-ringed oak table from the '50s that another shop said wasn't worth fixing. Came back looking better than in the old photos. $520 total.",
        context: "Table refinishing",
        helpful: 14,
        ownerReply: null
      },
      {
        author: "Lena F.",
        rating: 5,
        date: "2026-07-15",
        title: "Coffee table from our offcuts",
        text: "Loved that he offered to make a coffee table from the leftover oak from our dining table. Everything in the room matches now and nothing went to waste.",
        context: "Coffee table",
        helpful: 6,
        ownerReply: null
      }
    ]
  },

  {
    id: "halyard-millwork-casework",
    name: "Halyard Millwork & Casework",
    tagline: "Counters, bars, and built-ins for the places Boston eats and works.",
    category: "makers",
    subcategory: "woodworking-furniture",
    city: "boston",
    neighborhood: "dorchester",
    address: "1240 Massachusetts Ave, Dorchester, MA 02125",
    phone: "(617) 555-0134",
    email: "bids@halyardmillwork.example",
    website: null,
    founded: 1998,
    owner: "Denise Okafor",
    ownerTitle: "President & estimator",
    priceLevel: 3,
    serviceArea: "Greater Boston & the North and South Shores",
    hours: ["6:30am–3:30pm", "6:30am–3:30pm", "6:30am–3:30pm", "6:30am–3:30pm", "6:30am–2pm", "Closed", "Closed"],
    tags: ["Wholesale available", "Custom orders", "Woman-owned", "Licensed & insured"],
    brand: { primary: "#1F3A4D", accent: "#E3B23C" },
    featured: false,
    story: "Halyard started as a two-person cabinet shop under the Southeast Expressway and now runs a 14,000-square-foot plant off Mass Ave with a CNC router, edgebander, and a finishing room. Denise took over from founder Gil Mattos in 2017 and steered the shop toward restaurant bars, lab casework, and retail fixtures for GCs who need it right the first time. Their shop drawings are famous among local architects for catching problems before they reach the site.",
    sellingPoints: [
      { title: "Shop drawings in 5 days", text: "Detailed submittals from your architectural set, usually within one business week." },
      { title: "In-house finishing", text: "Catalyzed lacquer and conversion varnish sprayed in our own booth, so color matches stay tight." },
      { title: "Install crews on staff", text: "Our own W-2 installers, not subs, set every piece we build." },
      { title: "Repeat runs welcome", text: "Multi-location brands reorder identical fixtures from saved CNC files." }
    ],
    offerings: [
      { name: "Restaurant & bar millwork", description: "Back bars, host stands, banquettes, and service stations.", price: "Free quote" },
      { name: "Laboratory casework", description: "Phenolic and maple casework for biotech fit-outs.", price: "Free quote" },
      { name: "Retail fixture runs", description: "Display tables and wall systems built to a repeatable spec.", price: "From $2,500 per run" },
      { name: "CNC panel cutting", description: "Cut-to-file sheet goods for other shops and contractors.", price: "$145/hr" },
      { name: "Residential built-ins", description: "Libraries, mudrooms, and window seats for homeowners.", price: "From $6,000" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Opening a restaurant in 2027?",
        body: "Lock in Q1 production now and we'll turn your shop drawings in five business days. Bars, banquettes, host stands — built and installed by one team.",
        offer: "Free shop drawings with signed PO",
        cta: "Send us your plans",
        expires: "2026-12-31"
      }
    ],
    reviews: [
      {
        author: "Kevin B.",
        rating: 5,
        date: "2026-03-19",
        title: "Bar came in on schedule",
        text: "We're a GC and used Halyard for a 32-foot walnut back bar in the Seaport. Their shop drawings flagged a plumbing conflict our architect missed, which saved us a week of rework. Install crew was clean and done in two days.",
        context: "Restaurant back bar",
        helpful: 22,
        ownerReply: "Thanks, Kevin. Ray and the crew love a good Seaport install. Looking forward to the next one."
      },
      {
        author: "Alicia M.",
        rating: 5,
        date: "2025-08-27",
        title: "Lab casework done right",
        text: "As a facilities manager at a Kendall biotech, I've worked with bigger national vendors. Halyard matched their pricing and beat their lead time by six weeks. Denise answered her phone every single time.",
        context: "Lab casework fit-out",
        helpful: 15,
        ownerReply: null
      },
      {
        author: "Joe R.",
        rating: 3,
        date: "2025-02-10",
        title: "Great work, slow change orders",
        text: "Quality of the retail fixtures was excellent. But when we needed to change a shelf depth mid-run, the revised quote took over a week. Final result was good; the process was a little bumpy.",
        context: "Retail display fixtures",
        helpful: 8,
        ownerReply: "Joe, you're right, our change-order turnaround was too slow then. We've since added a second estimator so revisions now go out within 48 hours."
      },
      {
        author: "Sam W.",
        rating: 4,
        date: "2024-11-04",
        title: "Reliable CNC partner",
        text: "I run a small cabinet shop in Quincy and send Halyard my overflow panel cutting. Files in Monday, parts on my truck Wednesday. Labels are clear and the edgebanding is clean.",
        context: "CNC panel cutting",
        helpful: 5,
        ownerReply: null
      },
      {
        author: "Hannah L.",
        rating: 5,
        date: "2026-06-30",
        title: "Library wall of our dreams",
        text: "They mostly do commercial work, but they took on our painted built-in library in Milton. The paint finish looks factory-perfect. Expensive, but nothing like the other quotes we got.",
        context: "Residential built-ins",
        helpful: 11,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────── Metal Fabrication ─────────────────────────
  {
    id: "brightseam-sheet-metal",
    name: "Brightseam Sheet Metal",
    tagline: "Enclosures and brackets for hardware startups, from one to 10,000.",
    category: "makers",
    subcategory: "metal-fabrication",
    city: "everett",
    neighborhood: "everett-sq",
    address: "214 Second St, Everett, MA 02149",
    phone: "(617) 555-0135",
    email: "quotes@brightseam.example",
    website: null,
    founded: 2009,
    owner: "Luis Carvalho",
    ownerTitle: "Owner & manufacturing engineer",
    priceLevel: 2,
    serviceArea: null,
    hours: ["7am–5pm", "7am–5pm", "7am–5pm", "7am–5pm", "7am–4pm", "Closed", "Closed"],
    tags: ["Wholesale available", "Custom orders", "Immigrant-owned"],
    brand: { primary: "#2B3A55", accent: "#F2A541" },
    featured: false,
    story: "Luis came to Everett from São Paulo with a mechanical engineering degree and a decade of HVAC duct work behind him, then opened Brightseam with one used press brake. Today the shop runs a fiber laser, two CNC brakes, and PEM insertion, and about half the work comes from robotics and climate-tech startups in Cambridge. He still reviews every first article personally and will hop on a call to suggest a cheaper bend.",
    sellingPoints: [
      { title: "Design-for-manufacturing calls", text: "Every new part number gets a free 20-minute DFM review that typically trims 10–30% off cost." },
      { title: "Prototype in 5 days", text: "Laser-cut, formed, and hardware-inserted parts shipped within a week of approved files." },
      { title: "Powder coat in house", text: "Our own batch oven means no waiting on an outside finisher." },
      { title: "Scales with you", text: "Same shop for your first five units and your first production order." }
    ],
    offerings: [
      { name: "Prototype enclosures", description: "Aluminum or steel, 1–25 pieces, from your STEP files.", price: "From $180 per run" },
      { name: "Production sheet metal", description: "Laser, brake, PEM, and powder coat for runs of 100+.", price: "Free quote" },
      { name: "Rack-mount chassis", description: "1U–4U chassis with vented covers and custom cutouts.", price: "From $240" },
      { name: "Brackets & mounting plates", description: "Simple flat or formed parts, fast turn.", price: "From $12 each" },
      { name: "Powder coating", description: "Batch coating in stock RAL colors; custom colors on request.", price: "From $95 per run" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Your first enclosure, quoted in 24 hours",
        body: "Send us a STEP file and get a quote plus a free DFM review by tomorrow afternoon. Startups in their first year get the first run at cost.",
        offer: "First run at cost for startups",
        cta: "Upload your files",
        expires: "2027-01-31"
      },
      {
        kind: "spotlight",
        headline: "Made in Everett, shipped to Kendall",
        body: "Fiber laser, CNC brakes, PEM, and powder coat under one roof, 15 minutes from your lab.",
        offer: null,
        cta: "Book a shop tour",
        expires: null
      }
    ],
    reviews: [
      {
        author: "Anika S.",
        rating: 5,
        date: "2026-05-22",
        title: "Saved us $14 per unit",
        text: "I'm the hardware lead at a soil-sensor startup. Luis's DFM call caught that we'd specified a bend radius nobody stocks tooling for, and the redesign cut our enclosure cost by about $14 a unit. Prototypes arrived in six days.",
        context: "Prototype sensor enclosures",
        helpful: 27,
        ownerReply: "Anika, that bend radius catch was a fun one. Can't wait to see the production run."
      },
      {
        author: "Greg P.",
        rating: 4,
        date: "2025-10-14",
        title: "Solid production partner",
        text: "We've run three production lots of 400 chassis with Brightseam. Quality has been consistent and pricing is fair. Powder coat had some orange peel on lot two, which they re-coated at no charge.",
        context: "Rack-mount chassis production",
        helpful: 12,
        ownerReply: null
      },
      {
        author: "Theo M.",
        rating: 5,
        date: "2024-07-29",
        title: "Fast brackets for a robot demo",
        text: "Needed 40 stainless brackets for a trade show demo with a week's notice. Luis made it happen and even delivered to our office in Somerville himself.",
        context: "Stainless brackets",
        helpful: 9,
        ownerReply: null
      },
      {
        author: "Courtney D.",
        rating: 2,
        date: "2025-03-06",
        title: "Missed our ship date",
        text: "Parts were good when they arrived, but they came four days after the promised date and we had to push a customer pilot. Communication during the delay wasn't great.",
        context: "Production enclosures",
        helpful: 7,
        ownerReply: "Courtney, I'm sorry. Our laser went down that week and I should have called you on day one, not day three. We now send automatic delay notices and I'd like the chance to earn your next order."
      },
      {
        author: "Ibrahim K.",
        rating: 5,
        date: "2026-08-18",
        title: "Feels like an extension of our team",
        text: "As a mechanical engineer at a battery startup, I appreciate a shop that pushes back on bad designs. Brightseam does. Their first-article reports are thorough and they answer emails at 9pm.",
        context: "Battery module enclosures",
        helpful: 14,
        ownerReply: null
      }
    ]
  },

  {
    id: "ironbough-forge",
    name: "Ironbough Forge",
    tagline: "Hand-forged railings, gates, and hearth tools from an Eastie anvil.",
    category: "makers",
    subcategory: "metal-fabrication",
    city: "boston",
    neighborhood: "east-boston",
    address: "77 Border St, East Boston, MA 02128",
    phone: "(617) 555-0136",
    email: "hammer@ironboughforge.example",
    website: null,
    founded: 2011,
    owner: "Carmine Ruggiero",
    ownerTitle: "Blacksmith & owner",
    priceLevel: 3,
    serviceArea: "Boston, Cambridge, Somerville, Brookline & Newton",
    hours: ["8am–4pm", "8am–4pm", "8am–4pm", "8am–4pm", "8am–4pm", "By appointment", "Closed"],
    tags: ["Family-owned", "Veteran-owned", "Custom orders", "Licensed & insured"],
    brand: { primary: "#2E2A28", accent: "#E0703A" },
    featured: false,
    story: "Carmine learned to weld as a Navy hull technician and learned to forge from his grandfather, who made gate hinges in the North End for 40 years. Ironbough's coal forge sits in a brick boathouse on the Border Street waterfront, and you can usually hear the hammer from the street. His specialty is matching the old wrought-iron railings on Boston brownstones so new and original sections sit side by side seamlessly.",
    sellingPoints: [
      { title: "Historic matching", text: "We replicate original 1800s scrollwork for Back Bay and South End landmark commission approvals." },
      { title: "Forged, not cast", text: "Every scroll and leaf is hammered by hand from solid bar, not bolted-on castings." },
      { title: "Install included", text: "Carmine and his son Nico set every railing and gate themselves." }
    ],
    offerings: [
      { name: "Stoop & stair railings", description: "Forged steel with scroll or picket designs, installed.", price: "From $340/linear ft" },
      { name: "Garden & driveway gates", description: "Single or double gates with forged latches and hinges.", price: "From $2,800" },
      { name: "Historic railing repair", description: "Replace rusted sections to match the original.", price: "Free estimate" },
      { name: "Hearth tool set", description: "Poker, shovel, brush, and stand with twisted handles.", price: "$420" },
      { name: "Forged hooks & hardware", description: "Coat hooks, cabinet pulls, and shutter dogs.", price: "From $28" },
      { name: "Intro to blacksmithing", description: "Saturday 4-hour class; go home with a hook you forged.", price: "$165" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Fix that railing before the first freeze",
        body: "Winter salt eats rusted railings fast. Book a free site visit in October and we'll stabilize and repaint loose sections before the snow flies.",
        offer: "Free site visit + 10% off repairs",
        cta: "Schedule a visit",
        expires: "2026-11-15"
      },
      {
        kind: "new",
        headline: "New: Saturday forge classes",
        body: "Light the coal, swing the hammer, and leave with a hook you made yourself. Four students per class, all tools provided.",
        offer: "Gift certificates available",
        cta: "Grab a spot",
        expires: "2027-01-31"
      }
    ],
    reviews: [
      {
        author: "Elizabeth C.",
        rating: 5,
        date: "2025-09-12",
        title: "Landmarks commission approved on first try",
        text: "Our South End stoop railing was rotting through and the commission required an exact match. Carmine studied the neighbors' railings, forged new sections, and you genuinely cannot tell old from new. About $7,800 for both sides.",
        context: "Historic stoop railing",
        helpful: 24,
        ownerReply: "Those were some of the prettiest scrolls on the block. Thanks for letting us bring them back."
      },
      {
        author: "Paulo A.",
        rating: 5,
        date: "2026-04-02",
        title: "Driveway gate is a work of art",
        text: "Double gate for our Brookline driveway with a forged oak-leaf latch. Neighbors stop to look at it. Nico was great at the install and cleaned up everything.",
        context: "Driveway gate",
        helpful: 13,
        ownerReply: null
      },
      {
        author: "Morgan G.",
        rating: 4,
        date: "2024-12-08",
        title: "Fun class, smoky shop",
        text: "Took the intro class as a birthday gift for my partner. Carmine is a great teacher and patient with beginners. Wear clothes you don't care about — you'll smell like coal for a day.",
        context: "Blacksmithing class",
        helpful: 6,
        ownerReply: null
      },
      {
        author: "Stephen R.",
        rating: 3,
        date: "2025-05-21",
        title: "Beautiful work, hard to schedule",
        text: "The railing itself is excellent. It took almost three months to get on the calendar for the install, though, and a couple of calls went unanswered.",
        context: "Porch railing",
        helpful: 9,
        ownerReply: "Stephen, spring is our crush season and I fell behind on calls. We've added online booking so nobody's left waiting on a voicemail."
      },
      {
        author: "Grace Y.",
        rating: 5,
        date: "2026-02-14",
        title: "Hearth set I'll pass down",
        text: "Bought the twisted-handle hearth tool set for our fireplace. Heavy, balanced, and nothing like the flimsy store-bought ones. Carmine stamped our initials on the stand for free.",
        context: "Hearth tool set",
        helpful: 4,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────── Textiles & Apparel ─────────────────────────
  {
    id: "bobbin-and-bolt-contract-sewing",
    name: "Bobbin & Bolt Contract Sewing",
    tagline: "Your first 200 pieces, sewn in Quincy by people who care.",
    category: "makers",
    subcategory: "textiles-apparel",
    city: "quincy",
    neighborhood: "quincy-center",
    address: "36 Revere Rd, Quincy, MA 02169",
    phone: "(617) 555-0137",
    email: "production@bobbinandbolt.example",
    website: null,
    founded: 2016,
    owner: "Mei Lin Huang",
    ownerTitle: "Owner & production manager",
    priceLevel: 2,
    serviceArea: null,
    hours: ["8am–5pm", "8am–5pm", "8am–5pm", "8am–5pm", "8am–4pm", "Closed", "Closed"],
    tags: ["Wholesale available", "Custom orders", "Woman-owned", "Immigrant-owned"],
    brand: { primary: "#6B2D5C", accent: "#F4B6C2" },
    featured: false,
    story: "Mei Lin ran a production line in a Guangzhou garment factory before moving to Quincy, where she noticed local designers were shipping 50-piece orders overseas and getting ignored. Bobbin & Bolt now employs eleven sewers, most of them neighbors from Quincy Center, and specializes in small runs that big factories won't touch. They've sewn everything from yoga bags for a Brookline studio to weatherproof tool rolls for a Maine outfitter.",
    sellingPoints: [
      { title: "Low minimums", text: "Production runs start at just 50 pieces per style." },
      { title: "Patterns & samples in house", text: "Our patternmaker grades sizes and sews your first sample before you commit to a run." },
      { title: "Industrial machines", text: "Walking-foot, coverstitch, bartack, and serger stations handle canvas through jersey." },
      { title: "Visit any time", text: "Brands are welcome on the floor to check work in progress." }
    ],
    offerings: [
      { name: "Small-batch production", description: "Cut and sew runs of 50–2,000 units.", price: "From $650 per run" },
      { name: "Pattern & first sample", description: "Pattern drafted from your sketch or tech pack, sewn sample included.", price: "From $380" },
      { name: "Size grading", description: "Grade an approved pattern across up to six sizes.", price: "$45 per size" },
      { name: "Bags & soft goods", description: "Totes, pouches, tool rolls, and covers in canvas or nylon.", price: "Free quote" },
      { name: "Branded labels & finishing", description: "Woven-label sewing, folding, bagging, and barcode tags.", price: "From $0.60 per piece" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Launch your line with 50 pieces",
        body: "No 1,000-unit minimums, no overseas guesswork. Bring us a sketch and we'll get you from first sample to finished, bagged inventory.",
        offer: "Free sample with any run of 200+",
        cta: "Request a quote",
        expires: "2026-12-15"
      }
    ],
    reviews: [
      {
        author: "Jasmine O.",
        rating: 5,
        date: "2026-02-25",
        title: "They made my brand possible",
        text: "I own a small activewear label and nobody would take a 75-piece order until I found Mei Lin. The samples were better than the overseas ones I'd paid twice as much for. We're on our fourth run now.",
        context: "Activewear production",
        helpful: 20,
        ownerReply: "Jasmine, watching your label grow is the best part of our job. See you for run five!"
      },
      {
        author: "Ben T.",
        rating: 5,
        date: "2025-07-11",
        title: "Bombproof tool rolls",
        text: "We're an outfitter in Portland, ME, and ordered 300 waxed-canvas tool rolls. Bartacks in all the right places, labels perfectly straight, and they shipped two days early.",
        context: "Canvas tool rolls",
        helpful: 11,
        ownerReply: null
      },
      {
        author: "Ruth A.",
        rating: 4,
        date: "2024-10-30",
        title: "Great quality, budget for revisions",
        text: "Pattern work was excellent but my design needed three sample rounds, which added up. That's on me more than them. Final production of our yoga mat bags was flawless.",
        context: "Pattern & sampling",
        helpful: 7,
        ownerReply: null
      },
      {
        author: "Andre V.",
        rating: 3,
        date: "2025-12-03",
        title: "Holiday crunch hurt us",
        text: "Our merch run got pushed by a week in November because they were slammed with holiday orders. Quality was fine, but we missed a pop-up event.",
        context: "Branded hoodies",
        helpful: 5,
        ownerReply: "Andre, I'm sorry about the pop-up. We now cap fall bookings so we can keep every promised date, and we'll put your next order on the calendar first."
      },
      {
        author: "Siobhan K.",
        rating: 5,
        date: "2026-08-07",
        title: "Like having my own factory",
        text: "As a shop owner who sells our own house-brand aprons, being able to drive over and see them on the line is huge. Mei Lin's team caught a fabric flaw before cutting and saved the whole run.",
        context: "Shop aprons",
        helpful: 8,
        ownerReply: null
      }
    ]
  },

  {
    id: "sixpenny-workwear",
    name: "Sixpenny Workwear",
    tagline: "Chore coats and aprons cut, sewn, and mended above Union Square.",
    category: "makers",
    subcategory: "textiles-apparel",
    city: "somerville",
    neighborhood: "union-sq",
    address: "19 Bow St, Somerville, MA 02143",
    phone: "(617) 555-0138",
    email: "hello@sixpennyworkwear.example",
    website: null,
    founded: 2019,
    owner: "Ada Brennan-Cole",
    ownerTitle: "Designer & sewer",
    priceLevel: 3,
    serviceArea: null,
    hours: ["Closed", "Closed", "11am–6pm", "11am–6pm", "11am–7pm", "10am–6pm", "11am–4pm"],
    tags: ["LGBTQ+-owned", "Eco-friendly", "Custom orders"],
    brand: { primary: "#34495E", accent: "#C8A97E" },
    featured: false,
    story: "Ada made her first chore coat out of a thrifted canvas drop cloth while working as a line cook, and friends kept asking for one. Sixpenny now occupies a sunny second-floor studio on Bow Street where every garment is cut and sewn in view of the shop counter. Her aprons hang in half the kitchens in Union Square, and every piece comes with free mending for life.",
    sellingPoints: [
      { title: "Free mending forever", text: "Rips, blown pockets, or worn cuffs on anything we made are repaired at no charge." },
      { title: "Made to your measurements", text: "Pay $30 more and we'll cut a coat to your shoulders and arm length." },
      { title: "Deadstock & organic fabrics", text: "Most cloth is rescued mill deadstock or certified organic cotton duck." }
    ],
    offerings: [
      { name: "Union chore coat", description: "Four-pocket, 10oz organic duck, unlined.", price: "$235" },
      { name: "Cross-back apron", description: "Waxed canvas with leather straps and a towel loop.", price: "$88" },
      { name: "Kitchen team aprons", description: "Restaurant sets of 10+ with your logo embroidered.", price: "From $62 each" },
      { name: "Made-to-measure upgrade", description: "Any coat cut to your personal measurements.", price: "$30" },
      { name: "Visible mending", description: "Sashiko-style repair on clothes from any brand.", price: "From $25" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "The chore coat for a New England fall",
        body: "Organic duck canvas, four honest pockets, and free mending for as long as you wear it. Try one on in the studio this weekend.",
        offer: "Free monogram through November",
        cta: "Visit the studio",
        expires: "2026-11-30"
      }
    ],
    reviews: [
      {
        author: "Felix N.",
        rating: 5,
        date: "2026-03-08",
        title: "Fits like it was made for me (it was)",
        text: "Got the made-to-measure chore coat since I'm tall with long arms and nothing off the rack fits. Ada measured me in ten minutes and it was ready in three weeks. Wearing it daily.",
        context: "Made-to-measure chore coat",
        helpful: 16,
        ownerReply: "Felix, long arms are our specialty. Bring it back when it needs its first patch!"
      },
      {
        author: "Rosa M.",
        rating: 5,
        date: "2025-04-17",
        title: "Our whole kitchen wears these",
        text: "I'm a chef-owner in Union Square and ordered 14 embroidered aprons for the team. They've survived a year of daily washing and still look sharp.",
        context: "Restaurant team aprons",
        helpful: 10,
        ownerReply: null
      },
      {
        author: "Liam P.",
        rating: 4,
        date: "2024-11-23",
        title: "Great mending service",
        text: "Brought in a favorite pair of jeans with blown-out knees. The sashiko repair is beautiful. Took about two weeks, which was longer than I expected.",
        context: "Visible mending",
        helpful: 4,
        ownerReply: null
      },
      {
        author: "Tasha W.",
        rating: 5,
        date: "2026-09-02",
        title: "They actually honored lifetime mending",
        text: "My apron strap ripped after two years of pottery classes. Dropped it off, picked it up four days later with a new strap, no charge, no questions.",
        context: "Apron repair",
        helpful: 7,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────── Ceramics & Glass ─────────────────────────
  {
    id: "fernwick-clayworks",
    name: "Fernwick Clayworks",
    tagline: "Hand-thrown dinnerware for your table, and a few great restaurants.",
    category: "makers",
    subcategory: "ceramics-glass",
    city: "boston",
    neighborhood: "jamaica-plain",
    address: "3371 Washington St, Jamaica Plain, MA 02130",
    phone: "(617) 555-0139",
    email: "pots@fernwickclay.example",
    website: null,
    founded: 2013,
    owner: "Naomi Achterberg",
    ownerTitle: "Potter & owner",
    priceLevel: 3,
    serviceArea: null,
    hours: ["Closed", "10am–5pm", "10am–5pm", "10am–5pm", "10am–7pm", "10am–5pm", "12pm–4pm"],
    tags: ["Woman-owned", "Custom orders", "Wholesale available"],
    brand: { primary: "#3F5E5A", accent: "#E9C46A" },
    featured: true,
    story: "Naomi throws every plate on the same kick-wheel she bought from a retiring potter in Vermont in 2012, in a former auto-parts store near the Forest Hills end of Washington Street. Her signature Fern glaze is a speckled sea-green she spent two years developing, and it now graces the tables of three Boston restaurants. Seconds go on sale every first Saturday, and the line forms before ten.",
    sellingPoints: [
      { title: "Every piece hand-thrown", text: "No molds, no jiggering; each plate is thrown, trimmed, and signed by Naomi." },
      { title: "Built for daily life", text: "High-fire stoneware that's dishwasher, microwave, and oven safe." },
      { title: "Restaurant program", text: "Chefs get custom shapes and glazes with replacement pieces kept in stock." },
      { title: "First-Saturday seconds", text: "Slightly imperfect pieces at 40% off the first Saturday of each month." }
    ],
    offerings: [
      { name: "4-piece place setting", description: "Dinner plate, salad plate, bowl, and mug in Fern or Oatmeal glaze.", price: "$168" },
      { name: "Serving platter", description: "16-inch oval platter, perfect for a whole fish or roast.", price: "$135" },
      { name: "Everyday mug", description: "14oz with a thumb rest, the shop bestseller.", price: "$42" },
      { name: "Custom wedding registry set", description: "Service for 8 with a personalized glaze test.", price: "From $1,250" },
      { name: "Restaurant dinnerware", description: "Custom plates and bowls for chefs, minimum 48 pieces.", price: "Free quote" },
      { name: "Wheel-throwing intro", description: "Two-hour Sunday session for two people.", price: "$140" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Holiday place settings, thrown by hand",
        body: "Holiday dinner orders for a set of 8 close November 15 so every piece has time to fire. Fern glaze, Oatmeal, or a custom color just for your family.",
        offer: "Free serving platter with 8 settings",
        cta: "Reserve your set",
        expires: "2026-11-15"
      },
      {
        kind: "spotlight",
        headline: "The plates from your favorite JP bistro",
        body: "Those speckled green plates you keep flipping over to find the maker's mark? They're ours, and you can take them home.",
        offer: null,
        cta: "Shop the studio",
        expires: null
      }
    ],
    reviews: [
      {
        author: "Chloe B.",
        rating: 5,
        date: "2026-04-28",
        title: "Our wedding registry set is stunning",
        text: "We did the custom registry set for 8 and Naomi made us three glaze tests to choose from. The final blue-green is perfect and every plate is slightly different in the best way. Took about ten weeks.",
        context: "Wedding registry dinnerware",
        helpful: 19,
        ownerReply: "Chloe and Sam, that glaze test is still pinned above my wheel. Congratulations!"
      },
      {
        author: "Ramon E.",
        rating: 5,
        date: "2025-09-15",
        title: "Plates guests ask about",
        text: "I run a 40-seat restaurant and ordered 120 custom pasta bowls. Naomi keeps a dozen spares glazed and ready, so breakage never leaves us short. Guests ask about them nightly.",
        context: "Restaurant dinnerware",
        helpful: 14,
        ownerReply: null
      },
      {
        author: "Jill S.",
        rating: 4,
        date: "2024-06-01",
        title: "Seconds sale is the move",
        text: "Got there at 9:45 for the first-Saturday sale and walked out with four mugs and a platter for under $150. Couldn't find a flaw on half of them. Lines get long.",
        context: "Seconds sale",
        helpful: 22,
        ownerReply: null
      },
      {
        author: "Owen D.",
        rating: 3,
        date: "2025-01-19",
        title: "One mug cracked",
        text: "Love the look, but one of my four mugs developed a hairline crack after a few months. Naomi replaced it, but it was a bit of back and forth to arrange.",
        context: "Everyday mugs",
        helpful: 6,
        ownerReply: "Owen, thanks for your patience. That batch had a kiln-cooling issue, and I've since changed my firing schedule. Every piece is guaranteed against crazing and cracks, no questions asked."
      },
      {
        author: "Mira J.",
        rating: 5,
        date: "2026-07-26",
        title: "Best date night",
        text: "Did the wheel-throwing intro with my husband. Naomi is so encouraging and we each made a bowl she glazed and fired for us. Picked them up three weeks later.",
        context: "Wheel-throwing intro",
        helpful: 8,
        ownerReply: null
      },
      {
        author: "Victor L.",
        rating: 5,
        date: "2025-12-10",
        title: "Heavy in the best way",
        text: "The place settings feel substantial without being clunky. Two years of daily dishwasher use and the Fern glaze looks brand new.",
        context: "Place settings",
        helpful: 5,
        ownerReply: null
      }
    ]
  },

  {
    id: "ember-hollow-glass",
    name: "Ember Hollow Glass",
    tagline: "Blown glass, lighting, and hot-shop classes at Port Norfolk.",
    category: "makers",
    subcategory: "ceramics-glass",
    city: "boston",
    neighborhood: "dorchester",
    address: "22 Walnut St, Dorchester, MA 02122",
    phone: "(617) 555-0140",
    email: "furnace@emberhollow.example",
    website: null,
    founded: 2017,
    owner: "Jerome Baptiste",
    ownerTitle: "Glassblower & founder",
    priceLevel: 3,
    serviceArea: null,
    hours: ["Closed", "Closed", "12pm–8pm", "12pm–8pm", "12pm–8pm", "10am–6pm", "10am–4pm"],
    tags: ["BIPOC-owned", "Custom orders", "Wholesale available"],
    brand: { primary: "#7A1F2B", accent: "#F6AE2D" },
    featured: false,
    story: "Jerome fell for glass in a high-school art program, apprenticed in Murano for a year, and came home to Dorchester to build a hot shop in a former marine-supply warehouse by the Neponset. The furnace runs from September to June and every weekend you'll find a wall of first-timers learning to gather molten glass. His pendant lights hang in coffee shops from Fields Corner to Portsmouth.",
    sellingPoints: [
      { title: "Watch it get made", text: "The gallery looks straight into the hot shop, so Friday-night demos are free to walk in." },
      { title: "Lighting for businesses", text: "Custom pendant runs for cafés, restaurants, and hotels in any color." },
      { title: "Classes for total beginners", text: "Over 3,000 students have made their first piece here." }
    ],
    offerings: [
      { name: "Blown pendant light", description: "Hand-blown shade with UL-listed hardware, many colors.", price: "From $295" },
      { name: "Commercial lighting run", description: "Matched pendants for restaurants and hospitality, 10+ units.", price: "Free quote" },
      { name: "Make-your-own ornament", description: "30-minute session, take home a glass ornament you shaped.", price: "$55" },
      { name: "Intro to glassblowing", description: "Three-hour class, make a cup and a paperweight.", price: "$185" },
      { name: "Drinking glasses (set of 4)", description: "Slightly irregular tumblers in smoke, amber, or clear.", price: "$120" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Blow your own holiday ornament",
        body: "Thirty minutes at the furnace with a glassblower beside you, and you'll leave with an ornament nobody else on earth has. Perfect for families and first dates.",
        offer: "Book 4, the 5th is free",
        cta: "Reserve an ornament slot",
        expires: "2026-12-20"
      }
    ],
    reviews: [
      {
        author: "Keisha R.",
        rating: 5,
        date: "2025-12-14",
        title: "New family tradition",
        text: "We took the kids (10 and 13) to make ornaments and it was the highlight of December. Jerome's team kept everyone safe and made the kids feel like real artists. Each ornament was ready for pickup two days later.",
        context: "Ornament session",
        helpful: 17,
        ownerReply: "Keisha, see you all next December. We'll save the red glass for your youngest!"
      },
      {
        author: "Matt C.",
        rating: 5,
        date: "2026-01-30",
        title: "Pendants for our café",
        text: "I own a café in Fields Corner and commissioned 12 amber pendants. Every one is slightly different but they read as a set. Jerome came by to help the electrician hang them.",
        context: "Café pendant lighting",
        helpful: 12,
        ownerReply: null
      },
      {
        author: "Hailey G.",
        rating: 4,
        date: "2024-08-24",
        title: "Hot in summer, but amazing",
        text: "The intro class is incredible and the instructor Dani was patient. Fair warning: in August it's brutally hot next to the furnace. Bring water.",
        context: "Intro to glassblowing",
        helpful: 9,
        ownerReply: null
      },
      {
        author: "Aaron F.",
        rating: 2,
        date: "2025-06-11",
        title: "Class got cancelled last minute",
        text: "Our Saturday class was cancelled the night before because of a furnace issue. We got a refund, but we'd driven in from Worcester for the weekend.",
        context: "Intro to glassblowing",
        helpful: 6,
        ownerReply: "Aaron, I'm really sorry. A cracked crucible is rare but it shut us down for a week. I'd love to host you both for a free class whenever you're back in town."
      },
      {
        author: "Nadia P.",
        rating: 5,
        date: "2026-06-19",
        title: "My favorite glasses",
        text: "Bought the smoke tumblers at a Friday demo night. They're a little wobbly and that's exactly why I love them.",
        context: "Drinking glasses",
        helpful: 3,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────── Machining & Contract Manufacturing ─────────────────────────
  {
    id: "quarterthou-precision",
    name: "Quarterthou Precision",
    tagline: "CNC prototypes for hardware startups, machined in days not weeks.",
    category: "makers",
    subcategory: "machining-contract",
    city: "somerville",
    neighborhood: "assembly-sq",
    address: "41 Foley St, Somerville, MA 02145",
    phone: "(617) 555-0141",
    email: "rfq@quarterthou.example",
    website: "quarterthou.example",
    founded: 2018,
    owner: "Priyanka Desai",
    ownerTitle: "Co-founder & CEO",
    priceLevel: 3,
    serviceArea: null,
    hours: ["7am–7pm", "7am–7pm", "7am–7pm", "7am–7pm", "7am–5pm", "By appointment", "Closed"],
    tags: ["Woman-owned", "Custom orders", "Wholesale available"],
    brand: { primary: "#0F4C5C", accent: "#5FD3C6" },
    featured: true,
    story: "Priyanka spent six years designing surgical robots in Kendall and got tired of waiting three weeks for prototype parts from out-of-state job shops. With machinist Walt Kowalczyk she opened Quarterthou in a warehouse behind Assembly Row, with two 5-axis mills, a Swiss-type lathe, and a CMM. The shop is named after the 0.00025-inch tolerance they routinely hold, and engineers are welcome to stand at the machine while their part runs.",
    sellingPoints: [
      { title: "3-day standard turn", text: "Most aluminum prototypes ship in three business days from an approved quote." },
      { title: "Engineers talk to engineers", text: "Your quote is reviewed by someone who has designed medical and robotic hardware." },
      { title: "Inspection you can trust", text: "CMM reports and material certs included with every order at no charge." },
      { title: "Bridge to production", text: "We fixture and document prototypes so runs of 500+ go smoothly." }
    ],
    offerings: [
      { name: "Rapid CNC prototypes", description: "Aluminum, steel, Delrin, PEEK; 1–20 pieces.", price: "From $350 per run" },
      { name: "5-axis complex parts", description: "Impellers, manifolds, and organic geometries.", price: "Free quote" },
      { name: "Swiss-turned components", description: "Small precision pins, shafts, and fittings.", price: "From $4.80 per part" },
      { name: "Low-volume production", description: "50–5,000 parts with full first-article inspection.", price: "Free quote" },
      { name: "Expedite (24-hour)", description: "Overnight machining for simple parts when demo day can't move.", price: "From $490" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Prototype parts in 3 days, 10 min from MIT",
        body: "Upload your CAD before noon and get a quote with DFM notes the same afternoon. Ten minutes from Kendall, so you can pick up parts on your way to lunch.",
        offer: "15% off your first order",
        cta: "Upload CAD for a quote",
        expires: "2027-01-31"
      },
      {
        kind: "spotlight",
        headline: "Held to a quarter of a thou",
        body: "5-axis mills, Swiss turning, and CMM inspection in Somerville. Come watch your part get made.",
        offer: null,
        cta: "Book a shop tour",
        expires: null
      }
    ],
    reviews: [
      {
        author: "Daniel K.",
        rating: 5,
        date: "2026-08-21",
        title: "Saved our investor demo",
        text: "Mechanical lead at a surgical robotics startup here. We found a design flaw on a Tuesday and had re-machined titanium brackets in hand Thursday morning. CMM report and certs were in the box without us asking.",
        context: "Expedited titanium brackets",
        helpful: 26,
        ownerReply: "Daniel, Walt stayed late on that one and he says it was worth it. Good luck with the raise!"
      },
      {
        author: "Ellen Z.",
        rating: 5,
        date: "2025-05-09",
        title: "DFM notes are gold",
        text: "Their quote came back with three suggestions to remove a 5-axis setup, which cut our price almost in half. They obviously read the drawing instead of just plugging it into a calculator.",
        context: "Aluminum manifold prototypes",
        helpful: 18,
        ownerReply: null
      },
      {
        author: "Rajiv S.",
        rating: 4,
        date: "2024-09-17",
        title: "Premium shop, premium price",
        text: "Quality is excellent, parts always in spec. They're about 15–20% more than the online quoting platforms, but lead times and communication are far better. Worth it when it matters.",
        context: "Low-volume production",
        helpful: 12,
        ownerReply: null
      },
      {
        author: "Hugo B.",
        rating: 3,
        date: "2025-11-03",
        title: "Good parts, one missed callout",
        text: "On a run of 200 Delrin bushings, they missed a chamfer callout on our drawing. They reran the batch for free within a week, but it cost us some schedule.",
        context: "Delrin bushings",
        helpful: 7,
        ownerReply: "Hugo, that one's on us. We've added a second-person drawing review on every production release since then. Thanks for giving us the chance to fix it."
      },
      {
        author: "Sophie T.",
        rating: 5,
        date: "2026-02-12",
        title: "Grad student friendly",
        text: "I'm a PhD student and Priyanka walked me through how to make my lab fixture cheaper to machine. They took a two-part order that bigger shops ignored.",
        context: "Research lab fixture",
        helpful: 9,
        ownerReply: null
      }
    ]
  },

  {
    id: "granite-ledge-machine-co",
    name: "Granite Ledge Machine Co.",
    tagline: "Three generations of production machining on the South Shore.",
    category: "makers",
    subcategory: "machining-contract",
    city: "quincy",
    neighborhood: "wollaston",
    address: "140 Newport Ave, Quincy, MA 02170",
    phone: "(617) 555-0142",
    email: "orders@graniteledgemachine.example",
    website: null,
    founded: 1978,
    owner: "Frank Delvecchio Jr.",
    ownerTitle: "President",
    priceLevel: 2,
    serviceArea: null,
    hours: ["6am–4:30pm", "6am–4:30pm", "6am–4:30pm", "6am–4:30pm", "6am–2:30pm", "Closed", "Closed"],
    tags: ["Family-owned", "Veteran-owned", "Wholesale available", "Custom orders"],
    brand: { primary: "#3B3B58", accent: "#C9B79C" },
    featured: false,
    story: "Frank Delvecchio Sr. came home from the Army, bought a Bridgeport mill, and started making parts for the Fore River shipyard out of a Wollaston garage. His son Frank Jr. runs the shop today with 18 machinists, eight CNC horizontals, and a reputation for repeat production work that never surprises anyone. Customers include marine-equipment makers, valve companies, and a few local breweries who need replacement parts yesterday.",
    sellingPoints: [
      { title: "Long-run consistency", text: "Some part numbers have run here every month since the 1990s without a rejection." },
      { title: "Kanban & blanket orders", text: "We stock your parts on our shelves and ship releases on demand." },
      { title: "Repair & reverse engineering", text: "Bring us a broken part with no drawing and we'll measure, model, and make it." }
    ],
    offerings: [
      { name: "Production CNC milling", description: "Horizontal machining for runs of 100–25,000.", price: "From $1,200 per run" },
      { name: "CNC turning", description: "Lathe work up to 12-inch diameter in steel, stainless, and bronze.", price: "Free quote" },
      { name: "Reverse engineering", description: "Measure, model, and remake obsolete or broken parts.", price: "From $300" },
      { name: "Blanket order stocking", description: "We hold inventory and ship on your schedule.", price: "Free quote" },
      { name: "Emergency repair parts", description: "Same-day machining for down equipment.", price: "$125/hr" }
    ],
    ads: [
      {
        kind: "spotlight",
        headline: "48 years of parts that just fit",
        body: "Marine, valve, and brewery equipment makers trust us with the boring, critical parts that keep their lines running. Send us your drawing and we'll quote within two days.",
        offer: null,
        cta: "Request a quote",
        expires: null
      },
      {
        kind: "promo",
        headline: "Move your 2027 blanket order closer to home",
        body: "Tired of overseas lead times? Sign a 2027 blanket order and we'll stock your parts in Quincy and ship releases next-day.",
        offer: "Free first-article inspection",
        cta: "Talk to Frank",
        expires: "2027-01-15"
      }
    ],
    reviews: [
      {
        author: "Walter H.",
        rating: 5,
        date: "2025-08-05",
        title: "Twenty years, zero drama",
        text: "Purchasing manager at a valve company. We've bought bronze bodies from Granite Ledge since 2005. Parts show up on time, in spec, every month. Frank answers his own phone.",
        context: "Bronze valve bodies",
        helpful: 15,
        ownerReply: null
      },
      {
        author: "Colleen M.",
        rating: 5,
        date: "2026-05-14",
        title: "Saved our canning line",
        text: "Our brewery's canning line seized on a Friday before a big release. Frank's guys reverse-engineered the broken shaft and had a new one to us by 7pm. Absolute lifesavers.",
        context: "Emergency repair part",
        helpful: 21,
        ownerReply: "Colleen, glad the release went out on time. Save us a four-pack!"
      },
      {
        author: "Arjun P.",
        rating: 3,
        date: "2024-04-22",
        title: "Not set up for prototypes",
        text: "They're clearly a production shop. Quote for 5 prototype parts was high and took a week. Probably great once you're past the design stage, just not for quick iterations.",
        context: "Prototype quote",
        helpful: 10,
        ownerReply: "Arjun, that's fair: our horizontals shine on volume, not one-offs. We often refer prototype work to friends in Somerville and then take it over for production."
      },
      {
        author: "Bill S.",
        rating: 4,
        date: "2025-10-28",
        title: "Old-school in a good way",
        text: "Paper travelers and a fax machine still in the office, but quality is excellent and pricing beat two bigger shops in Rhode Island. Our marine winch parts have never had an issue.",
        context: "Marine winch components",
        helpful: 6,
        ownerReply: null
      },
      {
        author: "Tina R.",
        rating: 5,
        date: "2026-09-10",
        title: "Blanket order works perfectly",
        text: "We switched our stainless fittings from an overseas supplier. Granite Ledge keeps three months of stock and ships within 24 hours of a release. Inventory headaches gone.",
        context: "Blanket order stocking",
        helpful: 8,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────── Signs & Displays ─────────────────────────
  {
    id: "gilt-and-gable-sign-co",
    name: "Gilt & Gable Sign Co.",
    tagline: "Hand-lettered windows and gold-leaf signs, the old-fashioned way.",
    category: "makers",
    subcategory: "signs-displays",
    city: "boston",
    neighborhood: "east-boston",
    address: "312 Meridian St, East Boston, MA 02128",
    phone: "(617) 555-0143",
    email: "letters@giltandgable.example",
    website: null,
    founded: 2015,
    owner: "Valentina Ruiz",
    ownerTitle: "Sign painter & owner",
    priceLevel: 3,
    serviceArea: "Boston, Cambridge, Somerville, Chelsea & Everett",
    hours: ["9am–5pm", "9am–5pm", "9am–5pm", "9am–5pm", "9am–5pm", "By appointment", "Closed"],
    tags: ["Woman-owned", "Immigrant-owned", "Custom orders"],
    brand: { primary: "#1B4332", accent: "#D4AF37" },
    featured: false,
    story: "Valentina grew up watching rotulistas paint shop fronts in Bogotá, then trained under a veteran Boston sign painter who taught her 23-karat water gilding. From her Meridian Street storefront she letters bakery windows, barbershop doors, and carved wooden blade signs for shops all over the city. Look closely at the gold on her glass and you'll see your own reflection in it; that's the mark of real water gilding.",
    sellingPoints: [
      { title: "Real 23k gold leaf", text: "Water-gilded glass that outlasts vinyl by decades and never peels." },
      { title: "Bilingual lettering", text: "Fluent design in English, Spanish, and Portuguese for neighborhood storefronts." },
      { title: "On-site window painting", text: "We paint right on your glass, usually in a single day." },
      { title: "Hand-carved blade signs", text: "Carved and gilded mahogany signs that pass historic-district review." }
    ],
    offerings: [
      { name: "Gold-leaf window lettering", description: "Business name and hours, gilded on-site.", price: "From $850" },
      { name: "Hand-painted window", description: "One-shot enamel lettering and illustration.", price: "From $450" },
      { name: "Carved blade sign", description: "Double-sided mahogany with gilded letters and bracket.", price: "From $1,900" },
      { name: "Painted wall sign", description: "Exterior brick or wood wall lettering.", price: "Free quote" },
      { name: "Holiday window art", description: "Seasonal painted windows, removed in January.", price: "From $275" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Holiday windows that stop foot traffic",
        body: "Snowflakes, garlands, and your specials hand-painted on your glass, then wiped clean in January. Booking now for November and December.",
        offer: "$50 off when booked by Nov 1",
        cta: "Book your window",
        expires: "2026-11-01"
      }
    ],
    reviews: [
      {
        author: "Diego F.",
        rating: 5,
        date: "2025-03-14",
        title: "The gold makes the shop",
        text: "Valentina gilded our barbershop window on Bennington Street and walk-ins went up the first week. People take photos of it. She finished in about seven hours.",
        context: "Gold-leaf window lettering",
        helpful: 18,
        ownerReply: "Diego, every time I walk by I want to get a haircut. Thank you!"
      },
      {
        author: "Anna K.",
        rating: 5,
        date: "2026-06-06",
        title: "Blade sign passed review",
        text: "As a shop owner in the North End, I needed a sign that would pass the historic commission. Her carved mahogany sign got approved without a single comment. Gorgeous.",
        context: "Carved blade sign",
        helpful: 12,
        ownerReply: null
      },
      {
        author: "Tom G.",
        rating: 4,
        date: "2024-12-02",
        title: "Charming holiday windows",
        text: "Hired her for our café's holiday window. Beautiful work, and removal in January was included. Booking was tight, so call early in the fall.",
        context: "Holiday window art",
        helpful: 7,
        ownerReply: null
      },
      {
        author: "Lucia M.",
        rating: 5,
        date: "2025-10-19",
        title: "Spanish and English, done beautifully",
        text: "She designed our panadería's window in both languages and somehow made it look balanced and elegant. Customers love it.",
        context: "Hand-painted window",
        helpful: 9,
        ownerReply: null
      }
    ]
  },

  {
    id: "marquee-mill-displays",
    name: "Marquee Mill Displays",
    tagline: "Channel letters, trade-show booths, and retail fixtures at scale.",
    category: "makers",
    subcategory: "signs-displays",
    city: "everett",
    neighborhood: "glendale",
    address: "9 Garvey St, Everett, MA 02149",
    phone: "(617) 555-0144",
    email: "projects@marqueemill.example",
    website: "marqueemill.example",
    founded: 2004,
    owner: "Kwame Asante",
    ownerTitle: "Founder & general manager",
    priceLevel: 3,
    serviceArea: "New England (install crews within 150 miles)",
    hours: ["7am–5pm", "7am–5pm", "7am–5pm", "7am–5pm", "7am–5pm", "Closed", "Closed"],
    tags: ["BIPOC-owned", "Wholesale available", "Custom orders", "Licensed & insured"],
    brand: { primary: "#2D1E5F", accent: "#FF7A59" },
    featured: false,
    story: "Kwame started Marquee Mill building trade-show booths for Route 128 tech companies out of a rented bay in Everett. Twenty years later the shop has a 4-by-8 flatbed UV printer, a CNC router, a channel-letter bender, and a bucket truck, and it fabricates signage for regional grocery chains, biotech lobbies, and university athletic departments. They're the shop other sign companies quietly subcontract to when the job is too big.",
    sellingPoints: [
      { title: "Everything under one roof", text: "Design, permitting, fabrication, and installation handled by one project manager." },
      { title: "Permit pros", text: "We pull sign permits in 30+ Massachusetts towns and know each zoning board's quirks." },
      { title: "Trade-to-trade pricing", text: "Discounted wholesale fabrication for other sign shops and agencies." }
    ],
    offerings: [
      { name: "Illuminated channel letters", description: "LED-lit storefront letters, permitted and installed.", price: "From $4,500" },
      { name: "Trade-show booth build", description: "10x10 to 20x40 booths with crates for reuse.", price: "From $6,800" },
      { name: "Lobby & donor walls", description: "Dimensional logos and recognition walls in metal and acrylic.", price: "Free quote" },
      { name: "Retail fixture runs", description: "Printed and routed POP displays for multi-store rollouts.", price: "From $1,500 per run" },
      { name: "Wholesale fabrication", description: "Blind-shipped work for sign shops and agencies.", price: "Free quote" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Your trade-show booth, ready for spring",
        body: "Spring shows book up fast. Sign by December and we'll design, build, and crate a reusable booth, then store it free between shows.",
        offer: "Free booth storage for 1 year",
        cta: "Get a booth quote",
        expires: "2026-12-31"
      }
    ],
    reviews: [
      {
        author: "Lauren P.",
        rating: 5,
        date: "2026-04-11",
        title: "Booth looked twice the budget",
        text: "Marketing director at a medical-device company. Our 20x20 booth from Marquee Mill got more compliments at the Boston show than anything our competitors brought. Kwame's PM, Jess, handled every detail.",
        context: "Trade-show booth",
        helpful: 16,
        ownerReply: "Lauren, Jess will be thrilled to hear it. Let's start thinking about next year's refresh."
      },
      {
        author: "Mike D.",
        rating: 4,
        date: "2025-07-23",
        title: "Great letters, permit took a while",
        text: "Channel letters for our pizza shop in Malden look fantastic at night. The town permit took six weeks, but they warned us upfront and handled all the paperwork.",
        context: "Channel letter sign",
        helpful: 8,
        ownerReply: null
      },
      {
        author: "Chris L.",
        rating: 5,
        date: "2024-05-30",
        title: "Our go-to wholesale fabricator",
        text: "I run a small sign company on the North Shore and sub out big jobs to Marquee Mill. They blind-ship, hit deadlines, and their pricing lets me stay competitive.",
        context: "Wholesale fabrication",
        helpful: 11,
        ownerReply: null
      },
      {
        author: "Danielle S.",
        rating: 3,
        date: "2026-01-08",
        title: "Donor wall had a typo",
        text: "The donor wall for our nonprofit is beautiful, but one name was misspelled on install day even though the proof was correct. They fixed it within a week at no cost, but it was awkward for the unveiling.",
        context: "Donor recognition wall",
        helpful: 6,
        ownerReply: "Danielle, I'm truly sorry. That was a file-version mix-up on our end. We've added a final name-by-name check against the signed proof before anything goes to production."
      },
      {
        author: "Omar H.",
        rating: 5,
        date: "2025-11-17",
        title: "Rolled out 22 stores flawlessly",
        text: "We're a regional grocery chain and Marquee Mill fabricated produce-department displays for 22 locations. Every kit was labeled by store and the install crews were in and out overnight.",
        context: "Multi-store fixture rollout",
        helpful: 10,
        ownerReply: null
      }
    ]
  },

  // ───────────────────────── Soaps, Candles & Body Care ─────────────────────────
  {
    id: "saltmarsh-soap-co",
    name: "Saltmarsh Soap Co.",
    tagline: "Cold-process soap for hotels, shops, and your own sink.",
    category: "makers",
    subcategory: "soaps-candles",
    city: "boston",
    neighborhood: "dorchester",
    address: "605 Gallivan Blvd, Dorchester, MA 02124",
    phone: "(617) 555-0145",
    email: "wholesale@saltmarshsoap.example",
    website: "saltmarshsoap.example",
    founded: 2012,
    owner: "Bridget Nwosu",
    ownerTitle: "Owner & soapmaker",
    priceLevel: 2,
    serviceArea: null,
    hours: ["8am–4pm", "8am–4pm", "8am–4pm", "8am–4pm", "8am–4pm", "10am–2pm", "Closed"],
    tags: ["Woman-owned", "BIPOC-owned", "Wholesale available", "Eco-friendly"],
    brand: { primary: "#22577A", accent: "#80ED99" },
    featured: false,
    story: "Bridget started making soap in her Neponset kitchen to calm her son's eczema, then started selling at the Dorchester farmers market when neighbors asked. Saltmarsh now cures 4,000 bars a week in a converted laundromat on Gallivan Blvd and supplies boutique hotels, gift shops, and spas across New England. Every bar cures for six full weeks, and the Saturday shop sells the same bars hotels buy, by the pound.",
    sellingPoints: [
      { title: "Six-week cure, always", text: "Longer curing makes harder, gentler bars that last twice as long at the sink." },
      { title: "Private label for hotels", text: "Your logo stamped on guest bars with minimums as low as 500." },
      { title: "Plastic-free shipping", text: "Bars ship in recycled paper wraps and compostable cartons." },
      { title: "Sensitive-skin line", text: "Unscented oat and shea bars developed for eczema-prone skin." }
    ],
    offerings: [
      { name: "Wholesale bar soap", description: "Case of 48 full-size bars, mix up to 6 scents.", price: "$192" },
      { name: "Hotel guest bars (private label)", description: "1oz stamped bars with your logo, 500 minimum.", price: "From $0.78 per bar" },
      { name: "Soap by the pound", description: "Shop ends and odd cuts from the cutting table.", price: "$12/lb" },
      { name: "Tidepool bar", description: "Sea salt, kelp, and eucalyptus; the bestseller.", price: "$9" },
      { name: "Oat & shea unscented bar", description: "Gentle bar for sensitive skin and babies.", price: "$9" },
      { name: "Custom scent development", description: "Signature scent for your spa or hotel.", price: "Free quote" }
    ],
    ads: [
      {
        kind: "promo",
        headline: "Stock local soap for the holiday rush",
        body: "Gift shops: our bestselling Tidepool and Cranberry Bog bars are flying off shelves. Place your first wholesale order and we'll include a free wooden display crate.",
        offer: "Free display + 10% off first case",
        cta: "Open a wholesale account",
        expires: "2026-12-01"
      },
      {
        kind: "new",
        headline: "New: Cranberry Bog seasonal bar",
        body: "Real cranberry seed exfoliant and a bright, tart scent that smells like a Plymouth harvest. Only through January.",
        offer: null,
        cta: "Grab a bar Saturday",
        expires: "2027-01-31"
      }
    ],
    reviews: [
      {
        author: "Catherine W.",
        rating: 5,
        date: "2026-03-27",
        title: "Guests take them home",
        text: "I manage a 60-room boutique hotel in Newport and we switched to Saltmarsh private-label bars last year. Guests regularly ask where to buy them. Reorders arrive in under a week.",
        context: "Private-label guest soap",
        helpful: 14,
        ownerReply: "Catherine, we love being a little piece of your guests' stay. Thank you!"
      },
      {
        author: "Jorge L.",
        rating: 5,
        date: "2025-11-29",
        title: "Best seller in my shop",
        text: "I own a gift shop in Salem and Saltmarsh soap outsells every other bath product we carry, especially in the fall. Bridget is great about rush orders.",
        context: "Wholesale bar soap",
        helpful: 9,
        ownerReply: null
      },
      {
        author: "Amira T.",
        rating: 5,
        date: "2024-03-15",
        title: "Finally, a soap that doesn't sting",
        text: "My daughter has bad eczema and the oat and shea bar is the only thing that doesn't irritate her. Buying by the pound on Saturdays makes it affordable.",
        context: "Oat & shea unscented bar",
        helpful: 21,
        ownerReply: null
      },
      {
        author: "Nick F.",
        rating: 3,
        date: "2025-06-08",
        title: "Scent faded on custom order",
        text: "We had a signature scent developed for our spa. Initial batch was great, but the second batch was noticeably weaker. They adjusted it, though it took two tries.",
        context: "Custom spa scent",
        helpful: 5,
        ownerReply: "Nick, our fragrance supplier changed a component without notice. We now test every lot of oil before it touches a batch, and your formula is locked in."
      },
      {
        author: "Erin O.",
        rating: 4,
        date: "2026-08-30",
        title: "Saturday shop is a gem",
        text: "Popped in on a Saturday and walked out with two pounds of soap ends for $24. Smells amazing. Wish they were open a little later.",
        context: "Soap by the pound",
        helpful: 4,
        ownerReply: null
      }
    ]
  },

  {
    id: "wickery-lane-candles",
    name: "Wickery Lane Candles",
    tagline: "Small-batch candles poured in Inman, named for Cambridge streets.",
    category: "makers",
    subcategory: "soaps-candles",
    city: "cambridge",
    neighborhood: "inman-sq",
    address: "1352 Cambridge St, Cambridge, MA 02139",
    phone: "(617) 555-0146",
    email: "hello@wickerylane.example",
    website: null,
    founded: 2020,
    owner: "Jules Moreau-Park",
    ownerTitle: "Founder & candlemaker",
    priceLevel: 2,
    serviceArea: null,
    hours: ["Closed", "12pm–7pm", "12pm–7pm", "12pm–7pm", "12pm–8pm", "10am–6pm", "11am–5pm"],
    tags: ["LGBTQ+-owned", "Eco-friendly", "Custom orders", "Delivery"],
    brand: { primary: "#5C2A4D", accent: "#F2C14E" },
    featured: true,
    story: "Jules started pouring coconut-soy candles in a Prospect Street apartment during the 2020 lockdown and named each scent after a Cambridge street that smelled like a memory. Wickery Lane now has a tiny storefront in Inman with a pour bar where you can blend your own scent from 30 fragrance oils. Bring back any empty jar for a refill discount; the shelves behind the counter are stacked with clean ones waiting to be poured.",
    sellingPoints: [
      { title: "Pour your own", text: "Blend a custom scent at the pour bar and take it home in about an hour." },
      { title: "Refill program", text: "Return any Wickery jar and get $6 off a refill, so jars never hit the trash." },
      { title: "Clean-burning wax", text: "Coconut-soy blend with cotton wicks and phthalate-free fragrance." },
      { title: "Local bike delivery", text: "Same-day bike delivery in Cambridge and Somerville for orders before 2pm." }
    ],
    offerings: [
      { name: "Signature 8oz candle", description: "Scents like Brattle Street Books and Inman Cardamom.", price: "$32" },
      { name: "Pour-your-own session", description: "Blend and pour a 10oz candle with a guide, about an hour.", price: "$48" },
      { name: "Private pour party", description: "Up to 12 guests, BYO snacks and drinks.", price: "From $420" },
      { name: "Jar refill", description: "Bring back any Wickery jar and we'll pour a fresh candle.", price: "$26" },
      { name: "Wedding & event favors", description: "4oz tins with custom labels, 50 minimum.", price: "From $9 each" }
    ],
    ads: [
      {
        kind: "seasonal",
        headline: "Mt. Auburn Fir is back for winter",
        body: "Balsam, cedar, and a little woodsmoke, the scent our regulars wait all year for. Poured in small batches, so once it's gone, it's gone.",
        offer: "Buy 2, get a free 4oz tin",
        cta: "Order for pickup",
        expires: "2026-12-31"
      },
      {
        kind: "promo",
        headline: "Make your own candle date night",
        body: "Pick from 30 oils, blend a scent that's entirely yours, and pour it yourself. Wine welcome; we supply the matches.",
        offer: "2 seats for $85",
        cta: "Book the pour bar",
        expires: "2026-11-30"
      }
    ],
    reviews: [
      {
        author: "Isabel R.",
        rating: 5,
        date: "2026-02-14",
        title: "Valentine's pour session was perfect",
        text: "My girlfriend and I did the pour-your-own date night. Jules helped us balance a scent we named after our first apartment. Cozy, fun, and $85 for both of us.",
        context: "Pour-your-own session",
        helpful: 15,
        ownerReply: "Isabel, that blend was one of my favorites of the year. Come back and we'll pour you a refill!"
      },
      {
        author: "Kenji W.",
        rating: 5,
        date: "2025-12-06",
        title: "Brattle Street Books is addictive",
        text: "Paper, leather, and a hint of tea. It actually smells like a used bookstore. Burns clean and lasted me about 50 hours.",
        context: "Signature 8oz candle",
        helpful: 11,
        ownerReply: null
      },
      {
        author: "Sarah E.",
        rating: 4,
        date: "2025-06-21",
        title: "Lovely wedding favors",
        text: "Ordered 120 favor tins with our names on the label. Guests loved them. Labels were slightly off-center on a few, but nobody noticed except me.",
        context: "Wedding favors",
        helpful: 7,
        ownerReply: null
      },
      {
        author: "Paul N.",
        rating: 3,
        date: "2024-11-11",
        title: "Tunneled a bit",
        text: "Scent was lovely but my first candle tunneled down the middle. The staff explained the first-burn rule, and the refill burned evenly. Just wish that was on the label.",
        context: "Signature 8oz candle",
        helpful: 9,
        ownerReply: "Paul, great feedback. Every jar now has a little card explaining the 3-hour first burn. Thanks for helping us improve."
      },
      {
        author: "Bea C.",
        rating: 5,
        date: "2026-09-19",
        title: "Refill program rocks",
        text: "I've refilled the same jar four times now. Cheaper, zero waste, and I get to try a new scent each time. Bike delivery is a nice touch on rainy days.",
        context: "Jar refill",
        helpful: 6,
        ownerReply: null
      },
      {
        author: "Grant T.",
        rating: 5,
        date: "2025-03-29",
        title: "Hosted my sister's bachelorette here",
        text: "Private pour party for 10 people. Jules was so organized and every guest left with a candle and a big grin. Easiest party I've ever planned.",
        context: "Private pour party",
        helpful: 8,
        ownerReply: null
      }
    ]
  }
);
