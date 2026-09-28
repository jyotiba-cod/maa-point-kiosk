/* Bhojpuri and Maithili drafts — to be reviewed by a native speaker before any public use. */

/* ==========================================================================
   strings.js — ALL on-screen text, in every language.

   Languages:  hi = Hindi (default) · en = English · bh = Bhojpuri · mai = Maithili
   To edit text: find the key, change the words for the language you want.
   {n}, {a}, {b} are placeholders that the code fills in — keep them as they are.
   If a key is missing in a language, English is shown instead.

   Content rules (do not break):
   - Support exclusive breastfeeding in every message.
   - Buying is always optional; never link it to any free government service.
   - Only diapers, wipes and pack combinations of them — nothing that replaces breast milk,
     and nothing that is used to feed a baby, anywhere (IMS Act).
   ========================================================================== */

window.STRINGS = {

/* ------------------------------------------------------------------ HINDI */
hi: {
  langName: "हिन्दी", langShort: "हिं",
  appName: "माँ पॉइंट",
  back: "वापस", home: "होम", help: "मदद", next: "आगे", prev: "पीछे", finish: "समाप्त",

  idleHead: "नवजात की देखभाल, 24 घंटे",
  idleSub: "ज़रूरी सामान, मुफ़्त टिप्स और मदद — प्रसूति वार्ड के ठीक बाहर",
  idleTouch: "शुरू करने के लिए स्क्रीन छुएँ",

  langTitle: "अपनी भाषा चुनें",

  homeTitle: "आज हम आपकी क्या मदद करें?",
  tile1: "नवजात के ज़रूरी सामान ख़रीदें", tile1Sub: "डायपर और वाइप्स — ख़रीदना पूरी तरह आपकी मर्ज़ी",
  tile2: "नवजात की देखभाल के टिप्स देखें", tile2Sub: "सरल चित्रों के साथ, सबके लिए मुफ़्त",
  tile3: "WhatsApp पर मुफ़्त टिप्स पाएँ", tile3Sub: "अपनी मर्ज़ी से — कभी भी बंद कर सकती हैं",
  stripLabel: "स्वास्थ्य विभाग का संदेश",
  msg1: "जन्म के एक घंटे के भीतर स्तनपान शुरू करें। पहले 6 महीने सिर्फ़ माँ का दूध — पानी भी नहीं।",
  msg2: "ख़तरे के संकेत: बच्चा दूध न पिए, बहुत गर्म या ठंडा लगे, तेज़ साँस चले या झटके आएँ — तुरंत डॉक्टर को दिखाएँ।",
  msg3: "JSSK के तहत सरकारी अस्पताल में प्रसव, दवा, जाँच, खाना और आने-जाने की सुविधा मुफ़्त है।",
  msg4: "टीकाकरण: बच्चे को 6, 10 और 14 हफ़्ते पर टीके लगवाएँ — सरकारी केंद्र पर मुफ़्त।",
  msg5: "यहाँ ख़रीदना आपकी मर्ज़ी है। सरकारी अस्पताल की सभी सेवाएँ हमेशा मुफ़्त हैं।",

  prodTitle: "नवजात के ज़रूरी सामान",
  optionalNote: "ख़रीदना पूरी तरह आपकी मर्ज़ी है। सरकारी अस्पताल की सेवाएँ मुफ़्त हैं और मुफ़्त ही रहेंगी।",
  mrp: "MRP", progPrice: "कार्यक्रम मूल्य", placeholderTag: "नमूना मूल्य (डेमो)",
  save: "₹{n} की बचत", buy: "ख़रीदें",
  prod_small_name: "नवजात डायपर — छोटा पैक", prod_small_desc: "नवजात के नाप के डायपर का छोटा सील-बंद पैक",
  prod_single_name: "नवजात डायपर — एक", prod_single_desc: "अभी की ज़रूरत के लिए एक डायपर",
  prod_wipes_name: "बेबी वाइप्स", prod_wipes_desc: "नवजात की नाज़ुक त्वचा के लिए मुलायम वाइप्स",
  prod_firstnight_name: "फ़र्स्ट नाइट पैक", prod_firstnight_desc: "पहली रात के लिए डायपर, वाइप्स और कूपन बुकलेट",

  payTitle: "भुगतान कैसे करेंगी?",
  payUpi: "UPI से भुगतान", payUpiSub: "किसी भी UPI ऐप से QR स्कैन करें",
  payCash: "नकद", payCashSub: "स्लॉट में सिक्के या नोट डालें",
  demoBannerLocal: "डेमो — असली भुगतान नहीं",
  simUpi: "भुगतान का डेमो करें", simCash: "नकद का डेमो करें",
  total: "कुल", changeMethod: "दूसरा तरीका",
  processing: "भुगतान हो रहा है…", paid: "भुगतान मिल गया (डेमो)",
  cashHint: "स्लॉट में सिक्के या नोट डालें",

  dispTitle: "आपका पैक आ रहा है…",
  collect: "कृपया नीचे से अपना पैक ले लें", collected: "मैंने पैक ले लिया",

  thanksTitle: "धन्यवाद!",
  thanksOptional: "ख़रीदना हमेशा आपकी मर्ज़ी है।",
  thanksFree: "सरकारी अस्पताल की सभी सेवाएँ मुफ़्त हैं — इनके लिए कुछ भी ख़रीदना ज़रूरी नहीं।",
  optionalTag: "वैकल्पिक",

  waTitle: "WhatsApp पर मुफ़्त टिप्स — आपकी सहमति",
  waIntro: "पहले पढ़ लें कि क्या होगा:",
  waP1: "आपको हफ़्ते में 1–2 संदेश मिलेंगे: नवजात की देखभाल के टिप्स, 6, 10 और 14 हफ़्ते के टीके की याद, और कभी-कभी पास की दुकान का छूट कूपन।",
  waP2: "आपका नंबर कभी बेचा या किसी और को नहीं दिया जाएगा।",
  waP3: "आप कभी भी STOP लिखकर बंद कर सकती हैं, और अपना नंबर हटवा सकती हैं।",
  waP4: "यह पूरी तरह वैकल्पिक है। मना करने पर किसी भी सरकारी सेवा पर कोई असर नहीं पड़ेगा।",
  agree: "हाँ, मैं सहमत हूँ", noThanks: "नहीं, धन्यवाद",
  keypadTitle: "अपना मोबाइल नंबर डालें", keypadHint: "10 अंकों का नंबर",
  demoKeypad: "डेमो: यह कीपैड असली नहीं है — नंबर न सेव होगा, न कहीं भेजा जाएगा।",
  sendTips: "टिप्स भेजें", del: "मिटाएँ",
  waSuccess: "हो गया! आपको जल्द ही पहला टिप मिलेगा।",
  waSuccessDemo: "(डेमो: कोई नंबर सेव नहीं हुआ, कोई संदेश नहीं भेजा गया।)",

  tipsTitle: "नवजात की देखभाल — टिप्स", tipsSub: "देखने के लिए किसी कार्ड को छुएँ",
  steps: "{n} चरण", stepOf: "चरण {a} / {b}", weeks: "हफ़्ते", months: "महीने",
  tipDone: "पूरा हुआ", replay: "फिर से देखें", pause: "रुकें", play: "चलाएँ",

  tip_cord_title: "नाल की देखभाल",
  tip_cord_1: "बच्चे को छूने से पहले साबुन से हाथ धोएँ।",
  tip_cord_2: "नाल को साफ़ और सूखा रखें। उस पर तेल, राख, गोबर या पाउडर कुछ न लगाएँ।",
  tip_cord_3: "डायपर को नाल के नीचे मोड़ें, ताकि हवा लगती रहे।",
  tip_cord_4: "लालिमा, मवाद, बदबू या बुखार हो तो तुरंत आशा दीदी या स्वास्थ्य केंद्र जाएँ।",

  tip_rash_title: "डायपर रैश से बचाव",
  tip_rash_1: "गीला या गंदा होते ही डायपर बदलें — हर 3–4 घंटे में देखें।",
  tip_rash_2: "पानी या मुलायम वाइप से हल्के हाथ से साफ़ करें, फिर थपथपाकर सुखाएँ।",
  tip_rash_3: "कुछ देर बिना डायपर रखें, ताकि त्वचा को हवा मिले।",
  tip_rash_4: "त्वचा लाल हो, फफोले हों या पानी निकले तो स्वास्थ्यकर्मी को दिखाएँ।",

  tip_bf_title: "स्तनपान",
  tip_bf_1: "जन्म के एक घंटे के भीतर स्तनपान शुरू करें। पहला गाढ़ा दूध बच्चे का पहला टीका है।",
  tip_bf_2: "पहले 6 महीने सिर्फ़ माँ का दूध — पानी, घुट्टी या कुछ और नहीं।",
  tip_bf_3: "बच्चा जब माँगे तब दूध पिलाएँ, दिन-रात — 24 घंटे में 8–12 बार।",
  tip_bf_4: "बच्चे को पास सटाकर रखें, उसकी ठुड्डी छाती से लगे और मुँह पूरा खुला हो।",

  tip_kmc_title: "कंगारू मदर केयर",
  tip_kmc_1: "बच्चे को सिर्फ़ डायपर और टोपी में, माँ की खुली छाती से सटाकर सीधा रखें।",
  tip_kmc_2: "माँ और बच्चे को एक कपड़े से ढकें। बच्चे का सिर एक तरफ़ मुड़ा हो, नाक-मुँह खुले रहें।",
  tip_kmc_3: "दिन में जितनी देर हो सके यह करें। पिता या परिवार के लोग भी कर सकते हैं।",
  tip_kmc_4: "इसी दौरान दूध पिलाएँ। इससे बच्चा गर्म और सुकून में रहता है।",

  tip_vacc_title: "टीकाकरण की तारीख़ें",
  tip_vacc_1: "6 हफ़्ते पर बच्चे को पहले टीके लगवाएँ।",
  tip_vacc_2: "10 हफ़्ते पर अगले टीके लगवाएँ।",
  tip_vacc_3: "14 हफ़्ते पर तीसरी बार टीके लगवाएँ।",
  tip_vacc_4: "सरकारी स्वास्थ्य केंद्र पर टीके मुफ़्त हैं। हर बार मातृ-शिशु सुरक्षा (MCP) कार्ड साथ ले जाएँ।",

  helpTitle: "मदद",
  helplineLabel: "हेल्पलाइन (निःशुल्क)",
  helplineNote: "किसी भी समय कॉल करें, या वार्ड डेस्क पर स्टाफ़ को बताएँ।",
  report: "समस्या बताएँ", reportPick: "क्या समस्या है?",
  r1: "पैक नहीं गिरा", r2: "भुगतान में दिक्कत", r3: "मशीन ख़राब या गंदी है", r4: "कुछ और",
  reportThanks: "आपकी बात दर्ज हो गई। धन्यवाद।",
  reportDemo: "(डेमो: कुछ भी भेजा या सेव नहीं हुआ।)"
},

/* ---------------------------------------------------------------- ENGLISH */
en: {
  langName: "English", langShort: "EN",
  appName: "Maa Point",
  logoP: "PAMPERS LOGO", logoPSub: "placeholder — official logo goes here",
  logoD: "HEALTH DEPT., BIHAR LOGO", logoDSub: "placeholder — official logo goes here",
  prototype: "PROTOTYPE",
  back: "Back", home: "Home", help: "Help", next: "Next", prev: "Previous", finish: "Finish",

  idleHead: "Newborn care, 24 hours",
  idleSub: "Essentials, free tips and help — right outside the postnatal ward",
  idleTouch: "Touch to start",

  langTitle: "Choose your language",

  homeTitle: "How can we help you today?",
  tile1: "Buy newborn essentials", tile1Sub: "Diapers and wipes — buying is entirely your choice",
  tile2: "Watch newborn-care tips", tile2Sub: "Simple pictures, free for everyone",
  tile3: "Get free tips on WhatsApp", tile3Sub: "Only if you wish — stop any time",
  stripLabel: "Message from the Health Department",
  msg1: "Start breastfeeding within one hour of birth. Only breast milk for the first 6 months — not even water.",
  msg2: "Danger signs: baby not feeding, very hot or cold, fast breathing or fits — see a doctor at once.",
  msg3: "Under JSSK, delivery, medicines, tests, food and transport at government hospitals are free.",
  msg4: "Vaccination: take your baby for vaccines at 6, 10 and 14 weeks — free at government centres.",
  msg5: "Buying here is optional. All government hospital services are always free.",

  prodTitle: "Newborn essentials",
  optionalNote: "Buying is entirely optional. Government hospital services are free and will stay free.",
  mrp: "MRP", progPrice: "Programme price", placeholderTag: "PLACEHOLDER PRICE",
  save: "Save ₹{n}", buy: "Buy",
  prod_small_name: "Newborn diapers — small pack", prod_small_desc: "A small sealed pack of newborn-size diapers",
  prod_single_name: "Newborn diaper — single", prod_single_desc: "One diaper, for when you need it right now",
  prod_wipes_name: "Baby wipes", prod_wipes_desc: "Soft wipes for a newborn's delicate skin",
  prod_firstnight_name: "First Night pack", prod_firstnight_desc: "Diapers, wipes and a coupon booklet for the first night",

  payTitle: "How would you like to pay?",
  payUpi: "Pay with UPI", payUpiSub: "Scan the QR with any UPI app",
  payCash: "Cash", payCashSub: "Put coins or notes in the slot",
  demoBanner: "DEMO — NOT A REAL PAYMENT",
  demoBannerLocal: "Demo only — nothing is charged",
  simUpi: "Simulate payment", simCash: "Simulate cash",
  total: "Total", changeMethod: "Change method",
  processing: "Processing…", paid: "Payment received (demo)",
  cashHint: "Put coins or notes in the slot",

  dispTitle: "Your pack is on its way…",
  collect: "Please collect your pack below", collected: "I have collected it",

  thanksTitle: "Thank you!",
  thanksOptional: "Buying is always your choice.",
  thanksFree: "All government hospital services are free — nothing needs to be bought to receive them.",
  optionalTag: "Optional",

  waTitle: "Free tips on WhatsApp — your consent",
  waIntro: "Please read what this means:",
  waP1: "You will get 1–2 messages a week: newborn-care tips, reminders for the 6, 10 and 14-week vaccines, and sometimes a discount coupon for a nearby chemist.",
  waP2: "Your number is never sold or shared with anyone.",
  waP3: "You can stop at any time by replying STOP, and ask us to delete your number.",
  waP4: "This is fully optional. Saying no changes nothing about any government service.",
  agree: "I agree", noThanks: "No thanks",
  keypadTitle: "Enter your mobile number", keypadHint: "10-digit number",
  demoKeypad: "Demo: this keypad is not connected — the number is not saved or sent.",
  sendTips: "Send me tips", del: "Delete",
  waSuccess: "All set! Your first tip is on its way.",
  waSuccessDemo: "(Demo: no number was saved and no message was sent.)",

  tipsTitle: "Newborn-care tips", tipsSub: "Touch a card to watch",
  steps: "{n} steps", stepOf: "Step {a} of {b}", weeks: "weeks", months: "months",
  tipDone: "Done", replay: "Watch again", pause: "Pause", play: "Play",

  tip_cord_title: "Cord care",
  tip_cord_1: "Wash your hands with soap before touching the baby.",
  tip_cord_2: "Keep the cord stump clean and dry. Put nothing on it — no oil, ash, dung or powder.",
  tip_cord_3: "Fold the diaper down below the cord so air can reach it.",
  tip_cord_4: "Redness, pus, bad smell or fever — go to the ASHA or health centre at once.",

  tip_rash_title: "Preventing nappy rash",
  tip_rash_1: "Change the diaper soon after it is wet or dirty — check every 3–4 hours.",
  tip_rash_2: "Clean gently with water or a soft wipe, then pat dry.",
  tip_rash_3: "Give some diaper-free time so the skin can breathe.",
  tip_rash_4: "If the skin is red, blistered or oozing, show a health worker.",

  tip_bf_title: "Breastfeeding",
  tip_bf_1: "Start breastfeeding within one hour of birth. The first thick milk is the baby's first vaccine.",
  tip_bf_2: "Only mother's milk for the first 6 months — not even water or ghutti.",
  tip_bf_3: "Feed whenever the baby asks, day and night — 8 to 12 times in 24 hours.",
  tip_bf_4: "Hold the baby close, chin touching the breast, mouth wide open.",

  tip_kmc_title: "Kangaroo mother care",
  tip_kmc_1: "Place the baby upright on the mother's bare chest, wearing only a diaper and cap.",
  tip_kmc_2: "Cover mother and baby with one cloth. Turn the baby's head to one side and keep nose and mouth free.",
  tip_kmc_3: "Do it for as long as you can each day. Father or family can do it too.",
  tip_kmc_4: "Breastfeed during this time. The baby stays warm and calm.",

  tip_vacc_title: "Vaccination dates",
  tip_vacc_1: "At 6 weeks, take your baby for the first vaccines.",
  tip_vacc_2: "At 10 weeks, the next vaccines.",
  tip_vacc_3: "At 14 weeks, the third round of vaccines.",
  tip_vacc_4: "Vaccines are free at government health centres. Carry the MCP (Mother-Child Protection) card every time.",

  helpTitle: "Help",
  helplineLabel: "Helpline (toll-free)",
  helplineNumber: "1800-XXX-XXXX",
  helplinePlaceholder: "PLACEHOLDER number — replace before real use",
  helplineNote: "Call any time, or tell the staff at the ward desk.",
  report: "Report a problem", reportPick: "What went wrong?",
  r1: "Pack did not drop", r2: "Payment problem", r3: "Unit is broken or dirty", r4: "Something else",
  reportThanks: "Your report is noted. Thank you.",
  reportDemo: "(Demo: nothing was sent or saved.)",

  /* Operator panel — English only */
  opTitle: "Operator panel", opSample: "SAMPLE DATA — not from a real unit",
  opStock: "Stock levels", opSales: "Sales today", opRevenue: "Revenue today",
  opTips: "Tips viewed", opSignups: "WhatsApp sign-ups", opReset: "Reset demo", opClose: "Close",
  opUnits: "units"
},

/* --------------------------------------------------------------- BHOJPURI */
bh: {
  langName: "भोजपुरी", langShort: "भो",
  appName: "माँ पॉइंट",
  back: "वापस", home: "होम", help: "मदद", next: "आगे", prev: "पीछे", finish: "खतम",

  idleHead: "नवजात के देखभाल, 24 घंटा",
  idleSub: "जरूरी सामान, मुफ्त टिप्स आ मदद — प्रसूति वार्ड के ठीके बाहर",
  idleTouch: "शुरू करे खातिर स्क्रीन छूईं",

  langTitle: "आपन भाषा चुनीं",

  homeTitle: "आज हम रउआ के का मदद करीं?",
  tile1: "नवजात के जरूरी सामान खरीदीं", tile1Sub: "डायपर आ वाइप्स — खरीदल पूरा रउआ के मर्जी",
  tile2: "नवजात के देखभाल के टिप्स देखीं", tile2Sub: "आसान चित्र के संगे, सबका खातिर मुफ्त",
  tile3: "WhatsApp पर मुफ्त टिप्स पाईं", tile3Sub: "आपन मर्जी से — कब्बो बंद कर सकेनी",
  stripLabel: "स्वास्थ्य विभाग के संदेश",
  msg1: "जनम के एक घंटा के भीतर दूध पियावल शुरू करीं। पहिला 6 महीना खाली माई के दूध — पानी भी ना।",
  msg2: "खतरा के निशान: बच्चा दूध ना पिए, बहुत गरम भा ठंडा लागे, तेज साँस चले भा झटका आवे — तुरंत डॉक्टर के देखाईं।",
  msg3: "JSSK में सरकारी अस्पताल में प्रसव, दवाई, जाँच, खाना आ आवे-जाए के सुविधा मुफ्त बा।",
  msg4: "टीका: बच्चा के 6, 10 आ 14 हफ्ता पर टीका लगवाईं — सरकारी केंद्र पर मुफ्त।",
  msg5: "इहाँ खरीदल रउआ के मर्जी ह। सरकारी अस्पताल के सब सेवा हमेशा मुफ्त बा।",

  prodTitle: "नवजात के जरूरी सामान",
  optionalNote: "खरीदल पूरा रउआ के मर्जी ह। सरकारी अस्पताल के सेवा मुफ्त बा आ मुफ्ते रही।",
  mrp: "MRP", progPrice: "कार्यक्रम के दाम", placeholderTag: "नमूना दाम (डेमो)",
  save: "₹{n} के बचत", buy: "खरीदीं",
  prod_small_name: "नवजात डायपर — छोटा पैक", prod_small_desc: "नवजात के नाप के डायपर के छोटा सील-बंद पैक",
  prod_single_name: "नवजात डायपर — एक गो", prod_single_desc: "अभी के जरूरत खातिर एक डायपर",
  prod_wipes_name: "बेबी वाइप्स", prod_wipes_desc: "नवजात के नाजुक चमड़ी खातिर मुलायम वाइप्स",
  prod_firstnight_name: "फर्स्ट नाइट पैक", prod_firstnight_desc: "पहिला रात खातिर डायपर, वाइप्स आ कूपन बुकलेट",

  payTitle: "भुगतान कइसे करब?",
  payUpi: "UPI से भुगतान", payUpiSub: "कवनो UPI ऐप से QR स्कैन करीं",
  payCash: "नकद", payCashSub: "स्लॉट में सिक्का भा नोट डालीं",
  demoBannerLocal: "डेमो — असली भुगतान ना ह",
  simUpi: "भुगतान के डेमो करीं", simCash: "नकद के डेमो करीं",
  total: "कुल", changeMethod: "दोसर तरीका",
  processing: "भुगतान होता…", paid: "भुगतान मिल गइल (डेमो)",
  cashHint: "स्लॉट में सिक्का भा नोट डालीं",

  dispTitle: "रउआ के पैक आवता…",
  collect: "कृपा क के नीचे से आपन पैक ले लीं", collected: "हम पैक ले लेनी",

  thanksTitle: "धन्यवाद!",
  thanksOptional: "खरीदल हमेशा रउआ के मर्जी ह।",
  thanksFree: "सरकारी अस्पताल के सब सेवा मुफ्त बा — एकरा खातिर कुछ खरीदल जरूरी नइखे।",
  optionalTag: "वैकल्पिक",

  waTitle: "WhatsApp पर मुफ्त टिप्स — रउआ के सहमति",
  waIntro: "पहिले पढ़ लीं कि का होई:",
  waP1: "रउआ के हफ्ता में 1–2 संदेश मिली: नवजात के देखभाल के टिप्स, 6, 10 आ 14 हफ्ता के टीका के याद, आ कभी-कभी नजदीक के दोकान के छूट कूपन।",
  waP2: "रउआ के नंबर कब्बो बेचल भा दोसरा के दिहल ना जाई।",
  waP3: "रउआ कब्बो STOP लिख के बंद कर सकेनी, आ आपन नंबर हटवा सकेनी।",
  waP4: "ई पूरा वैकल्पिक बा। मना कइला से कवनो सरकारी सेवा पर कवनो असर ना पड़ी।",
  agree: "हँ, हम सहमत बानी", noThanks: "ना, धन्यवाद",
  keypadTitle: "आपन मोबाइल नंबर डालीं", keypadHint: "10 अंक के नंबर",
  demoKeypad: "डेमो: ई कीपैड असली नइखे — नंबर ना सेव होई, ना कहीं भेजाई।",
  sendTips: "टिप्स भेजीं", del: "मिटाईं",
  waSuccess: "हो गइल! रउआ के जल्दिए पहिला टिप मिली।",
  waSuccessDemo: "(डेमो: कवनो नंबर सेव ना भइल, कवनो संदेश ना गइल।)",

  tipsTitle: "नवजात के देखभाल — टिप्स", tipsSub: "देखे खातिर कवनो कार्ड छूईं",
  steps: "{n} चरण", stepOf: "चरण {a} / {b}", weeks: "हफ्ता", months: "महीना",
  tipDone: "पूरा भइल", replay: "फेर से देखीं", pause: "रुकीं", play: "चलाईं",

  tip_cord_title: "नाल के देखभाल",
  tip_cord_1: "बच्चा के छूए से पहिले साबुन से हाथ धोईं।",
  tip_cord_2: "नाल के साफ आ सूखा राखीं। ओकरा पर तेल, राख, गोबर भा पाउडर कुछ ना लगाईं।",
  tip_cord_3: "डायपर के नाल के नीचे मोड़ीं, ताकि हवा लागत रहे।",
  tip_cord_4: "लाली, मवाद, बदबू भा बुखार होखे त तुरंत आशा दीदी भा स्वास्थ्य केंद्र जाईं।",

  tip_rash_title: "डायपर रैश से बचाव",
  tip_rash_1: "गीला भा गंदा होते डायपर बदलीं — हर 3–4 घंटा पर देखीं।",
  tip_rash_2: "पानी भा मुलायम वाइप से हल्का हाथ से साफ करीं, फेर थपथपा के सुखाईं।",
  tip_rash_3: "कुछ देर बिना डायपर राखीं, ताकि चमड़ी के हवा मिले।",
  tip_rash_4: "चमड़ी लाल होखे, फफोला होखे भा पानी निकले त स्वास्थ्यकर्मी के देखाईं।",

  tip_bf_title: "स्तनपान",
  tip_bf_1: "जनम के एक घंटा के भीतर दूध पियावल शुरू करीं। पहिला गाढ़ दूध बच्चा के पहिला टीका ह।",
  tip_bf_2: "पहिला 6 महीना खाली माई के दूध — पानी, घुट्टी भा कुछ आउर ना।",
  tip_bf_3: "बच्चा जब माँगे तब दूध पियाईं, दिन-रात — 24 घंटा में 8–12 बेर।",
  tip_bf_4: "बच्चा के सटा के राखीं, ओकर ठुड्डी छाती से लागे आ मुँह पूरा खुलल रहे।",

  tip_kmc_title: "कंगारू मदर केयर",
  tip_kmc_1: "बच्चा के खाली डायपर आ टोपी में, माई के खुलल छाती से सटा के सीधा राखीं।",
  tip_kmc_2: "माई आ बच्चा के एक कपड़ा से ढकीं। बच्चा के मूड़ी एक ओर मुड़ल रहे, नाक-मुँह खुलल रहे।",
  tip_kmc_3: "दिन में जेतना देर हो सके ई करीं। बाप भा परिवार के लोग भी कर सकेला।",
  tip_kmc_4: "एही बीच दूध पियाईं। एहसे बच्चा गरम आ चैन से रहेला।",

  tip_vacc_title: "टीका के तारीख",
  tip_vacc_1: "6 हफ्ता पर बच्चा के पहिला टीका लगवाईं।",
  tip_vacc_2: "10 हफ्ता पर अगिला टीका लगवाईं।",
  tip_vacc_3: "14 हफ्ता पर तिसरका बेर टीका लगवाईं।",
  tip_vacc_4: "सरकारी स्वास्थ्य केंद्र पर टीका मुफ्त बा। हर बेर मातृ-शिशु सुरक्षा (MCP) कार्ड संगे ले जाईं।",

  helpTitle: "मदद",
  helplineLabel: "हेल्पलाइन (मुफ्त)",
  helplineNote: "कवनो बेरा कॉल करीं, भा वार्ड डेस्क पर स्टाफ के बताईं।",
  report: "समस्या बताईं", reportPick: "का समस्या भइल?",
  r1: "पैक ना गिरल", r2: "भुगतान में दिक्कत", r3: "मशीन खराब भा गंदा बा", r4: "कुछ आउर",
  reportThanks: "रउआ के बात दर्ज हो गइल। धन्यवाद।",
  reportDemo: "(डेमो: कुछ भेजल भा सेव ना भइल।)"
},

/* --------------------------------------------------------------- MAITHILI */
mai: {
  langName: "मैथिली", langShort: "मै",
  appName: "माँ पॉइंट",
  back: "पाछाँ", home: "होम", help: "मदति", next: "आगाँ", prev: "पाछाँ", finish: "समाप्त",

  idleHead: "नवजातक देखभाल, 24 घंटा",
  idleSub: "जरूरी सामान, मुफ्त टिप्स आ मदति — प्रसूति वार्डक ठीके बाहर",
  idleTouch: "शुरू करबाक लेल स्क्रीन छुउ",

  langTitle: "अपन भाषा चुनू",

  homeTitle: "आइ हम अहाँक की मदति करी?",
  tile1: "नवजातक जरूरी सामान कीनू", tile1Sub: "डायपर आ वाइप्स — कीनब पूर्ण अहाँक इच्छा",
  tile2: "नवजातक देखभालक टिप्स देखू", tile2Sub: "सहज चित्रक संग, सभक लेल मुफ्त",
  tile3: "WhatsApp पर मुफ्त टिप्स पाउ", tile3Sub: "अपन इच्छासँ — कखनहुँ बंद क' सकैत छी",
  stripLabel: "स्वास्थ्य विभागक संदेश",
  msg1: "जन्मक एक घंटाक भीतर स्तनपान शुरू करू। पहिल 6 मास मात्र माइक दूध — पानियो नहि।",
  msg2: "खतराक संकेत: बच्चा दूध नहि पिबय, बहुत गरम वा ठंढ लागय, तेज साँस चलय वा झटका आबय — तुरन्त डाक्टरकेँ देखाउ।",
  msg3: "JSSK मे सरकारी अस्पतालमे प्रसव, दवाइ, जाँच, भोजन आ आबय-जायक सुविधा मुफ्त अछि।",
  msg4: "टीकाकरण: बच्चाकेँ 6, 10 आ 14 सप्ताह पर टीका लगबाउ — सरकारी केंद्रमे मुफ्त।",
  msg5: "एतय कीनब अहाँक इच्छा थिक। सरकारी अस्पतालक सभ सेवा सदिखन मुफ्त अछि।",

  prodTitle: "नवजातक जरूरी सामान",
  optionalNote: "कीनब पूर्ण अहाँक इच्छा थिक। सरकारी अस्पतालक सेवा मुफ्त अछि आ मुफ्ते रहत।",
  mrp: "MRP", progPrice: "कार्यक्रम मूल्य", placeholderTag: "नमूना मूल्य (डेमो)",
  save: "₹{n} क बचत", buy: "कीनू",
  prod_small_name: "नवजात डायपर — छोट पैक", prod_small_desc: "नवजातक नापक डायपरक छोट सील-बंद पैक",
  prod_single_name: "नवजात डायपर — एक", prod_single_desc: "एखनुका जरूरतिक लेल एक डायपर",
  prod_wipes_name: "बेबी वाइप्स", prod_wipes_desc: "नवजातक नाजुक चर्मक लेल मुलायम वाइप्स",
  prod_firstnight_name: "फर्स्ट नाइट पैक", prod_firstnight_desc: "पहिल रातिक लेल डायपर, वाइप्स आ कूपन बुकलेट",

  payTitle: "भुगतान कोना करब?",
  payUpi: "UPI सँ भुगतान", payUpiSub: "कोनो UPI ऐपसँ QR स्कैन करू",
  payCash: "नगद", payCashSub: "स्लॉटमे सिक्का वा नोट राखू",
  demoBannerLocal: "डेमो — असली भुगतान नहि",
  simUpi: "भुगतानक डेमो करू", simCash: "नगदक डेमो करू",
  total: "कुल", changeMethod: "दोसर तरीका",
  processing: "भुगतान भऽ रहल अछि…", paid: "भुगतान भेटि गेल (डेमो)",
  cashHint: "स्लॉटमे सिक्का वा नोट राखू",

  dispTitle: "अहाँक पैक आबि रहल अछि…",
  collect: "कृपया नीचाँसँ अपन पैक लए लिअ", collected: "हम पैक लए लेलहुँ",

  thanksTitle: "धन्यवाद!",
  thanksOptional: "कीनब सदिखन अहाँक इच्छा थिक।",
  thanksFree: "सरकारी अस्पतालक सभ सेवा मुफ्त अछि — एकरा लेल किछु कीनब जरूरी नहि।",
  optionalTag: "वैकल्पिक",

  waTitle: "WhatsApp पर मुफ्त टिप्स — अहाँक सहमति",
  waIntro: "पहिने पढ़ि लिअ जे की होएत:",
  waP1: "अहाँकेँ सप्ताहमे 1–2 संदेश भेटत: नवजातक देखभालक टिप्स, 6, 10 आ 14 सप्ताहक टीकाक स्मरण, आ कखनो-कखनो लग्गीक दोकानक छूट कूपन।",
  waP2: "अहाँक नंबर कहियो बेचल वा आन केँ देल नहि जायत।",
  waP3: "अहाँ कखनहुँ STOP लिखि कए बंद क' सकैत छी, आ अपन नंबर हटबा सकैत छी।",
  waP4: "ई पूर्णतः वैकल्पिक अछि। मना केलासँ कोनो सरकारी सेवा पर कोनो प्रभाव नहि पड़त।",
  agree: "हँ, हम सहमत छी", noThanks: "नहि, धन्यवाद",
  keypadTitle: "अपन मोबाइल नंबर दिअ", keypadHint: "10 अंकक नंबर",
  demoKeypad: "डेमो: ई कीपैड असली नहि अछि — नंबर नहि सेव होयत, नहि कतहु पठाओल जायत।",
  sendTips: "टिप्स पठाउ", del: "मेटाउ",
  waSuccess: "भऽ गेल! अहाँकेँ शीघ्रे पहिल टिप भेटत।",
  waSuccessDemo: "(डेमो: कोनो नंबर सेव नहि भेल, कोनो संदेश नहि पठाओल गेल।)",

  tipsTitle: "नवजातक देखभाल — टिप्स", tipsSub: "देखबाक लेल कोनो कार्ड छुउ",
  steps: "{n} चरण", stepOf: "चरण {a} / {b}", weeks: "सप्ताह", months: "मास",
  tipDone: "पूरा भेल", replay: "फेर देखू", pause: "रुकू", play: "चलाउ",

  tip_cord_title: "नालक देखभाल",
  tip_cord_1: "बच्चाकेँ छुबासँ पहिने साबुनसँ हाथ धोउ।",
  tip_cord_2: "नालकेँ साफ आ सूखल राखू। ओहि पर तेल, राख, गोबर वा पाउडर किछु नहि लगाउ।",
  tip_cord_3: "डायपरकेँ नालसँ नीचाँ मोड़ू, जाहिसँ हवा लगैत रहए।",
  tip_cord_4: "ललाइ, मवाद, दुर्गंध वा बुखार हो तँ तुरन्त आशा दीदी वा स्वास्थ्य केंद्र जाउ।",

  tip_rash_title: "डायपर रैशसँ बचाव",
  tip_rash_1: "गील वा गंदा होइते डायपर बदलू — हरेक 3–4 घंटा पर देखू।",
  tip_rash_2: "पानि वा मुलायम वाइपसँ हल्लुक हाथे साफ करू, फेर थपथपाए सुखाउ।",
  tip_rash_3: "किछु काल बिना डायपर राखू, जाहिसँ चर्मकेँ हवा भेटैक।",
  tip_rash_4: "चर्म लाल हो, फोका हो वा पानि निकलय तँ स्वास्थ्यकर्मीकेँ देखाउ।",

  tip_bf_title: "स्तनपान",
  tip_bf_1: "जन्मक एक घंटाक भीतर स्तनपान शुरू करू। पहिल गाढ़ दूध बच्चाक पहिल टीका थिक।",
  tip_bf_2: "पहिल 6 मास मात्र माइक दूध — पानि, घुट्टी वा किछु आन नहि।",
  tip_bf_3: "बच्चा जखन मँगए तखन दूध पिआउ, दिन-राति — 24 घंटामे 8–12 बेर।",
  tip_bf_4: "बच्चाकेँ सटाए कए राखू, ओकर ठुड्डी छातीसँ लागए आ मुँह पूरा खुजल रहए।",

  tip_kmc_title: "कंगारू मदर केयर",
  tip_kmc_1: "बच्चाकेँ मात्र डायपर आ टोपीमे, माइक खुजल छातीसँ सटाए सीधा राखू।",
  tip_kmc_2: "माइ आ बच्चाकेँ एक कपड़ासँ झाँपू। बच्चाक माथ एक दिस मुड़ल रहए, नाक-मुँह खुजल रहए।",
  tip_kmc_3: "दिनमे जतेक काल भऽ सकय ई करू। पिता वा परिवारक लोकसब सेहो क' सकैत छथि।",
  tip_kmc_4: "एहि बीच दूध पिआउ। एहिसँ बच्चा गरम आ चैनसँ रहैत अछि।",

  tip_vacc_title: "टीकाकरणक तिथि",
  tip_vacc_1: "6 सप्ताह पर बच्चाकेँ पहिल टीका लगबाउ।",
  tip_vacc_2: "10 सप्ताह पर अगिला टीका लगबाउ।",
  tip_vacc_3: "14 सप्ताह पर तेसर बेर टीका लगबाउ।",
  tip_vacc_4: "सरकारी स्वास्थ्य केंद्रमे टीका मुफ्त अछि। हर बेर मातृ-शिशु सुरक्षा (MCP) कार्ड संग लए जाउ।",

  helpTitle: "मदति",
  helplineLabel: "हेल्पलाइन (निःशुल्क)",
  helplineNote: "कोनो समय कॉल करू, वा वार्ड डेस्क पर स्टाफकेँ कहू।",
  report: "समस्या कहू", reportPick: "की समस्या भेल?",
  r1: "पैक नहि खसल", r2: "भुगतानमे समस्या", r3: "मशीन खराब वा गंदा अछि", r4: "किछु आर",
  reportThanks: "अहाँक बात दर्ज भऽ गेल। धन्यवाद।",
  reportDemo: "(डेमो: किछु पठाओल वा सेव नहि भेल।)"
}
};
