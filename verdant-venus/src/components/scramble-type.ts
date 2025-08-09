import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/all';

gsap.registerPlugin(ScrambleTextPlugin);

const timeline = gsap.timeline({ repeat: -1 });

const tl = gsap.timeline({
  repeat: 1,
  yoyo: true,
  repeatDelay: 1,
  ease: "power2.inOut"
});

tl.to(".scramble-typewriter", {
  duration: 2,
  scrambleText: {
    text: "DISCOVER MORE",
    chars: "10",
    newClass: "accent--text",
    revealDelay: 0.5,
    tweenLength: false
  }
});

timeline.add(tl);
