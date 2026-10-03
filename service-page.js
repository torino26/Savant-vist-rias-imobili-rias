const whatsapp = document.querySelector("#whatsapp");
const pageContent = document.querySelector(".page-grid");

if (whatsapp && pageContent) {
  const numero = "5544999999999";
  const mensagem = pageContent.dataset.whatsappMessage;

  whatsapp.href =
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

document.body.classList.add("has-js");

const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealElementsPassedByViewport = () => {
  revealElements.forEach((element) => {
    if (element.getBoundingClientRect().bottom < 0) {
      element.classList.add("is-visible");
    }
  });
};

window.addEventListener("scroll", revealElementsPassedByViewport, { passive: true });

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -24px 0px"
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}
