import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "100%" }}
      exit={{ y: 0 }}
      className="fixed"
    >
      <nav
        id="nav"
        className="fixed top-0 flex w-[100vw] flex-1 justify-between bg-white p-6 shadow-md"
      >
        <p className="text-l">Kyle Libiran</p>
        <div className="hidden space-x-5 md:flex">
          <button id="#aboutbtn">About</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
      </nav>
    </motion.div>
  );
}
