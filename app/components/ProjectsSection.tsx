"use client";

import { useState, useEffect, useRef } from "react";

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

// Custom hook for intersection observer (scroll reveal)
function useScrollReveal(threshold = 0.15) {
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

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  const headerReveal = useScrollReveal(0.1);
  const gridReveal = useScrollReveal(0.05);
  const btnReveal = useScrollReveal(0.1);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "96px 0",
        fontFamily: "'Inter', 'DM Sans', sans-serif",
      }}
    >
      <style>{`
        /* ── Floating decorations ── */
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }

        /* ── Scroll-reveal base ── */
        .reveal-item {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Badge pop-in */
        .badge-reveal {
          opacity: 0;
          transform: scale(0.85) translateY(8px);
          transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                      transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .badge-reveal.visible {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* Heading slide-up */
        .heading-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.15s,
                      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }
        .heading-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Grid card stagger */
        .card-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .card-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .card-reveal:nth-child(1) { transition-delay: 0s; }
        .card-reveal:nth-child(2) { transition-delay: 0.12s; }
        .card-reveal:nth-child(3) { transition-delay: 0.24s; }
        .card-reveal:nth-child(4) { transition-delay: 0.36s; }

        /* Button entrance */
        .btn-reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.55s ease 0.1s, transform 0.55s ease 0.1s;
        }
        .btn-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Responsive grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px 40px;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .projects-heading {
            font-size: 28px !important;
          }
          .projects-section-inner {
            padding: 0 16px !important;
          }
          .projects-section-wrap {
            padding: 64px 0 !important;
          }
          .squiggle-left {
            left: 4px !important;
          }
          .diamond-right {
            right: 4px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-heading {
            font-size: 34px !important;
          }
          .projects-section-inner {
            padding: 0 32px !important;
          }
        }
      `}</style>

      {/* ── Centered container ── */}
      <div
        className="projects-section-wrap"
        style={{
          maxWidth: "1100px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 24px",
        }}
      >
        {/* ── Header ── */}
        <div
          ref={headerReveal.ref}
          style={{ position: "relative", textAlign: "center", marginBottom: "64px" }}
        >
          {/* Squiggle — top-left */}
          <svg
            className="squiggle-left"
            style={{
              position: "absolute",
              left: "calc(50% - 370px)",
              top: "10px",
              opacity: 0.8,
              animation: "floatLeft 4s ease-in-out infinite",
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
            className="diamond-right"
            style={{
              position: "absolute",
              right: "calc(50% - 380px)",
              top: "-10px",
              animation: "floatRight 5s ease-in-out infinite",
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <polygon
              points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5"
              fill="#fce7f3"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          {/* Badge */}
          <div
            className={`badge-reveal${headerReveal.visible ? " visible" : ""}`}
            style={{ display: "inline-block", marginBottom: "24px" }}
          >
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
                backgroundColor: "#ffffff",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              MY WORKS
            </div>
          </div>

          {/* Heading */}
          <h2
            className={`projects-heading heading-reveal${headerReveal.visible ? " visible" : ""}`}
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
        <div ref={gridReveal.ref} className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`card-reveal${gridReveal.visible ? " visible" : ""}`}
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
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  boxShadow:
                    hovered === project.id
                      ? "0 16px 40px rgba(0,0,0,0.14)"
                      : "0 2px 8px rgba(0,0,0,0.06)",
                  transform: hovered === project.id ? "translateY(-4px)" : "translateY(0)",
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
                    transition: "opacity 0.2s, gap 0.2s",
                    gap: hovered === project.id ? "4px" : "0px",
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
        <div
          ref={btnReveal.ref}
          className={`btn-reveal${btnReveal.visible ? " visible" : ""}`}
          style={{ display: "flex", justifyContent: "center", marginTop: "64px" }}
        >
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