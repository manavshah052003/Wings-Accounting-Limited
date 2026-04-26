"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { contactContent, siteConfig } from "@/lib/config";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MapPin,
  Mail,
  Phone,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    designation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-white flex flex-col items-center">
      <div className="w-full max-w-6xl px-6">

        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <span className="section-tagline mb-3">{contactContent.tagline}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1a3a5c] mb-5 leading-tight">
            Start Your{" "}
            <em className="not-italic gradient-text">Free Trial</em> Today
          </h2>
          <p className="text-[#64748b] text-base max-w-xl mx-auto leading-relaxed">
            {contactContent.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: contact details ── */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            {contactContent.details.map((detail) => {
              const Icon = iconMap[detail.icon] || MapPin;
              return (
                <div
                  key={detail.label}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#29b79b]/30 hover:bg-[#f0faf7] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#29b79b] to-[#1d9e83] flex items-center justify-center flex-shrink-0 shadow-md shadow-[#29b79b]/20">
                    <Icon size={19} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-1">
                      {detail.label}
                    </div>
                    <div className="font-semibold text-[#1a3a5c]">{detail.value}</div>
                  </div>
                </div>
              );
            })}

            {/* Social links */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a3a5c] to-[#0f2540] text-white">
              <h3 className="font-black text-lg mb-2">Follow Us</h3>
              <p className="text-white/60 text-sm mb-5">
                Stay connected and get the latest updates from our team.
              </p>
              <div className="flex gap-3">
                {Object.entries(siteConfig.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#29b79b] flex items-center justify-center text-white/70 hover:text-white transition-all capitalize text-xs font-bold"
                    aria-label={key}
                  >
                    {key.charAt(0).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-xl shadow-black/5 p-8 lg:p-10">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                  <div className="w-20 h-20 rounded-full bg-[#f0faf7] flex items-center justify-center animate-pulse-glow">
                    <CheckCircle2 size={40} className="text-[#29b79b]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1a3a5c]">Message Sent!</h3>
                  <p className="text-[#64748b] max-w-sm text-sm leading-relaxed">
                    Thank you for reaching out. Our team will be in touch with you within 24 hours to discuss your free trial.
                  </p>
                  <button
                    className="btn-outline mt-2"
                    onClick={() => {
                      setFormState("idle");
                      setForm({
                        name: "", email: "", phone: "", service: "",
                        company: "", designation: "", message: "",
                      });
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#64748b] mb-2 uppercase tracking-wide">
                        Name *
                      </label>
                      <input
                        id="form-name"
                        className="form-input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#64748b] mb-2 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        id="form-email"
                        className="form-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@firm.co.uk"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#64748b] mb-2 uppercase tracking-wide">
                        Phone *
                      </label>
                      <input
                        id="form-phone"
                        className="form-input"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 20 0000 0000"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#64748b] mb-2 uppercase tracking-wide">
                        Service *
                      </label>
                      <select
                        id="form-service"
                        className="form-input"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose Service…</option>
                        {contactContent.services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#64748b] mb-2 uppercase tracking-wide">
                        Accountancy Name
                      </label>
                      <input
                        id="form-company"
                        className="form-input"
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Firm Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#64748b] mb-2 uppercase tracking-wide">
                        Designation
                      </label>
                      <input
                        id="form-designation"
                        className="form-input"
                        type="text"
                        name="designation"
                        value={form.designation}
                        onChange={handleChange}
                        placeholder="Director / Manager"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#64748b] mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="form-message"
                      className="form-input resize-none"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please share your requirements…"
                      rows={4}
                    />
                  </div>

                  <button
                    id="form-submit"
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed py-3 mt-4"
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Get A Free Trial
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#94a3b8]">
                    No commitment required · We&apos;ll respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
