"use client";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import Link from "next/link";
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
    <div
      id="about-me"
      className="flex h-[100vh] flex-col items-center justify-center bg-stone-200"
    >
      <div className="scroll-none hidden w-[90vw] flex-initial sm:flex sm:overflow-hidden">
        <div
          ref={slider}
          className="z-[0] flex h-[60px] whitespace-nowrap text-6xl"
        >
          <p ref={firstTitleRef} className="pr-[50px]">
            About the Developer - About the Developer - About the Developer -
          </p>
          <p ref={secondTitleRef} className="left-[2461px] pr-[50px]">
            About the Developer - About the Developer - About the Developer -
          </p>
        </div>
      </div>
      <div className="mb:10 flex w-[90vw] flex-initial flex-col sm:mt-10 sm:flex-row sm:justify-end">
        <div className="flex flex-row justify-center sm:w-1/2">
          <Image
            src="/static/images/logo1.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="-mt-16 flex flex-col justify-center text-center sm:mt-0 sm:w-1/2 sm:text-right">
          <p className="sm:text-l text-l mt-4">
            I am currently a student at the University of the Philippines
            Diliman taking up a degree in Computer Science. I am a full stack
            web developer. However, I am also interested in mobile development,
            game development, machine learning and more. I am proficient in
            HTML, CSS, Javascript, React, Node.js, NextJS, SQL, and more. I am
            also familiar with Python, C++, and Java. I am also familiar with
            tools such as Git and Figma. I have a passion for learning and I am
            always eager to learn new things.
          </p>

          <Dialog>
            <DialogTrigger className="flex flex-row justify-end">
              <div className="group w-[120px] text-blue-600 transition duration-300 ease-in-out">
                <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-2xl transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
                  Skills
                </span>
              </div>
            </DialogTrigger>
            <DialogContent className="w-2/3 rounded-lg bg-stone-200">
              <DialogTitle className="text-3xl">Skills</DialogTitle>
              <div className="grid gap-x-2 gap-y-3 sm:grid-cols-3">
                <div className="text-center text-xl">
                  <p>Languages</p>
                  <div className="font-bold">
                    <p>C</p>
                    <p>C++</p>
                    <p>Python</p>
                    <p>JavaScript</p>
                    <p>TypeScript</p>
                  </div>
                </div>
                <div className="text-center text-xl">
                  <p>Web Development</p>
                  <div className="font-bold">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                    <p>Next.js</p>
                    <p>Node.js</p>
                    <p>Django</p>
                    <p>Flask</p>
                  </div>
                </div>
                <div className="text-center text-xl">
                  <p>Data Analysis</p>
                  <div className="font-bold">
                    <p>Pandas</p>
                    <p>Numpy</p>
                    <p>Matplotlib</p>
                    <p>Seaborn</p>
                    <p>Scikit-learn</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="text-center text-xl">
                  <p>Database</p>
                  <div className="font-bold">
                    <p>SQL</p>
                    <p>SQLite</p>
                    <p>PostgreSQL</p>
                    <p>MongoDB</p>
                  </div>
                </div>
                <div className="text-center text-xl">
                  <p>Others</p>
                  <div className="font-bold">
                    <p>Git</p>
                    <p>Figma</p>
                    <p>PyQt</p>
                    <p>Selenium</p>
                    <p>Playwright</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
