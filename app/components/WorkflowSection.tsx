"use client";

import { useRef, useEffect } from "react";

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

export default function WorkflowSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

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
      {/* ── Centered wrapper ── */}
      <div style={{ maxWidth: "860px", marginLeft: "auto", marginRight: "auto", padding: "0 32px" }}>

        {/* ── Header ── */}
        <div style={{ position: "relative", textAlign: "center", marginBottom: "48px" }}>

          {/* Sparkles top-right — 4-pointed star style */}
          <div style={{ position: "absolute", right: "0", top: "-10px", display: "flex", alignItems: "flex-start", gap: "4px" }}>
            <style>
              {`
                @keyframes floatStar1 {
                  0%, 100% { transform: translateY(0) scale(1); }
                  50% { transform: translateY(-6px) scale(1.05); }
                }
                @keyframes floatStar2 {
                  0%, 100% { transform: translateY(0) scale(1); }
                  50% { transform: translateY(-4px) scale(1.1); }
                }
              `}
            </style>
            {/* Big star */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" style={{ marginTop: "12px", animation: "floatStar1 4s ease-in-out infinite" }}>
              <path d="M12 1 C12 8 8 12 1 12 C8 12 12 16 12 23 C12 16 16 12 23 12 C16 12 12 8 12 1 Z" stroke="#1a1a2e" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            {/* Small star */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff" style={{ animation: "floatStar2 3s ease-in-out infinite" }}>
              <path d="M12 1 C12 8 8 12 1 12 C8 12 12 16 12 23 C12 16 16 12 23 12 C16 12 12 8 12 1 Z" stroke="#1a1a2e" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Badge */}
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
              marginBottom: "22px",
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
            }}
          >
            <span style={{ fontSize: "13px", lineHeight: 1 }}>✱</span>
            Process
          </div>

          {/* Heading */}
          <h2
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "18px",
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.id}
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

              {/* Arrow button — only on last card, sticks out right edge */}
              {i === steps.length - 1 && (
                <div
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
          ))}
        </div>
      </div>

      {/* ── Marquee ── */}
      <div style={{ marginTop: "72px" }}>
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