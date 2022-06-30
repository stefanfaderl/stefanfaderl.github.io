"use strict";
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  duration: 0.7,
});

let timeline01 = gsap.timeline({
  scrollTrigger: {
    trigger: ".flex-container-about",
    start: "top center",
  },
});

timeline01.from(".grid-container-about", { x: -50, autoAlpha: 0 });
timeline01.from(".grid-item-1", { y: 100, autoAlpha: 0 }, "-=0.10");

let timeline02 = gsap.timeline({
  scrollTrigger: {
    trigger: ".flex-container-about",
    start: "top center",
  },
});

timeline02.from(".grid-container-about-2", { x: 100, autoAlpha: 0 });

const flexItem = gsap.utils.toArray('[class*="flex-item"]');

gsap.set(flexItem, { autoAlpha: 0, y: 170 });

flexItem.forEach((item, i) => {
  const anim = gsap.to(item, {
    duration: 1.2,
    autoAlpha: 1,
    y: 0,
    paused: true,
  });

  // Use callbacks to control the state of the animation
  ScrollTrigger.create({
    trigger: item,
    start: "top 80%",
    end: "bottom center",
    once: true,
    onEnter: (self) => {
      // If it's scrolled past, set the state
      // If it's scrolled to, play it
      self.progress === 1 ? anim.progress(1) : anim.play();
    },
  });
});
