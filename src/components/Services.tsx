"use client";

import { useRef, useState } from "react";
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
import { servicesContent, specialisationsContent } from "@/lib/config";

const serviceImages = [
  "/services/vat.jpeg",
  "/services/bookkeeping.jpeg",
  "/services/account-manager.png",
  "/services/year-end.png",
  "/services/payroll.jpeg",
  "/services/self-assessment.png",
  "/services/admin.jpeg",
  "/services/digital-marketing.jpeg",
];

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
  
  const [activeIdx, setActiveIdx] = useState(0);

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

          {/* Expandable Slider */}
          <div className="services-slider flex gap-4 h-[400px] w-full">
            {servicesContent.items.map((service, i) => (
              <div 
                key={service.title}
                className={`service-item flex-[1] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-3xl overflow-hidden relative cursor-pointer ${activeIdx === i ? 'flex-[4]' : ''}`}
                style={{ backgroundImage: `linear-gradient(rgba(26,58,92,0.6), rgba(26,58,92,0.8)), url(${serviceImages[i] || serviceImages[0]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
              >
                <div className={`p-8 h-full flex flex-col justify-end text-white transition-opacity duration-300 ${activeIdx === i ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ SPECIALISATIONS ══════════════════ */}
      <section
        id="specialisations"
        ref={specRef}
        className="py-48 lg:py-64 bg-white flex flex-col items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
          {/* Header */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={specInView ? "visible" : "hidden"}
            className="w-full text-center mb-32 flex flex-col items-center gap-8 py-10"
          >
            <span className="section-tagline">{specialisationsContent.tagline}</span>
            <h2 className="text-3xl lg:text-6xl font-black text-[#1a3a5c] leading-tight text-center">
              Our <span className="gradient-text">Specialisation</span>
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
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
                    <div className="p-10 flex flex-col h-full">
                      <div className="w-14 h-14 rounded-2xl bg-[#f0faf7] group-hover:bg-[#29b79b] flex items-center justify-center mb-8 transition-all duration-300 shadow-sm">
                        <Icon
                          size={26}
                          className="text-[#29b79b] group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <h3 className="font-bold text-[#1a3a5c] group-hover:text-white text-xl mb-4 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#64748b] group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300 flex-grow">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow badge */}
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f8fafc]/0 group-hover:bg-[#29b79b]/20 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight
                        size={18}
                        className="text-transparent group-hover:text-[#29b79b] transition-colors duration-300"
                      />
                    </div>
                  </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
