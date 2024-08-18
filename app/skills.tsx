"use client";

import { useContext } from "react";
import { Card, CardHeader ,CardContent} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollContext } from "@/components/scroll-provider";
import { DATA } from "./data";
export default function Skills() {
  const scrollContext = useContext(ScrollContext);
  if (!scrollContext) {
    return null;
  }
  const { skills } = scrollContext;

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      ref={skills}
    >
      <h1 className="text-5xl font-bold pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Skills
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-4 font-sans text-muted-foreground sm:w-1/2 sm:px-24 px-4">
        {DATA.skills.map((category, index) => (
          <Card className="w-full" key={index}>
            <CardHeader className="text-xl font-bold text-black dark:text-white">{category.title}</CardHeader>
            <CardContent className="-mt-4">
              {category.items.map((item, idx) => (
                <Badge key={idx} className="pt-1 mr-2 mb-2 rounded-md">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
