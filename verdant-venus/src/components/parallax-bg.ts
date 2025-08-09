import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".stars", {
  scrollTrigger: {
    scrub: 1
  }, 
  y: (_i, target) => (
    -ScrollTrigger.maxScroll(window) * target.dataset.speed
  ),
  ease: "none"
});

