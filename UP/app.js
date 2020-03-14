const intro = document.querySelector(".intro");
const video = document.querySelector("video");

const text = document.querySelector("h1");

const second = document.querySelector(".second");
const third = document.querySelector(".third");
const four = document.querySelector(".four");
const text2 = second.querySelector("h1");

//scroll animation

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  duration: 2500,
  triggerElement: intro,
  triggerHook: 0
})
  .addTo(controller)
  .setPin(intro);

//control video animation

let framCount = 0.8;
let scrollPosition = 0;
let delay = 0;
scene.on("update", e => {
  scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPosition - delay) * framCount;

  video.currentTime = delay;
}, 29.7);

//text animation
const textAnimate = new TweenMax.fromTo(
  text,
  { opacity: 0 },
  { opacity: 1, ease: "Power4.out" },
  "+=1"
);
const scene2 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: intro,
  triggerHook: 0,
  reverse: false
})
  .setTween(textAnimate)
  .addTo(controller);
//text animate
const tl = new TimelineMax();
tl.staggerFromTo(
  ".second .hide-text",
  1,
  {
    y: "200",
    ease: Power4.easeIn
  },
  {
    y: "0",
    ease: Power4.easeOut
  },
  0.1
).fromTo(
  ".second .img-container img",
  2,
  { x: "1000", ease: Expo.easeIn },
  { x: "0", ease: Expo.easeOut }
);
const tl2 = new TimelineMax();
tl.fromTo(
  ".third .hide-text",
  1,
  {
    y: "200",
    ease: Power4.easeIn
  },
  {
    y: "0",
    ease: Power4.easeOut
  },
  0.1
).fromTo(
  ".third .img-container img",
  2,
  { x: "-1000", ease: Expo.easeIn },
  { x: "0", ease: Expo.easeOut }
);
const tl3 = new TimelineMax();
tl.fromTo(
  ".four .hide-text",
  1,
  {
    y: "200",
    ease: Power4.easeIn
  },
  {
    y: "0",
    ease: Power4.easeOut
  },
  0.1
).fromTo(
  ".four .img-container img",
  2,
  { x: "1000", ease: Expo.easeIn },
  { x: "0", ease: Expo.easeOut }
);
let scene4 = new ScrollMagic.Scene({
  triggerElement: third,
  triggerHook: 0,
  reverse: false
})
  .setTween(tl2)
  .addTo(controller);
let scene3 = new ScrollMagic.Scene({
  triggerElement: second,
  triggerHook: 0,
  reverse: false
})
  .setTween(tl)
  .addTo(controller);
let scene5 = new ScrollMagic.Scene({
  triggerElement: four,
  triggerHook: 0,
  reverse: false
})
  .setTween(tl3)
  .addTo(controller);
