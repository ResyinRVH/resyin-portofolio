import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Service";
import {Projects} from "@/components/Project";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0d0f] text-white selection:bg-[#72cf24] selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
    </main>
  );
}