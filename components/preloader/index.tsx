"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "./anim";
export default function Preloader() {
  const texts = ["Hello", "Welcome to my Portfolio"];
  const [text, setText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(texts[1]);
    }, 1000);
  }, []);
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className=" z-100 flex h-[100vh] w-[100vw] flex-1 items-center justify-center bg-black p-10 text-white"
    >
      <h1 className="text-center text-5xl">{text}</h1>
    </motion.div>
  );
}
