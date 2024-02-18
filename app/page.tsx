import {
  UilGithub,
  UilFacebook,
  UilInstagram,
  UilEnvelope,
  UilJavaScript,
  UilReact,
  UilHtml5,
  UilHtml3,
  UilDatabase,
} from "@iconscout/react-unicons";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="fixed flex w-[100vw] flex-1 justify-between bg-white p-6 shadow-md">
        <p className="text-l">Kyle Libiran</p>
        <div className="hidden space-x-5 md:flex">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      <div className="center top-0 flex h-[100vh] flex-1 bg-gradient-to-b from-white to-stone-200">
        <div className="ml-16 flex h-full w-1/2 flex-initial flex-col justify-center">
          <h1 className="text-6xl">Hello, I'm Kyle David Libiran</h1>
          <p className="mt-4 text-2xl">
            I am a computer science student from the University of the
            Philippines - Diliman{" "}
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
      <div className="center flex h-[100vh] flex-1 flex-col items-center bg-stone-200">
        <div className="mt-36 text-6xl">About Me</div>
        <div className="mt-0 grid w-full grid-cols-2">
          <div className="col-span-1 grid grid-rows-3 items-center text-center">
            <h1 className=" text-3xl">Education</h1>
            <div className="-mt-5 flex flex-row justify-center space-x-3">
              <Image
                src="/up.png"
                alt="UP"
                width={200}
                height={200}
                className=" rounded-full"
              />
            </div>
            <div>
              <p>University of the Philippines</p>
              <p>Bachelor of Science in Computer Science</p>
              <p>2020 - Present</p>
            </div>
          </div>
          <div className="col-span-1 grid grid-rows-3 items-center text-center">
            <h1 className="text-3xl"> Skills </h1>
            <div className="flex flex-row justify-center space-x-3">
              <UilJavaScript size="40" />
              <UilReact size="40" />
              <UilHtml5 size="40" />
              <UilHtml3 size="40" />
              <UilDatabase size="40" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
