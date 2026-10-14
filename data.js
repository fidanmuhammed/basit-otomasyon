/* =====================================================================
   SITE DATA — the only file you need to edit to update the site.
   Only add things that are real. Empty sections show an honest
   "coming soon" state, and Results stays hidden until you add numbers.

   Put your files in assets/examples/ and reference them with relative
   paths (no leading slash), e.g. "assets/examples/lamp-before.jpg".
   ===================================================================== */
window.SITE = {

  // Public contact email. Shows a "Get in touch" button. Leave "" to hide it.
  email: "muhamm3df1dan@gmail.com",

  // Optional hero background video (short, muted, looping, ideally < 8 MB).
  // Example: "assets/hero.mp4". Leave "" to use the animated gradient.
  heroVideo: "",

  // Before/after examples. "before" = your original product photo,
  // "after" = the ad your automation generated (image or video).
  examples: [
    {
      title: "Ceramic table lamp",
      note: "Sample creative: a plain listing photo turned into a lifestyle ad scene.",
      ratio: "4 / 3",
      before: "assets/examples/lamp-before.jpg",
      after: { type: "image", src: "assets/examples/lamp-after.jpg" }
    },
    {
      title: "Insulated steel bottle",
      note: "Sample creative: a floor snapshot turned into an outdoor ad scene.",
      ratio: "4 / 3",
      before: "assets/examples/bottle-before.jpg",
      after: { type: "image", src: "assets/examples/bottle-after.jpg" }
    }
  ],

  // Real measured numbers only. Leave empty to hide the Results section.
  stats: [
    // { value: "2 min", label: "Average time per generated ad (measured over N runs)" },
  ],

  // Dated progress entries, newest first. Use real dates.
  log: [
    { date: "2026-10-13", title: "Project site published", text: "Public project page is live at basitotomasyon.com with the first sample creatives." },
    { date: "2026-10-13", title: "Pipeline prototype built", text: "Workflow that takes product photos, submits them to Higgsfield's API (Seedance) and collects the generated creatives." }
  ]
};
