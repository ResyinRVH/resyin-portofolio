"use client";

import React, { useState } from "react";
import { ProjectCard, ProjectItem } from "@/components/ui/ProjectCard";

const categories = ["All", "Development", "UI/UX Design", "Web3"] as const;
type CategoryType = (typeof categories)[number];

const projectData: ProjectItem[] = [
  {
    id: "1",
    title: "Web3 NFT & Token Showcase",
    category: "Web3",
    image: "/Web3.webp",
    liveUrl: "https://github.com/ResyinRVH",
  },
  {
    id: "2",
    title: "Web3 NFT & Token Showcase",
    category: "Web3",
    image: "/Web3.webp",
    liveUrl: "https://github.com/ResyinRVH",
  },
  {
    id: "3",
    title: "Web3 NFT & Token Showcase",
    category: "Web3",
    image: "/Web3.webp",
    liveUrl: "https://github.com/ResyinRVH",
  },
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="project"
      className="relative scroll-mt-28 py-24 px-6 md:px-20 bg-[#0c0d0f] text-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-24 w-[350px] h-[350px] rounded-full bg-[#72cf24]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 -left-20 w-[300px] h-[300px] rounded-full bg-[#E5E800]/10 blur-[140px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-[#72cf24] font-semibold mb-3">
            Project
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
            Projects that reflect my{" "}
            <span className="bg-gradient-to-r from-[#72cf24] to-[#E5E800] bg-clip-text text-transparent">
              expertise and vision
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-[#18191c]/80 border border-white/5 backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${isActive
                      ? "bg-white text-black shadow-md"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};