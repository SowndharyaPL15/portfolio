"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { detectIntent, getChatResponse } from "@/utils/chatEngine";

/* ── Quick commands ──────────────────────────────────────────────────── */
const QUICK_CMDS = [
  { label: "Internship", cmd: "Tell me about her internship" },
  { label: "Skills", cmd: "What are her skills?" },
  { label: "Projects", cmd: "Tell me about her projects" },
  { label: "Education", cmd: "What is her education and CGPA?" },
  { label: "Contact", cmd: "How to contact her?" },
  { label: "Resume", cmd: "Download resume" },
];

interface Message {
  role: "user" | "bot";
  text: string;
  ts: number;
}

export default function AITerminal() {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "SOWNDHARYA AI TERMINAL v2.0 · Type a command or click a quick action below.",
      ts: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lastBotMsg, setLastBotMsg] = useState("READY · Ask me anything about Sowndharya P.L.");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (expanded) setTimeout(() => inputRef.current?.focus(), 150);
  }, [expanded]);

  const send = useCallback((text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setInput("");
    setMessages((p) => [...p, { role: "user", text: msg, ts: Date.now() }]);
    setIsTyping(true);
    setTimeout(() => {
      const intent = detectIntent(msg);
      const reply = getChatResponse(intent);
      setIsTyping(false);
      setLastBotMsg(reply.split("\n")[0]);
      setMessages((p) => [...p, { role: "bot", text: reply, ts: Date.now() }]);
    }, 100);
  }, [input]);

  return (
    <>
      {/* ── Expanded Terminal Overlay ───────────────────────────── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-12 right-4 z-50 w-full max-w-md rounded-xl overflow-hidden"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-accent)",
              boxShadow: "0 0 40px var(--glow-sm), 0 8px 32px rgba(0,0,0,0.6)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Terminal title bar */}
            <div
              className="flex items-center justify-between px-4 py-2"
              style={{ borderBottom: "1px solid var(--border-subtle)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-space text-[10px] uppercase tracking-widest text-glow">
                  AI TERMINAL
                </span>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="font-space text-[10px] opacity-50 hover:opacity-100 transition-opacity"
                style={{ color: "var(--text-muted)" }}
                aria-label="Close terminal"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 font-space text-xs">
              {messages.map((m) => (
                <div key={m.ts} className={m.role === "user" ? "text-right" : ""}>
                  {m.role === "user" ? (
                    <div className="inline-flex items-center gap-1">
                      <span style={{ color: "var(--text-muted)" }}>{">"}</span>
                      <span style={{ color: "var(--accent-primary)" }}>{m.text}</span>
                    </div>
                  ) : (
                    <div
                      className="p-2 rounded text-left leading-relaxed whitespace-pre-line"
                      style={{
                        background: "var(--glow-xs)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <div>{m.text}</div>
                      {m.role === "bot" && (m.text.includes("Resume") || m.text.includes("resume")) && (
                        <button
                          onClick={() => {
                            setExpanded(false);
                            window.dispatchEvent(new CustomEvent("open-resume-preview"));
                          }}
                          className="mt-2 font-space text-[10px] px-2.5 py-1 rounded font-bold transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5"
                          style={{ background: "var(--gradient-primary)", color: "#000" }}
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                          Preview &amp; Download Resume
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--accent-primary)" }}>AI</span>
                  <span className="animate-pulse">processing...</span>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick commands */}
            <div
              className="px-4 py-2 flex flex-wrap gap-1.5"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              {QUICK_CMDS.map((c) => (
                <button
                  key={c.label}
                  onClick={() => send(c.cmd)}
                  className="font-space text-[9px] px-2 py-0.5 rounded uppercase tracking-wider transition-all hover:scale-105"
                  style={{
                    background: "var(--glow-xs)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--accent-primary)",
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div
              className="flex items-center px-4 py-3 gap-2"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              <span className="font-space text-xs" style={{ color: "var(--accent-primary)" }}>{">"}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about skills, projects, experience..."
                className="flex-1 bg-transparent outline-none font-space text-xs"
                style={{ color: "var(--text-main)", caretColor: "var(--accent-primary)" }}
                aria-label="Terminal input"
              />
              <button
                onClick={() => send()}
                disabled={!input.trim()}
                className="font-space text-[9px] px-2 py-1 rounded transition-all disabled:opacity-30"
                style={{
                  background: "var(--gradient-primary)",
                  color: "#fff",
                }}
                aria-label="Send command"
              >
                SEND
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Persistent Bottom Bar ─────────────────────────────────── */}
      <div
        className="flex-shrink-0 flex items-center gap-3 px-4"
        style={{
          height: "40px",
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border-subtle)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* AI Status indicator */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 group flex-shrink-0"
          aria-label="Open AI Terminal"
        >
          <div
            className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "0 0 10px var(--glow-sm)",
            }}
          >
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
          <div className="font-space text-[10px] leading-none">
            <div className="text-glow font-bold">AI TERMINAL</div>
            <div style={{ color: "var(--text-muted)", opacity: 0.6 }}>
              {expanded ? "▼ ACTIVE" : "▲ CLICK TO OPEN"}
            </div>
          </div>
        </button>

        {/* Divider */}
        <div className="h-5 w-px flex-shrink-0" style={{ background: "var(--border-subtle)" }} />

        {/* System telemetry: AI ONLINE, STATUS */}
        <div className="hidden lg:flex items-center gap-2 font-space text-[9px]">
          <span className="px-1.5 py-0.5 rounded border font-bold" style={{ background: "var(--glow-xs)", borderColor: "var(--accent-primary)", color: "var(--accent-primary)" }}>
            AI ASSISTANT ACTIVE
          </span>
          <span className="px-1.5 py-0.5 rounded border border-theme text-muted" style={{ background: "var(--glow-xs)" }}>
            PORTFOLIO ENGINE: <span className="font-bold" style={{ color: "var(--accent-primary)" }}>OPTIMAL</span>
          </span>
        </div>

        {/* Divider */}
        <div className="hidden lg:block h-5 w-px flex-shrink-0" style={{ background: "var(--border-subtle)" }} />

        {/* Last bot message preview */}
        <div className="flex-1 min-w-0 flex items-center gap-2 overflow-hidden">
          <span
            className="font-space text-[10px] truncate min-w-0 hidden sm:block"
            style={{ color: "var(--text-muted)", opacity: 0.7 }}
          >
            {lastBotMsg}
          </span>
        </div>

        {/* Quick action chips */}
        <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
          {QUICK_CMDS.slice(0, 3).map((c) => (
            <button
              key={c.label}
              onClick={() => { setExpanded(true); setTimeout(() => send(c.cmd), 200); }}
              className="font-space text-[9px] px-2 py-0.5 rounded uppercase tracking-wider transition-all hover:scale-105"
              style={{
                background: "var(--glow-xs)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-muted)",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Ctrl+K hint */}
        <div className="font-space text-[9px] hidden lg:flex items-center gap-1 flex-shrink-0" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
          <kbd className="border rounded px-1" style={{ borderColor: "var(--border-subtle)" }}>⌃K</kbd>
          <span>palette</span>
        </div>
      </div>
    </>
  );
}
