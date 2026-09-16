"use client";

import React, { useState, useEffect, useMemo } from "react";
import HolographicOrb from "@/components/HolographicOrb";
import RadarChart from "@/components/RadarChart";

const ROLES = [
  "Full Stack Developer | AI & ML Enthusiast | CSE Student",
  "AI Engineer | Blockchain Developer | IoT Researcher",
  "Machine Learning Engineer | Deep Learning Specialist",
];

function HeroRoleTypewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 40);
    } else if (!deleting && displayed.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 20);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIdx]);

  return (
    <div className="font-space text-xs font-bold mb-2" style={{ minHeight: "1.25rem", color: "var(--accent-secondary)" }}>
      {displayed}
      <span className="inline-block w-0.5 h-3 ml-0.5 align-middle animate-pulse" style={{ background: "var(--accent-primary)" }} />
    </div>
  );
}

const PROJECTS = [
  { name: "CuraNet", num: "Project 01", desc: "Caregiver Support System", tech: ["HTML", "CSS", "JS", "PostgreSQL"], github: "https://github.com/SowndharyaPL15/CuraNet", demo: "https://curanet-mj06.onrender.com/", img: "/projects/curanet/1.svg" },
  { name: "PharmaTrace AI", num: "Project 02", desc: "Medicine Authentication", tech: ["Node.js", "Express", "Python", "Flask"], github: "https://github.com/SowndharyaPL15/pharmatrace-ai", demo: "https://pharmatrace-web-server.onrender.com", img: "/projects/pharmatrace/1.svg" },
  { name: "SmartExpensePro", num: "Project 03", desc: "SMS Expense Tracker", tech: ["Android", "Java", "Kotlin", "SMS API"], github: "https://github.com/SowndharyaPL15/SmartExpensePro", demo: "https://smartexpensepro.onrender.com/", img: "/projects/smartexpense/1.svg" },
  { name: "Aerial Object Detection", num: "Project 04", desc: "Automated Aerial Object Detection", tech: ["AI", "Arduino", "IoT", "Embedded", "C++"], github: "https://github.com/SowndharyaPL15/Automated-Aerial-Object-Detection", demo: "https://www.tinkercad.com/things/3HbPGczwYv0-automated-aerial-object-detection?sharecode=FA4-ENWj_yRSs6VpOnL5FjKiSQH9pYLQxryuBFYuDFs", img: "/projects/aerial-detection/1.svg" },
  { name: "CivicPulse", num: "Project 05", desc: "Smart Civic Management", tech: ["PHP", "MySQL", "JS", "Bootstrap"], github: "https://github.com/SowndharyaPL15/CivicPulse", demo: "https://civicpulse-jq8k.onrender.com", img: "/projects/civicpulse/1.svg" },
  { name: "Connectify", num: "Project 06", desc: "Real-Time Chat App", tech: ["Laravel", "PHP", "MySQL", "JS"], github: "https://github.com/SowndharyaPL15/connectify-cartrabbit", demo: "https://connectify-bw2w.onrender.com", img: "/projects/connectify/1.svg" },
  { name: "ModelHubX", num: "Project 07", desc: "MLOps Registry & Deployment", tech: ["FastAPI", "Kubernetes", "Redis", "Docker"], github: "https://github.com/SowndharyaPL15/ModelHubX", demo: "https://modelhubx-1.onrender.com/", img: "/projects/modelhubx/1.svg" },
  { name: "AI Product Auth System", num: "Project 08", desc: "XAI Based Authentication", tech: ["Python", "PyTorch", "OpenCV", "CNN"], github: "https://github.com/SowndharyaPL15/AI-Product-Authentication-System", demo: "https://ai-product-authentication-system.onrender.com", img: "/projects/ai-auth/1.svg" },
  { name: "Clixora", num: "Project 09", desc: "URL Shortener & Analytics", tech: ["React", "Node.js", "Express", "Postgres"], github: "https://github.com/SowndharyaPL15/Clixora", demo: "https://clixora-frontend.onrender.com", img: "/projects/clixora/1.svg" },
  { name: "INDUS AI", num: "Project 10", desc: "Factory Cognitive Memory", tech: ["FastAPI", "FAISS", "LangChain", "Python"], github: "https://github.com/SowndharyaPL15/indus_ai", demo: "https://indus-ai-frontend.onrender.com", img: "/projects/indus_ai/1.svg" },
  { name: "Precision Oncology", num: "Project 11", desc: "Clinical Decision Support System", tech: ["FastAPI", "TensorFlow", "React", "DenseNet"], github: "https://github.com/SowndharyaPL15/Precision-Oncology-CDSS", demo: "https://precision-oncology-frontend.onrender.com", img: "/projects/precision-oncology/1.svg" },
];

