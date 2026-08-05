import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Cpu,
  Building2,
  Briefcase,
  ChevronRight,
} from "lucide-react";

function AnimatedCounter({ end, suffix = "", duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * end;
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    const animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Hero({ onOpenContact }) {
  const [activeSector, setActiveSector] = useState("tech");

  const sectorHighlights = {
    tech: {
      title: "Flagship Tech & Digital Agency",
      description:
        "Engineering high-performance web applications, bespoke mobile apps, cloud systems, and AI models built for scale.",
      tag: "CORE STRENGTH",
      color: "#c084fc",
      stats: "61+ Software Builds",
    },
    consulting: {
      title: "Corporate & Tech Advisory",
      description:
        "Delivering strategic business transformation, digital roadmaps, operations optimization, and risk management.",
      tag: "ENTERPRISE GROWTH",
      color: "var(--consult-amber)",
      stats: "99.8% Client ROI",
    },
    real_estate: {
      title: "Real Estate & Property Development",
      description:
        "Delivering luxury commercial real estate, smart property development, architectural innovation, and high-yield property investments.",
      tag: "PRIME ASSET SECTOR",
      color: "var(--agri-emerald)",
      stats: "Prime Property Portfolio",
    },
  };

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "150px",
        paddingBottom: "90px",
        overflow: "hidden",
      }}
    >
      {/* Radial Background Glows */}
      <div
        className="glow-spot-purple"
        style={{ top: "-100px", right: "15%" }}
      ></div>
      <div
        className="glow-spot-violet"
        style={{ top: "250px", left: "-150px" }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Parent Group Badge */}

        {/* Hero Headline */}
        <div
          style={{ textAlign: "center", maxWidth: "950px", margin: "0 auto" }}
        >
          <ScrollReveal variant="fade-up" delay={50}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
              }}
            >
              Pioneering Multidisciplinary Excellence Across{" "}
              <span className="gradient-text-purple">
                Tech, Business & Real Estate
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={150}>
            <p
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                color: "var(--text-muted)",
                maxWidth: "800px",
                margin: "0 auto 2.5rem auto",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "#ffffff" }}>Paceployt</strong> operates
              as a parent conglomerate shaping the future of global industries.
              While we drive impact in corporate consulting and premier real
              estate, our strength is in{" "}
              <span style={{ color: "#c084fc", fontWeight: 700 }}>
                cutting-edge technology & digital engineering
              </span>
              .
            </p>
          </ScrollReveal>
        </div>

        {/* Dual Primary CTAs */}
        <ScrollReveal variant="fade-up" delay={250}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
              marginBottom: "3.5rem",
            }}
          >
            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{ padding: "1rem 2.4rem", fontSize: "1.05rem" }}
            >
              Get Started with Paceployt <ArrowRight size={20} />
            </button>

            <Link
              to="/about"
              className="btn-secondary"
              style={{ padding: "1rem 2.4rem", fontSize: "1.05rem" }}
            >
              Discover What We Do
            </Link>
          </div>
        </ScrollReveal>

        {/* Elevated Sector Showcase Panel */}
        <ScrollReveal variant="scale-up" delay={320}>
          <div
            className="glass-card-elevated"
            style={{
              padding: "2rem 2.25rem",
              maxWidth: "1100px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.25rem",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.825rem",
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Paceployt Core Pillars:
              </span>

              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                <button
                  onClick={() => setActiveSector("tech")}
                  className={`badge-pill ${activeSector === "tech" ? "badge-purple" : "btn-secondary"}`}
                  style={{
                    cursor: "pointer",
                    padding: "0.45rem 1rem",
                    fontSize: "0.8rem",
                  }}
                >
                  <Code2 size={14} /> Paceployt Tech Agency
                </button>

                <button
                  onClick={() => setActiveSector("consulting")}
                  className={`badge-pill ${activeSector === "consulting" ? "badge-consulting" : "btn-secondary"}`}
                  style={{
                    cursor: "pointer",
                    padding: "0.45rem 1rem",
                    fontSize: "0.8rem",
                  }}
                >
                  <Briefcase size={14} /> Corporate Consulting
                </button>

                <button
                  onClick={() => setActiveSector("real_estate")}
                  className={`badge-pill ${activeSector === "real_estate" ? "badge-agri" : "btn-secondary"}`}
                  style={{
                    cursor: "pointer",
                    padding: "0.45rem 1rem",
                    fontSize: "0.8rem",
                  }}
                >
                  <Building2 size={14} /> Real Estate & Property
                </button>
              </div>
            </div>

            {/* Active Sector Card */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "16px",
                padding: "1.35rem 1.6rem",
                border: `1px solid ${sectorHighlights[activeSector].color}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                transition: "all 0.3s ease",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "6px",
                      backgroundColor: sectorHighlights[activeSector].color,
                      color: "#090514",
                    }}
                  >
                    {sectorHighlights[activeSector].tag}
                  </span>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800 }}>
                    {sectorHighlights[activeSector].title}
                  </h3>
                </div>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.95rem",
                    maxWidth: "750px",
                  }}
                >
                  {sectorHighlights[activeSector].description}
                </p>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
              >
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      color: sectorHighlights[activeSector].color,
                    }}
                  >
                    {sectorHighlights[activeSector].stats}
                  </span>
                  <span
                    style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}
                  >
                    Verified Metric
                  </span>
                </div>
                <Link
                  to="/divisions"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  <ChevronRight size={22} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Global Key Stats Bar */}
        <div
          className="grid-4"
          style={{
            marginTop: "3.5rem",
            maxWidth: "1100px",
            margin: "3.5rem auto 0 auto",
          }}
        >
          <ScrollReveal variant="fade-up" delay={100}>
            <div
              className="glass-card-elevated"
              style={{ padding: "1.5rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  color: "#c084fc",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <AnimatedCounter end={61} suffix="+" duration={2200} />
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                Projects Delivered
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <div
              className="glass-card-elevated"
              style={{ padding: "1.5rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  color: "#a855f7",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <AnimatedCounter end={500} suffix="+" duration={2200} />
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                Satisfied Clients & Partners
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={300}>
            <div
              className="glass-card-elevated"
              style={{ padding: "1.5rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  color: "var(--consult-amber)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <AnimatedCounter
                  end={99.8}
                  suffix="%"
                  duration={2200}
                  decimals={1}
                />
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                Reliability & ROI Rate
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={400}>
            <div
              className="glass-card-elevated"
              style={{ padding: "1.5rem", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  color: "var(--agri-emerald)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <AnimatedCounter end={3} suffix=" Core" duration={1800} />
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                }}
              >
                Enterprise Sectors
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
