/* ==========================================================================
   app.js — screens, flow, timers and the hidden operator panel.

   Nothing here stores or sends data. All counters live in memory only and
   vanish when the page is reloaded. No localStorage, no cookies, no network.

   Text  -> strings.js      Products/prices -> products.js
   Icons -> icons.js        Tip sequences   -> tips.js
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------ settings */
  var CONFIG = window.KIOSK_CONFIG = {
    idleMs: 60000,          // back to the attract screen after this much inactivity
    tipMs: 7500,            // how long each tip slide stays before auto-advancing
    stripMs: 6500,          // how often the Health Department strip rotates
    dispenseSettleMs: 4300, // when the dispensing animation is considered finished
    dispenseAutoMs: 14000,  // auto-continue to Thank-you if nobody taps
    opTaps: 5,              // taps on the top-right corner to open the operator panel
    opTapWindowMs: 3000     // ...within this time
  };
  var LANGS = ['hi', 'en', 'bh', 'mai'];
  var MSG_COUNT = 5;

  /* --------------------------------------------------------------- state */
  var state = {
    lang: 'hi', screen: 'idle',
    product: null, payMethod: null, payPhase: null,
    tip: null, waFrom: 'home', phone: '', report: null,
    stripIdx: 0, dispSettled: false
  };
  var live = null;           // demo counters added on top of SAMPLE_STATS
  resetLive();

  function resetLive() {
    live = { sales: 0, revenue: 0, tips: 0, signups: 0, sold: {}, tipsBy: {} };
  }

  /* ------------------------------------------------------------- helpers */
  var $ = function (id) { return document.getElementById(id); };
  var elScreen = $('screen'), elHdr = $('hdr'), elFtr = $('ftr'), elOv = $('overlay'), elStage = $('stage');

  function t(key, vars) {
    var table = window.STRINGS[state.lang] || {};
    var s = table[key];
    if (s === undefined) s = window.STRINGS.en[key];
    if (s === undefined) return key;
    if (vars) for (var k in vars) s = s.replace('{' + k + '}', vars[k]);
    return s;
  }
  var money = function (n) { return window.CURRENCY + n; };
  var product = function (id) { return window.PRODUCTS.filter(function (p) { return p.id === id; })[0]; };
  var tipDef = function (id) { return window.TIPS.filter(function (p) { return p.id === id; })[0]; };

  var timers = [];
  function later(fn, ms) { var id = setTimeout(fn, ms); timers.push(id); return id; }
  function every(fn, ms) { var id = setInterval(fn, ms); timers.push(id); return id; }
  function clearTimers() { timers.forEach(function (id) { clearTimeout(id); clearInterval(id); }); timers = []; }

  /* ------------------------------------------------ stage scaling (1280x800) */
  function fit() {
    var s = Math.min(window.innerWidth / 1280, window.innerHeight / 800);
    elStage.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
  }
  window.addEventListener('resize', fit);

  /* --------------------------------------------------------- idle timeout */
  var idleTimer = null;
  function resetIdle() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (!elOv.hidden) { resetIdle(); return; }   // operator panel open: stay put
      if (state.screen !== 'idle') go('idle');
    }, CONFIG.idleMs);
  }
  ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
    document.addEventListener(ev, resetIdle, true);
  });

  /* ------------------------------------------------------ chrome (header) */
  function renderHeader() {
    var pills = LANGS.map(function (l) {
      var name = window.STRINGS[l].langName;
      return '<button class="lang-pill' + (l === state.lang ? ' on' : '') + '" data-action="setLang" data-lang="' + l +
        '" lang="' + (l === 'en' ? 'en' : 'hi') + '" aria-label="' + name + '" aria-pressed="' + (l === state.lang) + '">' +
        window.STRINGS[l].langShort + '</button>';
    }).join('');
    elHdr.innerHTML =
      '<div class="logos">' +
        '<div class="logo-ph" title="Placeholder"><b>' + t('logoD') + '</b><small>' + t('logoDSub') + '</small></div>' +
        '<div class="logo-ph" title="Placeholder"><b>' + t('logoP') + '</b><small>' + t('logoPSub') + '</small></div>' +
      '</div>' +
      '<div class="appname">' + icon('mother', 30) + '<span>' + t('appName') + '</span></div>' +
      '<div class="langs">' + icon('globe', 30, 'globe') + pills + '</div>' +
      '<button id="hot" tabindex="-1" aria-hidden="true"></button>';
  }

  /* ------------------------------------------------------ chrome (footer) */
  function navBtn(action, to, ic, label, cls) {
    return '<button class="nav-btn ' + (cls || '') + '" data-action="' + action + '"' + (to ? ' data-to="' + to + '"' : '') + '>' +
      icon(ic, 30) + '<span>' + label + '</span></button>';
  }
  function renderFooter() {
    var n = SCREENS[state.screen].nav ? SCREENS[state.screen].nav() : null;
    var html = '<div class="nav">';
    if (n) {
      if (n.back) html += navBtn('go', n.back, 'back', t('back'));
      if (n.home) html += navBtn('go', 'home', 'home', t('home'));
      if (n.help) html += navBtn('go', 'help', 'help', t('help'));
    }
    html += '</div><div class="badge" title="This is a demo prototype">' + t('prototype') + '</div>';
    elFtr.innerHTML = html;
    elFtr.classList.toggle('hidden-nav', !n);
  }

  /* ----------------------------------------------------- render + navigate */
  function render(animate) {
    var S = SCREENS[state.screen];
    elScreen.className = 'sc-' + state.screen;
    elScreen.innerHTML = '<section class="screen' + (animate === false ? ' no-anim' : '') +
      (state.dispSettled && state.screen === 'dispense' ? ' settled' : '') + '">' + S.render() + '</section>';
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'hi';
    renderHeader(); renderFooter();
    if (S.bind) S.bind();
  }

  function go(name) {
    clearTimers();
    state.screen = name;
    if (name === 'idle') {          // fresh start for the next visitor
      state.lang = 'hi'; state.product = null; state.payMethod = null; state.payPhase = null;
      state.tip = null; state.phone = ''; state.report = null; state.waFrom = 'home';
    }
    if (name === 'dispense') state.dispSettled = false;
    render();
    var S = SCREENS[name];
    if (S.enter) S.enter();
  }

  /* ================================================================ SCREENS
     Each screen has:  render() -> HTML string
                       nav()    -> which footer buttons to show (omit = none)
                       enter()  -> runs once when the screen opens (start timers)
                       bind()   -> runs after every render                       */
  var SCREENS = {};

  /* 1. Idle / attract ------------------------------------------------------- */
  SCREENS.idle = {
    render: function () {
      var bubbles = '';
      for (var i = 0; i < 9; i++) bubbles += '<i style="--i:' + i + '"></i>';
      return '<div class="idle" data-action="start">' +
        '<div class="bubbles">' + bubbles + '</div>' +
        '<div class="orb"><div class="ring"><span class="sun">' + icon('sun', 44) + '</span><span class="moon">' + icon('moon', 40) + '</span></div>' +
          '<div class="core">' + icon('mother', 150) + '<span class="pulse-heart">' + icon('heart', 46) + '</span></div></div>' +
        '<h1 class="idle-head">' + t('idleHead') + '</h1>' +
        '<p class="idle-sub">' + t('idleSub') + '</p>' +
        '<div class="touch-pill">' + icon('hand', 38) + '<span>' + t('idleTouch') + '</span></div>' +
      '</div>';
    }
  };

  /* 2. Language picker ------------------------------------------------------ */
  SCREENS.lang = {
    nav: function () { return { back: 'idle' }; },
    render: function () {
      var btns = LANGS.map(function (l) {
        return '<button class="lang-big' + (l === state.lang ? ' on' : '') + '" data-action="pickLang" data-lang="' + l + '">' +
          icon('globe', 52) + '<span class="ln">' + window.STRINGS[l].langName + '</span></button>';
      }).join('');
      return '<div class="pad center"><h2 class="title">' + t('langTitle') + '</h2><div class="lang-grid">' + btns + '</div></div>';
    }
  };

  /* 3. Home ----------------------------------------------------------------- */
  SCREENS.home = {
    nav: function () { return { help: true }; },
    render: function () {
      var tile = function (cls, ic, title, sub, action, to) {
        return '<button class="tile ' + cls + '" data-action="' + action + '"' + (to ? ' data-to="' + to + '"' : '') + '>' +
          '<span class="tile-ic">' + icon(ic, 96) + '</span><span class="tile-t">' + title + '</span>' +
          '<span class="tile-s">' + sub + '</span></button>';
      };
      var dots = '';
      for (var i = 1; i <= MSG_COUNT; i++) dots += '<i id="dot' + i + '" class="' + (i === state.stripIdx + 1 ? 'on' : '') + '"></i>';
      return '<div class="pad home">' +
        '<h2 class="title">' + t('homeTitle') + '</h2>' +
        '<div class="tiles">' +
          tile('t1', 'pack', t('tile1'), t('tile1Sub'), 'go', 'products') +
          tile('t2', 'video', t('tile2'), t('tile2Sub'), 'go', 'tips') +
          tile('t3', 'chat', t('tile3'), t('tile3Sub'), 'waStart') +
        '</div>' +
        '<div class="strip">' +
          '<div class="strip-label">' + icon('hospital', 34) + '<span>' + t('stripLabel') + '</span></div>' +
          '<div class="strip-msg"><span id="stripText">' + t('msg' + (state.stripIdx + 1)) + '</span></div>' +
          '<div class="strip-dots">' + dots + '</div>' +
        '</div></div>';
    },
    enter: function () {
      every(function () {
        var txt = $('stripText'); if (!txt) return;
        state.stripIdx = (state.stripIdx + 1) % MSG_COUNT;
        txt.classList.add('fade');
        later(function () {
          var el = $('stripText'); if (!el) return;
          el.textContent = t('msg' + (state.stripIdx + 1));
          el.classList.remove('fade');
          for (var i = 1; i <= MSG_COUNT; i++) { var d = $('dot' + i); if (d) d.className = (i === state.stripIdx + 1 ? 'on' : ''); }
        }, 350);
      }, CONFIG.stripMs);
    }
  };

  /* 4. Products ------------------------------------------------------------- */
  SCREENS.products = {
    nav: function () { return { back: 'home', home: true, help: true }; },
    render: function () {
      var cards = window.PRODUCTS.map(function (p) {
        return '<article class="pcard">' +
          '<div class="part">' + productArt(p.art) + '</div>' +
          '<h3>' + t('prod_' + p.id + '_name') + '</h3>' +
          '<p class="pdesc">' + t('prod_' + p.id + '_desc') + '</p>' +
          '<div class="prices"><div class="mrp"><span>' + t('mrp') + '</span> <s>' + money(p.mrp) + '</s></div>' +
            '<div class="price">' + money(p.price) + '</div>' +
            '<div class="plabel">' + t('progPrice') + '</div></div>' +
          '<div class="chips"><span class="chip save">' + t('save', { n: p.mrp - p.price }) + '</span>' +
            (window.PRICES_ARE_PLACEHOLDERS ? '<span class="chip ph">' + t('placeholderTag') + '</span>' : '') + '</div>' +
          '<button class="btn primary" data-action="buy" data-id="' + p.id + '">' + icon('rupee', 30) + '<span>' + t('buy') + '</span></button>' +
        '</article>';
      }).join('');
      return '<div class="pad prod">' +
        '<div class="ptop"><h2 class="title">' + t('prodTitle') + '</h2>' +
        '<div class="note">' + icon('shield', 30) + '<span>' + t('optionalNote') + '</span></div></div>' +
        '<div class="pgrid">' + cards + '</div></div>';
    }
  };

  /* 5. Payment -------------------------------------------------------------- */
  SCREENS.pay = {
    nav: function () { return state.payPhase ? null : { back: 'products', home: true, help: true }; },
    render: function () {
      var p = product(state.product);
      var left = '<aside class="summary"><div class="part">' + productArt(p.art) + '</div>' +
        '<h3>' + t('prod_' + p.id + '_name') + '</h3>' +
        '<div class="sum-line"><span>' + t('total') + '</span><b>' + money(p.price) + '</b></div>' +
        '<div class="sum-mrp">' + t('mrp') + ' <s>' + money(p.mrp) + '</s></div>' +
        '<div class="note small">' + icon('shield', 26) + '<span>' + t('optionalNote') + '</span></div></aside>';
      var demo = '<div class="demo-banner"><b>' + t('demoBanner') + '</b><span>' + t('demoBannerLocal') + '</span></div>';
      var right;
      if (state.payPhase === 'processing') {
        right = '<div class="paybox center-col"><div class="spinner"></div><h2>' + t('processing') + '</h2></div>';
      } else if (state.payPhase === 'paid') {
        right = '<div class="paybox center-col"><div class="okcircle">' + icon('check', 90) + '</div><h2>' + t('paid') + '</h2></div>';
      } else if (!state.payMethod) {
        right = '<div class="paybox"><h2 class="title">' + t('payTitle') + '</h2><div class="methods">' +
          '<button class="method" data-action="payMethod" data-m="upi">' + icon('qr', 84) + '<b>' + t('payUpi') + '</b><span>' + t('payUpiSub') + '</span></button>' +
          '<button class="method" data-action="payMethod" data-m="cash">' + icon('note', 84) + '<b>' + t('payCash') + '</b><span>' + t('payCashSub') + '</span></button>' +
          '</div></div>';
      } else if (state.payMethod === 'upi') {
        right = '<div class="paybox">' + demo + '<div class="upi-body">' +
          '<div class="qr">' + fakeQR(11) + '<div class="qr-mark">DEMO</div></div>' +
          '<div class="upi-side"><h3>' + t('payUpiSub') + '</h3><div class="amount">' + money(p.price) + '</div>' +
          '<button class="btn primary big" data-action="simPay">' + icon('check', 32) + '<span>' + t('simUpi') + '</span></button>' +
          '<button class="btn ghost" data-action="payChange">' + icon('refresh', 28) + '<span>' + t('changeMethod') + '</span></button></div></div></div>';
      } else {
        right = '<div class="paybox">' + demo + '<div class="upi-body">' +
          '<div class="cash-art">' +
            '<svg viewBox="0 0 300 250" aria-hidden="true">' +
            '<rect x="20" y="80" width="260" height="150" rx="20" fill="#0F7C7C"/>' +
            '<rect x="45" y="105" width="210" height="16" rx="8" fill="#062f31"/>' +
            '<rect x="45" y="150" width="84" height="56" rx="12" fill="#12898A" stroke="#7fd0cf" stroke-width="3"/>' +
            '<circle cx="86" cy="178" r="14" fill="none" stroke="#7fd0cf" stroke-width="3"/>' +
            '<rect x="150" y="150" width="105" height="56" rx="12" fill="#0B5A5E"/>' +
            '<text x="202" y="185" text-anchor="middle" font-size="26" fill="#fff" font-family="sans-serif">₹ ₹ ₹</text>' +
            '<g class="note-anim"><rect x="90" y="30" width="120" height="60" rx="6" fill="#F6D9A0" stroke="#B9741A" stroke-width="3"/>' +
            '<circle cx="150" cy="60" r="15" fill="none" stroke="#B9741A" stroke-width="3"/><text x="150" y="67" text-anchor="middle" font-size="20" fill="#B9741A" font-weight="700" font-family="sans-serif">₹</text></g>' +
            '<g class="coin-anim"><circle cx="232" cy="40" r="17" fill="#F2A33A" stroke="#B9741A" stroke-width="3"/><circle cx="232" cy="40" r="10" fill="none" stroke="#B9741A" stroke-width="2"/></g>' +
            '</svg></div>' +
          '<div class="upi-side"><h3>' + t('cashHint') + '</h3><div class="amount">' + money(p.price) + '</div>' +
          '<button class="btn primary big" data-action="simPay">' + icon('check', 32) + '<span>' + t('simCash') + '</span></button>' +
          '<button class="btn ghost" data-action="payChange">' + icon('refresh', 28) + '<span>' + t('changeMethod') + '</span></button></div></div></div>';
      }
      return '<div class="pad payw">' + left + right + '</div>';
    }
  };

  /* 6. Dispensing ----------------------------------------------------------- */
  SCREENS.dispense = {
    render: function () {
      var p = product(state.product);
      var pack = productArt(p.art).replace('<svg ', '<svg x="202" y="46" width="96" height="96" ');
      var shelf = function (y, cols) {
        var s = '<rect x="122" y="' + (y + 60) + '" width="256" height="8" rx="4" fill="#9fd3d1"/>';
        cols.forEach(function (c, i) {
          s += '<rect x="' + (140 + i * 62) + '" y="' + (y + 22) + '" width="46" height="38" rx="8" fill="' + c + '" opacity=".75"/>';
        });
        return s;
      };
      return '<div class="pad disp">' +
        '<div class="machine"><svg viewBox="0 0 500 500" aria-hidden="true">' +
          '<rect x="90" y="6" width="320" height="488" rx="30" fill="#0F7C7C"/>' +
          '<rect x="106" y="22" width="288" height="290" rx="18" fill="#E6F4F3" stroke="#0B5A5E" stroke-width="4"/>' +
          shelf(120, ['#12898A', '#F2A33A', '#E9765B', '#12898A']) + shelf(210, ['#F2A33A', '#12898A', '#12898A', '#E9765B']) +
          '<rect x="122" y="112" width="256" height="8" rx="4" fill="#9fd3d1"/>' +
          '<rect x="112" y="332" width="276" height="146" rx="20" fill="#062f31"/>' +
          '<rect x="122" y="342" width="256" height="126" rx="14" class="tray-glow" fill="#0B5A5E"/>' +
          '<g class="pack">' + pack + '</g>' +
          '<path d="M112 420h276v40a20 20 0 0 1-20 20H132a20 20 0 0 1-20-20z" fill="#0B5A5E" opacity=".92"/>' +
          '<rect x="140" y="440" width="220" height="10" rx="5" fill="#7fd0cf" opacity=".6"/>' +
          '<g class="sparks" fill="#F2A33A"><path d="M150 380l5 12 12 5-12 5-5 12-5-12-12-5 12-5z"/><path d="M350 370l4 9 9 4-9 4-4 9-4-9-9-4 9-4z"/><path d="M250 345l4 9 9 4-9 4-4 9-4-9-9-4 9-4z"/></g>' +
        '</svg></div>' +
        '<div class="disp-text">' +
          '<h2 class="d-1">' + t('dispTitle') + '</h2>' +
          '<div class="d-2"><div class="collect">' + icon('arrowDown', 72, 'bounce') + '<h2>' + t('collect') + '</h2></div>' +
          '<button class="btn primary big" data-action="collected">' + icon('check', 32) + '<span>' + t('collected') + '</span></button></div>' +
        '</div></div>';
    },
    enter: function () {
      later(function () { state.dispSettled = true; var s = elScreen.firstChild; if (s) s.classList.add('settled'); }, CONFIG.dispenseSettleMs);
      later(function () { go('thanks'); }, CONFIG.dispenseAutoMs);
    }
  };

  /* 7. Thank you ------------------------------------------------------------ */
  SCREENS.thanks = {
    nav: function () { return { home: true, help: true }; },
    render: function () {
      return '<div class="pad thanks">' +
        '<div class="heart-big">' + icon('heart', 120) + '</div>' +
        '<h1 class="title big">' + t('thanksTitle') + '</h1>' +
        '<div class="assure"><div class="card">' + icon('shield', 56) + '<p>' + t('thanksOptional') + '</p></div>' +
        '<div class="card">' + icon('hospital', 56) + '<p>' + t('thanksFree') + '</p></div></div>' +
        '<div class="row">' +
          '<button class="btn wa big" data-action="waStartThanks">' + icon('chat', 34) + '<span>' + t('tile3') + '</span><em class="opt">' + t('optionalTag') + '</em></button>' +
          '<button class="btn outline big" data-action="finish">' + icon('check', 32) + '<span>' + t('finish') + '</span></button>' +
        '</div></div>';
    }
  };

  /* 8a. WhatsApp consent ---------------------------------------------------- */
  SCREENS.wa = {
    nav: function () { return { back: state.waFrom === 'thanks' ? 'thanks' : 'home' }; },
    render: function () {
      var row = function (ic, key) { return '<li>' + '<span class="li-ic">' + icon(ic, 44) + '</span><p>' + t(key) + '</p></li>'; };
      return '<div class="pad wa"><h2 class="title">' + t('waTitle') + '</h2>' +
        '<p class="intro">' + t('waIntro') + '</p>' +
        '<ul class="consent">' + row('chat', 'waP1') + row('lock', 'waP2') + row('ban', 'waP3') + row('shield', 'waP4') + '</ul>' +
        // Both buttons are deliberately identical in size, weight and colour.
        '<div class="row eq">' +
          '<button class="btn eq-btn" data-action="waAgree">' + icon('check', 34) + '<span>' + t('agree') + '</span></button>' +
          '<button class="btn eq-btn" data-action="waNo">' + icon('cross', 34) + '<span>' + t('noThanks') + '</span></button>' +
        '</div></div>';
    }
  };

  /* 8b. Fake phone keypad (nothing is stored or sent) ----------------------- */
  function phoneValid() { return /^[6-9]\d{9}$/.test(state.phone); }
  function phoneText() {
    var d = state.phone, out = '';
    for (var i = 0; i < 10; i++) out += (i < d.length ? d[i] : '·') + (i === 4 ? ' ' : '');
    return out;
  }
  function updateKeypad() {
    var disp = $('phoneDisp'), send = $('sendBtn');
    if (disp) disp.textContent = phoneText();
    if (send) send.disabled = !phoneValid();
  }
  SCREENS.keypad = {
    nav: function () { return { back: 'wa' }; },
    render: function () {
      var keys = '';
      ['1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach(function (k) { keys += '<button class="key" data-action="key" data-k="' + k + '">' + k + '</button>'; });
      keys += '<button class="key alt" data-action="keyDel" aria-label="' + t('del') + '">' + icon('del', 40) + '</button>' +
        '<button class="key" data-action="key" data-k="0">0</button><span></span>';
      return '<div class="pad keyw"><div class="kp-left"><h2 class="title">' + t('keypadTitle') + '</h2>' +
        '<div class="phone-line"><span class="cc">+91</span><span id="phoneDisp" class="disp">' + phoneText() + '</span></div>' +
        '<p class="hint">' + t('keypadHint') + '</p>' +
        '<div class="demo-banner small"><b>DEMO</b><span>' + t('demoKeypad') + '</span></div>' +
        '<button id="sendBtn" class="btn primary big" data-action="waSubmit"' + (phoneValid() ? '' : ' disabled') + '>' + icon('chat', 32) + '<span>' + t('sendTips') + '</span></button></div>' +
        '<div class="keys">' + keys + '</div></div>';
    }
  };

  /* 8c. WhatsApp success ---------------------------------------------------- */
  SCREENS.waok = {
    nav: function () { return { home: true }; },
    render: function () {
      return '<div class="pad thanks"><div class="okcircle big">' + icon('check', 110) + '</div>' +
        '<h1 class="title big">' + t('waSuccess') + '</h1>' +
        '<p class="demo-note">' + t('waSuccessDemo') + '</p>' +
        '<div class="row"><button class="btn primary big" data-action="finish">' + icon('check', 32) + '<span>' + t('finish') + '</span></button></div></div>';
    }
  };

  /* 9. Tips: list + player -------------------------------------------------- */
  SCREENS.tips = {
    nav: function () { return { back: 'home', home: true, help: true }; },
    render: function () {
      var cards = window.TIPS.map(function (tp) {
        return '<button class="tcard" style="--c:' + tp.color + '" data-action="tipOpen" data-id="' + tp.id + '">' +
          '<span class="tc-ic">' + icon(tp.icon, 84) + '</span>' +
          '<b>' + t('tip_' + tp.id + '_title') + '</b>' +
          '<span class="tc-steps">' + icon('play', 24) + t('steps', { n: tp.slides.length }) + '</span></button>';
      }).join('');
      return '<div class="pad tipsl"><h2 class="title">' + t('tipsTitle') + '</h2><p class="sub">' + t('tipsSub') + '</p>' +
        '<div class="tgrid">' + cards + '</div></div>';
    }
  };

  var tipTimer = null;
  function schedTip() {
    clearTimeout(tipTimer);
    if (state.screen !== 'tip' || !state.tip || !state.tip.playing || state.tip.done) return;
    tipTimer = setTimeout(function () { tipStep(1); }, CONFIG.tipMs);
    timers.push(tipTimer);
  }
  function tipStep(d) {
    var tp = tipDef(state.tip.card), n = tp.slides.length, i = state.tip.i + d;
    if (i >= n) { state.tip.done = true; state.tip.playing = false; }
    else if (i >= 0) { state.tip.i = i; state.tip.done = false; }
    render();
  }
  SCREENS.tip = {
    nav: function () { return { back: 'tips', home: true }; },
    render: function () {
      var tp = tipDef(state.tip.card), n = tp.slides.length, i = state.tip.i, sl = tp.slides[i];
      var dots = tp.slides.map(function (_, k) { return '<i class="' + (k < i || state.tip.done ? 'past' : k === i ? 'now' : '') + '"></i>'; }).join('');
      var scene, text;
      if (state.tip.done) {
        scene = '<div class="scene" style="--c:' + tp.color + '"><div class="disc"><div class="main a-pop">' + icon('check', 220) + '</div></div></div>';
        text = '<div class="ttext"><h2 class="tdone">' + t('tipDone') + '</h2>' +
          '<div class="tctrl"><button class="btn primary big" data-action="tipReplay">' + icon('refresh', 32) + '<span>' + t('replay') + '</span></button>' +
          '<button class="btn outline big" data-action="go" data-to="tips">' + icon('book', 32) + '<span>' + t('tipsTitle') + '</span></button></div></div>';
      } else {
        var deco = sl.deco.map(function (d, k) { return '<span class="deco d' + k + '">' + icon(d, 76) + '</span>'; }).join('');
        var main = sl.big
          ? '<div class="bignum a-' + sl.anim + '"><b>' + sl.big + '</b><span>' + t(sl.unit || 'weeks') + '</span></div>'
          : '<div class="main a-' + sl.anim + '">' + icon(sl.icon, 230) + '</div>';
        scene = '<div class="scene" style="--c:' + tp.color + '"><div class="disc">' + deco + main + '</div>' +
          '<div class="pbar"><i style="animation-duration:' + CONFIG.tipMs + 'ms" class="' + (state.tip.playing ? 'run' : 'stop') + '"></i></div></div>';
        text = '<div class="ttext"><div class="tstep">' + t('stepOf', { a: i + 1, b: n }) + '</div>' +
          '<p class="tline" key="' + i + '">' + t('tip_' + tp.id + '_' + (i + 1)) + '</p>' +
          '<div class="tdots">' + dots + '</div>' +
          '<div class="tctrl">' +
            '<button class="btn outline" data-action="tipPrev"' + (i === 0 ? ' disabled' : '') + '>' + icon('back', 30) + '<span>' + t('prev') + '</span></button>' +
            '<button class="btn outline" data-action="tipToggle">' + icon(state.tip.playing ? 'pause' : 'play', 30) + '<span>' + t(state.tip.playing ? 'pause' : 'play') + '</span></button>' +
            '<button class="btn primary" data-action="tipNext"><span>' + t('next') + '</span>' + icon('fwd', 30) + '</button>' +
          '</div></div>';
      }
      return '<div class="pad tipp"><h2 class="tp-title" style="color:' + tp.color + '">' + icon(tp.icon, 40) + ' ' + t('tip_' + tp.id + '_title') + '</h2>' +
        '<div class="tp-body">' + scene + text + '</div></div>';
    },
    bind: function () { schedTip(); }
  };

  /* 10. Help ---------------------------------------------------------------- */
  SCREENS.help = {
    nav: function () { return { back: 'home', home: true }; },
    render: function () {
      var right;
      if (state.report === 'done') {
        right = '<div class="card rep"><div class="okcircle">' + icon('check', 80) + '</div><h3>' + t('reportThanks') + '</h3><p class="demo-note">' + t('reportDemo') + '</p></div>';
      } else if (state.report === 'pick') {
        right = '<div class="card rep"><h3>' + t('reportPick') + '</h3><div class="rlist">' +
          ['r1', 'r2', 'r3', 'r4'].map(function (r, k) {
            return '<button class="btn outline" data-action="reportPick" data-r="' + r + '">' + icon(['pack', 'rupee', 'alert', 'help'][k], 30) + '<span>' + t(r) + '</span></button>';
          }).join('') + '</div></div>';
      } else {
        right = '<div class="card rep"><div class="rep-ic">' + icon('alert', 90) + '</div>' +
          '<button class="btn primary big" data-action="reportOpen">' + icon('alert', 32) + '<span>' + t('report') + '</span></button></div>';
      }
      return '<div class="pad helpw"><h2 class="title">' + t('helpTitle') + '</h2><div class="hgrid">' +
        '<div class="card hl"><div class="hl-ic">' + icon('phone', 84) + '</div><h3>' + t('helplineLabel') + '</h3>' +
        '<div class="hl-num">' + t('helplineNumber') + '</div><div class="chip ph">' + t('helplinePlaceholder') + '</div>' +
        '<p>' + t('helplineNote') + '</p></div>' + right + '</div>' +
        '<div class="note wide">' + icon('shield', 30) + '<span>' + t('optionalNote') + '</span></div></div>';
    }
  };

  /* ----------------------------------------------------- operator panel */
  function openOperator() {
    var S = window.SAMPLE_STATS;
    var stock = window.PRODUCTS.map(function (p) {
      var left = Math.max(0, p.stockSample - (live.sold[p.id] || 0));
      var pct = Math.round(100 * left / p.stockCapacity);
      return '<div class="op-row"><span>' + window.STRINGS.en['prod_' + p.id + '_name'] + '</span>' +
        '<div class="bar"><i class="' + (pct < 25 ? 'low' : '') + '" style="width:' + pct + '%"></i></div><b>' + left + ' / ' + p.stockCapacity + '</b></div>';
    }).join('');
    var stat = function (label, val) { return '<div class="op-stat"><b>' + val + '</b><span>' + label + '</span></div>'; };
    elOv.hidden = false;
    elOv.innerHTML = '<div class="op-panel" role="dialog"><div class="op-head"><h2>' + icon('user', 34) + ' ' + window.STRINGS.en.opTitle + '</h2>' +
      '<span class="op-sample">' + window.STRINGS.en.opSample + '</span></div>' +
      '<div class="op-stats">' + stat(window.STRINGS.en.opSales, S.salesToday + live.sales) +
        stat(window.STRINGS.en.opRevenue, money(S.revenueToday + live.revenue)) +
        stat(window.STRINGS.en.opTips, S.tipsViewed + live.tips) +
        stat(window.STRINGS.en.opSignups, S.signups + live.signups) + '</div>' +
      '<h3>' + window.STRINGS.en.opStock + '</h3><div class="op-stock">' + stock + '</div>' +
      '<div class="op-btns"><button class="btn danger" data-action="opReset">' + icon('refresh', 30) + '<span>' + window.STRINGS.en.opReset + '</span></button>' +
      '<button class="btn primary" data-action="opClose">' + icon('cross', 30) + '<span>' + window.STRINGS.en.opClose + '</span></button></div></div>';
  }

  var hotTaps = [];
  function hotTap() {
    var now = Date.now();
    hotTaps = hotTaps.filter(function (x) { return now - x < CONFIG.opTapWindowMs; });
    hotTaps.push(now);
    if (hotTaps.length >= CONFIG.opTaps) { hotTaps = []; openOperator(); }
  }

  /* ---------------------------------------------------------------- actions */
  var ACTIONS = {
    start: function () { go('lang'); },
    go: function (d) { go(d.to); },
    setLang: function (d) { state.lang = d.lang; render(false); },
    pickLang: function (d) { state.lang = d.lang; go('home'); },

    buy: function (d) { state.product = d.id; state.payMethod = null; state.payPhase = null; go('pay'); },
    payMethod: function (d) { state.payMethod = d.m; render(); },
    payChange: function () { state.payMethod = null; render(); },
    simPay: function () {
      state.payPhase = 'processing'; render();
      later(function () { state.payPhase = 'paid'; render(false); }, 1400);
      later(function () {
        var p = product(state.product);
        live.sales++; live.revenue += p.price; live.sold[p.id] = (live.sold[p.id] || 0) + 1;
        state.payPhase = null; go('dispense');
      }, 2500);
    },
    collected: function () { go('thanks'); },
    finish: function () { go('idle'); },

    tipOpen: function (d) {
      state.tip = { card: d.id, i: 0, playing: true, done: false };
      live.tips++; live.tipsBy[d.id] = (live.tipsBy[d.id] || 0) + 1;
      go('tip');
    },
    tipNext: function () { tipStep(1); },
    tipPrev: function () { tipStep(-1); },
    tipToggle: function () { state.tip.playing = !state.tip.playing; render(); },
    tipReplay: function () { state.tip.i = 0; state.tip.done = false; state.tip.playing = true; render(); },

    waStart: function () { state.waFrom = 'home'; go('wa'); },
    waStartThanks: function () { state.waFrom = 'thanks'; go('wa'); },
    waAgree: function () { state.phone = ''; go('keypad'); },
    waNo: function () { go(state.waFrom); },
    key: function (d) {
      var k = d.k;
      if (state.phone.length >= 10) return;
      if (state.phone.length === 0 && '6789'.indexOf(k) < 0) {          // Indian mobiles start 6–9
        var disp = $('phoneDisp'); if (disp) { disp.classList.remove('shake'); void disp.offsetWidth; disp.classList.add('shake'); }
        return;
      }
      state.phone += k; updateKeypad();
    },
    keyDel: function () { state.phone = state.phone.slice(0, -1); updateKeypad(); },
    waSubmit: function () {
      if (!phoneValid()) return;
      state.phone = '';                    // the "number" is discarded immediately — never kept
      live.signups++; go('waok');
    },

    reportOpen: function () { state.report = 'pick'; render(); },
    reportPick: function () { state.report = 'done'; render(); },

    opClose: function () { elOv.hidden = true; elOv.innerHTML = ''; },
    opReset: function () { resetLive(); openOperator(); }
  };

  elStage.addEventListener('click', function (e) {
    if (e.target.closest('#hot')) { hotTap(); return; }
    var el = e.target.closest('[data-action]');
    if (!el || el.disabled) return;
    var fn = ACTIONS[el.dataset.action];
    if (fn) fn(el.dataset, el);
  });

  /* ------------------------------------------------------------------ start */
  fit();
  resetIdle();
  go('idle');
})();
