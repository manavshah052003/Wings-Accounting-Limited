"use client";

import React from "react";
import { motion } from "framer-motion";
import { partnersContent } from "@/lib/config";

export default function Partners() {
  // Double the logos for seamless scroll
  const duplicatedLogos = [...partnersContent.logos, ...partnersContent.logos, ...partnersContent.logos];

  return (
    <section className="py-20 bg-white border-y border-[#f1f5f9] overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-7xl px-6 mb-12 flex justify-center">
        <p className="text-center text-[#94a3b8] text-xs font-bold uppercase tracking-[0.3em] w-full">
          {partnersContent.title}
        </p>
      </div>

      <div className="relative w-full">
        {/* Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-16 lg:gap-32 items-center w-fit"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group"
            >
              <span className="text-2xl lg:text-3xl font-black text-[#1a3a5c] tracking-tighter group-hover:text-[#29b79b]">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
