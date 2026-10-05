# Business record schema (for data/*.js files)

Each data file is plain browser JS (no modules) and must look like:

```js
window.LOCAL_DATA = window.LOCAL_DATA || { businesses: [] };
window.LOCAL_DATA.businesses.push(
  { ...business },
  { ...business },
);
```

Valid ids for `category`, `subcategory`, `city`, `neighborhood`, and `tags` are in data/taxonomy.js.
The neighborhood must belong to the city. All businesses are FICTIONAL (invented names, no real
businesses or real people). Today's date is 2026-10-04.

```js
{
  id: "kebab-case-unique-id",            // globally unique, derived from name
  name: "Business Name",
  tagline: "Short, punchy line in the owner's voice (<= 70 chars)",
  category: "food",                       // group id from taxonomy
  subcategory: "bakeries-cafes",          // sub id belonging to that group
  city: "cambridge",
  neighborhood: "central-sq",
  address: "412 Massachusetts Ave, Cambridge, MA 02139", // plausible street, correct ZIP for the area
  phone: "(617) 555-0142",                // ALWAYS 555-01xx (fictional range); area code 617/781/857
  email: "hello@businessname.example",    // always the .example TLD
  website: null,                          // MOST businesses have null (that's the point of the product); ~20% may have "businessname.example"
  founded: 1994,
  owner: "Maria Alvarez",                 // invented person
  ownerTitle: "Owner & head baker",
  priceLevel: 2,                          // 1-4  ($ … $$$$)
  serviceArea: null,                      // string for mobile/on-site trades, e.g. "Cambridge, Somerville & Arlington"; else null
  hours: ["7am–3pm","7am–3pm","7am–3pm","7am–3pm","7am–4pm","8am–4pm","Closed"], // Mon..Sun; "Closed", "By appointment", or "24/7 emergency" allowed
  tags: ["Family-owned", "Custom orders"],// 2-4 tags from the taxonomy tag list ONLY
  brand: { primary: "#2F4B3A", accent: "#E8B04B" }, // primary: deep/saturated, white text must be readable on it. accent: lighter complementary pop color. Make every business distinct.
  featured: false,                        // ~1 in 4 true
  story: "2–4 sentences: who they are, history, what makes them special. Warm, specific, concrete details.",
  sellingPoints: [                        // exactly 3 or 4
    { title: "Short headline (2–5 words)", text: "One sentence of concrete detail." },
  ],
  offerings: [                            // 4–6 products/services with real-feeling prices
    { name: "Cardamom morning bun", description: "One short sentence.", price: "$4.75" }, // price like "$4.75", "From $180", "$95/hr", or "Free quote"
  ],
  ads: [                                  // 1–3 advertisements/promotions the platform runs for them
    {
      kind: "promo",                      // one of: "promo" | "spotlight" | "seasonal" | "new"
      headline: "Ad headline, punchy (<= 48 chars)",
      body: "1–2 sentence ad copy that sells the product.",
      offer: "15% off your first order",  // short offer badge text, or null for pure spotlight ads
      cta: "Call to order",               // short call to action
      expires: "2026-11-30"               // between 2026-10-15 and 2027-01-31, or null
    }
  ],
  reviews: [                              // 4–7 reviews, newest-to-oldest not required
    {
      author: "Jen K.",                   // first name + last initial
      rating: 5,                          // 1–5 integer. Realistic mix: mostly 4–5, some 3s, occasional 1–2 across the dataset
      date: "2026-08-14",                 // between 2024-01-01 and 2026-10-01
      title: "Short review title",
      text: "2–5 sentences, specific, written like a real customer (mention the job/product, timing, price, staff by first name).",
      context: "Water heater replacement", // what they bought/hired for
      helpful: 7,                         // 0–40
      ownerReply: null                    // or a 1–2 sentence reply from the owner (include on ~1/3 of reviews, ALWAYS on reviews rated <= 3)
    }
  ]
}
```

Quality bar: this is the showcase dataset for a small-business directory MVP. Copy should feel
like real, lovingly-run local businesses — specific, human, varied voices; no generic filler.
Vary cities/neighborhoods across your batch. Make ad copy genuinely compelling.
