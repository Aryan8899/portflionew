"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Process", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

const FONT =
  "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif";

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DribbbleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    width="15"
    height="15"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle
      cx="17.5"
      cy="6.5"
      r="0.8"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="20"
    height="20"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width="20"
    height="20"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function SocialBtn({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
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
        transition:
          "transform 0.18s ease, box-shadow 0.18s ease, color 0.18s ease",
        boxShadow: hovered
          ? "0px 1px 0px #e0e7ff, 0px 1px 0px 1.5px #1a1a1a"
          : "0px 3px 0px #e0e7ff, 0px 3px 0px 1.5px #1a1a1a",
        transform: hovered ? "translateY(2px)" : "translateY(0px)",
      }}
    >
      {icon}
    </a>
  );
}

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialLinks = [
    { icon: <XIcon />, href: "#", label: "X (Twitter)" },
    { icon: <DribbbleIcon />, href: "#", label: "Dribbble" },
    { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  ];

  return (
    <>
      <header
        style={{
          width: "100%",
          background: "#ffffff",
          borderBottom: "2.5px solid #1a1a1a",
          boxShadow: "none",
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "22px 0",
          transform: mounted ? "translateY(0)" : "translateY(-12px)",
          opacity: mounted ? 1 : 0,
          transition: "transform 0.45s ease, opacity 0.45s ease",
        }}
      >
        <div className="headerContainer">
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", minWidth: 0 }}>
            <a
              href="#"
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                color: "#0f172a",
                fontFamily: FONT,
                letterSpacing: "-0.03em",
                textDecoration: "none",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              Aryan
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="desktopNav">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className="navLink"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: activeLink === link.label ? "#6366f1" : "#374151",
                  fontFamily: FONT,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                  animationDelay: `${index * 0.06}s`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="rightSection">
            <div className="desktopSocial">
              {socialLinks.map((s) => (
                <SocialBtn
                  key={s.label}
                  icon={s.icon}
                  href={s.href}
                  label={s.label}
                />
              ))}
            </div>

            <button
              className="mobileMenuBtn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                padding: "8px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#374151",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`mobileDropdown ${menuOpen ? "open" : ""}`}>
          <div className="mobileDropdownInner">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setMenuOpen(false);
                }}
                className="mobileNavLink"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: activeLink === link.label ? "#6366f1" : "#374151",
                  textDecoration: "none",
                  fontFamily: FONT,
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {link.label}
              </a>
            ))}

            <div className="mobileSocialWrap">
              {socialLinks.map((s) => (
                <SocialBtn
                  key={s.label}
                  icon={s.icon}
                  href={s.href}
                  label={s.label}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .headerContainer {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 0 40px;
          gap: 40px;
          box-sizing: border-box;
        }

        .desktopNav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          min-width: 0;
        }

        .navLink {
          transition: color 0.18s ease, transform 0.18s ease, opacity 0.4s ease;
          opacity: 0;
          transform: translateY(8px);
          animation: fadeUp 0.45s ease forwards;
        }

        .navLink:hover {
          transform: translateY(-1px);
        }

        .rightSection {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          min-width: 0;
        }

        .desktopSocial {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mobileMenuBtn {
          display: none;
        }

        .mobileDropdown {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(-8px);
          transition:
            max-height 0.35s ease,
            opacity 0.25s ease,
            transform 0.25s ease;
          border-top: 0px solid transparent;
          background: #ffffff;
        }

        .mobileDropdown.open {
          max-height: 500px;
          opacity: 1;
          transform: translateY(0);
          border-top: 1px solid #f3f4f6;
        }

        .mobileDropdownInner {
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobileNavLink {
          opacity: 0;
          transform: translateY(8px);
          animation: fadeUp 0.35s ease forwards;
        }

        .mobileSocialWrap {
          display: flex;
          gap: 8px;
          padding-top: 8px;
          border-top: 1px solid #f3f4f6;
          flex-wrap: wrap;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1199px) {
          .headerContainer {
            padding: 0 28px;
            gap: 24px;
          }

          .desktopNav {
            gap: 20px;
          }
        }

        @media (max-width: 1023px) {
          .headerContainer {
            grid-template-columns: 1fr auto;
            padding: 0 22px;
            gap: 16px;
          }

          .desktopNav,
          .desktopSocial {
            display: none;
          }

          .mobileMenuBtn {
            display: inline-flex;
          }
        }

        @media (max-width: 767px) {
          .headerContainer {
            padding: 0 18px;
          }

          .mobileDropdownInner {
            padding: 14px 18px 20px;
            gap: 14px;
          }
        }

        @media (max-width: 479px) {
          .headerContainer {
            padding: 0 14px;
          }

          .mobileDropdownInner {
            padding: 12px 14px 18px;
          }
        }
      `}</style>
    </>
  );
}