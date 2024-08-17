"use client"

import { useContext } from "react";
import { ScrollContext } from "@/components/scroll-provider";

export default function About() {
  const scrollContext = useContext(ScrollContext);
  if (!scrollContext) {
    return null;
  }
  const { about } = scrollContext;

  return (
      <div className="w-full h-screen flex justify-center items-center" ref={about}>
        <div className="w-1/2 border p-8 rounded-3xl">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg mt-4">I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies including React, Next.js, Angular, Django, Flask, Postgresql, and more. I am always looking to learn new things and improve my skills. I am currently looking for new opportunities to work on exciting projects with a great team.</p>
        </div>
      </div>
  );
}
