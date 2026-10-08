"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/ui/Button";
import { TagAbout } from "@/ui/TagAbout";

interface AboutProps {
  photoSrc?: string;
}

const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const About: React.FC<AboutProps> = ({ photoSrc = "/Profile3.webp" }) => {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 py-20 sm:py-24 px-6 md:px-20 bg-[#0c0d0f] text-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[#72cf24] blur-[140px] transform-gpu"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={photoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 flex justify-center transform-gpu will-change-transform"
          >
            <div className="flex justify-center items-end relative">
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-[2.5rem] outline-2 outline-offset-6 outline-white bg-gradient-to-b from-white/10 to-transparent shadow-2xl" />
              <div className="absolute -bottom-3 w-64 sm:w-72 h-[120%] pointer-events-none rounded-b-[2.5rem] overflow-hidden">
                <Image
                  src={photoSrc}
                  alt="Resyin - Frontend Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover object-bottom"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 mb-4 self-start transform-gpu"
            >
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6EC024]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5E800]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                About Me
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight flex items-center gap-2 flex-wrap transform-gpu"
            >
              <span>Who is</span>
              <span className="bg-gradient-to-r from-[#72cf24] to-[#E5E800] bg-clip-text text-transparent">
                Resyin?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 font-normal transform-gpu"
            >
              Hey there! I&apos;m{" "}
              <span className="text-white font-semibold">Resyin</span>, a Frontend
              Developer passionate about turning ideas into high performance,
              pixel perfect digital experiences.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 transform-gpu"
            >
              I specialize in bridging the gap between modern design and scalable
              engineering. Whether building modern SaaS dashboards, interactive
              Web3 interfaces, or conversion driven landing pages, I focus on
              aesthetics, smooth interactions, and clean code architecture.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="py-6 border-y border-white/10 mb-8 transform-gpu"
            >
              <span className="block text-xs uppercase tracking-widest text-neutral-300 font-semibold mb-4">
                Technologies
              </span>
              <TagAbout />
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="flex items-center gap-4 flex-wrap transform-gpu"
            >
              <motion.div
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  variant="primary"
                  href="#contact"
                  className="gap-2 px-7 py-3 text-sm font-bold active:scale-95 transition-transform"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Button>
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  variant="secondary"
                  href="https://github.com/ResyinRVH"
                  className="gap-2 px-6 py-3 text-sm font-semibold active:scale-95 transition-transform"
                >
                  <span>Explore GitHub</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};