"use client";

import {
  UilGithub,
  UilFacebook,
  UilInstagram,
  UilEnvelope,
} from "@iconscout/react-unicons";

export default function LandingPage() {
  return (
    <div>
      <div
        id="hero"
        className="center top-0 flex h-[100vh] flex-1 snap-center bg-gradient-to-b from-white to-stone-200"
      >
        <div className="ml-16 flex h-full w-1/2 flex-initial flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl">
            Hello, I'm Kyle David Libiran
          </h1>
          <p className="mt-4 text-xl sm:text-2xl">
            I am a full-stack web developer who loves to learn and build new
            things.
          </p>
          <div className="mt-4 flex flex-row space-x-3">
            <a href="https://github.com/kdlibiran">
              <UilGithub size="40" />
            </a>
            <a href="https://fb.com/kylelibiran">
              <UilFacebook size="40" />
            </a>
            <a href="https://instagram.com/klibiran">
              <UilInstagram size="40" />
            </a>
            <a href="mailto:kylelibiran@gmail.com">
              <UilEnvelope size="40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
