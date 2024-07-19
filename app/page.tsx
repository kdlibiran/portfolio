import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex justify-center items-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Kyle David Libiran
        </span>
      </div>
      <Navbar />
    </main>
  );
}
