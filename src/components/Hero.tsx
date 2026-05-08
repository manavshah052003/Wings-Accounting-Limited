"use client";


import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { heroContent } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const floatingBubbles = [
  { size: 300, x: "5%", y: "10%", opacity: 0.06, delay: 0 },
  { size: 200, x: "85%", y: "5%", opacity: 0.05, delay: 1 },
  { size: 180, x: "75%", y: "70%", opacity: 0.07, delay: 2 },
  { size: 120, x: "15%", y: "75%", opacity: 0.06, delay: 0.5 },
];

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden bg-[#f8fafc] hero-bg-pattern"
    >
      {/* ── Background blobs ── */}
      {floatingBubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            background: `radial-gradient(circle, rgba(41,183,155,${b.opacity * 2}) 0%, transparent 70%)`,
            animation: `float ${4 + i}s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}

      {/* ── Dot pattern overlay ── */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 lg:py-24 w-full flex flex-col items-center text-center">
        {/* Background Logo Watermark */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square -z-10 opacity-[0.12] pointer-events-none select-none">
          <Image
            src="/logo.png"
            alt=""
            fill
            className="object-contain grayscale blur-[2px]"
            priority
          />
        </div>
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-[#29b79b]/10 border border-[#29b79b]/20 text-[#29b79b] px-4 py-2 rounded-full text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#29b79b] animate-pulse" />
          {heroContent.badge} — Trusted by 1,000+ UK Firms
        </motion.div>
        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#1a3a5c] leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto"
        >
          Unlock Future{" "}
          <span className="gradient-text">Growth</span>
          <br />
          with Trusted
          <br />
          Outsourcing Partner
        </motion.h1>

        {/* Key benefits bullets */}
        <motion.ul
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-10"
        >
          {[
            "50%+ Cost Savings vs. in-house hiring",
            "ACCA Affiliated",
            "Xero, QuickBooks, Sage & all UK software",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-[#475569] text-sm font-medium">
              <CheckCircle2 size={16} className="text-[#29b79b] flex-shrink-0" />
              {item}
            </li>
          ))}
        </motion.ul>




      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#94a3b8] hover:text-[#29b79b] transition-colors cursor-pointer bg-transparent border-none"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
