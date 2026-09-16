"use client";

import React from "react";
import { motion } from "framer-motion";

const CERTIFICATIONS = [
  {
    title:  "Full Stack Java Development",
    issuer: "Simplilearn",
    year:   "2025",
    icon:   "🏆",
    badge:  "#f89820",
    link:   "/SIMPLELEARN CERTIFICATION.pdf",
    skills: ["Java", "Spring Boot", "Full Stack", "SQL", "Web Services"],
    desc:   "Comprehensive enterprise-grade Full Stack Java program covering core Java, modern frameworks, and database architecture.",
  },
  {
    title:  "Java Full Stack with React JS & AI",
    issuer: "Brainovision Solutions · National Level STTP",
    year:   "2024",
    icon:   "⚡",
    badge:  "#00c7b7",
    link:   "/Java Full Stack with React JS & AI.pdf",
    skills: ["Java", "React.js", "AI Integration", "Full Stack", "STTP 2024"],
    desc:   "National Level Short Term Training Programme (STTP 2024) focusing on Java backend development, React frontend, and AI capabilities.",
  },
  {
    title:  "2nd Prize – Aerial Object Detection",
    issuer: "Paper Presentation · IoT Theme",
    year:   "2024",
    icon:   "🥈",
    badge:  "#c0c0c0",
    link:   "/PAPER PRESENTATION.pdf",
    skills: ["IoT", "Object Detection", "Embedded Systems", "Research Paper"],
    desc:   "Research paper presentation on Automated Aerial Object Detection using IoT and AI, awarded 2nd prize at National Technical Symposium.",
  },
];

export default function Certifications() {
  return (
    <div
      className="cyber-panel p-6 rounded-xl relative overflow-hidden h-full"
    >
      <div className="absolute top-0 right-0 w-1 h-1" style={{ background: "var(--accent-primary)" }} />

      <div
        className="pb-3 mb-4"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <h3 className="font-space text-xs font-bold uppercase tracking-widest text-glow">
          CERTIFICATIONS &amp; AWARDS
        </h3>
      </div>

      <div className="space-y-3">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {cert.link ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-lg group transition-all block"
                style={{ border: "1px solid var(--border-subtle)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${cert.badge}40`;
                  (e.currentTarget as HTMLElement).style.background   = `${cert.badge}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.background   = "";
                }}
                aria-label={`View ${cert.title} certificate`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${cert.badge}15` }}
                >
                  {cert.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="font-space text-xs font-semibold block transition-colors"
                      style={{ color: "var(--text-main)" }}
                    >
                      {cert.title}
                    </span>
                    <span
                      className="font-space text-[9px] px-1.5 py-0.5 rounded flex-shrink-0 font-bold"
                      style={{ background: `${cert.badge}15`, color: cert.badge, border: `1px solid ${cert.badge}40` }}
                    >
                      {cert.year}
                    </span>
                  </div>
                  <span className="font-space text-[10px] block mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {cert.issuer}
                  </span>
                  {cert.desc && (
                    <p className="font-space text-[9.5px] mt-1.5 leading-relaxed" style={{ color: "var(--text-muted)", opacity: 0.85 }}>
                      {cert.desc}
                    </p>
                  )}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cert.skills.map((s, i) => (
                        <span
                          key={i}
                          className="font-space text-[7px] px-1.5 py-0.5 rounded-full"
                          style={{
                            background: "var(--glow-xs)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-2.5 flex items-center gap-1">
                    <span
                      className="font-space text-[9px] uppercase tracking-widest font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      style={{ color: cert.badge }}
                    >
                      VIEW CERTIFICATE →
                    </span>
                  </div>
                </div>
              </a>
            ) : (
              <div
                className="flex items-start gap-3 p-3 rounded-lg"
                style={{ border: "1px solid var(--border-subtle)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${cert.badge}15` }}
                >
                  {cert.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="font-space text-xs font-semibold block"
                      style={{ color: "var(--text-main)" }}
                    >
                      {cert.title}
                    </span>
                    <span
                      className="font-space text-[9px] px-1.5 py-0.5 rounded flex-shrink-0 font-bold"
                      style={{ background: `${cert.badge}15`, color: cert.badge, border: `1px solid ${cert.badge}40` }}
                    >
                      {cert.year}
                    </span>
                  </div>
                  <span className="font-space text-[10px] block mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {cert.issuer}
                  </span>
                  {cert.desc && (
                    <p className="font-space text-[9.5px] mt-1.5 leading-relaxed" style={{ color: "var(--text-muted)", opacity: 0.85 }}>
                      {cert.desc}
                    </p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
