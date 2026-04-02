"use client";

import { useState } from "react";

function FooterSocialBtn({ icon, href, label }: { icon: React.ReactNode; href: string; label: string; }) {
    const [hovered, setHovered] = useState(false);
    return (
        <a
            href={href}
            aria-label={label}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                width: "42px",
                height: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #1a1a1a",
                borderRadius: "14px",
                color: hovered ? "#6366f1" : "#1a1a1a",
                background: "#ffffff",
                textDecoration: "none",
                cursor: "pointer",
                flexShrink: 0,
                boxSizing: "border-box",
                transition: "transform 0.1s ease, box-shadow 0.1s ease, color 0.15s ease",
                boxShadow: hovered
                    ? "0px 1px 0px #e0e7ff, 0px 1px 0px 1.5px #1a1a1a"
                    : "0px 3px 0px #e0e7ff, 0px 3px 0px 1.5px #1a1a1a",
                transform: hovered ? "translateY(2px)" : "none",
            }}
        >
            {icon}
        </a>
    );
}

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#FFFFFF",
                borderTop: "1px solid rgba(0,0,0,0.1)",
                padding: "60px 40px 24px 40px",
            }}
        >
            <style>{`
                @media (max-width: 480px) {
                    .footer-inner {
                        padding: 48px 16px 20px 16px !important;
                    }
                    .footer-main-row {
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center !important;
                        gap: 16px !important;
                        margin-bottom: 32px !important;
                    }
                }
                @media (min-width: 481px) and (max-width: 768px) {
                    .footer-inner {
                        padding: 52px 24px 20px 24px !important;
                    }
                    .footer-main-row {
                        flex-direction: column !important;
                        align-items: center !important;
                        text-align: center !important;
                        gap: 18px !important;
                    }
                }
            `}</style>

            <div className="footer-inner" style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Main row */}
                <div
                    className="footer-main-row"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "24px",
                        marginBottom: "48px",
                    }}
                >
                    <p style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>Aryan</p>

                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        {/* X */}
                        <FooterSocialBtn
                            label="X (Twitter)"
                            href="#"
                            icon={
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.75 3h3.582l-7.822 8.946L22.5 21h-7.202l-5.639-7.373L3.25 21H-.332l8.363-9.558L1.5 3h7.389l5.097 6.668L17.75 3Zm-1.257 16.2h1.984L7.578 5.04H5.452l11.04 14.16Z" />
                                </svg>
                            }
                        />
                        {/* Instagram */}
                        <FooterSocialBtn
                            label="Instagram"
                            href="#"
                            icon={
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.8" />
                                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
                                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                                </svg>
                            }
                        />
                        {/* LinkedIn */}
                        <FooterSocialBtn
                            label="LinkedIn"
                            href="#"
                            icon={
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    <path d="M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        />
                    </div>
                </div>

                {/* Divider */}
                <div style={{ width: "100%", height: 1, backgroundColor: "rgba(0,0,0,0.1)", marginBottom: 24 }} />

                {/* Copyright */}
                <p style={{ fontSize: 12, color: "rgba(0,0,0,0.4)", margin: 0, textAlign: "center" }}>
                    © 2025 Aryan. All rights reserved.
                </p>
            </div>
        </footer>
    );
}