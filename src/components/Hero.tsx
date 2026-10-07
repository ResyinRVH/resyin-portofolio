import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { GlassCard } from "./ui/GlassCard";
import { ServiceTicker } from "./ui/ServiceTicker";

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen pt-28 pb-28 flex flex-col justify-between overflow-hidden bg-[#0c0d0f] text-white">

            <div className="container mx-auto px-6 max-w-6xl relative z-10 flex-1 flex flex-col justify-center">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-white/30 to-white bg-clip-text text-transparent leading-none">
                        Frontend
                    </h1>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-[#72cf24] to-[#E5E800] bg-clip-text text-transparent leading-tight">
                        Developer
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center max-w-5xl mx-auto w-full">
                    <div className="flex justify-center md:justify-end">
                        <GlassCard className="w-72 h-36 ">
                            <p className="text-xl font-regular text-white">
                                Available for Remote Work Opportunities/ <span className="font-bold">(WFH)</span>
                            </p>
                        </GlassCard>
                    </div>

                    <div className="flex justify-center items-end relative">
                        <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-[2.5rem] outline-2 outline-offset-6 outline-white bg-gradient-to-b from-white/10 to-transparent shadow-2xl">
                        </div>

                        <div className="absolute -bottom-3 w-64 sm:w-72 h-[120%] pointer-events-none rounded-b-[2.5rem] overflow-hidden">
                            <Image
                                src="/Profile3.webp"
                                alt="Resyin - Frontend Developer"
                                fill
                                priority
                                className="object-cover object-bottom"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xs">
                            Frontend Developer focused on building clean, responsive, reusable components and user friendly web applications
                        </p>
                        <Button href="#contact" variant="primary">
                            Let&apos;s Talk
                        </Button>
                    </div>
                </div>
            </div>
            <ServiceTicker />
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