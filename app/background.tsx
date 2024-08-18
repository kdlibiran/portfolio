"use client";

import { useContext } from "react";
import { ResumeCard } from "@/components/resume-card";
import { ScrollContext } from "@/components/scroll-provider";
import { DATA } from "./data";

export default function Background() {
  const scrollContext = useContext(ScrollContext);
  if (!scrollContext) {
    return null;
  }
  const { background } = scrollContext;

  return (
    <div
      className="flex justify-center w-full h-screen items-center"
      ref={background}
    >
      <div className="flex flex-col w-full sm:w-1/2 justify-center gap-14 sm:px-0 px-5">
        <section id="work" className="flex flex-col w-full justify-center">
          <div className="flex min-h-0 flex-col gap-y-6 w-full">
            <h2 className="text-xl font-bold text-center">Work Experience</h2>
            {DATA.work.map((work, id) => (
              <ResumeCard
                key={id}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold text-center">Education</h2>
            {DATA.education.map((education, id) => (
              <ResumeCard
                key={id}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
