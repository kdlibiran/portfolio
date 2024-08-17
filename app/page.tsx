import Navbar from "@/components/navbar";
import Home from "./home";
import About from "./about";
import ScrollProvider from "@/components/scroll-provider";

export default function App() {
  return (
    <main>
      <ScrollProvider>
        <Home />
        <About/>
        <Navbar />
      </ScrollProvider>
    </main>
  );
}
