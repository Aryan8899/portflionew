"use client";

const FONT = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

/* ── Icons ── */

const LightningIcon = () => (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="#1a1a3e" strokeWidth="2" strokeLinejoin="round">
        <path d="M14 2 L2 18 H12 L10 30 L22 14 H12 Z" />
    </svg>
);

const SparklesIcon = () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" stroke="#1a1a3e" strokeWidth="1.5">
        <path d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z" />
        <path d="M34 2 L35.2 7.8 L41 9 L35.2 10.2 L34 16 L32.8 10.2 L27 9 L32.8 7.8 Z" transform="scale(0.6) translate(30, 0)" />
    </svg>
);

const PuzzleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.439 7.85c-.049.322-.059.648-.029.975.112 1.234 1.168 2.175 2.41 2.175h.18v4h-.18c-1.242 0-2.298.941-2.41 2.175a3.24 3.24 0 0 0 .03.975c.16 1.05.9 1.95 2.06 2.5l-.83 1.44a4.7 4.7 0 0 1-3.66 1.06c-1.12-.2-2.12-.89-2.73-1.89l-.27-.45a1.8 1.8 0 0 0-3.08 0l-.27.45c-.6.99-1.6 1.68-2.72 1.88a4.72 4.72 0 0 1-3.66-1.05l-.83-1.44c1.16-.54 1.9-1.45 2.06-2.5.03-.327.02-.653-.03-.975C5.467 15.941 4.411 15 3.169 15H3v-4h.18c1.242 0 2.298-.941 2.41-2.175a3.24 3.24 0 0 0-.03-.975C5.4 6.8 4.66 5.9 3.5 5.36l.83-1.44a4.7 4.7 0 0 1 3.66-1.06c1.12.2 2.12.89 2.73 1.89l.27.45a1.8 1.8 0 0 0 3.08 0l.27-.45c.6-.99 1.6-1.68 2.72-1.88a4.72 4.72 0 0 1 3.66 1.05l.83 1.44c-1.16.54-1.9 1.45-2.06 2.5z" />
    </svg>
);

const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a3e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <circle cx="11" cy="11" r="3" />
    </svg>
);

const BrowserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a3e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="9" x2="22" y2="9" />
        <rect x="5" y="12" width="14" height="5" />
    </svg>
);

const BrandIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a3e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <line x1="10.5" y1="8.5" x2="7.5" y2="15.5" />
        <line x1="13.5" y1="8.5" x2="16.5" y2="15.5" />
        <line x1="8.5" y1="18" x2="15.5" y2="18" />
    </svg>
);

const CARDS = [
    {
        title: "Strategy & Planning",
        description: "Streamline your campaigns with tools that improve engagement, boost visibility, and help you connect with your audience.",
        icon: <PuzzleIcon />,
        bgColor: "#eadeff", // Light purple matches screenshot
    },
    {
        title: "User Research",
        description: "Simplify project workflows with organized tools and strategies designed to keep your team aligned and your goals on track.",
        icon: <SearchIcon />,
        bgColor: "#eaffd9", // Light green/yellow matches screenshot
    },
    {
        title: "Web Design",
        description: "Gain valuable insights into user behavior, website performance, and key business metrics to optimize your digital presence.",
        icon: <BrowserIcon />,
        bgColor: "#ffe5fb", // Light pink matches screenshot
    },
    {
        title: "Brand Design",
        description: "Understand your market with precise data analysis and deep customer insights that guide your decision-making processes.",
        icon: <BrandIcon />,
        bgColor: "#e0f0ff", // Light blue matches screenshot
    }
];

