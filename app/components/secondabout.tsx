"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const experiences = [
    {
        period: "NOV 2017 – PRESENT",
        title: "Creative Director at Malory House",
        description:
            "Led a talented team in crafting compelling brand experiences. Focused on innovation, creative direction, and delivering impactful digital solutions.",
    },
    {
        period: "SEP 2015 – APR 2017",
        title: "Senior Developer at Longwave Studio",
        description:
            "Collaborated with cross-functional teams to optimize performance and enhance user experience.",
    },
    {
        period: "MAY 2016 – SEP 2015",
        title: "Junior Developer at Webpaint Media",
        description:
            "Assisted in front-end development and UI enhancements. Contributed to coding, debugging, and refining interactive website elements.",
    },
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageColRef = useRef<HTMLDivElement>(null);
    const bioColRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const expRefs = useRef<(HTMLDivElement | null)[]>([]);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target as HTMLElement;
                    const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
                    setTimeout(() => {
                        el.style.opacity = "1";
                        el.style.transform = "none";
                    }, delay);
                    observer.unobserve(el);
                });
            },
            { threshold: 0.12 }
        );

        const lineObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target as HTMLElement;
                    setTimeout(() => {
                        el.style.height = "100%";
                    }, 400);
                    lineObserver.unobserve(el);
                });
            },
            { threshold: 0.1 }
        );

        [imageColRef, bioColRef, leftColRef, timelineRef].forEach((r) => {
            if (r.current) observer.observe(r.current);
        });
        expRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });
        if (lineRef.current) lineObserver.observe(lineRef.current);

        return () => {
            observer.disconnect();
            lineObserver.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "#dddaf5",
                backgroundImage: "radial-gradient(circle, #b8b0e8 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                fontFamily: "'DM Sans', sans-serif",
                position: "relative",
                borderTop: "1.5px solid #1a1033",
            }}
        >
            <style>{`
                @keyframes aboutSpin { to { transform: rotate(360deg); } }
                @keyframes heartBeat {
                    0%, 100% { transform: scale(1) translateY(0); }
                    50% { transform: scale(1.1) translateY(-6px); }
                }
                @keyframes waveMove {
                    0%, 100% { transform: translateY(-50%) translateX(0); }
                    50% { transform: translateY(-50%) translateX(-10px); }
                }
                @keyframes dotPop {
                    0% { transform: scale(0); opacity: 0; }
                    70% { transform: scale(1.3); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .about-exp-dot { opacity: 0; }
                .about-exp-dot.popped { animation: dotPop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }

                .about-btn {
                    border: 1.5px solid #1a1033;
                    color: #1a1033;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.06em;
                    padding: 10px 24px;
                    border-radius: 999px;
                    cursor: pointer;
                    background: transparent;
                    transition: background 0.3s, color 0.3s;
                }
                .about-btn:hover { background: #1a1033; color: #fff; }

                .about-image-wrap {
                    transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
                }
                .about-image-wrap:hover {
                    transform: translateY(-6px) scale(1.01);
                    box-shadow: 6px 8px 0 #1a1033;
                }

                @media (max-width: 900px) {
                    .about-row1 { flex-direction: column !important; align-items: center !important; gap: 40px !important; }
                    .about-image-col { width: 300px !important; height: 300px !important; }
                    .about-bio-col { width: 100% !important; }
                    .about-row2 { flex-direction: column !important; gap: 32px !important; }
                    .about-left-col { width: 100% !important; }
                    .about-hearts { right: 8px !important; top: 12px !important; }
                    .about-wave { left: -20px !important; }
                }

                @media (max-width: 640px) {
                    .about-content-wrapper { padding: 48px 20px 64px !important; }
                    .about-image-col { width: 260px !important; height: 260px !important; }
                    .about-badge-circle { width: 88px !important; height: 88px !important; }
                    .about-timeline-date { width: 110px !important; font-size: 8px !important; }
                    .about-timeline-line { left: 110px !important; }
                    .about-row2 { gap: 24px !important; }
                    .about-hearts { display: none !important; }
                    .about-wave { display: none !important; }
                }
            `}</style>

            <div
                className="about-content-wrapper"
                style={{
                    maxWidth: 880,
                    margin: "0 auto",
                    padding: "72px 24px 100px",
                    position: "relative",
                }}
            >
                {/* Hearts */}
                <div
                    className="about-hearts"
                    style={{
                        position: "absolute",
                        top: 40,
                        right: -40,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: 8,
                        pointerEvents: "none",
                        animation: "heartBeat 3s ease-in-out infinite",
                    }}
                >
                    <svg width="32" height="30" viewBox="0 0 36 34" fill="none">
                        <path d="M18 30S4 21 4 11a8 8 0 0116 0 8 8 0 0116 0c0 10-14 19-14 19z" stroke="#1a1033" strokeWidth="1.5" fill="none" />
                    </svg>
                    <svg width="18" height="16" viewBox="0 0 36 34" fill="none">
                        <path d="M18 30S4 21 4 11a8 8 0 0116 0 8 8 0 0116 0c0 10-14 19-14 19z" stroke="#1a1033" strokeWidth="1.5" fill="none" />
                    </svg>
                </div>

                {/* ROW 1 */}
                <div
                    className="about-row1"
                    style={{ display: "flex", alignItems: "center", gap: 48, marginBottom: 80 }}
                >
                    {/* Image column */}
                    <div
                        ref={imageColRef}
                        className="about-image-col"
                        data-delay="0"
                        style={{
                            position: "relative",
                            flexShrink: 0,
                            width: 360,
                            height: 360,
                            opacity: 0,
                            transform: "translateX(-40px)",
                            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
                        }}
                    >
                        {/* Wavy lines */}
                        <div
                            className="about-wave"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: -58,
                                transform: "translateY(-50%)",
                                pointerEvents: "none",
                                animation: "waveMove 4s ease-in-out infinite",
                            }}
                        >
                            <svg width="46" height="52" viewBox="0 0 50 56" fill="none">
                                <path d="M2 10 Q8 2 14 10 Q20 18 26 10 Q32 2 38 10 Q44 18 50 10" stroke="#1a1033" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <path d="M2 28 Q8 20 14 28 Q20 36 26 28 Q32 20 38 28 Q44 36 50 28" stroke="#1a1033" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <path d="M2 46 Q8 38 14 46 Q20 54 26 46 Q32 38 38 46 Q44 54 50 46" stroke="#1a1033" strokeWidth="2" fill="none" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Image Container */}
                        <div
                            className="about-image-wrap"
                            style={{
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                backgroundColor: "#9b7fe8",
                                border: "1.5px solid #1a1033",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                position: "relative",
                            }}
                        >
                            <Image
                                src="/mewithhead.png"
                                fill
                                alt="Jonathan Meelo"
                                style={{ objectFit: "cover", objectPosition: "top center" }}
                            />
                        </div>

                        {/* Rotating badge */}
                        <div
                            className="about-badge-circle"
                            style={{
                                position: "absolute",
                                top: "4%",
                                right: "-6%",
                                width: 110,
                                height: 110,
                                backgroundColor: "#e8e6f8",
                                border: "1.5px solid #1a1033",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "2px 2px 0 #1a1033",
                            }}
                        >
                            <svg
                                viewBox="0 0 100 100"
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    animation: "aboutSpin 14s linear infinite",
                                }}
                            >
                                <defs>
                                    <path id="ba" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1,-72,0" />
                                </defs>
                                <text fontSize="9" fill="#1a1033" fontWeight="600" letterSpacing="1.4">
                                    <textPath href="#ba">10+ YEARS OF WORK EXPERIENCE • </textPath>
                                </text>
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ zIndex: 1 }}>
                                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#1a1033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Bio column */}
                    <div
                        ref={bioColRef}
                        className="about-bio-col"
                        data-delay="150"
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 16,
                            opacity: 0,
                            transform: "translateX(40px)",
                            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
                        }}
                    >
                        <span
                            style={{
                                alignSelf: "flex-start",
                                border: "1.5px solid #1a1033",
                                color: "#1a1033",
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                padding: "5px 14px",
                                borderRadius: 999,
                            }}
                        >
                            ✳ ABOUT
                        </span>

                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "2.4rem",
                                fontWeight: 700,
                                color: "#1a1033",
                                lineHeight: 1.2,
                                margin: 0,
                            }}
                        >
                            More about me
                        </h2>

                        <p style={{ color: "#1a1033", fontSize: "1rem", fontWeight: 600, lineHeight: 1.65, margin: 0 }}>
                            I'm Jonathan Meelo, a product designer based in London. I'm very passionate about the work that I do every day.
                        </p>

                        <p style={{ color: "#4a4170", fontSize: "0.87rem", lineHeight: 1.8, margin: 0 }}>
                            My journey in this dynamic and ever-evolving field has been a testament to my passion for crafting meaningful user experiences, leveraging technologies, and fearlessly pushing the boundaries of digital creativity. I thrive on transforming ideas into intuitive and impactful designs.
                        </p>
                    </div>
                </div>

                {/* ROW 2 */}
                <div
                    className="about-row2"
                    style={{ display: "flex", alignItems: "flex-start", gap: 40 }}
                >
                    {/* Left column */}
                    <div
                        ref={leftColRef}
                        className="about-left-col"
                        data-delay="0"
                        style={{
                            flexShrink: 0,
                            width: 320,
                            opacity: 0,
                            transform: "translateY(32px)",
                            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.8rem",
                                fontWeight: 700,
                                color: "#1a1033",
                                marginBottom: 14,
                            }}
                        >
                            My experiences
                        </h3>
                        <p style={{ color: "#4a4170", fontSize: "0.85rem", lineHeight: 1.75, marginBottom: 28, maxWidth: 260 }}>
                            I have had the pleasure to work with companies across a variety of industries. I'm always interested in new, exciting and challenging adventures.
                        </p>
                        <button className="about-btn">
                            More About Me
                        </button>
                    </div>

                    {/* Timeline */}
                    <div
                        ref={timelineRef}
                        style={{ flex: 1, position: "relative" }}
                    >
                        {/* Vertical line — animated height */}
                        <div
                            className="about-timeline-line"
                            style={{
                                position: "absolute",
                                left: 150,
                                top: 6,
                                width: 1,
                                height: 0,
                                backgroundColor: "#c0b8e0",
                                transition: "height 1s cubic-bezier(0.22,1,0.36,1)",
                            }}
                            ref={lineRef}
                        />

                        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                            {experiences.map((exp, i) => (
                                <div
                                    key={i}
                                    ref={(el) => { expRefs.current[i] = el; }}
                                    data-delay={i * 150}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        opacity: 0,
                                        transform: "translateX(24px)",
                                        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)`,
                                    }}
                                    onMouseEnter={(e) => {
                                        const dot = e.currentTarget.querySelector(".about-exp-dot-inner") as HTMLElement;
                                        if (dot) { dot.style.backgroundColor = "#6b5fad"; dot.style.transform = "scale(1.4)"; }
                                        const title = e.currentTarget.querySelector(".about-exp-title") as HTMLElement;
                                        if (title) title.style.color = "#6b5fad";
                                    }}
                                    onMouseLeave={(e) => {
                                        const dot = e.currentTarget.querySelector(".about-exp-dot-inner") as HTMLElement;
                                        if (dot) { dot.style.backgroundColor = "#dddaf5"; dot.style.transform = "scale(1)"; }
                                        const title = e.currentTarget.querySelector(".about-exp-title") as HTMLElement;
                                        if (title) title.style.color = "#1a1033";
                                    }}
                                >
                                    {/* Date */}
                                    <div
                                        className="about-timeline-date"
                                        style={{ width: 150, flexShrink: 0, textAlign: "right", paddingRight: 20, paddingTop: 2 }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 9,
                                                fontWeight: 800,
                                                letterSpacing: "0.14em",
                                                color: "#6b5fad",
                                                textTransform: "uppercase",
                                                lineHeight: 1.3,
                                                display: "block",
                                            }}
                                        >
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Dot */}
                                    <div
                                        className="about-exp-dot-inner"
                                        style={{
                                            flexShrink: 0,
                                            width: 14,
                                            height: 14,
                                            borderRadius: "50%",
                                            border: "2px solid #6b5fad",
                                            backgroundColor: "#dddaf5",
                                            marginTop: 2,
                                            marginLeft: -7,
                                            zIndex: 1,
                                            transition: "background-color 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                                        }}
                                    />

                                    {/* Content */}
                                    <div style={{ flex: 1, paddingLeft: 18 }}>
                                        <h4
                                            className="about-exp-title"
                                            style={{
                                                fontSize: "0.9rem",
                                                fontWeight: 700,
                                                color: "#1a1033",
                                                marginBottom: 6,
                                                transition: "color 0.3s ease",
                                            }}
                                        >
                                            {exp.title}
                                        </h4>
                                        <p style={{ fontSize: "0.78rem", color: "#4a4170", lineHeight: 1.65, margin: 0 }}>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}