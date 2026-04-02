"use client";

import { useEffect, useRef } from "react";

const FONT = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

function RotatingBadge() {
    const groupRef = useRef<SVGGElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const angleRef = useRef(0);
    const rafRef = useRef<number>(0);
    const isDragging = useRef(false);
    const lastPos = useRef({ x: 0, y: 0 });
    const autoSpin = useRef(true);

    useEffect(() => {
        const animate = () => {
            if (autoSpin.current) angleRef.current += 0.35;
            if (groupRef.current)
                groupRef.current.setAttribute("transform", `rotate(${angleRef.current}, 54, 54)`);
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const getPos = (e: MouseEvent | TouchEvent) => {
        if ("touches" in e) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        return { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY };
    };

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const onDown = (e: MouseEvent | TouchEvent) => {
            isDragging.current = true;
            autoSpin.current = false;
            lastPos.current = getPos(e);
            svg.style.cursor = "grabbing";
        };

        const onMove = (e: MouseEvent | TouchEvent) => {
            if (!isDragging.current) return;
            const pos = getPos(e);
            const dx = pos.x - lastPos.current.x;
            const dy = pos.y - lastPos.current.y;
            angleRef.current += (dx + dy) * 0.6;
            lastPos.current = pos;
        };

        const onUp = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            autoSpin.current = true;
            svg.style.cursor = "grab";
        };

        svg.addEventListener("mousedown", onDown);
        svg.addEventListener("touchstart", onDown, { passive: true });
        window.addEventListener("mousemove", onMove);
        window.addEventListener("touchmove", onMove, { passive: true });
        window.addEventListener("mouseup", onUp);
        window.addEventListener("touchend", onUp);

        return () => {
            svg.removeEventListener("mousedown", onDown);
            svg.removeEventListener("touchstart", onDown);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onMove);
            window.removeEventListener("mouseup", onUp);
            window.removeEventListener("touchend", onUp);
        };
    }, []);

    return (
        <svg ref={svgRef} viewBox="0 0 108 108" width="108" height="108" style={{ cursor: "grab", userSelect: "none" }}>
            <defs>
                <path id="bc2" d="M54,54 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <circle cx="54" cy="54" r="50" fill="white" />
            <circle cx="54" cy="54" r="50" fill="none" stroke="#d0d0e8" strokeWidth="1" />
            <text x="46" y="63" fontSize="20" fill="#1a1a3e" fontFamily={FONT}>↗</text>
            <g ref={groupRef}>
                <text fontSize="7.2" fontWeight="700" letterSpacing="2.8" fill="#1a1a3e" fontFamily={FONT}>
                    <textPath href="#bc2" startOffset="0%">✦ OPEN FOR OPPORTUNITY ✦ OPEN FOR OPPORTUNITY</textPath>
                </text>
            </g>
        </svg>
    );
}

