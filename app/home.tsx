"use client"

import { useContext } from "react";
import { ScrollContext } from "@/components/scroll-provider";
import { DATA } from "./data";
export default function Home() {
  const scrollContext = useContext(ScrollContext);
  if (!scrollContext) {
    return null;
  }
  const { home } = scrollContext;

  return (
    <div className="w-full h-screen flex justify-center items-center" ref={home}>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        {DATA.name}
      </span>
    </div>
  );
}
