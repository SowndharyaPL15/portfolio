"use client";

import React, { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

interface TopStatusBarProps {
  activeTab?: string;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}

export default function TopStatusBar({ mobileOpen, setMobileOpen }: TopStatusBarProps) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
      setDate(now.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="flex-shrink-0 flex items-center justify-between px-4"
      style={{
        height: "64px",
        background: "var(--bg-panel)",
        borderBottom: "1px solid var(--border-subtle)",
        zIndex: 40,
      }}
    >
      {/* LEFT — Mobile Hamburger & Brand for Mobile */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all hover:bg-[var(--glow-xs)]"
          style={{ border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <span className="font-space text-xs font-bold text-glow tracking-wider sm:hidden">
          SPL OS
        </span>
      </div>

      {/* METRICS ROW (Responsive across tablet md and desktop lg) */}
      <div className="hidden md:flex flex-1 items-center gap-3 lg:gap-4 h-full pl-2 overflow-hidden">

        {/* Projects */}
        <div className="flex flex-col justify-center h-full border-r pr-3 lg:pr-4 pl-1 lg:pl-2" style={{ borderColor: "var(--border-subtle)" }}>
          <span className="text-[9px] lg:text-[10px] font-space tracking-widest text-gray-500 mb-0.5 flex items-center gap-1">
            <svg className="w-3 h-3 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
            PROJECTS
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xs lg:text-sm font-bold text-[var(--text-main)]">11</span>
            <span className="text-[10px] lg:text-xs text-[var(--text-muted)]">Completed</span>
          </div>
        </div>

        {/* CGPA */}
        <div className="flex flex-col justify-center h-full border-r pr-3 lg:pr-4 pl-1 lg:pl-2" style={{ borderColor: "var(--border-subtle)" }}>
          <span className="text-[9px] lg:text-[10px] font-space tracking-widest text-gray-500 mb-0.5 flex items-center gap-1">
            <svg className="w-3 h-3 text-[var(--accent-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            CGPA
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xs lg:text-sm font-bold text-[var(--text-main)]">8.35</span>
            <span className="text-[9px] lg:text-[10px] text-[var(--text-muted)]">SEM-6</span>
          </div>
        </div>

        {/* Education (Large viewports) */}
        <div className="hidden xl:flex flex-col justify-center h-full border-r pr-4 pl-2" style={{ borderColor: "var(--border-subtle)" }}>
          <span className="text-[10px] font-space tracking-widest text-gray-500 mb-0.5 flex items-center gap-1">
            <svg className="w-3 h-3 text-[var(--accent-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            EDUCATION
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-[var(--text-main)]">B.E CSE</span>
            <span className="text-[10px] text-[var(--text-muted)]">2023 - 2027</span>
          </div>
        </div>

        {/* Internship (Large viewports) */}
        <div className="hidden lg:flex flex-col justify-center h-full border-r pr-4 pl-2" style={{ borderColor: "var(--border-subtle)" }}>
          <span className="text-[10px] font-space tracking-widest text-gray-500 mb-0.5 flex items-center gap-1">
            <svg className="w-3 h-3 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            INTERNSHIP
          </span>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-[var(--text-main)]">Completed</span>
            <span className="text-[10px] text-[var(--text-muted)]">15 Days</span>
          </div>
        </div>
      </div>

      {/* RIGHT — Clock and Theme */}
      <div className="flex items-center gap-4 flex-shrink-0 ml-auto">
        {/* Clock */}
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="font-space text-left" aria-live="polite">
            <div className="text-sm font-bold text-glow leading-none">{time || "00:00:00"}</div>
            <div className="text-[10px] leading-none mt-1" style={{ color: "var(--text-muted)" }}>{date || "– – –"}</div>
          </div>
        </div>

        {/* Theme Switcher */}
        <div className="ml-2">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

