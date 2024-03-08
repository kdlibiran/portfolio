"use client";
import { useEffect, useState, useRef } from "react";
import Preloader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import LandingPage from "@/components/landing";
import Navbar from "@/components/navbar";
import AboutMePage from "@/components/about-me";
import ProjectsPage from "@/components/projects";
import ContactPage from "@/components/contact";

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
      {!isLoading && <Navbar />}
      <LandingPage />
      <AboutMePage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