export default function HeroSection() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,900&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(32px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
            from { opacity: 0; transform: translateX(-28px); }
            to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }
        @keyframes floatY {
            0%, 100% { transform: translateX(-50%) translateY(0px); }
            50%       { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes floatBadge {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50%       { transform: translateY(-6px) rotate(3deg); }
        }
        @keyframes pulseStar {
            0%, 100% { opacity: 1;   transform: scale(1) rotate(0deg); }
            50%       { opacity: 0.5; transform: scale(1.35) rotate(20deg); }
        }
        @keyframes pulseStarSmall {
            0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
            50%       { opacity: 1;   transform: scale(1.5) rotate(-15deg); }
        }
        @keyframes archReveal {
            from { opacity: 0; transform: translateX(-50%) scaleY(0.88); }
            to   { opacity: 1; transform: translateX(-50%) scaleY(1); }
        }
        @keyframes photoReveal {
            from { opacity: 0; clip-path: inset(100% 0 0 0); }
            to   { opacity: 1; clip-path: inset(0% 0 0 0); }
        }
        @keyframes waveSlide {
            from { opacity: 0; transform: translateX(20px); }
            to   { opacity: 1; transform: translateX(0); }
        }

        /* ── Animation utility classes ── */
        .hero-tag   { animation: fadeSlideRight 0.6s cubic-bezier(.22,1,.36,1) 0.1s both; }
        .hero-h1    { animation: fadeSlideUp    0.7s cubic-bezier(.22,1,.36,1) 0.25s both; }
        .hero-p     { animation: fadeSlideUp    0.7s cubic-bezier(.22,1,.36,1) 0.4s  both; }
        .hero-cta-wrap { animation: fadeSlideUp 0.7s cubic-bezier(.22,1,.36,1) 0.55s both; }
        .hero-right { animation: fadeIn         0.9s cubic-bezier(.22,1,.36,1) 0.3s  both; }

        .hero-arch  {
            animation: archReveal 0.9s cubic-bezier(.22,1,.36,1) 0.4s both;
            transform-origin: bottom center;
        }
        .hero-photo {
            animation: photoReveal 1s cubic-bezier(.22,1,.36,1) 0.6s both;
        }
        .hero-photo-inner {
            animation: floatY 5s ease-in-out 1.5s infinite;
        }
        .hero-badge-wrap {
            animation: floatBadge 4s ease-in-out 1.5s infinite;
        }
        .hero-star-big {
            animation: pulseStar 3s ease-in-out 0.8s infinite;
        }
        .hero-star-small {
            animation: pulseStarSmall 2.4s ease-in-out 1.2s infinite;
        }
        .hero-waves {
            animation: waveSlide 0.8s cubic-bezier(.22,1,.36,1) 0.9s both;
        }

        /* CTA hover */
        .hero-cta:hover { background: #1a1a3e !important; color: #fff !important; }

        /* ── Responsive ── */

        /* Tablet — 768px–1024px */
        @media (max-width: 1024px) {
            .hero-grid {
                grid-template-columns: 1fr 1fr !important;
                gap: 40px !important;
                padding: 0 32px !important;
            }
            .hero-right-inner {
                width: 300px !important;
                height: 430px !important;
            }
            .hero-arch-el {
                width: 280px !important;
                height: 410px !important;
                border-radius: 140px 140px 20px 20px !important;
            }
            .hero-photo-el {
                width: 260px !important;
                height: 360px !important;
                border-radius: 130px 130px 16px 16px !important;
            }
        }

        /* Mobile — ≤ 767px */
        @media (max-width: 767px) {
            .hero-section {
                padding: 48px 0 56px !important;
                min-height: unset !important;
            }
            .hero-grid {
                grid-template-columns: 1fr !important;
                gap: 48px !important;
                padding: 0 24px !important;
            }
            .hero-right {
                justify-content: center !important;
            }
            .hero-right-inner {
                width: 260px !important;
                height: 370px !important;
            }
            .hero-arch-el {
                width: 240px !important;
                height: 350px !important;
                border-radius: 120px 120px 18px 18px !important;
            }
            .hero-photo-el {
                width: 222px !important;
                height: 300px !important;
                border-radius: 111px 111px 14px 14px !important;
            }
            .hero-badge-wrap {
                top: 2px !important;
                left: -10px !important;
            }
            .hero-star-big-wrap  { right: -6px  !important; top: 22px !important; }
            .hero-star-small-wrap { right: -36px !important; top: 32px !important; }
            .hero-waves-wrap { right: -10px !important; }
        }

        /* Very small — ≤ 400px */
        @media (max-width: 400px) {
            .hero-right-inner {
                width: 230px !important;
                height: 330px !important;
            }
            .hero-arch-el {
                width: 212px !important;
                height: 310px !important;
                border-radius: 106px 106px 16px 16px !important;
            }
            .hero-photo-el {
                width: 196px !important;
                height: 265px !important;
                border-radius: 98px 98px 12px 12px !important;
            }
        }
      `}</style>

            {/* ── Hero ── */}
            <section className="hero-section" style={{
                width: "100%",
                minHeight: "100vh",
                background: "#e2ddf5",
                display: "flex",
                alignItems: "center",
                fontFamily: FONT,
                overflow: "hidden",
                padding: "60px 0",
                borderBottom: "1.5px solid #1a1a3e",
            }}>
                <div className="hero-grid" style={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "0 auto",
                    padding: "0 48px 0 64px",
                    display: "grid",
                    gridTemplateColumns: "1.1fr 1fr",
                    alignItems: "center",
                    gap: "80px",
                }}>

                    {/* ── LEFT ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <span className="hero-tag" style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            border: "1.5px solid #1a1a3e", borderRadius: "999px",
                            padding: "6px 18px", fontSize: "0.68rem", fontWeight: 700,
                            color: "#1a1a3e", letterSpacing: "0.09em", textTransform: "uppercase",
                            width: "fit-content",
                        }}>
                            ✳ HELLO!
                        </span>

                        <h1 className="hero-h1" style={{
                            fontSize: "clamp(2.1rem, 4vw, 3.5rem)", fontWeight: 900,
                            color: "#1a1a3e", lineHeight: 1.08, margin: 0,
                            letterSpacing: "-0.025em",
                        }}>
                            I&apos;m Aryan Pandita,
                            <br />
                            <span style={{ position: "relative", display: "inline-block" }}>
                                a Blockchain and Full stack Engineer.
                                <svg viewBox="0 0 300 12" preserveAspectRatio="none" style={{
                                    position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "10px",
                                }}>
                                    <path d="M2 9 Q75 2 150 7 Q225 12 298 5" fill="none" stroke="#6366f1" strokeWidth="2.8" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="hero-p" style={{ fontSize: "0.97rem", color: "#4a4a6e", lineHeight: 1.7, margin: 0 }}>
                            I&apos;m a Blockchain and Full stack Engineer based in India.<br />
                            I&apos;m very passionate about the work that I do.
                        </p>

                        <div className="hero-cta-wrap" style={{ width: "fit-content" }}>
                            <a href="#" className="hero-cta" style={{
                                display: "inline-block", padding: "13px 30px",
                                border: "2px solid #1a1a3e", borderRadius: "8px",
                                fontSize: "0.9rem", fontWeight: 600, color: "#1a1a3e",
                                textDecoration: "none", background: "transparent",
                                cursor: "pointer", transition: "background 0.18s, color 0.18s",
                            }}>
                                See My Works
                            </a>
                        </div>
                    </div>

                    {/* ── RIGHT ── */}
                    <div className="hero-right" style={{ display: "flex", justifyContent: "center" }}>
                        <div className="hero-right-inner" style={{ position: "relative", width: "380px", height: "530px" }}>

                            {/* Purple arch */}
                            <div className="hero-arch hero-arch-el" style={{
                                position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                                width: "360px", height: "510px",
                                borderRadius: "180px 180px 24px 24px",
                                background: "#9488cc",
                                border: "3.5px solid #7a68b8",
                            }} />

                            {/* Photo */}
                            <div className="hero-photo hero-photo-inner hero-photo-el" style={{
                                position: "absolute", bottom: 0, left: "50%",
                                width: "340px", height: "460px",
                                borderRadius: "170px 170px 20px 20px",
                                overflow: "hidden",
                            }}>
                                <img
                                    src="./me.png"
                                    alt="Portfolio"
                                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                                />
                            </div>

                            {/* Rotating badge */}
                            <div className="hero-badge-wrap" style={{ position: "absolute", top: "6px", left: "-14px", zIndex: 10 }}>
                                <RotatingBadge />
                            </div>

                            {/* Sparkles */}
                            <div className="hero-star-big hero-star-big-wrap" style={{ position: "absolute", top: "28px", right: "-12px", zIndex: 5 }}>
                                <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="#1a1a3e" strokeWidth="1.3">
                                    <path d="M20 2 L22.8 17.2 L38 20 L22.8 22.8 L20 38 L17.2 22.8 L2 20 L17.2 17.2 Z" />
                                </svg>
                            </div>
                            <div className="hero-star-small hero-star-small-wrap" style={{ position: "absolute", top: "40px", right: "-48px", zIndex: 5 }}>
                                <svg viewBox="0 0 18 18" width="12" height="12" fill="none" stroke="#1a1a3e" strokeWidth="1.3">
                                    <path d="M9 1 L10.2 7.8 L17 9 L10.2 10.2 L9 17 L7.8 10.2 L1 9 L7.8 7.8 Z" />
                                </svg>
                            </div>

                            {/* Wave lines */}
                            <div className="hero-waves hero-waves-wrap" style={{ position: "absolute", bottom: "90px", right: "-18px", zIndex: 5 }}>
                                <svg viewBox="0 0 70 32" width="68" height="30" fill="none" stroke="#1a1a3e" strokeWidth="1.6" strokeLinecap="round">
                                    <path d="M4 7  Q20 1  36 7  Q52 13 66 7" />
                                    <path d="M4 16 Q20 10 36 16 Q52 22 66 16" />
                                    <path d="M4 25 Q20 19 36 25 Q52 31 66 25" />
                                </svg>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}