// app.js — portfolio page interactions: typewriter, counters, reveal on scroll.
(function () {
  // Hero typewriter.
  const phrases = [
    "Quality Senior Systems Engineer.",
    "Data analytics & business intelligence.",
    "Healthcare compliance through automation.",
    "Ask the ✦ agent anything.",
  ];
  const el = document.getElementById("typewriter");
  if (el) {
    let pi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = phrases[pi];
      if (!deleting) {
        ci++;
        el.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; return setTimeout(tick, 1900); }
      } else {
        ci--;
        el.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      setTimeout(tick, deleting ? 34 : 62);
    };
    tick();
  }

  // Count-up stats when visible.
  const counters = document.querySelectorAll("[data-count]");
  const ioCount = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target;
      const target = Number(el.dataset.count);
      const t0 = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - t0) / 1100);
        el.textContent = Math.round(target * p);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      ioCount.unobserve(el);
    }
  }, { threshold: 0.6 });
  counters.forEach((c) => ioCount.observe(c));

  // Reveal on scroll.
  document.querySelectorAll(".card, .skill, .section").forEach((s) => s.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((s) => io.observe(s));
})();
