"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Command {
  id: string;
  label: string;
  icon: string;
  shortcut?: string;
  action: () => void;
  category: "Navigation" | "Actions" | "Social";
}

interface CommandPaletteProps {
  setActiveTab: (tab: string) => void;
}

export default function CommandPalette({ setActiveTab }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const navigate = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      setOpen(false);
      setQuery("");
    },
    [setActiveTab]
  );

  const commands: Command[] = [
    {
      id: "home",
      label: "Go to Home",
      icon: "🏠",
      action: () => navigate("home"),
      category: "Navigation",
    },
    {
      id: "about",
      label: "Go to About Me",
      icon: "👤",
      action: () => navigate("about"),
      category: "Navigation",
    },
    {
      id: "skills",
      label: "Go to Skills",
      icon: "⚡",
      action: () => navigate("skills"),
      category: "Navigation",
    },
    {
      id: "projects",
      label: "Go to Projects",
      icon: "🚀",
      action: () => navigate("projects"),
      category: "Navigation",
    },

    {
      id: "education",
      label: "Go to Education",
      icon: "🎓",
      action: () => navigate("education"),
      category: "Navigation",
    },
    {
      id: "experience",
      label: "Go to Experience",
      icon: "💼",
      action: () => navigate("experience"),
      category: "Navigation",
    },
    {
      id: "certificates",
      label: "Go to Certificates",
      icon: "🏆",
      action: () => navigate("certificates"),
      category: "Navigation",
    },
    {
      id: "github-tab",
      label: "Go to GitHub Activity",
      icon: "📊",
      action: () => navigate("github"),
      category: "Navigation",
    },
    {
      id: "contact-tab",
      label: "Go to Contact Workspace",
      icon: "📡",
      action: () => navigate("contact"),
      category: "Navigation",
    },
    {
      id: "resume",
      label: "Preview & Download Resume",
      icon: "📄",
      shortcut: "⌘D",
      action: () => {
        window.dispatchEvent(new CustomEvent("open-resume-preview"));
        setOpen(false);
      },
      category: "Actions",
    },
    {
      id: "contact-email",
      label: "Send Email",
      icon: "📧",
      action: () => {
        window.open("mailto:plsowndharya@gmail.com");
        setOpen(false);
      },
      category: "Actions",
    },
    {
      id: "github",
      label: "Open GitHub",
      icon: "🐙",
      action: () => {
        window.open("https://github.com/SowndharyaPL15", "_blank");
        setOpen(false);
      },
      category: "Social",
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      icon: "💼",
      action: () => {
        window.open("https://www.linkedin.com/in/sowndharyapl/", "_blank");
        setOpen(false);
      },
      category: "Social",
    },
    {
      id: "leetcode",
      label: "Open LeetCode",
      icon: "💡",
      action: () => {
        window.open("https://leetcode.com/u/SOWNDHARYAPL/", "_blank");
        setOpen(false);
      },
      category: "Social",
    },
  ];

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  // Group results
  const grouped = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  const flatFiltered = Object.values(grouped).flat();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) { setQuery(""); setSelectedIdx(0); }
          return !prev;
        });
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Scroll selected into view
  useEffect(() => {
    const el = listRef.current?.children[selectedIdx] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIdx]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, flatFiltered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, 0));
    }
    if (e.key === "Enter" && flatFiltered[selectedIdx]) {
      flatFiltered[selectedIdx].action();
    }
    if (e.key === "Tab") {
      e.preventDefault();
      setSelectedIdx((prev) =>
        e.shiftKey
          ? Math.max(prev - 1, 0)
          : Math.min(prev + 1, flatFiltered.length - 1)
      );
    }
  };

  const execute = (cmd: Command) => {
    cmd.action();
    setQuery("");
  };

  let flatIdx = 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[200]"
            style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ type: "spring", stiffness: 500, damping: 32 }}
            className="fixed top-[18%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[201] px-4"
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-accent)",
                boxShadow: "0 0 50px var(--glow-sm), 0 25px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Search row */}
              <div
                className="flex items-center gap-3 px-4 py-3.5"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "var(--text-muted)" }}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelectedIdx(0); }}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-sm outline-none font-space"
                  style={{ color: "var(--text-main)" }}
                  aria-label="Command search"
                />
                <kbd
                  className="font-space text-[10px] px-1.5 py-0.5 rounded"
                  style={{
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-subtle)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-72 overflow-y-auto py-2">
                {flatFiltered.length === 0 ? (
                  <div
                    className="px-4 py-8 text-center font-space text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    No commands found for &quot;{query}&quot;
                  </div>
                ) : (
                  Object.entries(grouped).map(([category, cmds]) => (
                    <div key={category}>
                      <div
                        className="px-4 py-1.5 font-space text-[9px] uppercase tracking-widest"
                        style={{ color: "var(--text-muted)", opacity: 0.6 }}
                      >
                        {category}
                      </div>
                      {cmds.map((cmd) => {
                        const isSelected = flatFiltered[selectedIdx]?.id === cmd.id;
                        const currentIdx = flatIdx++;
                        void currentIdx;
                        return (
                          <button
                            key={cmd.id}
                            role="option"
                            aria-selected={isSelected}
                            onClick={() => execute(cmd)}
                            onMouseEnter={() =>
                              setSelectedIdx(flatFiltered.findIndex((c) => c.id === cmd.id))
                            }
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
                            style={{
                              background: isSelected ? "var(--glow-xs)" : "transparent",
                              borderLeft: isSelected
                                ? `2px solid var(--accent-primary)`
                                : "2px solid transparent",
                            }}
                          >
                            <span className="text-base w-6 text-center flex-shrink-0">{cmd.icon}</span>
                            <span
                              className="flex-1 text-sm font-space"
                              style={{ color: isSelected ? "var(--accent-primary)" : "var(--text-main)" }}
                            >
                              {cmd.label}
                            </span>
                            {cmd.shortcut && (
                              <kbd
                                className="font-space text-[10px] px-1.5 py-0.5 rounded"
                                style={{
                                  color: "var(--text-muted)",
                                  border: "1px solid var(--border-subtle)",
                                  background: "rgba(255,255,255,0.03)",
                                }}
                              >
                                {cmd.shortcut}
                              </kbd>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hints */}
              <div
                className="flex items-center gap-4 px-4 py-2.5 font-space text-[10px]"
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  color: "var(--text-muted)",
                  opacity: 0.7,
                }}
              >
                <span>
                  <kbd className="border border-current rounded px-1 mr-1">↑↓</kbd>Navigate
                </span>
                <span>
                  <kbd className="border border-current rounded px-1 mr-1">↵</kbd>Select
                </span>
                <span>
                  <kbd className="border border-current rounded px-1 mr-1">⌃K</kbd>Toggle
                </span>
                <span className="ml-auto" style={{ color: "var(--accent-primary)", opacity: 0.8 }}>
                  {flatFiltered.length} commands
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
