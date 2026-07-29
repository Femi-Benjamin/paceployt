import React, { useState } from "react";
import {
  Code2,
  Briefcase,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function DivisionsSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState("tech");

  const divisions = {
    tech: {
      id: "tech",
      name: "Paceployt Tech Agency",
      tagline: "Flagship Core Strength — Digital Product Engineering",
      icon: Code2,
      color: "#c084fc",
      badgeBg: "rgba(91, 26, 234, 0.2)",
      image: "/images/tech_academy.jpg",
      description:
        "Paceployt Tech is our flagship digital division dedicated to delivering high-caliber web applications, native mobile apps, custom cloud integrations, and UI/UX design. We turn complex vision into battle-tested digital infrastructure.",
      highlights: [
        "Bespoke Web Applications (React.js, Next.js)",
        "Scalable Backend & Cloud APIs (Node.js, PHP)",
        "User-Centric UI/UX Prototyping (Figma)",
        "Full-Stack Software Architecture & Maintenance",
      ],
    },
    consulting: {
      id: "consulting",
      name: "Corporate & Tech Consulting",
      tagline: "Strategic Business & Technology Governance",
      icon: Briefcase,
      color: "var(--consult-amber)",
      badgeBg: "rgba(245, 158, 11, 0.2)",
      image: "/images/consulting.jpg",
      description:
        "Our consulting arm empowers enterprises to navigate complex digital transformations, optimize operational workflows, mitigate IT risks, and execute high-growth strategic business roadmaps.",
      highlights: [
        "Digital Transformation & IT Audits",
        "Enterprise Operations & Workflow Optimization",
        "Strategic Tech & Risk Governance",
        "C-Suite Advisory & Growth Strategy",
      ],
    },
    real_estate: {
      id: "real_estate",
      name: "Real Estate & Property Development",
      tagline: "Luxury Commercial & Smart Real Estate Assets",
      icon: Building2,
      color: "var(--agri-emerald)",
      badgeBg: "rgba(16, 185, 129, 0.2)",
      image: "/images/real_estate.jpg",
      description:
        "Paceployt Real Estate focuses on premier commercial property acquisitions, luxury residential developments, architectural design excellence, smart building engineering, and high-yield property investment portfolios.",
      highlights: [
        "Commercial & Luxury Real Estate Development",
        "Smart Building Technology & Eco Architecture",
        "High-Yield Real Estate Investment Portfolios",
        "Commercial Asset & Property Management",
      ],
    },
  };

  const current = divisions[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section
      id="divisions"
      style={{ padding: "110px 0", position: "relative" }}
    >
      <div
        className="glow-spot-violet"
        style={{ top: "30%", left: "10%" }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 3.5rem auto",
          }}
        >
          <div
            className="badge-pill badge-purple"
            style={{ marginBottom: "1rem" }}
          >
            <ShieldCheck size={14} /> Ecosystem Divisions
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            Explore Our{" "}
            <span className="gradient-text-purple">Enterprise Divisions</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Discover how Paceployt operates across multidisciplinary sectors
            with tech at the core.
          </p>
        </div>

        {/* Division Selection Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          {Object.values(divisions).map((div) => {
            const TabIcon = div.icon;
            const isActive = activeTab === div.id;
            return (
              <button
                key={div.id}
                onClick={() => setActiveTab(div.id)}
                className="glass-card-elevated"
                style={{
                  padding: "1rem 1.75rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  border: isActive
                    ? `2px solid ${div.color}`
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  background: isActive
                    ? "linear-gradient(145deg, rgba(40, 20, 80, 0.9) 0%, rgba(15, 8, 32, 0.95) 100%)"
                    : "rgba(18, 11, 36, 0.75)",
                  cursor: "pointer",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{ color: isActive ? div.color : "var(--text-muted)" }}
                >
                  <TabIcon size={20} />
                </div>
                <span
                  style={{
                    fontWeight: 800,
                    color: isActive ? "#ffffff" : "var(--text-muted)",
                    fontSize: "0.95rem",
                  }}
                >
                  {div.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Division Detail Hero Card */}
        <div
          className="glass-card-elevated"
          style={{
            padding: "3rem 2.5rem",
            background:
              "linear-gradient(145deg, rgba(28, 15, 56, 0.95) 0%, rgba(12, 6, 26, 0.98) 100%)",
            border: `1px solid ${current.color}40`,
            boxShadow: `0 25px 60px ${current.color}20`,
          }}
        >
          <div
            className="grid-2"
            style={{ gap: "3.5rem", alignItems: "center" }}
          >
            {/* Left Content Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  background: current.badgeBg,
                  color: current.color,
                  fontWeight: 800,
                  fontSize: "0.775rem",
                  marginBottom: "1rem",
                }}
              >
                <CurrentIcon size={16} /> {current.tagline}
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  color: "#ffffff",
                }}
              >
                {current.name}
              </h3>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                {current.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  marginBottom: "2.5rem",
                }}
              >
                {current.highlights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div style={{ color: current.color, flexShrink: 0 }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <span
                      style={{
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: "0.975rem",
                      }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenContact}
                className="btn-primary"
                style={{ padding: "0.95rem 2.2rem", fontSize: "1rem" }}
              >
                Consult With {current.name} <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Visual Image */}
            <div>
              <div
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: `1px solid ${current.color}50`,
                  boxShadow: "0 20px 45px rgba(0,0,0,0.8)",
                  height: "380px",
                  position: "relative",
                }}
              >
                <img
                  src={current.image}
                  alt={current.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(9, 5, 20, 0.85) 0%, transparent 60%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
