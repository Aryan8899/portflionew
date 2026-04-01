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
            // Use combined delta for smooth drag in any direction
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
        .hero-cta:hover { background: #1a1a3e !important; color: #fff !important; }
      `}</style>

            {/* ── Hero ── */}
            <section style={{
                width: "100%",
                minHeight: "100vh",
                background: "#e2ddf5",
                display: "flex",
                alignItems: "center",
                fontFamily: FONT,
                overflow: "hidden",
                padding: "60px 0",
            }}>
                <div style={{
                    maxWidth: "1200px",
                    width: "100%",
                    margin: "0 auto",
                    padding: "0 48px 0 64px",          /* more left padding = text closer to left edge */
                    display: "grid",
                    gridTemplateColumns: "1.1fr 1fr",  /* text col slightly wider */
                    alignItems: "center",
                    gap: "80px",                        /* bigger gap between text & photo */
                }}>

                    {/* ── LEFT ── */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                        <span style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            border: "1.5px solid #1a1a3e", borderRadius: "999px",
                            padding: "6px 18px", fontSize: "0.68rem", fontWeight: 700,
                            color: "#1a1a3e", letterSpacing: "0.09em", textTransform: "uppercase",
                            width: "fit-content",
                        }}>
                            ✳ HELLO!
                        </span>

                        <h1 style={{
                            fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900,
                            color: "#1a1a3e", lineHeight: 1.08, margin: 0,
                            letterSpacing: "-0.025em",
                        }}>
                            I&apos;m Jonathan Meelo,
                            <br />
                            <span style={{ position: "relative", display: "inline-block" }}>
                                a product designer.
                                <svg viewBox="0 0 300 12" preserveAspectRatio="none" style={{
                                    position: "absolute", bottom: "-6px", left: 0, width: "100%", height: "10px",
                                }}>
                                    <path d="M2 9 Q75 2 150 7 Q225 12 298 5" fill="none" stroke="#6366f1" strokeWidth="2.8" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p style={{ fontSize: "0.97rem", color: "#4a4a6e", lineHeight: 1.7, margin: 0 }}>
                            I&apos;m a freelance product designer based in London.<br />
                            I&apos;m very passionate about the work that I do.
                        </p>

                        <a href="#" className="hero-cta" style={{
                            display: "inline-block", padding: "13px 30px",
                            border: "2px solid #1a1a3e", borderRadius: "8px",
                            fontSize: "0.9rem", fontWeight: 600, color: "#1a1a3e",
                            textDecoration: "none", background: "transparent",
                            cursor: "pointer", transition: "background 0.18s, color 0.18s",
                            width: "fit-content",
                        }}>
                            See My Works
                        </a>
                    </div>

                    {/* ── RIGHT ── */}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ position: "relative", width: "380px", height: "530px" }}>

                            {/* Purple arch */}
                            <div style={{
                                position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                                width: "360px", height: "510px",
                                borderRadius: "180px 180px 24px 24px",
                                background: "#9488cc",
                                border: "3.5px solid #7a68b8",
                            }} />

                            {/* Photo — shorter so purple top of arch is visible */}
                            <div style={{
                                position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
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
                            <div style={{ position: "absolute", top: "6px", left: "-14px", zIndex: 10 }}>
                                <RotatingBadge />
                            </div>

                            {/* Sparkles */}
                            <div style={{ position: "absolute", top: "28px", right: "-12px", zIndex: 5 }}>
                                <svg viewBox="0 0 40 40" width="30" height="30" fill="none" stroke="#1a1a3e" strokeWidth="1.3">
                                    <path d="M20 2 L22.8 17.2 L38 20 L22.8 22.8 L20 38 L17.2 22.8 L2 20 L17.2 17.2 Z" />
                                </svg>
                            </div>
                            <div style={{ position: "absolute", top: "40px", right: "-48px", zIndex: 5 }}>
                                <svg viewBox="0 0 18 18" width="12" height="12" fill="none" stroke="#1a1a3e" strokeWidth="1.3">
                                    <path d="M9 1 L10.2 7.8 L17 9 L10.2 10.2 L9 17 L7.8 10.2 L1 9 L7.8 7.8 Z" />
                                </svg>
                            </div>

                            {/* Wave lines */}
                            <div style={{ position: "absolute", bottom: "90px", right: "-18px", zIndex: 5 }}>
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