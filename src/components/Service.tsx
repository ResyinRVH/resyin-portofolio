"use client";

import React, { useState } from "react";
import { ServiceCard, ServiceItem } from "@/components/ui/ServiceCard";

const serviceData: ServiceItem[] = [
  {
    id: "01.",
    title: "Custom Web Application & SaaS",
    tags: ["React / Next.js", "State Management", "REST / GraphQL API", "Admin Dashboard"],
    description:
      "Building high-performance, scalable, and interactive web applications (such as admin dashboards, POS systems, or SaaS platforms) using Next.js and React",
  },
  {
    id: "02.",
    title: "Landing Page & Company Profile",
    tags: ["High Conversion", "Responsive Design", "Modern UI", "Copywriting Friendly"],
    description:
      "Crafting high-converting promotional pages and business profiles focused on clean typography, lightning-fast performance, and modern aesthetics",
  },
  {
    id: "03.",
    title: "Figma to Code (Pixel-Perfect Slicing)",
    tags: ["Tailwind CSS", "Semantic HTML", "Component-Driven", "Clean Architecture"],
    description:
      "Translating Figma design interfaces into pixel-perfect, fully responsive, and maintainable front-end code using Tailwind CSS",
  },
  {
    id: "04.",
    title: "E-Commerce & Digital Ordering System",
    tags: ["Product Catalog", "Cart System", "Digital Menu", "Checkout Flow"],
    description:
      "Developing seamless product catalogs, café/restaurant digital menus, shopping carts, and intuitive online ordering experiences",
  },
  {
    id: "05.",
    title: "Web3 Front-End Integration",
    tags: ["Wallet Connection", "Smart Contract Calls", "ethers.js / wagmi", "DApp UI"],
    description:
      "Designing responsive Web3 interfaces seamlessly connected to smart contracts, wallet integrations, and decentralized ecosystems",
  },
  {
    id: "06.",
    title: "Performance & SEO Optimization",
    tags: ["Core Web Vitals", "On-Page SEO", "Fast Image Load", "SSR & SSG"],
    description:
      "Optimizing load speeds, cross-device responsiveness, and clean code architecture for superior Core Web Vitals and search engine indexing",
  },
];

export const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="service"
      className="relative scroll-mt-28 py-24 px-6 md:px-20 bg-[#0c0d0f] text-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-12 md:right-32 w-28 h-28 opacity-25 blur-[10px] rotate-12"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full fill-[#E5E800] drop-shadow-[0_0_20px_rgba(229,232,0,0.8)]">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-8 md:left-3 w-100 h-100 opacity-20 blur-[30px] -rotate-12"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full fill-[#E5E800] drop-shadow-[0_0_15px_rgba(114,207,36,0.7)]">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                My Service
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              How I Bring{" "}
              <span className="bg-gradient-to-r from-[#72cf24] to-[#E5E800] bg-clip-text text-transparent">
                Ideas to Life
              </span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {serviceData.map((item, index) => (
            <ServiceCard
              key={item.id}
              item={item}
              isActive={activeIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};