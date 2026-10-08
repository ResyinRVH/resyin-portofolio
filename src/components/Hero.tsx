"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/ui/Button";
import { GlassCard } from "@/ui/GlassCard";
import { ServiceTicker } from "@/ui/ServiceTicker";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
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
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export const Hero: React.FC = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 flex flex-col justify-between bg-[#0c0d0f] text-white overflow-hidden"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-6 max-w-6xl relative z-10 flex-1 flex flex-col justify-center"
            >
                <motion.div
                    variants={fadeUpVariants}
                    className="text-center mb-10 sm:mb-10 lg:mb-12 transform-gpu"
                >
                    <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-white/30 to-white bg-clip-text text-transparent leading-none">
                        Frontend
                    </h1>
                    <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-[#72cf24] to-[#E5E800] bg-clip-text text-transparent leading-tight">
                        Developer
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-16 items-center max-w-5xl mx-auto w-full mb-8 md:mb-0">
                    <motion.div
                        variants={fadeUpVariants}
                        className="hidden md:flex justify-end order-1 transform-gpu"
                    >
                        <GlassCard className="w-72 h-36">
                            <p className="text-xl font-normal text-white">
                                Available for Remote Work Opportunities/{" "}
                                <span className="font-bold">(WFH)</span>
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        variants={photoVariants}
                        className="flex justify-center order-1 md:order-2 transform-gpu will-change-transform"
                    >
                        <div className="flex flex-col items-center">
                            <div className="flex justify-center items-end relative">
                                <div className="relative w-52 h-60 xs:w-60 xs:h-68 sm:w-72 sm:h-80 rounded-[2rem] sm:rounded-[2.5rem] outline-2 outline-offset-4 sm:outline-offset-6 outline-white bg-gradient-to-b from-white/10 to-transparent shadow-2xl" />

                                <div className="absolute -bottom-2 sm:-bottom-3 w-52 xs:w-60 sm:w-72 h-[120%] pointer-events-none rounded-b-[2rem] sm:rounded-b-[2.5rem] overflow-hidden">
                                    <Image
                                        src="/Profile3.webp"
                                        alt="Resyin - Frontend Developer"
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 240px, 288px"
                                        className="object-cover object-bottom"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUpVariants}
                        className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-5 order-2 md:order-3 transform-gpu"
                    >
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xs">
                            Frontend Developer focused on building clean, responsive, reusable
                            components and user friendly web applications
                        </p>
                        <div className="pt-1">
                            <Button href="#contact" variant="primary">
                                Let&apos;s Talk
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="relative z-20 w-full mt-6 sm:mt-10">
                <ServiceTicker />
            </div>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-30 -left-40 w-[300px] h-[300px] rounded-full bg-[#6EC024] blur-[120px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute translate-y-1/2 -right-40 w-[300px] h-[300px] rounded-full bg-[#E5E800] blur-[120px]"
            />
        </section>
    );
};