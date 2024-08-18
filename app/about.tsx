"use client"

import { useContext } from "react";
import { ScrollContext } from "@/components/scroll-provider";
import { DATA } from "./data";
export default function About() {
  const scrollContext = useContext(ScrollContext);
  if (!scrollContext) {
    return null;
  }
  const { about } = scrollContext;

  return (
      <div className="w-full h-screen flex justify-center items-center" ref={about}>
        <div className="w-[60%] border p-8 rounded-3xl flex place-items-center gap-8">
          <img src={DATA.image} className="h-[100%] w-[100%] rounded-full sm:flex hidden" />
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">About Me</h1>
          <p className="text-lg mt-4 font-sans text-muted-foreground">{DATA.description}</p>
          </div>
          </div>
      </div>
  );
}
