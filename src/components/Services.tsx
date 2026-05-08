"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Receipt,
  BookOpen,
  BarChart3,
  Calendar,
  Wallet,
  FileText,
  Building2,
  TrendingUp,
  ArrowUpRight,
  Cloud,
  Zap,
  GraduationCap,
  Server,
} from "lucide-react";
import { servicesContent, specialisationsContent, partnersContent } from "@/lib/config";


const iconMap: Record<string, any> = {
  Receipt,
  BookOpen,
  BarChart3,
  Calendar,
  Wallet,
  FileText,
  Building2,
  TrendingUp,
  Cloud,
  Zap,
  GraduationCap,
  Server,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const specRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const specInView = useInView(specRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ══════════════════════ SERVICES ══════════════════════ */}
      <section
        id="services"
        ref={ref}
        className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden flex flex-col items-center"
      >
        <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
          {/* Header */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full flex flex-col items-center text-center mb-16"
          >
            <span className="section-tagline mb-4">{servicesContent.tagline}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3a5c] mb-6 max-w-4xl leading-tight text-center">
              We handle the numbers <span className="gradient-text">while you focus on growth</span>
            </h2>
            <p className="text-[#64748b] text-base lg:text-lg max-w-2xl leading-relaxed text-center">
              {servicesContent.description}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {servicesContent.items.map((service, i) => {
              const Icon = iconMap[service.icon] || Receipt;
              return (
                <motion.div
                  key={service.title}
                  custom={i + 1}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="group cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  {/* Flip wrapper */}
                  <div
                    className="relative w-full h-52 transition-transform duration-700 ease-in-out"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="flip-card-group absolute inset-0">
                      <div
                        className="flip-inner relative w-full h-full transition-transform duration-700 ease-in-out"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* Front */}
                        <div
                          className="absolute inset-0 rounded-2xl bg-white border border-[#e2e8f0] flex flex-col items-center justify-center gap-4 p-6 shadow-sm"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="w-14 h-14 rounded-xl bg-[#f0faf7] flex items-center justify-center shadow-sm">
                            <Icon size={26} className="text-[#29b79b]" />
                          </div>
                          <h3 className="font-bold text-[#1a3a5c] text-base text-center leading-snug">{service.title}</h3>
                        </div>
                        {/* Back */}
                        <div
                          className="absolute inset-0 rounded-2xl bg-[#1a3a5c] flex flex-col items-center justify-center gap-3 p-6 shadow-xl"
                          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#29b79b]/20 flex items-center justify-center mb-1">
                            <Icon size={20} className="text-[#29b79b]" />
                          </div>
                          <h3 className="font-bold text-white text-sm text-center leading-snug">{service.title}</h3>
                          <p className="text-white/75 text-xs leading-relaxed text-center">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════ SPECIALISATIONS ══════════════════ */}
      <section
        id="specialisations"
        ref={specRef}
        className="py-20 lg:py-28 bg-white flex flex-col items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
          {/* Header */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={specInView ? "visible" : "hidden"}
            className="w-full text-center mb-14 flex flex-col items-center gap-4"
          >
            <span className="section-tagline">{specialisationsContent.tagline}</span>
            <h2 className="text-3xl lg:text-5xl font-black text-[#1a3a5c] leading-tight text-center">
              Our <span className="gradient-text">Specialisation</span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {specialisationsContent.items.map((item, i) => {
              const Icon = iconMap[item.icon] || Cloud;
              return (
                  <motion.div
                    key={item.title}
                    custom={i + 1}
                    variants={cardVariants}
                    initial="hidden"
                    animate={specInView ? "visible" : "hidden"}
                    className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-white hover:bg-[#1a3a5c] border border-[#e2e8f0] hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a3a5c]/20 hover:-translate-y-2"
                  >
                    <div className="p-8 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-2xl bg-[#f0faf7] group-hover:bg-[#29b79b] flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                        <Icon
                          size={22}
                          className="text-[#29b79b] group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <h3 className="font-bold text-[#1a3a5c] group-hover:text-white text-lg mb-3 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#64748b] group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300 flex-grow">
                        {item.description}
                      </p>
                    </div>
                    {/* Arrow badge */}
                    <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f8fafc]/0 group-hover:bg-[#29b79b]/20 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight
                        size={16}
                        className="text-transparent group-hover:text-[#29b79b] transition-colors duration-300"
                      />
                    </div>
                  </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Partner Marquee ── */}
        <div className="w-full mt-16 pt-12 border-t border-[#f1f5f9] overflow-hidden">
          <p className="text-center text-[#94a3b8] text-xs font-bold uppercase tracking-[0.3em] mb-8">
            {partnersContent.title}
          </p>
          <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-white to-transparent z-10" />
            <motion.div
              className="flex gap-16 lg:gap-32 items-center w-fit"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
            >
              {[...partnersContent.logos, ...partnersContent.logos, ...partnersContent.logos].map((logo, i) => (
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
        </div>
      </section>
    </>
  );
}
