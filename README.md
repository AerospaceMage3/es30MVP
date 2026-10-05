# Storefront — local small-business directory (MVP)

A neighborhood directory that markets independent businesses for owners who don't have the time or
skills for websites and SEO. Shoppers filter by area (city → neighborhood) and by granular category,
browse ad-style listings, and read/write reviews — including for trades and makers that no review
site covers today.

## Run it

No build step or dependencies. Serve the folder with any static server:

```bash
python3 -m http.server 5317
```

Then open http://localhost:5317.

## What's here

| Path | Purpose |
| --- | --- |
| `index.html` | Shell: header, search, area picker, script includes |
| `assets/app.js` | Hash router + all pages (home, browse, business, reviews, saved, join) |
| `assets/styles.css` | Design system — neutral chrome so each business's brand colors lead |
| `assets/icons.js` | Line illustrations per subcategory (used for ad art, no stock photos needed) |
| `data/taxonomy.js` | 8 category groups / 32 subcategories, 6 cities / 19 neighborhoods, attribute tags |
| `data/*.js` | 47 fictional businesses with ads, offerings, selling points, and 239 reviews |
| `data/SCHEMA.md` | Record format — follow it to add businesses |

## Features

- **Browse**: faceted filters (area, category, rating, price, open now, current deals, owner/attribute
  tags) with live counts, six sort orders, shareable URLs, mobile filter drawer.
- **Business pages**: brand-colored hero, current ads, "why locals choose them", priced
  offerings/menu, owner story, hours with live open/closed status, contact & service area.
- **Reviews**: rating histogram (click to filter), sort, search within reviews, owner replies,
  "helpful" votes, and a validated write-a-review form.
- **Saved list** and a **List your business** page for owners.

## MVP limitations

User-submitted reviews, helpful votes, saved businesses, and owner sign-ups are stored in the
browser's `localStorage` — they aren't shared between users. A real launch needs a backend
(database + auth + review moderation).
