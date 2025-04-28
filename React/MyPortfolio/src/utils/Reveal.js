import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  duration: 800,
  distance: "20px",
  easing: "ease-in-out",
  reset: false,
});

export default function initScrollReveal() {
  const isMobileOrTablet = window.innerWidth <= 768;

  const originSide = isMobileOrTablet ? "bottom" : "left";
  const oppositeSide = isMobileOrTablet ? "bottom" : "right";

  sr.reveal(".hero .info", { origin: originSide, delay: 200 });
  sr.reveal(".hero .img", { origin: oppositeSide, delay: 200 });

  sr.reveal("#projects > h1", { origin: "top", delay: 200 });
  sr.reveal("#projects > p", { origin: "top", delay: 300 });

  sr.reveal("#projects .menus button", { origin: "bottom", interval: 150 });
  sr.reveal(".project", { origin: "bottom", interval: 150 });

  sr.reveal("#contactHeading", { origin: "top", delay: 200 });

  sr.reveal(".content .about", { origin: originSide, delay: 200 });
  sr.reveal(".content .form", { origin: oppositeSide, delay: 300 });

  sr.reveal(".skills .img img", { origin: "bottom", interval: 150 });

  sr.reveal(".footer p", { origin: "top", delay: 200 });
}
