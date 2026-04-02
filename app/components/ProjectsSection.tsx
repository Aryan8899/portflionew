"use client";

import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Snowlake Social Media Website",
    description:
      "Snowlake is a sleek, product-driven site for a social media platform, built with clean UI and scalable Framer CMS.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  },
  {
    id: 2,
    title: "Meeko Company Networking Website",
    description:
      "Meeko is a modern Framer-built site connecting professionals, designed for seamless networking.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80",
  },
  {
    id: 3,
    title: "Sandbox Banking Application Website",
    description:
      "Sandbox is a next-gen fintech site built in Framer, spotlighting trust and innovation through a powerful CMS.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
  },
  {
    id: 4,
    title: "Creatink Website Portfolio Template",
    description:
      "Creatink is a bold, modern agency site built on Framer CMS, designed to showcase strong visuals and smooth UX.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80",
  },
];

function ArrowCircleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ display: "inline-block", marginLeft: "6px", flexShrink: 0 }}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6 10L10 6M10 6H7M10 6V9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "96px 0",
        fontFamily: "'Inter', 'DM Sans', sans-serif",
      }}
    >
      {/* ── Centered container ── */}
      <div
        style={{
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 24px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ position: "relative", textAlign: "center", marginBottom: "64px" }}>
          <style>
            {`
              @keyframes floatLeft {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(2deg); }
              }
              @keyframes floatRight {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-15px) rotate(-5deg); }
              }
            `}
          </style>

          {/* Squiggle — top-left */}
          <svg
            style={{ 
              position: "absolute", 
              left: "calc(50% - 370px)", 
              top: "10px", 
              opacity: 0.8,
              animation: "floatLeft 4s ease-in-out infinite"
            }}
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M 10 35 C 10 45 20 45 22 35 C 25 20 12 15 10 25 C 8 35 25 45 35 30 C 40 23 42 15 42 10"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Diamond — top-right */}
          <svg
            style={{ 
              position: "absolute", 
              right: "calc(50% - 380px)", 
              top: "-10px",
              animation: "floatRight 5s ease-in-out infinite"
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" fill="#fce7f3" stroke="#111827" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid #111827",
              borderRadius: "9999px",
              padding: "8px 20px",
              fontSize: "12px",
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "24px",
              backgroundColor: "#ffffff",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            MY WORKS
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "44px",
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Check out some of our awesome
            <br />
            projects with creative ideas.
          </h2>
        </div>

        {/* ── 2×2 Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "56px 40px",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image thumbnail */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                  borderRadius: "16px",
                  border: "1px solid #111827",
                  backgroundColor: "#f3f4f6",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.5s ease",
                    transform: hovered === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
              </div>

              {/* Text */}
              <div style={{ marginTop: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#111827",
                    marginBottom: "10px",
                    lineHeight: 1.4,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#4b5563",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#111827",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  View Case Study
                  <ArrowCircleIcon />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ── See All Works ── */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "64px" }}>
          <button
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#111827",
              border: "1.5px solid #111827",
              borderRadius: "9999px",
              padding: "12px 32px",
              background: "#ffffff",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#111827";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#111827";
            }}
          >
            See All Works
          </button>
        </div>
      </div>
    </section>
  );
}