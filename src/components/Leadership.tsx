"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { leadershipContent } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="leadership" ref={ref} className="py-40 lg:py-56 bg-white relative w-full flex flex-col items-center">
      <div className="w-full max-w-6xl px-6 flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-24 flex flex-col items-center"
        >
          <div className="flex justify-center w-full mb-3">
            <span className="section-tagline">{leadershipContent.tagline}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1a3a5c] mb-6 text-center max-w-2xl">
            {leadershipContent.title}
          </h2>
          <p className="text-[#64748b] text-lg max-w-2xl text-center leading-relaxed">
            {leadershipContent.description}
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 w-full max-w-4xl">
            {leadershipContent.members.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="group flex flex-col items-center"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square mb-8 overflow-hidden rounded-2xl bg-gray-100 shadow-xl shadow-black/5 group-hover:shadow-2xl group-hover:shadow-black/10 transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a3a5c] hover:bg-[#29b79b] hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center w-full">
                  <h3 className="text-2xl font-black text-[#1a3a5c] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#29b79b] font-bold text-sm uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-[#64748b] leading-relaxed max-w-sm mx-auto">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
