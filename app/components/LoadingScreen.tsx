"use client";

import React, { useState, useEffect, useRef } from "react";

const FONT = "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif";

function RotatingBadgeLoader() {
    const groupRef = useRef<SVGGElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const angleRef = useRef(0);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const animate = () => {
            angleRef.current += 1.5; // spin faster for loader
            if (groupRef.current)
                groupRef.current.setAttribute("transform", `rotate(${angleRef.current}, 54, 54)`);
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <svg ref={svgRef} viewBox="0 0 108 108" width="120" height="120" style={{ userSelect: "none" }}>
            <defs>
                <path id="bc2" d="M54,54 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <circle cx="54" cy="54" r="50" fill="white" />
            <circle cx="54" cy="54" r="50" fill="none" stroke="#d0d0e8" strokeWidth="1" />
            <text x="41" y="63" fontSize="24" fill="#1a1a3e" fontFamily={FONT}>✺</text>
            <g ref={groupRef}>
                <text fontSize="7.5" fontWeight="700" letterSpacing="3.5" fill="#1a1a3e" fontFamily={FONT}>
                    <textPath href="#bc2" startOffset="0%">LOADING ✦ PLEASE WAIT ✦ </textPath>
                </text>
            </g>
        </svg>
    );
}

export default function LoadingScreen() {
  const [complete, setComplete] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Show spinner for a minimum duration to see the animation
    const timer = setTimeout(() => {
      setComplete(true);
      setTimeout(() => setVisible(false), 800); // fade out duration
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#e2ddf5", // light purple background to match hero
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: complete ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
        pointerEvents: complete ? "none" : "all",
      }}
    >
      <RotatingBadgeLoader />
    </div>
  );
}
