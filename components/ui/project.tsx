"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function Project({
  title,
  body,
  image,
  link,
}: {
  title: string;
  body: string;
  image: string;
  link: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {body}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="mt-4 w-full"
        >
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl border-2 border-white object-cover group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="mt-20 flex items-center justify-between">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
          >
            <a href={link}>Open</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