const SKILLS = [
  { name: "Java", pct: 95, color: "#f89820" },
  { name: "Python", pct: 89, color: "#3776ab" },
  { name: "HTML / CSS", pct: 95, color: "#e34f26" },
  { name: "JavaScript", pct: 85, color: "#f7df1e" },
  { name: "PHP", pct: 80, color: "#8892be" },
  { name: "AI / Deep Learning", pct: 80, color: "#00c7b7" },
  { name: "SQL", pct: 90, color: "#4479a1" },
];

const TECH_STACK = [
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", fallback: "C", color: "#A8B9CC", darkInvert: false },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", fallback: "☕", color: "#f89820", darkInvert: false },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", fallback: "🐍", color: "#3776ab", darkInvert: false },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", fallback: "H5", color: "#e34f26", darkInvert: false },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", fallback: "C3", color: "#1572b6", darkInvert: false },
  { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", fallback: "JS", color: "#f7df1e", darkInvert: false },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", fallback: "PHP", color: "#777bb4", darkInvert: false },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", fallback: "LV", color: "#ff2d20", darkInvert: false },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", fallback: "NJS", color: "#339933", darkInvert: false },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", fallback: "EX", color: "#ffffff", darkInvert: true },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", fallback: "FL", color: "#ffffff", darkInvert: true },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", fallback: "SQL", color: "#00758f", darkInvert: false },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", fallback: "PG", color: "#4169e1", darkInvert: false },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", fallback: "MY", color: "#4479a1", darkInvert: false },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", fallback: "🐳", color: "#2496ed", darkInvert: false },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", fallback: "K8S", color: "#326ce5", darkInvert: false },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", fallback: "GIT", color: "#f05032", darkInvert: false },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", fallback: "GH", color: "#ffffff", darkInvert: true },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", fallback: "VS", color: "#007acc", darkInvert: false },
  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", fallback: "PT", color: "#ee4c2c", darkInvert: false },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", fallback: "CV", color: "#5c3ee8", darkInvert: false },
];

interface HomeWorkspaceProps {
  setActiveTab?: (tab: string) => void;
  setSelectedProjectNum?: (num: string | null) => void;
}

export default function HomeWorkspace({ setActiveTab, setSelectedProjectNum }: HomeWorkspaceProps) {
  const [githubRepos, setGithubRepos] = useState<number | string>("12");
  const [githubContribs, setGithubContribs] = useState<number | string>("734");

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const response = await fetch("https://api.github.com/users/SowndharyaPL15");
        if (response.ok) {
          const data = await response.json();
          if (active && data.public_repos !== undefined) {
            setGithubRepos(data.public_repos);
          }
        }
      } catch (err) {}
    })();
    return () => { active = false; };
  }, []);

  const headerMonths = useMemo(() => {
    const cols = 53;
    const months: { label: string; index: number }[] = [];
    let lastMonth = -1;
    for (let i = 0; i < cols; i++) {
      const d = new Date();
      d.setDate(d.getDate() - (cols - 1 - i) * 7);
      const m = d.getMonth();
      if (m !== lastMonth) {
        months.push({
          label: d.toLocaleString("en-US", { month: "short" }),
          index: i
        });
        lastMonth = m;
      }
    }
    return months;
  }, []);

  const contributionGrid = useMemo(() => {
    return Array.from({ length: 7 }).map((_, ri) => {
      return Array.from({ length: 53 }).map((_, ci) => {
        const d = new Date();
        const daysAgo = (52 - ci) * 7 + (6 - ri);
        d.setDate(d.getDate() - daysAgo);
        if (d < new Date("2026-03-01")) return 0;
        const seed = ri * 31 + ci * 17;
        const rand = (seed % 100) / 100;
        if (rand < 0.25) return 0;
        if (rand < 0.6) return 1;
        if (rand < 0.8) return 2;
        if (rand < 0.93) return 3;
        return 4;
      });
    });
  }, []);

  const go = (tab: string) => setActiveTab && setActiveTab(tab);

  return (
    <div className="h-full w-full overflow-y-auto p-2 md:p-3 flex flex-col gap-2.5" style={{ scrollbarWidth: "thin" }}>

      {/* ===== ROW 1: HERO + SKILLS OVERVIEW ===== */}
      <div className="flex flex-col lg:flex-row gap-2.5 flex-shrink-0">

        {/* Hero Panel */}
        <div className="flex-1 cyber-panel rounded-xl p-4 flex flex-col sm:flex-row relative overflow-hidden">
          <div className="flex-1 flex flex-col justify-center z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">👋</span>
              <span className="font-space text-xs" style={{ color: "var(--text-muted)" }}>Hi, I&apos;m</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
              <span className="text-glow">Sowndharya</span>{" "}
              <span style={{ color: "var(--text-main)" }}>P.L.</span>
            </h1>
            <HeroRoleTypewriter />
            <p className="text-xs mb-3 max-w-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Building scalable, user-centric applications with a passion for clean code and meaningful experiences.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-resume-preview"))}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded font-space text-xs font-bold text-white hover:scale-105 transition-transform"
                style={{ background: "var(--gradient-primary)" }}
              >
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume ↓
              </button>
              <button onClick={() => go("contact")}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded font-space text-xs font-bold transition-colors hover:bg-[var(--glow-sm)]"
                style={{ border: "1px solid var(--border-subtle)" }}>
                Contact Me ✉
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[10px] font-space" style={{ color: "var(--text-muted)" }}>
              <a href="https://github.com/SowndharyaPL15" target="_blank" rel="noreferrer" className="flex items-center gap-1 transition-colors hover:opacity-80">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/sowndharyapl" target="_blank" rel="noreferrer" className="flex items-center gap-1 transition-colors hover:opacity-80">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/SOWNDHARYAPL/" target="_blank" rel="noreferrer" className="flex items-center gap-1 transition-colors hover:opacity-80">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
                LeetCode
              </a>
            </div>
          </div>
          <div className="hidden sm:block w-40 md:w-48 lg:w-56 h-36 sm:h-full relative flex-shrink-0 self-center">
            <HolographicOrb />
          </div>
        </div>

        {/* Skills Overview */}
        <div className="w-full lg:w-80 cyber-panel rounded-xl p-3 flex flex-col overflow-hidden flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-space text-[9px] tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>Skills Overview</span>
            <button onClick={() => go("skills")} className="font-space text-[8px] hover:underline" style={{ color: "var(--accent-primary)" }}>All Skills →</button>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 overflow-hidden">
            <div className="flex-1 flex flex-col justify-center space-y-1.5">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between font-space text-[8px] mb-0.5">
                    <span style={{ color: "var(--text-muted)" }}>{skill.name}</span>
                    <span style={{ color: skill.color }}>{skill.pct}%</span>
                  </div>
                  <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="h-full rounded-full" style={{ width: `${skill.pct}%`, background: skill.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="w-28 sm:w-32 lg:w-28 h-28 sm:h-32 lg:h-28 mx-auto flex items-center justify-center flex-shrink-0">
              <RadarChart />
            </div>
          </div>
        </div>
      </div>

      {/* ===== ROW 2: STAT CARDS ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 flex-shrink-0">
        {[
          { icon: "🚀", v: "11", l: "Projects Completed", c: "var(--accent-primary)" },
          { icon: "</>", v: "15+", l: "Technologies Mastered", c: "var(--accent-secondary)" },
          { icon: "📄", v: "4", l: "Certifications & Achievements", c: "var(--accent-tertiary)" },
          { icon: "💼", v: "1", l: "Internship Experience", c: "var(--accent-primary)" },
          { icon: "🎓", v: "2023-2027", l: "Academic Journey", c: "var(--accent-secondary)" },
          { icon: "⭐", v: "8.35", l: "CGPA (SEM-6)", c: "var(--accent-tertiary)" },
        ].map((s, i) => (
          <div key={i} className="cyber-panel rounded-lg flex items-center gap-2 p-2.5 hover:bg-[var(--glow-sm)] transition-colors">
            <div className="w-7 h-7 rounded border flex items-center justify-center text-xs flex-shrink-0"
              style={{ borderColor: s.c, color: s.c, background: "var(--glow-xs)" }}>
              {s.icon}
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-bold leading-none" style={{ color: s.c }}>{s.v}</div>
              <div className="font-space text-[7px] leading-tight mt-0.5" style={{ color: "var(--text-muted)" }}>{s.l}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== ROW 3: ABOUT + TIMELINE + PROJECTS + EDU/EXP ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-2.5 flex-shrink-0">

        {/* About Me */}
        <div className="md:col-span-1 xl:col-span-3 cyber-panel rounded-xl p-3 flex flex-col overflow-hidden">
          <span className="font-space text-[9px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--text-muted)" }}>About Me</span>
          <p className="text-[10px] leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
            I am a Computer Science and Engineering student with Honours in Blockchain Technology at Dr. N.G.P Institute of Technology. I enjoy developing AI-powered applications, full-stack web platforms, and intelligent software solutions that solve real-world problems.
          </p>
          <div className="space-y-1 text-[8px] font-space pt-2 mt-2" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            {[
              { ic: "📍", t: "Tirupur, Tamil Nadu" },
              { ic: "✉", t: "plsowndharya@gmail.com" },
              { ic: "📞", t: "+91 9884606863" },
              { ic: "💻", t: "Full Stack Developer" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span>{item.ic}</span>
                <span style={{ color: "var(--text-muted)" }}>{item.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="md:col-span-1 xl:col-span-3 cyber-panel rounded-xl p-3 flex flex-col overflow-hidden">
          <span className="font-space text-[9px] tracking-widest uppercase font-bold mb-2" style={{ color: "var(--text-muted)" }}>Journey Timeline</span>
          <div className="relative pl-3 space-y-2.5 flex-1" style={{ borderLeft: "2px solid var(--border-subtle)" }}>
            {[
              { y: "2023", t: "Started B.E Computer Science Engineering", c: "var(--accent-primary)" },
              { y: "2024", t: "Developed CuraNet Caregiver Support System", c: "var(--accent-secondary)" },
              { y: "2025", t: "Software Development Intern at Mist Software", c: "var(--accent-tertiary)" },
              { y: "2025", t: "Built Connectify, SmartExpensePro & CivicPulse", c: "var(--accent-primary)" },
              { y: "2026", t: "AI Product Auth, ModelHubX and Portfolio", c: "var(--accent-secondary)" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute w-2 h-2 rounded-full" style={{ background: item.c, left: "-15px", top: "4px" }} />
                <div className="font-space text-[9px] font-bold" style={{ color: item.c }}>{item.y}</div>
                <div className="font-space text-[8px] leading-tight" style={{ color: "var(--text-muted)" }}>{item.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="md:col-span-2 xl:col-span-3 cyber-panel rounded-xl p-3 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="font-space text-[9px] tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>Featured Projects</span>
            <button onClick={() => go("projects")} className="font-space text-[8px] hover:underline" style={{ color: "var(--accent-primary)" }}>View All Projects →</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-2 flex-1 overflow-hidden">
            {PROJECTS.filter(p => ["Project 03", "Project 05", "Project 06"].includes(p.num)).map((p, i) => (
              <div key={i} onClick={() => { if (setSelectedProjectNum) setSelectedProjectNum(p.num); go("projects"); }}
                className="group cyber-panel rounded-lg cursor-pointer p-2 flex flex-col justify-between transition-all hover:border-[var(--accent-primary)] hover:shadow-[0_0_12px_rgba(0,199,183,0.2)]"
                style={{ border: "1px solid var(--border-subtle)" }}>
                
                {/* Title & Subtitle */}
                <div className="px-0.5 mb-1 flex items-center justify-between">
                  <div className="font-space text-[9px] font-bold text-main leading-tight line-clamp-1 group-hover:text-[var(--accent-primary)] transition-colors">{p.name}</div>
                  <span className="font-space text-[7px] text-[var(--accent-primary)]">{p.num}</span>
                </div>
                <div className="font-space text-[8px] text-[var(--text-muted)] line-clamp-1 mb-1.5">{p.desc}</div>

                {/* Tech Badges (Pills) */}
                <div className="flex flex-wrap gap-1 px-0.5">
                  {p.tech.slice(0, 3).map((t, j) => (
                    <span key={j} className="font-space text-[6.5px] px-1.5 py-0.5 rounded-full border border-[rgba(0,199,183,0.3)] bg-[rgba(0,199,183,0.1)] text-[var(--accent-primary)] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience */}
        <div className="md:col-span-2 xl:col-span-3 cyber-panel rounded-xl p-3 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="font-space text-[9px] tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>Education & Experience</span>
            <button onClick={() => go("education")} className="font-space text-[8px] hover:underline" style={{ color: "var(--accent-primary)" }}>View All →</button>
          </div>
          <div className="font-space text-[8px] space-y-2 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
            <div className="font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Education</div>
            {[
              { t: "B.E. Computer Science & Engineering", s: "Dr. N.G.P. Institute of Technology | 2023-2027 | CGPA: 8.35 (SEM-6)", c: "var(--accent-secondary)" },
              { t: "Higher Secondary (HSE)", s: "Sakthi Vigneswara School | 2021-2023 | 84%", c: "var(--accent-tertiary)" },
              { t: "SSLC", s: "Sri Sai Matriculation School", c: "var(--accent-primary)" },
            ].map((e, i) => (
              <div key={i} className="flex gap-1.5">
                <div className="w-4 h-4 rounded border flex items-center justify-center flex-shrink-0" style={{ borderColor: e.c, fontSize: "9px" }}>🎓</div>
                <div>
                  <div className="font-bold" style={{ color: e.c }}>{e.t}</div>
                  <div style={{ color: "var(--text-muted)" }}>{e.s}</div>
                </div>
              </div>
            ))}
            <div className="font-bold uppercase tracking-wider mt-2" style={{ color: "var(--text-muted)" }}>Internship</div>
            <div className="flex gap-1.5">
              <div className="w-4 h-4 rounded border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--accent-primary)", fontSize: "9px" }}>💼</div>
              <div>
                <div className="font-bold" style={{ color: "var(--accent-primary)" }}>Software Development Intern</div>
                <div style={{ color: "var(--text-muted)" }}>Mist Software Solutions | 2025 - 15 Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ROW 4: CERTS + GITHUB ACTIVITY + TECH STACK ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5 flex-shrink-0">

        {/* Certifications & Achievements */}
        <div className="cyber-panel rounded-xl p-3 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="font-space text-[9px] tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>Certifications & Achievements</span>
            <button onClick={() => go("certificates")} className="font-space text-[8px] hover:underline" style={{ color: "var(--accent-primary)" }}>View All (4) →</button>
          </div>
          <div className="grid grid-cols-2 gap-1.5 flex-1">
            <a href="/SIMPLELEARN CERTIFICATION.pdf" target="_blank" rel="noreferrer" className="rounded p-1.5 flex items-center gap-1.5 hover:border-[var(--accent-secondary)] transition-colors block" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-input)" }}>
              <span className="text-sm flex-shrink-0">🏆</span>
              <div className="min-w-0">
                <div className="font-space text-[8px] font-bold truncate" style={{ color: "var(--accent-secondary)" }}>Simplilearn (2025)</div>
                <div className="font-space text-[6.5px] truncate" style={{ color: "var(--text-muted)" }}>Full Stack Java Dev</div>
              </div>
            </a>
            <a href="/Java Full Stack with React JS & AI.pdf" target="_blank" rel="noreferrer" className="rounded p-1.5 flex items-center gap-1.5 hover:border-[var(--accent-primary)] transition-colors block" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-input)" }}>
              <span className="text-sm flex-shrink-0">⚡</span>
              <div className="min-w-0">
                <div className="font-space text-[8px] font-bold truncate" style={{ color: "var(--accent-primary)" }}>Brainovision (2024)</div>
                <div className="font-space text-[6.5px] truncate" style={{ color: "var(--text-muted)" }}>Java Full Stack + AI</div>
              </div>
            </a>
            <a href="/Data Science using Python.pdf" target="_blank" rel="noreferrer" className="rounded p-1.5 flex items-center gap-1.5 hover:border-[#38bdf8] transition-colors block" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-input)" }}>
              <span className="text-sm flex-shrink-0">🐍</span>
              <div className="min-w-0">
                <div className="font-space text-[8px] font-bold truncate" style={{ color: "#38bdf8" }}>Brainovision & NGP (2024)</div>
                <div className="font-space text-[6.5px] truncate" style={{ color: "var(--text-muted)" }}>Data Science Python</div>
              </div>
            </a>
            <a href="/PAPER PRESENTATION.pdf" target="_blank" rel="noreferrer" className="rounded p-1.5 flex items-center gap-1.5 hover:border-[#FFA116] transition-colors block" style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-input)" }}>
              <span className="text-sm flex-shrink-0">🥈</span>
              <div className="min-w-0">
                <div className="font-space text-[8px] font-bold truncate" style={{ color: "#FFA116" }}>2nd Prize (2024)</div>
                <div className="font-space text-[6.5px] truncate" style={{ color: "var(--text-muted)" }}>Aerial Object Detection</div>
              </div>
            </a>
          </div>
        </div>

        {/* GitHub Activity */}
        <div className="cyber-panel rounded-xl p-3 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="font-space text-[9px] tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>GitHub Activity</span>
            <a href="https://github.com/SowndharyaPL15" target="_blank" rel="noreferrer" className="font-space text-[8px] hover:underline" style={{ color: "var(--accent-primary)" }}>View GitHub →</a>
          </div>
          <div className="flex flex-1 gap-3 items-center overflow-hidden">
            <div className="flex flex-col gap-2 flex-shrink-0">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                <div>
                  <div className="font-bold text-sm leading-none">{githubRepos}</div>
                  <div className="font-space text-[7px]" style={{ color: "var(--text-muted)" }}>Repositories</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">🔥</span>
                <div>
                  <div className="font-bold text-sm leading-none">{githubContribs}</div>
                  <div className="font-space text-[7px]" style={{ color: "var(--text-muted)" }}>Contributions</div>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-x-auto pb-1 flex flex-col justify-between" style={{ scrollbarWidth: "thin" }}>
              <div className="min-w-[280px]">
                {/* Month Labels Header */}
                <div className="relative w-full h-3 mb-1">
                  {headerMonths.map((m, idx) => (
                    <div
                      key={idx}
                      className="absolute font-space text-[5.5px]"
                      style={{
                        left: `${(m.index / 53) * 100}%`,
                        color: "var(--text-muted)",
                        transform: "translateX(-50%)"
                      }}
                    >
                      {m.label}
                    </div>
                  ))}
                </div>
                
                {/* Heatmap Grid */}
                <div className="flex flex-col gap-[1px]">
                  {contributionGrid.map((row, ri) => {
                    const dayLabel = ri === 1 ? "Mon" : ri === 3 ? "Wed" : ri === 5 ? "Fri" : "";
                    return (
                      <div key={ri} className="flex items-center gap-[2px]">
                        <div className="font-space text-[5px] w-3 flex-shrink-0 text-left" style={{ color: "var(--text-muted)", height: "5px", lineHeight: "5px" }}>
                          {dayLabel}
                        </div>
                        <div className="flex gap-[1px] flex-1">
                          {row.map((level, ci) => {
                            let bg = "rgba(255, 255, 255, 0.05)";
                            if (level === 1) bg = "#0e4429";
                            else if (level === 2) bg = "#006d32";
                            else if (level === 3) bg = "#26a641";
                            else if (level === 4) bg = "#39d353";
                            return (
                              <div
                                key={ci}
                                className="flex-1 h-[5px] rounded-sm"
                                style={{ background: bg }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Footer Legend */}
                <div className="flex items-center justify-between mt-1 text-[5px] font-space" style={{ color: "var(--text-muted)" }}>
                  <span>Counted contributions</span>
                  <div className="flex items-center gap-[2px]">
                    <span>Less</span>
                    <div className="w-[5px] h-[5px] rounded-sm" style={{ background: "rgba(255, 255, 255, 0.05)" }} />
                    <div className="w-[5px] h-[5px] rounded-sm" style={{ background: "#0e4429" }} />
                    <div className="w-[5px] h-[5px] rounded-sm" style={{ background: "#006d32" }} />
                    <div className="w-[5px] h-[5px] rounded-sm" style={{ background: "#26a641" }} />
                    <div className="w-[5px] h-[5px] rounded-sm" style={{ background: "#39d353" }} />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="md:col-span-2 xl:col-span-1 cyber-panel rounded-xl p-3 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="font-space text-[9px] tracking-widest uppercase font-bold" style={{ color: "var(--text-muted)" }}>Tech Stack</span>
            <button onClick={() => go("skills")} className="font-space text-[8px] hover:underline" style={{ color: "var(--accent-primary)" }}>View All →</button>
          </div>
          <div className="flex-1 grid grid-cols-7 gap-1 place-items-center content-center">
            {TECH_STACK.map((tech, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5 group cursor-pointer">
                <div
                  className="w-6 h-6 rounded-md p-1 border flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_0_8px_var(--accent-primary)] overflow-hidden relative"
                  style={{ background: "rgba(10, 20, 35, 0.6)", borderColor: "var(--border-subtle)" }}
                  title={tech.name}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-full h-full object-contain filter drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] ${tech.darkInvert ? "invert brightness-200" : ""}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = "flex";
                      }
                    }}
                  />
                  <span
                    className="hidden w-full h-full text-[7px] font-bold font-space items-center justify-center"
                    style={{ color: tech.color }}
                  >
                    {tech.fallback}
                  </span>
                </div>
                <span className="font-space text-center leading-none group-hover:text-[var(--accent-primary)] transition-colors" style={{ fontSize: "5.5px", color: "var(--text-muted)" }}>
                  {tech.name.substring(0, 7)}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
