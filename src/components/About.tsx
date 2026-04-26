"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target, Sprout, Handshake, CheckCircle,
  Users, Eye, CheckCircle2, Award,
} from "lucide-react";
import { aboutContent } from "@/lib/config";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target, Sprout, Handshake, CheckCircle, Users, Eye,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl px-6">

        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full flex flex-col items-center text-center mb-12"
        >
          <span className="section-tagline mb-4">{aboutContent.tagline}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3a5c] mb-6 max-w-3xl leading-tight text-center">
            Associating with accountancy firms{" "}
            <span className="gradient-text">like their team</span>
          </h2>
          <p className="text-[#64748b] text-base lg:text-lg max-w-2xl leading-relaxed text-center">
            {aboutContent.description}
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full flex flex-wrap justify-center gap-3 mb-16"
        >
          {aboutContent.highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-2 bg-[#f0faf7] border border-[#29b79b]/20 text-[#1a3a5c] font-medium text-sm px-4 py-2 rounded-full"
            >
              <CheckCircle2 size={13} className="text-[#29b79b] shrink-0" />
              {h}
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#e2e8f0] mb-12" />

        {/* Core Values heading */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full flex flex-col items-center text-center mb-10"
        >
          <span className="section-tagline mb-3">Our DNA</span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1a3a5c]">Core values</h3>
        </motion.div>

        {/* Core Values grid — Parallax Flipping Cards */}
        <div className="flip-card-wrapper mb-12">
          <div className="flip-card-cols">
            {aboutContent.coreValues.map((val, i) => {
              const Icon = iconMap[val.icon] || CheckCircle;
              return (
                <motion.div
                  key={val.title}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flip-card-col"
                >
                  <div className="flip-card-container">
                    <div className="flip-card-front">
                      <div className="flip-card-inner">
                        <div className="w-12 h-12 rounded-xl bg-[#29b79b]/10 flex items-center justify-center mx-auto mb-4">
                          <Icon size={24} className="text-[#29b79b]" />
                        </div>
                        <p>{val.title}</p>
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Our DNA</span>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="flip-card-inner">
                        <p className="mb-0">{val.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}