import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Hero } from "./pages/Hero";
import { About } from "./pages/About";
import { Skill } from "./pages/Skill";
import { Project } from "./pages/Project";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <>
      <section className="relative overflow-hidden">
        
        <div
          className="
         absolute inset-0 hidden dark:block bg-gradient-to-b from-[#030E10] via-[#4C801C] to-[#BBDC12]"
        ></div>
        <div className="relative z-10 pb-20">
          <Navbar />
          <Hero />
          <About />
          <Skill />
        </div>
      </section>
      <Project />
      <Footer />
    </>
  );
}

export default App;
