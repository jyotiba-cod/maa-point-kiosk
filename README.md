# Pampers Maa Point — clickable kiosk prototype

A touchscreen prototype of the **Maa Point** newborn-care and vending kiosk that sits outside a postnatal
ward in a government hospital in Bihar. Plain HTML, CSS and JavaScript — no build step, no frameworks,
no backend, no internet needed.

> **This is a demo.** No real payments, no real data collection. Nothing is stored or sent anywhere.

---

## 1. How to run it

1. Keep all the files together in one folder.
2. Double-click **`index.html`** (or drag it into Chrome, Edge, Safari or Firefox).

That's it. It works offline. It is designed for a landscape tablet at **1280 × 800** and scales itself to fit
any window, so it also works on a laptop.

To leave the demo, the screen returns to the attract screen by itself after 60 seconds without a touch.

### Files

| File | What it holds |
|---|---|
| `index.html` | The page shell (header, screen area, footer). |
| `strings.js` | **All text**, in Hindi, English, Bhojpuri and Maithili. |
| `products.js` | **All products and prices**, plus the sample numbers for the operator panel. |
| `tips.js` | The five newborn-care sequences (which pictures, in what order). Words are in `strings.js`. |
| `icons.js` | All pictures (inline SVG): icons, product illustrations, the decorative fake QR. |
| `app.js` | Screens, flow, timers, operator panel. Settings (timeouts etc.) are at the top. |
| `styles.css` | Colours (variables at the top), sizes, animations. |

### The flow

Idle → Language → Home → **Products → Payment (UPI / Cash) → Dispensing → Thank you → optional WhatsApp**
· Home → **Tips** (5 cards, each an animated 3–4 slide sequence) · Home → **WhatsApp** consent → keypad → success
· **Help** (helpline, report a problem) from most screens. Language can be switched from every screen (top right).

### Hidden operator panel

Tap the **top-right corner of the screen five times** (within 3 seconds). It shows sample stock levels, sales
today, tips viewed and sign-ups, labelled **SAMPLE DATA**. Purchases, tips and sign-ups you make during the
demo are added to the sample numbers so the panel feels alive. **Reset demo** clears them; reloading the page
also clears them. (Nothing is saved to the browser.)

---

## 2. How to change text and prices

### Prices — `products.js`
Each product has `mrp` (struck through) and `price` (programme price). Change the numbers, save, refresh.
The "Save ₹X" chip is worked out automatically. While `PRICES_ARE_PLACEHOLDERS = true`, each product shows a
"PLACEHOLDER PRICE" tag — set it to `false` once real prices are agreed.

### Text — `strings.js`
Find the key (e.g. `tile1`, `msg3`, `tip_cord_2`) and edit the words for the language you want. Keys are
grouped by screen. `{n}` `{a}` `{b}` are filled in by the code — leave them in place. If a key is missing in a
language, English is shown.

| To change… | Edit these keys |
|---|---|
| Rotating Health Department strip on Home | `msg1` … `msg5` (to add a sixth, add `msg6` in every language and raise `MSG_COUNT` at the top of `app.js`) |
| Product names / descriptions | `prod_<id>_name`, `prod_<id>_desc` |
| Tip slide wording | `tip_<id>_1` … `tip_<id>_4` |
| WhatsApp consent wording | `waP1` … `waP4` |
| Helpline text | `helplineLabel`, `helplineNote` (the number itself is `helplineNumber` in the `en` block) |

### Other tweaks
* **Timers** — top of `app.js` (`CONFIG`): idle timeout, tip slide length, strip rotation speed.
* **Colours** — top of `styles.css` (`:root`).
* **Add/remove a product** — add an entry in `products.js` and the two text keys per language in `strings.js`.
* **Add/remove a tip slide** — edit the `slides` list in `tips.js` and the numbered keys in `strings.js`.

### Languages
Hindi is the default (and the language the kiosk returns to when idle). **The Bhojpuri and Maithili text is a
draft** — it must be reviewed by a native speaker before any public use (this is also noted at the top of
`strings.js`). Health content in *all* languages should also be reviewed by the Department before real use.

Devanagari uses a system-font stack (Noto Sans Devanagari, Nirmala UI, Mangal, Kohinoor…), so it renders offline
on Android, Windows and iPad. To bundle a font, put a `.ttf` in a `fonts/` folder and add an `@font-face` in
`styles.css`.

---

## 3. Putting it on a tablet in full-screen kiosk mode

First copy the whole folder onto the tablet (USB, cloud drive, or email a zip and unzip it).

**Android tablet (simplest and most robust): Fully Kiosk Browser**
1. Install *Fully Kiosk Browser* from the Play Store.
2. Set the Start URL to `file:///storage/emulated/0/maa-point-kiosk/index.html` (wherever you put the folder;
   allow file access when asked).
