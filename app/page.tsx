"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import {
  UilGithub,
  UilFacebook,
  UilInstagram,
  UilEnvelope,
  UilJavaScript,
  UilReact,
  UilHtml5,
  UilHtml3,
  UilDatabase,
} from "@iconscout/react-unicons";
import Image from "next/image";
import Link from "next/link";
import Kbd from "@/components/kbd";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsap.to("#welcome1", {
      scrollTrigger: {
        trigger: "#welcome1",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: -500,
    });
    gsap.to("#welcome2", {
      scrollTrigger: {
        trigger: "#welcome2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: -500,
    });
    gsap.to(window, { delay: 1, duration: 1, scrollTo: "#welcome2" });
    gsap.to(window, { delay: 2.5, duration: 1, scrollTo: "#hero" });
    gsap.to("#nav", {
      scrollTrigger: {
        trigger: "#welcome2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 100,
    });
    //enter and leave of kbd
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#welcome2",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to("#kbd", { x: 0 })
      .to("#kbd", { x: -850 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to("#kbd", { x: 0 });
  });

  return (
    <main>
      <div className="snap-y snap-mandatory">
        <div
          id="kbd"
          className="fixed -right-[1200px] flex h-full w-full flex-col justify-center"
        >
          <Kbd />
        </div>
        <nav
          id="nav"
          className="fixed -top-[100px] flex w-[100vw] flex-1 justify-between bg-white p-6 shadow-md"
        >
          <p className="text-l">Kyle Libiran</p>
          <div className="hidden space-x-5 md:flex">
            <Link href="#hero">Home </Link>
            <Link href="#about-me">About</Link>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
        <div
          id="welcome1"
          className="center flex h-[100vh] flex-1 snap-center flex-col justify-center"
        >
          <h1 className="text-center text-8xl">Hello</h1>
        </div>

        <div
          id="welcome2"
          className="center flex h-[100vh] flex-1 snap-center flex-col justify-center"
        >
          <h1 className="text-center text-8xl">Welcome to my portfolio</h1>
        </div>

        <div
          id="hero"
          className="center top-0 flex h-[100vh] flex-1 snap-center bg-gradient-to-b from-white to-stone-200"
        >
          <div className="ml-16 flex h-full w-1/2 flex-initial flex-col justify-center">
            <h1 className="text-6xl">Hello, I'm Kyle David Libiran</h1>
            <p className="mt-4 text-2xl">
              I am a computer science student from the University of the
              Philippines - Diliman{" "}
            </p>
            <div className="mt-4 flex flex-row space-x-3">
              <a href="https://github.com/kdlibiran">
                <UilGithub size="40" />
              </a>
              <a href="https://fb.com/kylelibiran">
                <UilFacebook size="40" />
              </a>
              <a href="https://instagram.com/klibiran">
                <UilInstagram size="40" />
              </a>
              <a href="mailto:kylelibiran@gmail.com">
                <UilEnvelope size="40" />
              </a>
            </div>
          </div>
        </div>
        <div
          id="about-me"
          className="center flex h-[100vh] flex-1 snap-center flex-col items-center bg-stone-200"
        >
          <div className="mt-36 text-6xl">About Me</div>
          <div className="grid w-[80vw] grid-cols-2">
            <div className="col-span-1 grid grid-rows-3 items-center text-center">
              <h1 className=" text-3xl">Education</h1>
              <div className="-mt-5 flex flex-row justify-center space-x-3">
                <Image
                  src="/static/images/UP-logo.png"
                  alt="UP Logo"
                  width={200}
                  height={200}
                  className=" rounded-full"
                />
              </div>
              <div>
                <p>University of the Philippines - Diliman</p>
                <p>Bachelor of Science in Computer Science</p>
                <p>2021 - Present</p>
              </div>
            </div>
            <div className="col-span-1 grid grid-rows-3 items-center text-center">
              <h1 className="text-3xl"> Skills </h1>
              <div className="row-span-2 -mt-16 grid grid-cols-3 place-items-center space-y-3">
                <Image
                  src="/static/logos/python.svg"
                  alt="python"
                  width={60}
                  height={60}
                />
                <Image
                  src="/static/logos/javascript.svg"
                  alt="javascript"
                  width={60}
                  height={60}
                />
                <Image
                  src="/static/logos/typescript.svg"
                  alt="typescript"
                  width={60}
                  height={60}
                />

                <UilHtml5 size="60" />
                <UilHtml3 size="60" />
                <Image
                  src="/static/logos/c.svg"
                  alt="c"
                  width={60}
                  height={60}
                />
                <UilReact size="60" />
                <Image
                  src="/static/logos/django.svg"
                  alt="django"
                  width={60}
                  height={60}
                />
                <Image
                  src="/static/logos/tailwind-css.svg"
                  alt="tailwind css"
                  width={60}
                  height={60}
                />
                <Image
                  src="/static/logos/sql-file.svg"
                  alt="SQL"
                  width={60}
                  height={60}
                />
                <Image
                  src="/static/logos/figma.svg"
                  alt="figma"
                  width={60}
                  height={60}
                />
                <Image
                  src="/static/logos/git.svg"
                  alt="git"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
