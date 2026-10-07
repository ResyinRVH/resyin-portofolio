import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0d0f] text-white selection:bg-[#72cf24] selection:text-black">
      <Navbar />
      <Hero />
    </main>
  );
}