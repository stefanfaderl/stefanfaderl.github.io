gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 1.5,
});

let timeline01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".flex-container-about",
    start: "top center",
  },
});

timeline01.from(".grid-container-about", { x: -50, autoAlpha: 0 });
timeline01.from(".grid-item-1", { y: 150, autoAlpha: 0 }, "-=0.20");

let timeline02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".flex-container-about",
    start: "top center",
  },
});

timeline02.from(".grid-container-about-2", { x: 150, autoAlpha: 0 });
