import "./App.css";
import { Navbar } from "./section/Navbar";
import { Hero } from "./section/Hero";
import { About } from "./section/About";
import { Skill } from "./section/Skill";
import { Project } from "./section/Project";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skill/>
      <Project/>
    </>
  );
}

export default App;
