"use client";

import { siteConfig, navLinks, servicesContent } from "@/lib/config";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1f35] text-white flex flex-col items-center">
      {/* ── Main footer ── */}
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/logo.png" 
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-black text-lg leading-tight font-[Outfit]">
                  {siteConfig.name}
                </span>
                <span className="block text-[10px] text-[#29b79b] font-semibold tracking-widest uppercase">
                  Expert Outsourcing
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              ACCA Affiliated firm providing expert outsourcing solutions to UK accountancy firms. 20+ years of experience.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-[#29b79b] transition-colors"
              >
                <MapPin size={14} className="text-[#29b79b] flex-shrink-0" />
                {siteConfig.location}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-white/50 hover:text-[#29b79b] transition-colors"
              >
                <Mail size={14} className="text-[#29b79b] flex-shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-white/50 hover:text-[#29b79b] transition-colors"
              >
                <Phone size={14} className="text-[#29b79b] flex-shrink-0" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-base mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-white/50 hover:text-[#29b79b] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-base mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {servicesContent.items.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNav("#services"); }}
                    className="text-white/50 hover:text-[#29b79b] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-black text-base mb-6">Start Today</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Ready to transform your accountancy practice? Get a free consultation from our expert team.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
              className="btn-primary w-full justify-center mb-4"
            >
              Get Free Trial
            </a>

            {/* Social links */}
            <div className="flex gap-2 mt-6">
              {Object.entries(siteConfig.socials).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-[#29b79b] flex items-center justify-center text-white/50 hover:text-white transition-all text-xs font-bold"
                >
                  {key.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="w-full border-t border-white/8 flex justify-center">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/35">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
