"use client";

import React from "react";
import { motion } from "framer-motion";

const SOFT_SKILLS = [
  "Critical Thinking", "Problem Solving", "Team Collaboration",
  "Communication", "Time Management", "Adaptability",
  "Attention to Detail", "Continuous Learning", "Research & Presentation",
];

const STRENGTHS = [
  { icon: "🧠", title: "AI & Systems Thinking", desc: "Strong grasp of ML fundamentals — CNNs, image processing, embedded AI systems." },
  { icon: "🏗️", title: "Full-Stack Architecture", desc: "End-to-end project ownership from schema design to deployed production UI." },
  { icon: "📐", title: "Clean Engineering", desc: "Writes maintainable, well-structured code with focus on performance and readability." },
];

const ACHIEVEMENTS = [
  { year: "2025", title: "2nd Prize — Technical Symposium", desc: "IoT Aerial Object Detection research paper awarded 2nd prize at Sri Ramakrishna College Technical Symposium.", color: "#ffb703" },
  { year: "2024", title: "Java Full Stack with React JS & AI", desc: "National Level STTP Certification by Brainovision Solutions on Java Full Stack with React & AI.", color: "#00c7b7" },
  { year: "2024", title: "Data Science using Python", desc: "International Level Workshop certification by Dr. N.G.P. iTech & Brainovision (AICTE approved).", color: "#38bdf8" },
  { year: "2024", title: "Software Dev Intern @ Mist Software", desc: "Selected for software development internship — building full-stack web applications.", color: "#00f0ff" },
  { year: "2023", title: "Enrolled in B.E. CSE (Honours — Blockchain)", desc: "Accepted into Dr. N.G.P. Institute of Technology with Honours specialization in Blockchain.", color: "#39ff14" },
];

const card = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

