"use client"

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import { House, FolderKanban,  UserRound} from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
import {useContext} from 'react';
import { ScrollContext } from "./scroll-provider";

export default function Navbar() {
  const scrollContext = useContext(ScrollContext);

  if (!scrollContext) {
    return null;
  }

  const { home, about } = scrollContext;

  const scrollToTarget = (targetRef: React.RefObject<HTMLElement>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-10 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <TooltipProvider>
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] " direction="middle">
          <DockIcon>
            <span onClick = {() => scrollToTarget(home)} className="mt-[0.4rem]">
              <Tooltip>
                <TooltipTrigger >
                  <House size={24} />
                </TooltipTrigger>
                <TooltipContent className="mb-4">Home</TooltipContent>
              </Tooltip>
            </span>
          </DockIcon>
          <DockIcon>
            <span onClick = {() => scrollToTarget(about)} className="mt-[0.4rem]">
              <Tooltip>
                <TooltipTrigger>
                  <UserRound size={24} />
                </TooltipTrigger>
                <TooltipContent className="mb-4">About Me</TooltipContent>
              </Tooltip>
            </span>
          </DockIcon>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger>
                <FolderKanban size={24} />
              </TooltipTrigger>
              <TooltipContent className="mb-4">Projects</TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <ThemeToggle />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div >
  );
}
