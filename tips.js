/* ==========================================================================
   tips.js — the five newborn-care sequences (3–4 slides each).

   Only the PICTURES and ORDER are defined here. The words for each slide live in
   strings.js under  tip_<id>_title  and  tip_<id>_1 … tip_<id>_4.
   Add or remove slides here and keep the numbered strings in step.

   Slide fields:
     icon  main picture (see icons.js)      deco  two small floating pictures
     anim  wash | pulse | float | sway | pop
     big   optional large number shown instead of the icon (used for weeks)
   ========================================================================== */

window.TIPS = [
  { id: "cord", icon: "hand", color: "#0F7C7C", slides: [
      { icon: "hand",     deco: ["bubbles", "drop"],     anim: "wash"  },
      { icon: "baby",     deco: ["ban", "sparkle"],      anim: "pulse" },
      { icon: "diaper",   deco: ["wind", "sparkle"],     anim: "float" },
      { icon: "alert",    deco: ["hospital", "thermo"],  anim: "pulse" }
  ]},
  { id: "rash", icon: "diaper", color: "#C4523A", slides: [
      { icon: "clock",    deco: ["diaper", "drop"],      anim: "pulse" },
      { icon: "wipes",    deco: ["drop", "bubbles"],     anim: "sway"  },
      { icon: "sun",      deco: ["wind", "baby"],        anim: "float" },
      { icon: "medical",  deco: ["user", "hospital"],    anim: "pulse" }
  ]},
  { id: "bf", icon: "milk", color: "#B36A0B", slides: [
      { icon: "mother",   deco: ["heart", "clock"],      anim: "float" },
      { icon: "milk",     deco: ["ban", "sparkle"],      anim: "pulse", big: "6", unit: "months" },
      { icon: "baby",     deco: ["moon", "sun"],         anim: "sway"  },
      { icon: "mother",   deco: ["heart", "sparkle"],    anim: "pulse" }
  ]},
  { id: "kmc", icon: "mother", color: "#2F8A64", slides: [
      { icon: "mother",   deco: ["heart", "sparkle"],    anim: "pulse" },
      { icon: "heart",    deco: ["baby", "wind"],        anim: "float" },
      { icon: "clock",    deco: ["user", "heart"],       anim: "pulse" },
      { icon: "milk",     deco: ["baby", "heart"],       anim: "sway"  }
  ]},
  { id: "vacc", icon: "syringe", color: "#2F6F98", slides: [
      { icon: "syringe",  deco: ["calendar", "shield"],  anim: "pop", big: "6",  unit: "weeks" },
      { icon: "syringe",  deco: ["calendar", "shield"],  anim: "pop", big: "10", unit: "weeks" },
      { icon: "syringe",  deco: ["calendar", "shield"],  anim: "pop", big: "14", unit: "weeks" },
      { icon: "shield",   deco: ["book", "hospital"],    anim: "pulse" }
  ]}
];