export default function ServicesSection() {
    return (
        <section style={{
            width: "100%",
            background: "#ffffff",
            fontFamily: FONT,
            padding: "130px 0 140px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box"
        }}>
            
            <style>{`
                @keyframes float-lightning {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(-6deg); }
                }
                @keyframes float-sparkles {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(8deg); }
                }
            `}</style>

            {/* Header Content Wrapper */}
            <div style={{
                position: "relative",
                marginBottom: "80px",
                textAlign: "center",
                width: "100%",
                maxWidth: "800px",
                padding: "0 24px",
                boxSizing: "border-box",
            }}>
                
                {/* Floating Lightning */}
                <div style={{ position: "absolute", left: "20px", top: "10px", animation: "float-lightning 3.5s ease-in-out infinite" }}>
                    <LightningIcon />
                </div>
                
                {/* Floating Sparkles */}
                <div style={{ position: "absolute", right: "20px", top: "-20px", animation: "float-sparkles 4s ease-in-out infinite" }}>
                    <SparklesIcon />
                </div>

                {/* Badge */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
                    <div style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        background: "#e0f0ff", border: "1.5px solid #1a1a3e",
                        borderRadius: "999px", padding: "6px 16px",
                        fontWeight: 700, color: "#1a1a3e",
                        textTransform: "uppercase", letterSpacing: "0.05em",
                        fontSize: "0.68rem"
                    }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1a1a3e" }}></div>
                        MY SERVICES
                    </div>
                </div>

                {/* Title */}
                <h2 style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                    fontWeight: 800,
                    color: "#1a1a3e",
                    lineHeight: 1.25,
                    margin: 0,
                    letterSpacing: "-0.01em",
                }}>
                    The service I offer is specifically<br />
                    designed to meet your needs.
                </h2>
            </div>

            {/* Cards Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "40px",
                width: "100%",
                maxWidth: "1040px",
                padding: "0 24px",
                marginBottom: "80px",
                boxSizing: "border-box",
            }}>
                {CARDS.map((card, idx) => (
                    <div key={idx} style={{
                        background: card.bgColor,
                        border: "1.5px solid #1a1a3e",
                        borderRadius: "20px",
                        padding: "36px 32px",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "24px",
                        boxSizing: "border-box",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
                        transition: "transform 0.3s ease",
                        cursor: "default"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-6px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                    >
                        {/* Icon circle */}
                        <div style={{
                            width: "60px",
                            height: "60px",
                            background: "#ffffff",
                            border: "1.5px solid #1a1a3e",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}>
                            {card.icon}
                        </div>
                        {/* Text Content */}
                        <div>
                            <h3 style={{
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "#1a1a3e",
                                margin: "0 0 12px 0",
                            }}>
                                {card.title}
                            </h3>
                            <p style={{
                                fontSize: "0.9rem",
                                color: "rgba(26,26,62,0.8)",
                                lineHeight: 1.6,
                                margin: 0,
                                fontWeight: 500,
                            }}>
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Button */}
            <div style={{ position: "relative", display: "inline-block", cursor: "pointer", marginTop: "10px" }}
                 onMouseEnter={(e) => {
                     (e.currentTarget.children[0] as HTMLElement).style.transform = "translate(4px, 4px)";
                     (e.currentTarget.children[1] as HTMLElement).style.transform = "translateY(-1px)";
                 }}
                 onMouseLeave={(e) => {
                     (e.currentTarget.children[0] as HTMLElement).style.transform = "translate(6px, 6px)";
                     (e.currentTarget.children[1] as HTMLElement).style.transform = "translateY(0)";
                 }}
            >
                {/* Shadow Box layer */}
                <div style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0, bottom: 0,
                    borderRadius: "8px",
                    background: "#eadeff", /* Pastel purple offset shadow */
                    border: "1.5px solid #1a1a3e",
                    transform: "translate(6px, 6px)",
                    transition: "transform 0.2s",
                    zIndex: 0,
                }}></div>
                {/* Actual Button */}
                <a href="#" style={{
                    position: "relative",
                    zIndex: 1,
                    display: "inline-block",
                    background: "#ffffff",
                    padding: "14px 36px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    color: "#1a1a3e",
                    textDecoration: "none",
                    border: "1.5px solid #1a1a3e",
                    fontSize: "0.88rem",
                    transition: "transform 0.2s",
                }}>
                    Check Portfolio
                </a>
            </div>

        </section>
    );
}