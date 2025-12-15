import { useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { CreativeLab } from "./components/CreativeLab";
import { Contact } from "./components/Contact";

export default function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#0a0a0a";
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Main content */}
      <main className="relative overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CreativeLab />
        <Contact />
      </main>
    </div>
  );
}