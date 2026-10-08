"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  "Landing Page",
  "Dashboard",
  "Web3",
  "SaaS",
  "POS",
  "Digital Menu",
  "E-Commerce",
];

const tickerItems = [...services, ...services];

export const ServiceTicker: React.FC = () => {
  return (
    <div className="relative z-20 w-full bg-[#111215] py-3.5 sm:py-4 overflow-hidden shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-6 sm:gap-10">

        <div className="shrink-0 flex items-center pr-6 sm:pr-8 ">
          <p className="text-[11px] sm:text-2xl font-semibold text-white leading-snug tracking-wide">
            Service
          </p>
        </div>

        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_40px,black_calc(100%-40px),transparent_100%)]">
          <motion.div
            className="flex items-center whitespace-nowrap text-xs sm:text-xl text-neutral-300 font-medium w-max will-change-transform"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {tickerItems.map((item, index) => (
              <div key={index} className="flex items-center shrink-0">
                <span className="px-5 sm:px-7 hover:text-white transition-colors duration-200">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="h-3.5 sm:h-4 w-[1px] bg-white/15"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};