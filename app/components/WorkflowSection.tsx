"use client";

import { useRef, useEffect, useState } from "react";

const steps = [
  {
    id: "01.",
    title: "Research & Ideation",
    description:
      "I start by understanding your brand, audience, and goals gathering insights and sparking ideas that will shape the foundation of the design.",
    bg: "#edfae4",
    border: "#ceeeba",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3C13 3 7 7.5 7 13c0 3.3 2.7 6 6 6s6-2.7 6-6C19 7.5 13 3 13 3z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 19v3M16 19v3M10 22h6" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "02.",
    title: "Concept Development",
    description:
      "I start by understanding your brand, audience, and goals gathering insights and sparking ideas that will shape the foundation of the design.",
    bg: "#fce8ef",
    border: "#f5c2d0",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="5" width="20" height="16" rx="2.5" stroke="#374151" strokeWidth="1.5"/>
        <path d="M7 10h12M7 14h7" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="19" cy="14" r="2" stroke="#374151" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "03.",
    title: "Prototyping & Testing",
    description:
      "I start by understanding your brand, audience, and goals gathering insights and sparking ideas that will shape the foundation of the design.",
    bg: "#fdf0e8",
    border: "#f5d9c0",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="9" stroke="#374151" strokeWidth="1.5"/>
        <circle cx="13" cy="13" r="3.5" stroke="#374151" strokeWidth="1.5"/>
        <path d="M13 4v3M13 19v3M4 13h3M19 13h3" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const tools = ["Spotify", "Zapier", "Readkit", "Slack", "Chat GPT", "Notion", "Figma", "Photoshop", "Framer"];

// Scroll reveal hook
function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function WorkflowSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const headerReveal = useScrollReveal(0.1);
  const cardsReveal = useScrollReveal(0.05);
  const marqueeReveal = useScrollReveal(0.05);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [arrowHovered, setArrowHovered] = useState(false);

  useEffect(() => {
    let frame: number;
    let x = 0;
    const speed = 0.7;
    const animate = () => {
      const el = marqueeRef.current;
      if (el) {
        x -= speed;
        const half = el.scrollWidth / 2;
        if (Math.abs(x) >= half) x = 0;
        el.style.transform = `translateX(${x}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#E3E3FF",
        borderTop: "1px solid #1a1a2e",
        borderBottom: "1px solid #1a1a2e",
        padding: "80px 0 60px",
        fontFamily: "'Inter', 'DM Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* ── Floating stars ── */
        @keyframes floatStar1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.05); }
        }
        @keyframes floatStar2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-4px) scale(1.1); }
        }

        /* ── Scroll reveal: header ── */
        .wf-badge-reveal {
          opacity: 0;
          transform: scale(0.85) translateY(8px);
          transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .wf-badge-reveal.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        .wf-heading-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s ease 0.15s,
                      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }
        .wf-heading-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Cards staggered ── */
        .wf-card {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.25s ease;
        }
        .wf-card.visible { opacity: 1; transform: translateY(0); }
        .wf-card:nth-child(1) { transition-delay: 0s; }
        .wf-card:nth-child(2) { transition-delay: 0.12s; }
        .wf-card:nth-child(3) { transition-delay: 0.24s; }

        /* Card hover lift */
        .wf-card-inner {
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.28s ease;
        }
        .wf-card-inner:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.10);
        }

        /* Icon circle pop on card hover */
        .wf-icon-circle {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      background-color 0.2s ease;
        }
        .wf-card-inner:hover .wf-icon-circle {
          transform: scale(1.12) rotate(-6deg);
        }

        /* ── Marquee fade in ── */
        .wf-marquee-wrap {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s;
        }
        .wf-marquee-wrap.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Arrow button pulse ── */
        @keyframes arrowPulse {
          0%, 100% { box-shadow: 0 2px 10px rgba(0,0,0,0.10); }
          50% { box-shadow: 0 4px 18px rgba(0,0,0,0.18); }
        }
        .wf-arrow-btn {
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.25s ease;
          animation: arrowPulse 3s ease-in-out infinite;
        }
        .wf-arrow-btn:hover {
          transform: translateY(-50%) scale(1.18) !important;
          box-shadow: 0 6px 22px rgba(0,0,0,0.18) !important;
        }

        /* ── Responsive ── */
        .wf-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 18px;
          position: relative;
        }
        @media (max-width: 768px) {
          .wf-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .wf-arrow-btn {
            display: none !important;
          }
          .wf-section-heading {
            font-size: 24px !important;
          }
          .wf-inner {
            padding: 0 16px !important;
          }
          .wf-section-wrap {
            padding: 56px 0 48px !important;
          }
          .wf-stars {
            right: 8px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .wf-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .wf-section-heading {
            font-size: 28px !important;
          }
          .wf-inner {
            padding: 0 24px !important;
          }
        }
      `}</style>

      {/* ── Centered wrapper ── */}
      <div
        className="wf-inner"
        style={{ maxWidth: "860px", marginLeft: "auto", marginRight: "auto", padding: "0 32px" }}
      >

        {/* ── Header ── */}
        <div
          ref={headerReveal.ref}
          style={{ position: "relative", textAlign: "center", marginBottom: "48px" }}
        >
          {/* Sparkles top-right */}
          <div
            className="wf-stars"
            style={{ position: "absolute", right: "0", top: "-10px", display: "flex", alignItems: "flex-start", gap: "4px" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style={{ marginTop: "12px", animation: "floatStar1 4s ease-in-out infinite" }}>
              <path d="M12 1 C12 8 8 12 1 12 C8 12 12 16 12 23 C12 16 16 12 23 12 C16 12 12 8 12 1 Z" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff" style={{ animation: "floatStar2 3s ease-in-out infinite" }}>
              <path d="M12 1 C12 8 8 12 1 12 C8 12 12 16 12 23 C12 16 16 12 23 12 C16 12 12 8 12 1 Z" stroke="#1a1a2e" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Badge */}
          <div
            className={`wf-badge-reveal${headerReveal.visible ? " visible" : ""}`}
            style={{ display: "inline-block", marginBottom: "22px" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                border: "1px solid #1a1a2e",
                borderRadius: "9999px",
                padding: "7px 20px",
                fontSize: "10.5px",
                fontWeight: 600,
                color: "#374151",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                backgroundColor: "#ffffff",
                boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ fontSize: "13px", lineHeight: 1 }}>✱</span>
              Process
            </div>
          </div>

          {/* Heading */}
          <h2
            className={`wf-section-heading wf-heading-reveal${headerReveal.visible ? " visible" : ""}`}
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#0f0f1a",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            My workflow is centered around
            <br />
            being highly productive.
          </h2>
        </div>

        {/* ── 3 Cards ── */}
        <div ref={cardsReveal.ref} className="wf-grid">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`wf-card${cardsReveal.visible ? " visible" : ""}`}
            >
              <div
                className="wf-card-inner"
                style={{
                  backgroundColor: step.bg,
                  border: "1px solid #1a1a2e",
                  borderRadius: "18px",
                  padding: "24px 24px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  position: "relative",
                  minHeight: "260px",
                }}
              >
                {/* Number top-right */}
                <span
                  style={{
                    position: "absolute",
                    top: "22px",
                    right: "22px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#374151",
                    opacity: 0.55,
                  }}
                >
                  {step.id}
                </span>

                {/* Icon circle */}
                <div
                  className="wf-icon-circle"
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    border: "1px solid #1a1a2e",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                    flexShrink: 0,
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "15.5px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "12.5px",
                    color: "#6b7280",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>

                {/* Arrow button — only on last card */}
                {i === steps.length - 1 && (
                  <div
                    className="wf-arrow-btn"
                    style={{
                      position: "absolute",
                      right: "-20px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      border: "1px solid #1a1a2e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      zIndex: 10,
                      cursor: "pointer",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M3 7.5h9M9 4l3.5 3.5L9 11" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee ── */}
      <div
        ref={marqueeReveal.ref}
        className={`wf-marquee-wrap${marqueeReveal.visible ? " visible" : ""}`}
        style={{ marginTop: "72px" }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "20px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Tools that power my every day:
        </p>

        <div style={{ overflow: "hidden", width: "100%" }}>
          <div
            ref={marqueeRef}
            style={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
          >
            {[...tools, ...tools, ...tools].map((tool, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0f0f1a",
                  padding: "0 20px",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {tool}
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "20px",
                    fontSize: "13px",
                    color: "#9ca3af",
                    fontWeight: 400,
                  }}
                >
                  ✱
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}