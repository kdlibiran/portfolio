"use client";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { UilHtml3, UilHtml5, UilReact } from "@iconscout/react-unicons";

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
    <div id="about-me" className=" h-[200vh]  overflow-hidden bg-stone-200">
      <div className="h-[25vh] sm:h-[50vh]">
        <div
          ref={slider}
          className="relative z-[0] mt-16 whitespace-nowrap text-[100px] sm:text-[230px]"
        >
          <p ref={firstTitleRef} className="absolute pr-[100px] sm:pr-[200px]">
            About the Developer
          </p>
          <p
            ref={secondTitleRef}
            className="absolute left-[1275px] pr-[100px] sm:left-[2901px] sm:pr-[200px]"
          >
            About the Developer
          </p>
        </div>
      </div>
      <div className="flex w-[100vw] flex-col items-center justify-between sm:flex-row sm:pl-52 sm:pr-52">
        <div className="flex flex-col justify-center sm:flex-col">
          <h1 className="text-3xl sm:text-6xl">Education</h1>
        </div>
        <div className="flex flex-col items-center justify-center pl-10 pr-10 text-center sm:p-0">
          <Image
            src="/static/images/UP-logo.png"
            alt="education"
            width={200}
            height={200}
          />
          <p> University of Philippines - Diliman</p>
          <p> Bachelor of Science in Computer Science</p>
          <p> 2021 - 2025</p>
        </div>
      </div>
      <div className="mt-20 flex w-[100vw] flex-col items-center justify-between sm:mt-44 sm:flex-row sm:pl-52 sm:pr-52">
        <div className="flex flex-col-reverse items-center justify-center sm:flex-col">
          <h1 className="text-3xl sm:text-6xl">Languages</h1>
        </div>
        <div className="mt-10 flex flex-row justify-center sm:mt-0">
          <Image
            src="/static/logos/python.svg"
            alt="python"
            width={40}
            height={40}
          />
          <Image
            src="/static/logos/javascript.svg"
            alt="javascript"
            width={40}
            height={40}
          />
          <Image
            src="/static/logos/typescript.svg"
            alt="typescript"
            width={40}
            height={40}
          />

          <UilHtml5 size="40" />
          <UilHtml3 size="40" />
          <Image src="/static/logos/c.svg" alt="c" width={40} height={40} />
        </div>
      </div>
      <div className="mt-20 flex w-[100vw] flex-col items-center justify-between sm:mt-44 sm:flex-row sm:pl-52 sm:pr-52">
        <div className="flex flex-col-reverse items-center justify-center sm:flex-col">
          <h1 className="text-3xl sm:text-6xl">Technologies</h1>
        </div>
        <div className="mt-10 flex flex-row justify-center sm:mt-0">
          <UilReact size="40" />
          <Image
            src="/static/logos/django.svg"
            alt="django"
            width={40}
            height={40}
          />
          <Image
            src="/static/logos/node.svg"
            alt="node"
            width={40}
            height={40}
          />
          <Image
            src="/static/logos/figma.svg"
            alt="figma"
            width={40}
            height={40}
          />
          <Image src="/static/logos/git.svg" alt="git" width={40} height={40} />
          <Image
            src="/static/logos/tailwind-css.svg"
            alt="tailwind css"
            width={40}
            height={40}
          />
          <Image
            src="/static/logos/sql-file.svg"
            alt="sql"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