export default function AboutWorkspace() {
  return (
    <div className="h-full overflow-y-auto p-4 md:p-6 max-w-5xl mx-auto space-y-5">
      {/* Header */}
      <motion.div {...card(0)}>
        <div className="flex items-center justify-between flex-wrap gap-3 mb-1">
          <div>
            <h2 className="font-space text-[10px] uppercase tracking-widest text-glow mb-0.5 font-bold">CANDIDATE PROFILE</h2>
            <h1 className="font-dm-serif text-2xl md:text-3xl font-bold" style={{ color: "var(--text-main)" }}>About Sowndharya</h1>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-resume-preview"))}
            className="font-space text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-sm"
            style={{ background: "var(--gradient-primary)", color: "#000" }}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            DOWNLOAD RESUME
          </button>
        </div>
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, var(--accent-primary), transparent)" }} />
      </motion.div>

      {/* ── Row 1: Profile + Objective ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Profile Card */}
        <motion.div {...card(0.05)} className="lg:col-span-5 cyber-panel rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-4">
            {/* Profile Photo */}
            <div
              className="w-20 h-20 rounded-2xl flex-shrink-0 relative overflow-hidden p-[2px] shadow-lg transition-transform hover:scale-105 group"
              style={{ background: "var(--gradient-primary)", boxShadow: "0 0 24px var(--glow-md)" }}
            >
              <img
                src="/photo.png"
                alt="Sowndharya P.L."
                className="w-full h-full object-cover object-top rounded-[14px]"
              />
            </div>
            <div>
              <h3 className="font-dm-serif text-xl font-bold" style={{ color: "var(--text-main)" }}>Sowndharya P.L.</h3>
              <p className="font-space text-xs font-bold" style={{ color: "var(--accent-primary)" }}>AI Engineer · Full Stack Developer</p>
              <p className="font-space text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>📍 Tirupur, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Info rows */}
          <div className="space-y-2.5">
            {[
              { icon: "🏛️", label: "Institution", value: "Dr. N.G.P. Institute of Technology" },
              { icon: "📚", label: "Programme", value: "B.E. Computer Science (Honours: Blockchain)" },
              { icon: "📅", label: "Batch", value: "2023 – 2027" },
              { icon: "⭐", label: "CGPA", value: "8.35 / 10.0" },
              { icon: "💼", label: "Internship", value: "Software Dev Intern @ Mist Software" },
              { icon: "🌍", label: "Languages", value: "English · Tamil" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-2.5">
                <span className="text-sm flex-shrink-0 w-5">{item.icon}</span>
                <div>
                  <div className="font-space text-[9px] uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{item.label}</div>
                  <div className="font-space text-xs font-bold" style={{ color: "var(--text-main)" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career Objective + Interests */}
        <motion.div {...card(0.1)} className="lg:col-span-7 space-y-4">
          {/* Objective */}
          <div className="cyber-panel rounded-xl p-5 space-y-3">
            <h3 className="font-space text-xs uppercase tracking-widest text-glow font-bold">Career Objective</h3>
            <div className="h-px w-16" style={{ background: "var(--accent-primary)" }} />
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              To contribute effectively to a forward-thinking organization by applying expertise in
              AI engineering and full-stack development — building scalable, intelligent systems
              that solve real-world problems, maintaining high professional standards, and continuously
              expanding my skills at the intersection of software engineering and artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Artificial Intelligence", "Machine Learning", "Blockchain", "IoT Systems", "Full Stack", "Computer Vision"].map((t) => (
                <span
                  key={t}
                  className="font-space text-[10px] px-2.5 py-1 rounded-md font-medium"
                  style={{ background: "var(--glow-xs)", border: "1px solid var(--border-accent)", color: "var(--accent-primary)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="cyber-panel rounded-xl p-5 space-y-3">
            <h3 className="font-space text-xs uppercase tracking-widest text-glow font-bold">Core Strengths</h3>
            <div className="h-px w-16" style={{ background: "var(--accent-secondary)" }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STRENGTHS.map((s) => (
                <div key={s.title} className="flex items-start gap-2.5">
                  <span className="text-lg flex-shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-space text-xs font-bold" style={{ color: "var(--text-main)" }}>{s.title}</div>
                    <div className="font-space text-[10px] leading-relaxed mt-0.5" style={{ color: "var(--text-muted)" }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Achievements Timeline ─────────────────────────────────── */}
      <motion.div {...card(0.15)} className="cyber-panel rounded-xl p-5 space-y-4">
        <h3 className="font-space text-xs uppercase tracking-widest text-glow font-bold">Key Achievements & Milestones</h3>
        <div className="h-px w-16" style={{ background: "var(--accent-primary)" }} />
        <div className="space-y-4">
          {ACHIEVEMENTS.map((a, idx) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.08 }}
              className="flex items-start gap-4"
            >
              <div
                className="font-space text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0"
                style={{ background: `${a.color}15`, border: `1px solid ${a.color}40`, color: a.color }}
              >
                {a.year}
              </div>
              <div>
                <div className="font-space text-sm font-bold" style={{ color: "var(--text-main)" }}>{a.title}</div>
                <div className="font-space text-[11px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{a.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Soft Skills ─────────────────────────────────────────── */}
      <motion.div {...card(0.18)} className="cyber-panel rounded-xl p-5 space-y-3">
        <h3 className="font-space text-xs uppercase tracking-widest text-glow font-bold">Soft Skills</h3>
        <div className="h-px w-16" style={{ background: "var(--accent-secondary)" }} />
        <div className="flex flex-wrap gap-2">
          {SOFT_SKILLS.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.22 + i * 0.04 }}
              className="font-space text-xs px-3 py-1.5 rounded-lg transition-all hover:scale-105 cursor-default"
              style={{
                background: "var(--glow-xs)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent-primary)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* ── Education Timeline ──────────────────────────────────── */}
      <motion.div {...card(0.22)} className="cyber-panel rounded-xl p-5 space-y-3">
        <h3 className="font-space text-xs uppercase tracking-widest text-glow font-bold">Education Timeline</h3>
        <div className="h-px w-16" style={{ background: "var(--accent-tertiary)" }} />
        <div className="relative pl-5 space-y-5">
          {/* Timeline line */}
          <div className="absolute left-0 top-1 bottom-1 w-px" style={{ background: "linear-gradient(to bottom, var(--accent-primary), var(--border-subtle))" }} />
          {[
            { year: "2023 – 2027", degree: "B.E. Computer Science Engineering (Honours: Blockchain)", inst: "Dr. N.G.P. Institute of Technology, Coimbatore", grade: "CGPA: 8.35 (SEM-6)", active: true },
            { year: "2021 – 2023", degree: "Higher Secondary Education (HSE)", inst: "Tamil Nadu State Board", grade: "84%", active: false },
            { year: "2021",        degree: "Secondary School (SSLC)", inst: "Tamil Nadu State Board", grade: "Distinction", active: false },
          ].map((e) => (
            <div key={e.year} className="relative">
              <div
                className="absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full"
                style={{
                  background: e.active ? "var(--accent-primary)" : "var(--text-muted)",
                  boxShadow: e.active ? "0 0 10px var(--accent-primary)" : "none",
                }}
              />
              <div className="font-space text-[9px] uppercase tracking-wider mb-0.5" style={{ color: e.active ? "var(--accent-primary)" : "var(--text-muted)" }}>
                {e.year}
              </div>
              <div className="font-space text-sm font-bold" style={{ color: "var(--text-main)" }}>{e.degree}</div>
              <div className="font-space text-[11px]" style={{ color: "var(--text-muted)" }}>
                {e.inst} ·{" "}
                <span className="font-bold" style={{ color: "var(--accent-secondary)" }}>{e.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
