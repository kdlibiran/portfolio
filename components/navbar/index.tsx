"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Navbar() {
  gsap.registerPlugin(ScrollToPlugin);
  const goToHome = () => {
    gsap.to(window, { duration: 1, scrollTo: "#home" });
  };
  const goToAbout = () => {
    gsap.to(window, { duration: 1, scrollTo: "#about-me" });
  };
  const goToProjects = () => {
    gsap.to(window, { duration: 1, scrollTo: "#projects" });
  };
  const goToContact = () => {
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
  };
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "100%" }}
      exit={{ y: 0 }}
      className="fixed z-[1]"
    >
      <nav
        id="nav"
        className="fixed top-0 z-[1] flex w-[100vw] flex-1 justify-between bg-white p-6 shadow-md"
      >
        <p className="text-l">Kyle Libiran</p>
        <div className="hidden space-x-5 md:flex">
          <button onClick={goToHome}>Home</button>
          <button onClick={goToAbout}>About</button>
          <button onClick={goToProjects}>Projects</button>
          <button onClick={goToContact}>Contact</button>
        </div>
      </nav>
    </motion.div>
  );
}
