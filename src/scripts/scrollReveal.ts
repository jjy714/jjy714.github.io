// Fades + rises [data-reveal] elements into view the first time they
// enter the viewport, then stops observing them.
const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (targets.length > 0) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  } else {
    // Fallback: no IntersectionObserver support, just show everything.
    targets.forEach((el) => el.classList.add("reveal-visible"));
  }
}
