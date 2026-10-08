import React from "react";

const services = [
  "Landing Page",
  "Dashboard",
  "Web3",
  "SaaS",
  "POS",
  "Digital Menu",
  "E-Commerce",
];

export const ServiceTicker: React.FC = () => {
  return (
    <div className="relative z-20 w-full overflow-hidden py-4 bg-[#141518] -mt-10 sm:-mt-2 shadow-lg">
      <div className="flex items-center justify-around gap-8 whitespace-nowrap text-xs sm:text-sm text-neutral-300 font-medium px-4">
        {services.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <svg
              className="w-3.5 h-3.5 fill-[#E5E800] "
              viewBox="0 0 24 24"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};