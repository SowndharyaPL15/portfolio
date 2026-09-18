"use client";

import React from "react";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    year:        "2023 – 2027",
    degree:      "B.E. Computer Science & Engineering\n(Honours in Blockchain Technology)",
    institution: "Dr. N.G.P Institute of Technology",
    details:     "CGPA: 8.35 (SEM-6)",
    icon:        "🎓",
  },
  {
    year:        "2021 – 2023",
    degree:      "Higher Secondary Education (HSE)",
    institution: "Sakthi Vigneswara School",
    details:     "Percentage: 84%",
    icon:        "📚",
  },
  {
    year:        "2021",
    degree:      "SSLC",
    institution: "Sri Sai Matriculation School",
    details:     "Passed",
    icon:        "📝",
  },
];

export default function Education() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className="flex items-center justify-between pb-3"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <h2 className="font-space text-sm font-bold uppercase tracking-widest text-glow">
          ACADEMIC TIMELINE
        </h2>
        <span className="font-space text-xs" style={{ color: "var(--text-muted)" }}>
          3 RECORDS FOUND
        </span>
      </div>

      {/* Timeline */}
      <div
        className="relative ml-4 pl-6 space-y-6"
        style={{ borderLeft: "1px solid var(--border-subtle)" }}
      >
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative group"
          >
            {/* Timeline node */}
            <div
              className="absolute -left-[30px] top-4 w-4 h-4 rounded-full flex items-center justify-center transition-all"
              style={{
                background:   "var(--bg-card-solid, #051433)",
                border:       "2px solid var(--border-accent)",
                boxShadow:    "0 0 10px var(--glow-sm)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent-primary)" }}
              />
            </div>

            <div
              className="cyber-panel p-5 rounded-xl transition-all"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ""; }}
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{edu.icon}</span>
                  <span className="font-space text-xs tracking-wider" style={{ color: "var(--accent-primary)" }}>
                    {edu.year}
                  </span>
                </div>
                <span
                  className="font-space text-[10px] px-2 py-0.5 rounded font-semibold"
                  style={{
                    background: "var(--glow-xs)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--accent-secondary)",
                  }}
                >
                  {edu.details}
                </span>
              </div>

              {/* Degree */}
              <h3 className="text-sm font-bold font-space mb-1.5 leading-snug whitespace-pre-line" style={{ color: "var(--text-main)" }}>
                {edu.degree}
              </h3>

              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{edu.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
