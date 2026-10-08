"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ProjectCard, ProjectItem } from "@/ui/ProjectCard";

const categories = ["All", "Saas", "Landing Page", "Web3", "Dashboard"] as const;
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="project"
      className="relative scroll-mt-28 py-20 sm:py-24 px-6 md:px-20 bg-[#0c0d0f] text-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/20 -right-40 w-[300px] h-[300px] rounded-full bg-[#72cf24] blur-[130px] transform-gpu"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/20 -left-40 w-[300px] h-[300px] rounded-full bg-[#E5E800] blur-[140px] transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-12 transform-gpu"
        >
          <span className="text-xs uppercase tracking-widest text-[#72cf24] font-semibold mb-3">
            Project
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
            Projects that reflect my{" "}
            <span className="bg-gradient-to-r from-[#72cf24] to-[#E5E800] bg-clip-text text-transparent">
              expertise and vision
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8 p-1.5 rounded-full bg-[#18191c]/80 border border-white/5 backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    isActive ? "text-black" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterPill"
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute inset-0 bg-white rounded-full shadow-md z-0"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          layout
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout="position"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="transform-gpu will-change-[transform,opacity]"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};