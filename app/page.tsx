import Navbar from "@/components/navbar";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import ScrollProvider from "@/components/scroll-provider";
import Projects from "./projects";
import Background from "./background";

export default function App() {
  return (
    <main>
      <ScrollProvider>
        <Home />
        <About/>
        <Skills />
        <Background />
        <Projects />
        <Navbar />
      </ScrollProvider>
    </main>
  );
}
