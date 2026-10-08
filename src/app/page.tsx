import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const SectionLoader = () => (
  <div className="w-full min-h-[400px] bg-[#0c0d0f] animate-pulse" />
);

const Services = dynamic(
  () => import("@/components/Service").then((mod) => mod.Services),
  { loading: SectionLoader }
);

const Projects = dynamic(
  () => import("@/components/Project").then((mod) => mod.Projects),
  { loading: SectionLoader }
);

const About = dynamic(
  () => import("@/components/About").then((mod) => mod.About),
  { loading: SectionLoader }
);

const Contact = dynamic(
  () => import("@/components/Contact").then((mod) => mod.Contact),
  { loading: SectionLoader }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0d0f] text-white selection:bg-[#72cf24] selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}