"use client";

import Image from "next/image";

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
    return (
        <section
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
            `}</style>

            {/* ─────────────────────────────────────────────
          Centered content wrapper — this is the key!
          Everything lives inside this 880px box.
      ───────────────────────────────────────────── */}
            <div
                style={{
                    maxWidth: 880,
                    margin: "0 auto",
                    padding: "72px 0 100px",
                    position: "relative",
                }}
            >
                {/* Hearts — top right of content block */}
                <div
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

                {/* ══════════════════════════════════
            ROW 1: [image 360px] [gap 48px] [bio]
        ══════════════════════════════════ */}
                <div style={{ display: "flex", alignItems: "center", gap: 48, marginBottom: 80 }}>

                    {/* ── Image column ── */}
                    <div style={{ position: "relative", flexShrink: 0, width: 360, height: 360 }}>

                        {/* Wavy lines LEFT of image */}
                        <div
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

                        {/* ── Rotating badge top-right ── */}
                        <div
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
                            {/* Spinning text */}
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
                            {/* Arrow ↗ */}
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ zIndex: 1 }}>
                                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="#1a1033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* ── Bio column ── */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                        {/* * ABOUT pill — outlined */}
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

                {/* ══════════════════════════════════
            ROW 2: [left text 320px] [gap 40px] [timeline]
            Left col width = same start x as image
        ══════════════════════════════════ */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 40 }}>

                    {/* ── Left column ── */}
                    <div style={{ flexShrink: 0, width: 320 }}>
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
                        <button
                            style={{
                                border: "1.5px solid #1a1033",
                                color: "#1a1033",
                                fontSize: 12,
                                fontWeight: 700,
                                letterSpacing: "0.06em",
                                padding: "10px 24px",
                                borderRadius: 999,
                                cursor: "pointer",
                                background: "transparent",
                                transition: "all 0.3s",
                            }}
                            onMouseEnter={e => { const b = e.currentTarget; b.style.background = "#1a1033"; b.style.color = "#fff"; }}
                            onMouseLeave={e => { const b = e.currentTarget; b.style.background = "transparent"; b.style.color = "#1a1033"; }}
                        >
                            More About Me
                        </button>
                    </div>

                    {/* ── Timeline ── */}
                    {/* Per row: [date 150px right-aligned] [dot on vertical line] [content] */}
                    <div style={{ flex: 1, position: "relative" }}>
                        {/* Vertical line at x=150 (left edge of dots) */}
                        <div
                            style={{
                                position: "absolute",
                                left: 150,
                                top: 6,
                                bottom: 0,
                                width: 1,
                                backgroundColor: "#c0b8e0",
                            }}
                        />

                        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                            {experiences.map((exp, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start" }}>

                                    {/* Date — right-aligned in 150px */}
                                    <div style={{ width: 150, flexShrink: 0, textAlign: "right", paddingRight: 20, paddingTop: 2 }}>
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

                                    {/* Dot — centered on the vertical line */}
                                    <div
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
                                        }}
                                    />

                                    {/* Content */}
                                    <div style={{ flex: 1, paddingLeft: 18 }}>
                                        <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1a1033", marginBottom: 6 }}>
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