import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  Code2,
  Briefcase,
  Building2,
} from "lucide-react";

export default function AboutSection({ onOpenContact }) {
  return (
    <section
      id="about"
      style={{
        padding: "110px 0",
        background: "rgba(9, 5, 20, 0.6)",
        position: "relative",
      }}
    >
      <div
        className="glow-spot-purple"
        style={{ top: "20%", right: "5%" }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 4rem auto",
          }}
        >
          <div
            className="badge-pill badge-purple"
            style={{ marginBottom: "1rem" }}
          >
            <Globe size={14} /> Who We Are & What We Do
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1.25rem",
              lineHeight: 1.15,
            }}
          >
            We Bring Innovative Ideas To Life,{" "}
            <span className="gradient-text-purple">Shaping The Future.</span>
          </h2>
        </div>

        {/* Client Copy Statement Card with Dedicated Enterprise HQ Visual Image */}
        <div
          className="glass-card-elevated"
          style={{
            padding: "3rem",
            marginBottom: "4rem",
            background:
              "linear-gradient(145deg, rgba(28, 15, 56, 0.9) 0%, rgba(13, 7, 28, 0.95) 100%)",
            border: "1px solid rgba(91, 26, 234, 0.35)",
          }}
        >
          <div className="grid-2" style={{ alignItems: "center", gap: "3rem" }}>
            {/* Left Copy Block */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "rgba(91, 26, 234, 0.25)",
                    color: "#c084fc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Zap size={24} />
                </div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "#ffffff",
                  }}
                >
                  Paceployt Enterprise Overview
                </h3>
              </div>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--text-main)",
                  marginBottom: "1.25rem",
                }}
              >
                Paceployt operates as a parent conglomerate that spans multiple
                industries — including corporate consulting and real estate
                development — with our primary core strength and flagship
                leadership rooted in{" "}
                <strong style={{ color: "#c084fc" }}>
                  cutting-edge technology and digital engineering
                </strong>
                .
              </p>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                }}
              >
                Paceployt is a forward-thinking technology agency dedicated to
                delivering innovative solutions for businesses and individuals.
                From crafting bespoke websites and mobile applications to
                offering top-tier tech consultancy, we empower our clients to
                thrive in a digital-first world. Beyond delivering projects, we
                also shape the next generation of tech professionals through our
                Tech Academy. We provide hands-on training in Frontend
                Development (React.js), Backend Development (Node.js and PHP),
                and UI/UX Design (Figma). Our mission is simple: to set the pace
                in technology, push the boundaries of innovation, and inspire
                exploits that leave a lasting impact.
              </p>
            </div>

            {/* Right Visual Image: Enterprise HQ Conglomerate Building */}
            <div>
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8)",
                  position: "relative",
                  height: "360px",
                }}
              >
                <img
                  src="/images/paceployt_logo_3d.jpg"
                  alt="Paceployt Group Official Brand Emblem"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(9,5,20,0.85) 0%, transparent 60%)",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 800,
                        color: "#ffffff",
                      }}
                    >
                      Paceployt
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#c084fc",
                        fontWeight: 600,
                      }}
                    >
                      Pioneering Multidisciplinary Conglomerate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Multidisciplinary Core Pillars */}
        <div className="grid-3" style={{ gap: "2rem" }}>
          {/* Pillar 1: Tech Agency */}
          <div className="glass-card-elevated" style={{ padding: "2.25rem" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(91, 26, 234, 0.2)",
                color: "#c084fc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Code2 size={24} />
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#c084fc",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.4rem",
              }}
            >
              Flagship Core Strength
            </div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              Paceployt Tech Agency
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.925rem",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
              }}
            >
              Bespoke web applications, cross-platform mobile apps, cloud
              architecture, and UI/UX design crafted for digital-first
              enterprises.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="#c084fc" /> React & Modern
                Frontend
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="#c084fc" /> Node.js & PHP APIs
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="#c084fc" /> Custom Figma UI/UX
                Design
              </li>
            </ul>
          </div>

          {/* Pillar 2: Corporate Consulting */}
          <div className="glass-card-elevated" style={{ padding: "2.25rem" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(245, 158, 11, 0.2)",
                color: "var(--consult-amber)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Briefcase size={24} />
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--consult-amber)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.4rem",
              }}
            >
              Strategic Advisory
            </div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              Corporate & IT Consulting
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.925rem",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
              }}
            >
              Helping organizations optimize business operations, implement
              digital transformation roadmaps, and mitigate tech risks.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="var(--consult-amber)" /> Digital
                Transformation Audits
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="var(--consult-amber)" />{" "}
                Strategic Business Growth
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="var(--consult-amber)" /> Risk &
                IT Governance
              </li>
            </ul>
          </div>

          {/* Pillar 3: Real Estate & Property */}
          <div className="glass-card-elevated" style={{ padding: "2.25rem" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(16, 185, 129, 0.2)",
                color: "var(--agri-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <Building2 size={24} />
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--agri-emerald)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.4rem",
              }}
            >
              Prime Property Sector
            </div>
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              Real Estate & Property
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.925rem",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
              }}
            >
              Modern real estate acquisition, commercial property development,
              architectural innovation, and high-yield property investment
              portfolios.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="var(--agri-emerald)" />{" "}
                Commercial & Luxury Real Estate
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="var(--agri-emerald)" /> Smart
                Building Infrastructure
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle2 size={16} color="var(--agri-emerald)" />{" "}
                High-Yield Asset Investment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
