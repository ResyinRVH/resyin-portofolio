"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/ui/Button";
import { SocialLinks } from "@/ui/SocialLink";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

const nameVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
        },
    },
};

export const Contact: React.FC = () => {
    return (
        <footer
            id="contact"
            className="relative scroll-mt-28 pt-20 pb-12 px-6 md:px-20 bg-[#0c0d0f] text-white overflow-hidden"
        >
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative w-full rounded-3xl p-[1px] bg-white/10 backdrop-blur-xl mb-20 shadow-2xl overflow-hidden transform-gpu will-change-transform"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-3xl border-l-2 border-t-2 border-b-2 border-transparent border-l-[#72cf24] border-t-[#72cf24] border-b-[#72cf24] [mask-image:linear-gradient(to_right,black_0%,black_70px,transparent_130px)] z-20 shadow-[0_0_15px_rgba(114,207,36,0.3)]"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-3xl border-r-2 border-t-2 border-b-2 border-transparent border-r-[#E5E800] border-t-[#E5E800] border-b-[#E5E800] [mask-image:linear-gradient(to_left,black_0%,black_70px,transparent_130px)] z-20 shadow-[0_0_15px_rgba(229,232,0,0.3)]"
                    />

                    <div className="relative z-10 rounded-[23px] bg-[#121316]/95 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
                        <div className="text-center md:text-left max-w-xl">
                            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
                                <span>Get Ready & </span>
                                <span className="bg-gradient-to-r from-[#72cf24] to-[#E5E800] bg-clip-text text-transparent">
                                    Start Now
                                </span>
                            </h3>
                            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                                Have a project idea, need high performance web development, or
                                just want to say hi? Let&apos;s build something exceptional together
                            </p>
                        </div>

                        <motion.div
                            whileTap={{ scale: 0.94 }}
                            transition={{ duration: 0.12 }}
                            className="shrink-0 transform-gpu"
                        >
                            <Button
                                variant="primary"
                                href="mailto:resyin9b@gmail.com"
                                className="gap-2.5 px-8 py-4 text-sm font-bold shadow-[0_0_25px_rgba(114,207,36,0.3)] hover:shadow-[0_0_35px_rgba(229,232,0,0.5)] active:scale-95 transition-all"
                            >
                                <span>Say Hello</span>
                                <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 active:translate-x-0.5 active:-translate-y-0.5" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    variants={nameVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center mb-10 select-none transform-gpu"
                >
                    <h2 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight bg-gradient-to-r from-[#72cf24] to-[#E5E800] bg-clip-text text-transparent hover:opacity-90 transition-opacity">
                        RESYIN
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="w-full flex justify-center mb-12 transform-gpu"
                >
                    <SocialLinks />
                </motion.div>

                <div className="w-full pt-8 border-t border-white/5 text-center">
                    <p className="text-xs text-neutral-400 tracking-wider">
                        © {new Date().getFullYear()} Resyin. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};