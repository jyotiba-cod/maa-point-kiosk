/* ==========================================================================
   icons.js — all pictures are inline SVG drawn here, so nothing is downloaded
   and the kiosk works fully offline.

     icon(name, size)   simple line icon (uses the current text colour)
     productArt(name)   coloured product illustrations (generic — NOT branded)
     fakeQR(seed)       a decorative, NON-SCANNABLE QR-style pattern for the demo
   ========================================================================== */

(function () {
  // 24x24 line icons. Each value is SVG path markup.
  const P = {
    baby:  '<circle cx="12" cy="10" r="6"/><path d="M9.5 11.5c.8 1 4.2 1 5 0M9.6 8.6h.01M14.4 8.6h.01M12 4c0-1.2 1-2 2.2-2"/><path d="M5 22c0-3.5 3-5.5 7-5.5s7 2 7 5.5"/>',
    mother:'<circle cx="8.5" cy="6" r="3.2"/><path d="M2.5 21c0-4.2 2.6-7 6-7 2 0 3.6.9 4.7 2.4"/><circle cx="17.5" cy="12.5" r="2.4"/><path d="M14 21.5c.3-2.8 1.6-4.5 3.5-4.5s3.2 1.700 3.500 4.500"/><path d="M11 14.500c1.500 1 3.500 1.200 5 .5"/>',
    drop:  '<path d="M12 3c3 4.500 6 7.500 6 11a6 6 0 0 1-12 0c0-3.500 3-6.500 6-11z"/>',
    hand:  '<path d="M8 13V6.500a1.500 1.500 0 0 1 3 0V11M11 10.500V4.500a1.500 1.500 0 0 1 3 0V10.500M14 10.500V5.500a1.500 1.500 0 0 1 3 0V14"/><path d="M8 13l-1.400-1.900a1.500 1.500 0 0 0-2.400 1.800L8 18.500a6 6 0 0 0 5 2.500h1a5 5 0 0 0 5-5v-2"/>',
    bubbles:'<circle cx="8" cy="15" r="4.500"/><circle cx="17" cy="9" r="3.200"/><circle cx="14" cy="18.500" r="2"/><circle cx="7" cy="6" r="1.500"/>',
    diaper:'<path d="M3 6h18v3.500c0 5.500-3.500 9-5.700 9-1.500 0-2-1-3.300-1s-1.800 1-3.300 1C6.500 18.500 3 15 3 9.500z"/><path d="M3 6l2.500 3.500M21 6l-2.500 3.500"/>',
    pack:  '<path d="M6 6h12l1.500 3v11.500h-15V9z"/><path d="M8 6V3.500h8V6"/><path d="M12 17s-3-1.800-3-4a1.800 1.800 0 0 1 3-1.200A1.800 1.800 0 0 1 15 13c0 2.200-3 4-3 4z"/>',
    wipes: '<path d="M4 10h16v10.500H4z"/><path d="M6 10V7h12v3"/><path d="M12 7c0-2 1.800-3.500 4-3.500"/>',
    gift:  '<path d="M4 11h16v10H4zM3 7.500h18V11H3zM12 7.500V21"/><path d="M12 7.500c-1.500-3.500-5.500-3-5.500-.8s3.700 1 5.500.8zM12 7.500c1.500-3.500 5.500-3 5.500-.8s-3.700 1-5.500.8z"/>',
    heart: '<path d="M12 20.500s-8.500-5-8.500-11.200A4.600 4.600 0 0 1 12 6.700a4.600 4.600 0 0 1 8.500 2.600C20.500 15.500 12 20.500 12 20.500z"/>',
    sun:   '<circle cx="12" cy="12" r="4"/><path d="M12 2.500v2.500M12 19v2.500M2.500 12H5M19 12h2.500M5.300 5.300l1.800 1.800M16.900 16.900l1.800 1.800M5.300 18.700l1.800-1.800M16.900 7.100l1.800-1.800"/>',
    moon:  '<path d="M20 14.500A8.500 8.500 0 1 1 9.500 4a7 7 0 0 0 10.500 10.500z"/>',
    shield:'<path d="M12 3l8 3v6c0 5-3.500 8-8 9.500C7.500 20 4 17 4 12V6z"/><path d="M8.500 12l2.500 2.500 4.500-5"/>',
    phone: '<rect x="7" y="2.500" width="10" height="19" rx="2"/><path d="M11 18.500h2"/>',
    chat:  '<path d="M4 5h16v11.500h-9.500L5.500 20.500v-4H4z"/><path d="M8 9.500h8M8 12.500h5"/>',
    syringe:'<path d="M14.500 4l5.500 5.500M16.500 6l-9.500 9.500-1 4.500 4.500-1L20 9.500M4 20l3-3M12 8l4 4"/>',
    calendar:'<rect x="3.500" y="5" width="17" height="15.500" rx="2"/><path d="M3.500 10h17M8 2.500v4M16 2.500v4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.500l3.500 2"/>',
    check: '<path d="M4.500 12.500l5 5L19.500 7"/>',
    cross: '<path d="M6 6l12 12M18 6L6 18"/>',
    rupee: '<path d="M7 4.500h10.500M7 9h10.500M9 4.500c6 0 6 8.500 0 8.500H7l8.500 7.500"/>',
    coin:  '<circle cx="12" cy="12" r="8.500"/><circle cx="12" cy="12" r="5.500"/>',
    note:  '<rect x="2" y="6.500" width="20" height="11" rx="1.500"/><circle cx="12" cy="12" r="2.600"/><path d="M5.500 9.500h.01M18.500 14.500h.01"/>',
    home:  '<path d="M3.500 11L12 3.500l8.500 7.500V20.500h-17z"/><path d="M10 20.500v-6h4v6"/>',
    back:  '<path d="M15 5l-7 7 7 7"/>',
    fwd:   '<path d="M9 5l7 7-7 7"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.500 3.500 3.500 14.500 0 18M12 3c-3.500 3.500-3.500 14.500 0 18"/>',
    help:  '<circle cx="12" cy="12" r="9"/><path d="M9.500 9.500a2.600 2.600 0 1 1 3.600 2.400c-.8.400-1.100 1-1.100 1.800M12 17h.01"/>',
    alert: '<path d="M12 3.500l9.500 17h-19z"/><path d="M12 10v4.500M12 17.500h.01"/>',
    play:  '<path d="M8 5l11 7-11 7z"/>',
    pause: '<path d="M8.500 5v14M15.500 5v14"/>',
    lock:  '<rect x="5.500" y="11" width="13" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    qr:    '<rect x="3.500" y="3.500" width="6" height="6"/><rect x="14.500" y="3.500" width="6" height="6"/><rect x="3.500" y="14.500" width="6" height="6"/><path d="M14.500 14.500h2v2M20.500 14.500v6h-6M17.500 17.500h.01"/>',
    book:  '<path d="M3.500 5.500c3-1 6-.8 8.500 1.200 2.500-2 5.500-2.200 8.500-1.200v13.500c-3-1-6-.8-8.500 1.200-2.500-2-5.500-2.200-8.500-1.200z"/><path d="M12 6.700v13.500"/>',
    bin:   '<path d="M4.500 7h15M9 7V4h6v3M6.500 7l1 14h9l1-14"/>',
    thermo:'<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 9v7"/>',
    wind:  '<path d="M3 9h11a3 3 0 1 0-3-3M3 15h15a3 3 0 1 1-3 3M3 12h8"/>',
    medical:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>',
    hospital:'<path d="M4.500 21V6h15v15M2.500 21h19M12 9v6M9 12h6"/>',
    sparkle:'<path d="M12 3l2.200 6.300L20.500 11.500l-6.300 2.200L12 20l-2.200-6.300L3.500 11.500 9.800 9.300z"/>',
    arrowDown:'<path d="M12 4v15M5.500 12.500l6.500 6.500 6.500-6.500"/>',
    video: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.500l5 2.500-5 2.500z"/>',
    refresh:'<path d="M20 12a8 8 0 1 1-2.500-5.800M20 4v5h-5"/>',
    milk:  '<path d="M12 21s-6.500-4-6.500-9.200a3.600 3.600 0 0 1 6.500-2.100 3.600 3.600 0 0 1 6.500 2.100C18.500 17 12 21 12 21z"/><path d="M12 9.500V6"/>',
    ban:   '<circle cx="12" cy="12" r="9"/><path d="M5.600 5.600l12.800 12.800"/>',
    del:   '<path d="M9 5h11.500v14H9L3 12z"/><path d="M12.500 9.500l5 5M17.500 9.500l-5 5"/>',
    user:  '<circle cx="12" cy="8" r="4"/><path d="M4.500 21c0-4 3.400-6.500 7.500-6.500s7.500 2.500 7.500 6.500"/>',
    door:  '<path d="M6 21V4h12v17M3.500 21h17M14.500 12.500h.01"/>',
    bandaid:'<rect x="2.500" y="8.500" width="19" height="7" rx="3.500" transform="rotate(-35 12 12)"/><path d="M10 10l4 4"/>'
  };

  window.icon = function (name, size, cls) {
    const s = size || 32;
    return '<svg class="ic ' + (cls || '') + '" width="' + s + '" height="' + s +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || '') + '</svg>';
  };

  /* Coloured, generic product illustrations (160x160). Deliberately unbranded:
     replace with real pack shots when the official artwork is available. */
  const diaperShape = function (x, y, s, fill, stroke) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
      '<path d="M4 10h72v12c0 26-16 46-30 46-6 0-8-5-6-5s-2 5-8 5C18 68 4 48 4 22z" fill="' + fill + '" stroke="' + stroke + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M4 10l12 20M76 10L64 30" stroke="' + stroke + '" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="4" y="10" width="72" height="9" fill="#F2A33A" opacity=".9"/>' +
      '<ellipse cx="14" cy="27" rx="7" ry="4" fill="#E9765B" transform="rotate(35 14 27)"/><ellipse cx="66" cy="27" rx="7" ry="4" fill="#E9765B" transform="rotate(-35 66 27)"/>' +
      '<path d="M40 40s-9-5-9-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 11-9 11z" fill="#fff" opacity=".85"/></g>';
  };

  const ART = {
    diaper: '<svg viewBox="0 0 160 160" aria-hidden="true">' + diaperShape(28, 40, 1.25, '#FFFFFF', '#0F7C7C') + '</svg>',
    packDiaper:
      '<svg viewBox="0 0 160 160" aria-hidden="true">' +
      '<path d="M34 24c10 4 82 4 92 0l6 118c-14 8-90 8-104 0z" fill="#12898A" stroke="#0B5A5E" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M34 24c10 4 82 4 92 0" fill="none" stroke="#0B5A5E" stroke-width="3"/>' +
      '<path d="M40 30c10 3 70 3 80 0M40 136c10 4 70 4 80 0" stroke="#fff" stroke-opacity=".5" stroke-width="2" fill="none"/>' +
      '<circle cx="80" cy="80" r="34" fill="#fff"/>' + diaperShape(52, 60, .7, '#E6F4F3', '#0F7C7C') +
      '<rect x="46" y="112" width="68" height="14" rx="7" fill="#F2A33A"/>' +
      '<text x="80" y="122.500" text-anchor="middle" font-size="9" font-weight="700" fill="#5a3300" font-family="sans-serif">NEWBORN</text></svg>',
    wipes:
      '<svg viewBox="0 0 160 160" aria-hidden="true">' +
      '<rect x="26" y="66" width="108" height="76" rx="14" fill="#FFFFFF" stroke="#0F7C7C" stroke-width="3"/>' +
      '<rect x="26" y="66" width="108" height="24" rx="10" fill="#12898A"/>' +
      '<path d="M50 66V52c0-6 4-10 10-10h40c6 0 10 4 10 10v14" fill="#E6F4F3" stroke="#0F7C7C" stroke-width="3"/>' +
      '<path d="M80 42c0-16 10-26 30-26" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round"/>' +
      '<path d="M80 42c0-16 10-26 30-26" fill="none" stroke="#F2A33A" stroke-width="5" stroke-linecap="round"/>' +
      '<circle cx="80" cy="116" r="16" fill="#E6F4F3"/><path d="M80 126s-10-6-10-13a5.500 5.500 0 0 1 10-3 5.500 5.500 0 0 1 10 3c0 7-10 13-10 13z" fill="#E9765B"/></svg>',
    giftPack:
      '<svg viewBox="0 0 160 160" aria-hidden="true">' +
      '<rect x="24" y="66" width="112" height="76" rx="8" fill="#12898A" stroke="#0B5A5E" stroke-width="3"/>' +
      '<rect x="18" y="48" width="124" height="26" rx="8" fill="#0F7C7C" stroke="#0B5A5E" stroke-width="3"/>' +
      '<rect x="70" y="48" width="20" height="94" fill="#F2A33A"/>' +
      '<path d="M80 48c-8-24-38-26-38-10 0 12 28 12 38 10zM80 48c8-24 38-26 38-10 0 12-28 12-38 10z" fill="#F2A33A" stroke="#B9741A" stroke-width="3" stroke-linejoin="round"/>' +
      '<circle cx="80" cy="46" r="7" fill="#E9765B"/>' +
      '<g opacity=".95"><rect x="30" y="86" width="30" height="24" rx="5" fill="#fff"/><rect x="100" y="86" width="30" height="24" rx="5" fill="#fff"/></g>' +
      '</svg>'
  };
  window.productArt = function (name) { return ART[name] || ART.diaper; };

  /* Decorative QR-style block pattern. NOT a valid QR code — it cannot be scanned. */
  window.fakeQR = function (seed) {
    const N = 25, cell = 8, size = N * cell;
    let s = seed || 7;
    const rnd = function () { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
    const finder = function (x, y) {
      return '<rect x="' + x * cell + '" y="' + y * cell + '" width="' + 7 * cell + '" height="' + 7 * cell + '" fill="#17323A"/>' +
        '<rect x="' + (x + 1) * cell + '" y="' + (y + 1) * cell + '" width="' + 5 * cell + '" height="' + 5 * cell + '" fill="#fff"/>' +
        '<rect x="' + (x + 2) * cell + '" y="' + (y + 2) * cell + '" width="' + 3 * cell + '" height="' + 3 * cell + '" fill="#17323A"/>';
    };
    const inFinder = function (x, y) {
      return (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);
    };
    let out = '<svg viewBox="0 0 ' + size + ' ' + size + '" aria-hidden="true"><rect width="' + size + '" height="' + size + '" fill="#fff"/>';
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      if (!inFinder(x, y) && rnd() > 0.52)
        out += '<rect x="' + x * cell + '" y="' + y * cell + '" width="' + cell + '" height="' + cell + '" fill="#17323A"/>';
    }
    return out + finder(0, 0) + finder(N - 7, 0) + finder(0, N - 7) + '</svg>';
  };
})();