3. Turn on *Kiosk Mode* (hides the navigation bar, locks the app), *Keep Screen On*, and *Enable Pull-to-refresh: off*.

**Android — Chrome only**
Open `index.html` in Chrome → menu → **Add to Home screen**, open it from there, then use Android's *Screen pinning*
(Settings → Security → App pinning) to lock it. Or use Chrome's full-screen (menu → ⛶).

**iPad**
Safari cannot open a local `index.html` directly, so open the folder with a file-browser app that has a built-in
web viewer (for example *Documents by Readdle*), or host the folder on any web page for the day (it still runs
offline once loaded and added to the Home Screen). Then turn on **Guided Access** (Settings → Accessibility → Guided Access), start it inside the app, and triple-click
the side button. Guided Access stops visitors leaving the page.

**Windows / Linux / Mac touchscreen or laptop**
Chrome or Edge in kiosk mode:
```
chrome --kiosk file:///C:/maa-point-kiosk/index.html
msedge --kiosk file:///C:/maa-point-kiosk/index.html
```
Press `Alt+F4` (Windows) or `Cmd+Q` (Mac) to exit. For a quick demo without kiosk mode, press `F11` for full screen.

Tips for the demo day: charge the tablet, set screen timeout to *never*, turn on Do Not Disturb, disable
auto-rotate (landscape), and open the page once before the meeting to check it.

---

## 4. Safeguards built in (from the programme document, slide 12)

* **Buying is always optional.** The products, payment and thank-you screens all say so, and no screen links any
  free government service to a purchase.
* **Diapers and wipes only.** No infant formula, feeding bottles or teats appear in the products, pictures or text
  (IMS Act). All health content supports exclusive breastfeeding for 6 months.
* **Opt-in data only.** The WhatsApp consent screen states what she will receive, that her number is never sold or
  shared, and that she can stop any time. "I agree" and "No thanks" are identical in size, colour and weight.
* **Nothing is stored or sent.** No cookies, no `localStorage`, no network requests. The keypad number is discarded
  the moment "Send me tips" is tapped. Demo counters live in memory only.
* **MRP and programme price are both shown** on every product.
* **Help** with a helpline on the unit, plus "Report a problem".

---

## 5. Placeholders to replace before a real demo

| # | Placeholder | Where | Replace with |
|---|---|---|---|
| 1 | **Pampers logo** area (dashed box, top-left) | `strings.js` (`logoP`, `logoPSub`) and `app.js` `renderHeader()` | The official logo image, supplied by P&G under brand guidelines. Do not redraw it. |
| 2 | **Department of Health, Bihar logo** area (dashed box) | `strings.js` (`logoD`, `logoDSub`) and `app.js` `renderHeader()` | The official logo, supplied by the Department. |
| 3 | **All prices** (MRP and programme price) | `products.js` | Agreed price points (slide A3 of the deck); then set `PRICES_ARE_PLACEHOLDERS = false`. |
| 4 | **Product pictures** (generic illustrations, "NEWBORN" label) | `icons.js` → `productArt` | Real pack shots once approved. |
| 5 | **Pack contents / sizes** in product names and descriptions | `strings.js` (`prod_*`) | Actual SKUs and the First Night pack contents. |
| 6 | **Helpline number** `1800-XXX-XXXX` | `strings.js` (`helplineNumber`) | The real toll-free number (and remove the placeholder chip text `helplinePlaceholder`). |
| 7 | **UPI QR code** — a decorative pattern that cannot be scanned | `icons.js` → `fakeQR` | A real QR/payment integration (out of scope for the prototype). |
| 8 | **Bhojpuri and Maithili text** (drafts) | `strings.js` | Native-speaker-reviewed text. |
| 9 | **Health messages and tip content** (written for the prototype from general public-health guidance) | `strings.js` (`msg*`, `tip_*`) | Department-approved wording; the programme requires joint approval of all screen content. |
| 10 | **WhatsApp consent wording** ("1–2 messages a week", coupon mention) | `strings.js` (`waP1`–`waP4`) | Final wording checked against the DPDP Act 2023 and the actual messaging plan. |
| 11 | **Sample operator-panel numbers** | `products.js` (`SAMPLE_STATS`, `stockSample`) | Live data from a real back end (not part of this prototype). |
| 12 | **"PROTOTYPE" badge** | `strings.js` (`prototype`) | Remove (`renderFooter()` in `app.js`) only when it is no longer a prototype. |
| 13 | **Payment "DEMO" banners** | `strings.js` (`demoBanner`, `demoBannerLocal`), `app.js` | Remove only when real payments exist. |
