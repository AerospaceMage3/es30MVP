// Shared taxonomy: category groups, granular subcategories, areas (Craigslist-style
// city -> neighborhood), and the fixed list of business attribute tags.
window.LOCAL_DATA = window.LOCAL_DATA || { businesses: [] };

window.LOCAL_DATA.categories = [
  { id: "food", label: "Food & Drink", subs: [
    { id: "restaurants", label: "Restaurants" },
    { id: "bakeries-cafes", label: "Bakeries & Cafés" },
    { id: "specialty-grocers", label: "Specialty Grocers & Markets" },
    { id: "breweries-distilleries", label: "Breweries & Distilleries" },
    { id: "catering", label: "Catering & Private Chefs" },
  ]},
  { id: "home", label: "Home Services", subs: [
    { id: "plumbing", label: "Plumbing" },
    { id: "electrical", label: "Electrical" },
    { id: "hvac", label: "Heating & Cooling" },
    { id: "landscaping", label: "Landscaping & Gardens" },
    { id: "cleaning", label: "Cleaning" },
    { id: "carpentry-handyman", label: "Carpentry & Handyman" },
    { id: "painting", label: "Painting & Finishing" },
  ]},
  { id: "auto", label: "Automotive", subs: [
    { id: "auto-repair", label: "Auto Repair" },
    { id: "auto-detailing", label: "Detailing & Bodywork" },
  ]},
  { id: "personal", label: "Personal Care & Wellness", subs: [
    { id: "barbers-salons", label: "Barbers & Salons" },
    { id: "tailoring", label: "Tailoring & Alterations" },
    { id: "fitness", label: "Fitness & Yoga" },
  ]},
  { id: "pros", label: "Professional & Creative", subs: [
    { id: "accounting-tax", label: "Accounting & Tax" },
    { id: "print-design", label: "Print & Design" },
    { id: "photography", label: "Photography" },
  ]},
  { id: "pets", label: "Pets", subs: [
    { id: "pet-grooming", label: "Grooming & Pet Care" },
  ]},
  { id: "makers", label: "Makers & Manufacturing", subs: [
    { id: "woodworking-furniture", label: "Woodworking & Furniture" },
    { id: "metal-fabrication", label: "Metal Fabrication & Welding" },
    { id: "textiles-apparel", label: "Textiles & Apparel" },
    { id: "ceramics-glass", label: "Ceramics & Glass" },
    { id: "machining-contract", label: "Machining & Contract Manufacturing" },
    { id: "signs-displays", label: "Signs & Displays" },
    { id: "soaps-candles", label: "Soaps, Candles & Body Care" },
  ]},
  { id: "retail", label: "Local Retail", subs: [
    { id: "bookstores", label: "Bookstores" },
    { id: "florists", label: "Florists" },
    { id: "bike-shops", label: "Bike Shops" },
    { id: "hardware", label: "Hardware & Supply" },
  ]},
];

window.LOCAL_DATA.areas = [
  { id: "boston", label: "Boston", hoods: [
    { id: "back-bay", label: "Back Bay" },
    { id: "south-end", label: "South End" },
    { id: "north-end", label: "North End" },
    { id: "jamaica-plain", label: "Jamaica Plain" },
    { id: "dorchester", label: "Dorchester" },
    { id: "east-boston", label: "East Boston" },
  ]},
  { id: "cambridge", label: "Cambridge", hoods: [
    { id: "harvard-sq", label: "Harvard Square" },
    { id: "central-sq", label: "Central Square" },
    { id: "inman-sq", label: "Inman Square" },
    { id: "kendall-sq", label: "Kendall Square" },
  ]},
  { id: "somerville", label: "Somerville", hoods: [
    { id: "davis-sq", label: "Davis Square" },
    { id: "union-sq", label: "Union Square" },
    { id: "assembly-sq", label: "Assembly Square" },
  ]},
  { id: "brookline", label: "Brookline", hoods: [
    { id: "coolidge-corner", label: "Coolidge Corner" },
    { id: "brookline-village", label: "Brookline Village" },
  ]},
  { id: "quincy", label: "Quincy", hoods: [
    { id: "quincy-center", label: "Quincy Center" },
    { id: "wollaston", label: "Wollaston" },
  ]},
  { id: "everett", label: "Everett", hoods: [
    { id: "everett-sq", label: "Everett Square" },
    { id: "glendale", label: "Glendale" },
  ]},
];

window.LOCAL_DATA.tags = [
  "Family-owned", "Woman-owned", "Veteran-owned", "BIPOC-owned", "LGBTQ+-owned",
  "Immigrant-owned", "Eco-friendly", "Custom orders", "Wholesale available",
  "Free estimates", "Emergency service", "Delivery", "Wheelchair accessible",
  "Licensed & insured",
];
