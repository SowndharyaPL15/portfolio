"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "AI Engineer",
  "Full Stack Developer",
  "Machine Learning Enthusiast",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display,  setDisplay]  = useState("");
  const [wordIdx,  setWordIdx]  = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay   = deleting ? speed / 2 : charIdx === current.length ? pause : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href:  "https://github.com/SowndharyaPL15",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href:  "https://www.linkedin.com/in/sowndharyapl/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href:  "https://leetcode.com/u/SOWNDHARYAPL/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="cyber-panel rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
      style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}
    >
      {/* Scanner line */}
      <div className="scan-line" aria-hidden="true" />

      {/* Profile Photo */}
      <div className="relative flex-shrink-0 group z-10">
        <div
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl p-[2px] relative overflow-hidden transition-all duration-300 group-hover:scale-105 shadow-2xl"
          style={{
            background: "var(--gradient-primary)",
            boxShadow: "0 0 30px var(--glow-md)",
          }}
        >
          <img
            src="/photo.png"
            alt="Sowndharya P.L."
            className="w-full h-full object-cover object-top rounded-[14px]"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 space-y-4 relative z-10 min-w-0">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <span className="text-yellow-400 animate-float text-lg" aria-hidden="true">👋</span>
          <span className="font-space text-xs font-bold uppercase tracking-widest text-glow">
            Hi, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="font-space font-extrabold tracking-tight leading-tight"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            color: "var(--text-main)",
          }}
        >
          Sowndharya P.L.
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="font-space text-xs md:text-sm font-semibold tracking-wider min-h-[24px] flex flex-wrap items-center gap-3"
          style={{ color: "var(--accent-primary)" }}
          aria-live="polite"
          aria-label={`Current role: ${role}`}
        >
          <span className="text-glow whitespace-nowrap">{role}</span>
          <span
            className="inline-block w-0.5 h-4 animate-pulse flex-shrink-0"
            style={{ background: "var(--accent-primary)" }}
            aria-hidden="true"
          />
          <div className="flex flex-wrap items-center gap-1.5 ml-auto md:ml-0">
            <span className="text-[10px] px-2 py-0.5 rounded border border-[#00c7b7]/30 bg-[#00c7b7]/10 text-[#00c7b7] font-bold">
              CGPA: 8.35
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded border border-[#ffb703]/30 bg-[#ffb703]/10 text-[#ffb703] font-bold">
              Intern @ Mist Software
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs md:text-sm leading-relaxed max-w-xl"
          style={{ color: "var(--text-muted)" }}
        >
          Building scalable, user-centric applications with a passion for clean code, AI, and meaningful digital experiences. Currently pursuing B.E. CSE (Honours in Blockchain) at Dr. N.G.P Institute of Technology.
        </motion.p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex items-center gap-2"
          aria-label="Social links"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button w-8.5 h-8.5 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_12px_var(--border-accent)]"
              style={{ color: "var(--text-muted)" }}
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 pt-1"
        >
          <a
            href="mailto:plsowndharya@gmail.com"
            className="cyber-button px-5 py-2.5 rounded-lg font-space text-xs font-semibold tracking-wider flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_var(--border-accent)]"
            style={{ color: "var(--accent-primary)", background: "var(--glow-xs)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            GET IN TOUCH
          </a>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-resume-preview"))}
            className="cyber-button px-5 py-2.5 rounded-lg font-space text-xs font-semibold tracking-wider flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_var(--border-accent)] cursor-pointer"
            style={{ color: "var(--accent-secondary)", background: "var(--glow-xs)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            DOWNLOAD RESUME
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
