"use client";
import gsap from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AboutMePage() {
  const firstTitleRef = useRef(null);
  const secondTitleRef = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstTitleRef.current, { xPercent: xPercent });
    gsap.set(secondTitleRef.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div id="about-me" className=" h-[100vh]  overflow-hidden bg-stone-200">
      <div
        ref={slider}
        className="relative mt-16 whitespace-nowrap text-[230px]"
      >
        <p ref={firstTitleRef} className="absolute pr-[100px]">
          About the Developer
        </p>
        <p ref={secondTitleRef} className="absolute left-[2801px] pr-[100px]">
          About the Developer
        </p>
      </div>
    </div>
  );
}
