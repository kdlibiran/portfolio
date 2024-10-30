"use client"

import { useContext } from "react";
import { ScrollContext } from "@/components/scroll-provider";

export default function Projects() {
  const scrollContext = useContext(ScrollContext);
  if (!scrollContext) {
    return null;
  }
  const { projects } = scrollContext;

  return (
      <div className="w-full h-screen flex justify-center items-center" ref={projects}>
        <h1 className="text-4xl font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">Projects</h1>
        {/* TODO: Add projects here */}
      </div>
  );
}
