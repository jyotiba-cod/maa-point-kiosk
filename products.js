/* ==========================================================================
   products.js — ALL products and prices live here.

   ★ EVERY PRICE BELOW IS A PLACEHOLDER for demo purposes only. ★
   The kiosk shows a "PLACEHOLDER PRICE" tag on each product while
   PRICES_ARE_PLACEHOLDERS is true. Set it to false once real prices are agreed.

   Product NAMES and DESCRIPTIONS are text, so they live in strings.js
   (keys: prod_<id>_name and prod_<id>_desc). To add a product, add an entry
   here AND those two keys in every language in strings.js.

   Safeguard (IMS Act): only diapers, wipes and pack combinations of those may
   be listed here. Nothing that substitutes for breast milk, ever.
   ========================================================================== */

window.CURRENCY = "₹";
window.PRICES_ARE_PLACEHOLDERS = true;

window.PRODUCTS = [
  {
    id: "small",          // matches prod_small_name / prod_small_desc in strings.js
    art: "packDiaper",    // which illustration to draw (see icons.js -> productArt)
    mrp: 149,             // printed Maximum Retail Price (struck through on screen)
    price: 129,           // programme price (what the family pays)
    stockSample: 38,      // sample stock shown in the operator panel
    stockCapacity: 60
  },
  {
    id: "single",
    art: "diaper",
    mrp: 25,
    price: 19,
    stockSample: 112,
    stockCapacity: 150
  },
  {
    id: "wipes",
    art: "wipes",
    mrp: 99,
    price: 85,
    stockSample: 24,
    stockCapacity: 60
  },
  {
    id: "firstnight",
    art: "giftPack",
    mrp: 299,
    price: 249,
    stockSample: 9,
    stockCapacity: 40
  }
];

/* Sample numbers for the hidden operator panel (clearly labelled "Sample data").
   Live taps during the demo are added on top of these; "Reset demo" clears them. */
window.SAMPLE_STATS = {
  salesToday: 17,
  revenueToday: 1893,   // in rupees
  tipsViewed: 63,
  signups: 11
};
