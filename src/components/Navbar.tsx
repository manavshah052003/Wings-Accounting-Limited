"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Main navbar ── */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 flex justify-center ${scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-white"
          }`}
      >
        <div className="w-full max-w-6xl px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 relative transition-transform group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="block font-black text-[#1a3a5c] text-lg leading-tight font-[Outfit]">
                {siteConfig.name}
              </span>
              <span className="block text-[10px] text-[#29b79b] font-semibold tracking-widest uppercase">
                Expert Outsourcing
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 rounded-xl text-[0.95rem] font-bold tracking-tight transition-all duration-300 ${isActive
                      ? "text-[#29b79b] bg-[#29b79b]/5"
                      : "text-[#1a3a5c]/80 hover:text-[#29b79b] hover:bg-[#29b79b]/5"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#29b79b]"
                    />
                  )}
                </a>
              );
            })}
          </nav>



          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden p-2 rounded-lg text-[#1a3a5c] hover:bg-[#f1f5f9] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`px-4 py-3 rounded-xl text-[0.9rem] font-semibold transition-all ${isActive
                          ? "text-[#29b79b] bg-[#29b79b]/10"
                          : "text-[#1e293b] hover:text-[#29b79b] hover:bg-[#f8fafc]"
                        }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                  className="btn-primary mt-3 justify-center"
                >
                  Get Free Trial
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
