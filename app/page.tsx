"use client";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
import Preloader from "@/components/preloader";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const comp = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    })();
  }, []);

  return (
    <main ref={comp}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          exit={{ y: 0 }}
          className="fixed"
        >
          <nav
            id="nav"
            className="fixed top-0 flex w-[100vw] flex-1 justify-between bg-white p-6 shadow-md"
          >
            <p className="text-l">Kyle Libiran</p>
            <div className="hidden space-x-5 md:flex">
              <button id="#herobtn">Home </button>
              <button id="#aboutbtn">About</button>
              <button>Projects</button>
              <button>Contact</button>
            </div>
          </nav>
        </motion.div>
      )}
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
        className="flex h-[100vh] flex-1 snap-center flex-col bg-stone-200"
      >
        <div id="about-title" className=" ml-36 mt-36 text-5xl antialiased">
          About Me
        </div>
      </div>
    </main>
  );
}
