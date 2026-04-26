"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonialsContent } from "@/lib/config";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Double the reviews for a seamless infinite loop
  const duplicatedReviews = [
    ...testimonialsContent.reviews,
    ...testimonialsContent.reviews,
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-48 lg:py-64 bg-[#f8fafc] overflow-hidden flex flex-col items-center"
    >
      <div className="w-full max-w-7xl px-6 flex flex-col items-center mb-24">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full text-center flex flex-col items-center gap-8"
        >
          <span className="section-tagline">{testimonialsContent.tagline}</span>
          <h2 className="text-4xl lg:text-6xl font-black text-[#1a3a5c] leading-tight text-center max-w-3xl">
            {testimonialsContent.title}
          </h2>
          <p className="text-[#64748b] text-xl max-w-2xl text-center leading-relaxed">
            {testimonialsContent.description}
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="w-full relative">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

        <motion.div
          className="flex gap-8 w-fit"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ display: "flex" }}
        >
          {duplicatedReviews.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="w-[400px] flex-shrink-0 bg-white rounded-3xl p-10 border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#f0faf7] flex items-center justify-center">
                  <Quote size={24} className="text-[#29b79b] fill-[#29b79b]/10" />
                </div>
              </div>

              {/* Content */}
              <p className="text-[#1a3a5c] text-lg leading-relaxed mb-10 font-medium italic">
                &quot;{review.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t border-[#f1f5f9]">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-md">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3a5c] text-lg leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-[#29b79b] text-sm font-semibold mt-1">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
