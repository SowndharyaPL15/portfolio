"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
  fileName?: string;
}

export default function ResumePreviewModal({
  isOpen,
  onClose,
  pdfUrl = "/SOWNDHARYA RESUME.pdf",
  fileName = "Sowndharya_PL_Resume.pdf",
}: ResumePreviewModalProps) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Reset loading state when opened
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const fullUrl = `${window.location.origin}${pdfUrl}`;
      navigator.clipboard.writeText(fullUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      const printWindow = window.open(pdfUrl, "_blank");
      if (printWindow) {
        printWindow.focus();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Resume Document Preview"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="w-full max-w-5xl h-[92vh] max-h-[900px] cyber-panel rounded-2xl flex flex-col relative z-10 overflow-hidden shadow-[0_0_40px_rgba(0,199,183,0.25)]"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-accent)",
            }}
          >
            {/* Top Header Bar */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
              }}
            >
              {/* Left: Document Info */}
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                  style={{
                    background: "var(--glow-sm)",
                    border: "1px solid var(--border-accent)",
                    color: "var(--accent-primary)",
                  }}
                >
                  📄
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2
                      className="font-space text-xs sm:text-sm font-bold truncate text-glow"
                      style={{ color: "var(--text-main)" }}
                    >
                      Sowndharya P.L. — Resume
                    </h2>
                    <span
                      className="hidden sm:inline-block font-space text-[9px] px-2 py-0.5 rounded font-bold uppercase"
                      style={{
                        background: "rgba(0, 255, 136, 0.15)",
                        color: "#00ff88",
                        border: "1px solid rgba(0, 255, 136, 0.3)",
                      }}
                    >
                      VERIFIED PROFILE
                    </span>
                  </div>
                  <div
                    className="font-space text-[10px] flex items-center gap-2 mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span>PDF Document</span>
                    <span>•</span>
                    <span>74 KB</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">Dr. N.G.P. Institute of Tech</span>
                  </div>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Download Button (Primary CTA) */}
                <a
                  href={pdfUrl}
                  download={fileName}
                  className="font-space text-xs px-3.5 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all hover:scale-105 shadow-sm"
                  style={{
                    background: "var(--gradient-primary)",
                    color: "#000",
                  }}
                  title="Download PDF to your device"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span>Download</span>
                </a>

                {/* Open in New Tab Button */}
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex font-space text-xs px-2.5 py-1.5 rounded-lg font-medium items-center gap-1.5 transition-all border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--glow-xs)]"
                  style={{ color: "var(--text-main)" }}
                  title="Open PDF in a new browser tab"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  <span>Open Tab</span>
                </a>

                {/* Copy Link Button */}
                <button
                  onClick={handleCopyLink}
                  className="hidden md:flex font-space text-xs px-2.5 py-1.5 rounded-lg font-medium items-center gap-1.5 transition-all border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--glow-xs)]"
                  style={{ color: copied ? "#00ff88" : "var(--text-main)" }}
                  title="Copy direct link to resume"
                  aria-label="Copy direct link to resume"
                >
                  {copied ? (
                    <>
                      <svg
                        className="w-3.5 h-3.5 text-[#00ff88]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-[#00ff88]">Copied</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                {/* Print Button */}
                <button
                  onClick={handlePrint}
                  className="hidden lg:flex font-space text-xs px-2.5 py-1.5 rounded-lg font-medium items-center gap-1.5 transition-all border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--glow-xs)]"
                  style={{ color: "var(--text-main)" }}
                  title="Print Resume"
                  aria-label="Print Resume"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                    />
                  </svg>
                  <span>Print</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--glow-sm)] text-[var(--text-muted)] hover:text-main"
                  aria-label="Close resume preview modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Main PDF Viewer Body */}
            <div className="flex-1 relative w-full h-full bg-[#181818] overflow-hidden flex items-center justify-center">
              {loading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-[var(--bg-surface)]">
                  <div className="relative w-10 h-10">
                    <div
                      className="absolute inset-0 rounded-full border-2 border-t-transparent animate-spin"
                      style={{ borderColor: "var(--accent-primary)", borderTopColor: "transparent" }}
                    />
                  </div>
                  <span className="font-space text-xs font-bold tracking-wider text-glow">
                    LOADING RESUME PREVIEW...
                  </span>
                </div>
              )}

              {/* Embedded PDF iframe / object */}
              <object
                data={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                type="application/pdf"
                className="w-full h-full border-none"
                onLoad={() => setLoading(false)}
              >
                {/* Fallback for devices / browsers that don't support inline PDF objects */}
                <iframe
                  src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                  className="w-full h-full border-none"
                  title="Resume PDF Preview"
                  onLoad={() => setLoading(false)}
                >
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4 bg-[var(--bg-surface)]">
                    <span className="text-4xl">📄</span>
                    <h3 className="font-dm-serif text-xl font-bold" style={{ color: "var(--text-main)" }}>
                      Sowndharya P.L. — Resume PDF
                    </h3>
                    <p className="font-space text-xs max-w-md" style={{ color: "var(--text-muted)" }}>
                      Your browser preview is not directly embedded on this device. You can download or view the resume directly:
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={pdfUrl}
                        download={fileName}
                        className="font-space text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-2"
                        style={{ background: "var(--gradient-primary)", color: "#000" }}
                      >
                        Download Resume PDF ↓
                      </a>
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-space text-xs px-4 py-2 rounded-lg font-bold border border-[var(--border-subtle)]"
                        style={{ color: "var(--text-main)" }}
                      >
                        Open in New Tab ↗
                      </a>
                    </div>
                  </div>
                </iframe>
              </object>
            </div>

            {/* Bottom Status / Footer Bar */}
            <div
              className="flex items-center justify-between px-4 py-2.5 flex-shrink-0 text-[11px] font-space"
              style={{
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--accent-primary)", boxShadow: "0 0 8px var(--accent-primary)" }}
                />
                <span style={{ color: "var(--text-muted)" }} className="hidden sm:inline">
                  Candidate: <strong style={{ color: "var(--text-main)" }}>Sowndharya P.L.</strong> (AI Engineer · Full Stack Developer)
                </span>
                <span style={{ color: "var(--text-muted)" }} className="sm:hidden">
                  Sowndharya P.L.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={pdfUrl}
                  download={fileName}
                  className="text-xs font-bold hover:underline flex items-center gap-1"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Download PDF ↓
                </a>
                <button
                  onClick={onClose}
                  className="font-space text-[10px] px-2.5 py-1 rounded border border-[var(--border-subtle)] hover:bg-[var(--glow-xs)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Close [ESC]
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
