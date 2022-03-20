gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 1,
});

let timeline01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".flex-container-about",
    start: "top center",
  },
});

timeline01.from(".grid-container-about", { x: -100, autoAlpha: 0 });
timeline01.from(".grid-item-1", { y: 100, autoAlpha: 0 }, "-=0.10");

let timeline02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".flex-container-about",
    start: "top center",
  },
});

timeline02.from(".grid-container-about-2", { x: 100, autoAlpha: 0 });
