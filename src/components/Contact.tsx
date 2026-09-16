"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "plsowndharya@gmail.com",
    href: "mailto:plsowndharya@gmail.com",
    color: "#00f0ff",
    copyable: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
      </svg>
    ),
    label: "Phone",
    value: "+91 9884606863",
    href: "tel:+919884606863",
    color: "#39ff14",
    copyable: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Tirupur, Tamil Nadu, India",
    href: null,
    color: "#ff6b35",
    copyable: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "sowndharyapl",
    href: "https://www.linkedin.com/in/sowndharyapl/",
    color: "#0077b5",
    copyable: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    label: "GitHub",
    value: "SowndharyaPL15",
    href: "https://github.com/SowndharyaPL15",
    color: "#a78bfa",
    copyable: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    label: "LeetCode",
    value: "SOWNDHARYAPL",
    href: "https://leetcode.com/u/SOWNDHARYAPL/",
    color: "#ffa116",
    copyable: false,
  },
];

function ContactCard({ info, idx }: { info: typeof CONTACT_INFO[0]; idx: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(info.value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const content = (
    <div className="flex items-center gap-4 w-full">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{ background: `${info.color}15`, color: info.color }}
      >
        {info.icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="block font-space text-[9px] uppercase tracking-widest font-bold mb-0.5" style={{ color: "var(--text-muted)" }}>
          {info.label}
        </span>
        <span className="block font-space text-sm font-bold truncate" style={{ color: "var(--text-main)" }}>
          {info.value}
        </span>
      </div>
      {info.copyable && (
        <button
          onClick={handleCopy}
          title="Copy to clipboard"
          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:bg-[var(--glow-xs)]"
          style={{ color: copied ? "#00ff88" : "var(--text-muted)" }}
          aria-label={`Copy ${info.label}`}
        >
          {copied ? (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
          )}
        </button>
      )}
      {info.href && !info.copyable && (
        <svg className="w-3.5 h-3.5 flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: info.color }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      )}
    </div>
  );

  const sharedClass =
    "group flex items-center gap-3 p-4 rounded-xl border border-[var(--border-subtle)] hover:shadow-[0_0_16px_rgba(0,199,183,0.12)] transition-all duration-300 w-full";

  return (
    <motion.div
      key={info.label}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.06, duration: 0.4 }}
      style={{ background: "transparent" }}
    >
      {info.href ? (
        <a
          href={info.href}
          target={info.href.startsWith("http") ? "_blank" : undefined}
          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={sharedClass}
          style={{}}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = `${info.color}60`;
            el.style.background = `${info.color}08`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "";
            el.style.background = "";
          }}
          aria-label={`${info.label}: ${info.value}`}
        >
          {content}
        </a>
      ) : (
        <div className={sharedClass}>{content}</div>
      )}
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "b425f74d-bd58-4563-b04e-47741404ee41",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setStatusMsg(result.message || "Failed to send message. Please check your Access Key.");
      }
    } catch (err) {
      setStatusMsg("Failed to connect to the email service. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
      {/* LEFT — Contact Cards */}
      <div className="xl:col-span-3 space-y-5">
        {/* Header */}
        <div>
          <div className="font-space text-[10px] uppercase tracking-widest text-glow mb-1 font-bold">
            CONNECTIVITY PORTAL
          </div>
          <h2 className="font-dm-serif text-2xl md:text-3xl font-bold" style={{ color: "var(--text-main)" }}>
            Let&apos;s Build Something Together
          </h2>
          <p className="font-space text-xs mt-1.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Actively seeking AI Engineer &amp; Full Stack roles. Available for full-time positions, research collaborations, and internships.
          </p>

          {/* Status badge */}
          <div className="flex items-center gap-2 mt-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping" />
            <span className="font-space text-xs font-bold text-[#00ff88]">
              ACTIVELY OPEN TO OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {CONTACT_INFO.map((info, idx) => (
            <ContactCard key={info.label} info={info} idx={idx} />
          ))}
        </div>

        {/* Quick Action Bar */}
        <div className="flex flex-wrap gap-2 pt-1">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-resume-preview"))}
            className="font-space text-xs px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
            style={{ background: "var(--gradient-primary)", color: "#000" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            DOWNLOAD RESUME (PDF)
          </button>
          <a
            href="https://github.com/SowndharyaPL15"
            target="_blank"
            rel="noreferrer"
            className="font-space text-xs px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 border border-[var(--border-accent)] hover:bg-[var(--glow-sm)]"
            style={{ color: "var(--accent-primary)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            VIEW GITHUB
          </a>
        </div>
      </div>

      {/* RIGHT — Message Form + QR */}
      <div className="xl:col-span-2 space-y-4">
        {/* Contact Form */}
        <div className="cyber-panel p-5 rounded-xl space-y-4">
          <div className="font-space text-[10px] uppercase tracking-widest text-glow font-bold">
            SEND A MESSAGE
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-space text-[9px] uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Name"
                  className="w-full font-space text-xs px-3 py-2 rounded-lg border border-[var(--border-subtle)] text-main placeholder-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  style={{ background: "var(--bg-surface)" }}
                />
              </div>
              <div>
                <label className="font-space text-[9px] uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@domain.com"
                  className="w-full font-space text-xs px-3 py-2 rounded-lg border border-[var(--border-subtle)] text-main placeholder-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                  style={{ background: "var(--bg-surface)" }}
                />
              </div>
            </div>
            <div>
              <label className="font-space text-[9px] uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Re: Internship / Full-Time Offer..."
                className="w-full font-space text-xs px-3 py-2 rounded-lg border border-[var(--border-subtle)] text-main placeholder-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                style={{ background: "var(--bg-surface)" }}
              />
            </div>
            <div>
              <label className="font-space text-[9px] uppercase tracking-wider block mb-1" style={{ color: "var(--text-muted)" }}>
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Sowndharya, I'd like to discuss a role..."
                className="w-full font-space text-xs px-3 py-2 rounded-lg border border-[var(--border-subtle)] text-main placeholder-[var(--text-muted)] focus:border-[var(--accent-primary)] focus:outline-none resize-none transition-colors"
                style={{ background: "var(--bg-surface)" }}
              />
            </div>
            {statusMsg && (
              <div className="font-space text-[10px] text-center p-2 rounded border"
                   style={{
                     color: "var(--accent-secondary)",
                     borderColor: "rgba(255,183,3,0.3)",
                     background: "rgba(255,183,3,0.05)"
                   }}>
                {statusMsg}
              </div>
            )}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full font-space text-xs font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110'}`}
              style={{
                background: sent ? "#00ff88" : "var(--gradient-primary)",
                color: "#000",
              }}
            >
              {sent ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  MESSAGE SENT SUCCESSFULLY!
                </>
              ) : isSending ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  SENDING MESSAGE...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
