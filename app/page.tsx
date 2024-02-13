import Kbd from "@/components/kbd";
export default function Home() {
  return (
    <main>
      <nav className="p-6 flex flex-1 justify-between shadow-md">
        <p>Kyle Libiran</p>
        <div className="space-x-5 md:flex hidden">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      <div className="center w-[100vw] h-[90vh] top-0 flex flex-1">
        <div className="flex-initial flex flex-col h-full pt-32 ml-16 w-1/3">
          <h1 className="text-6xl">Hello, I'm Kyle David Libiran</h1>
          <p className="text-2xl">
            I'm a software engineer and a web developer
          </p>
        </div>
        <div className="flex-initial mt-48 items-center flex-col w-2/3 md:flex hidden ml-16">
          <Kbd />
        </div>
      </div>
    </main>
  );
}
