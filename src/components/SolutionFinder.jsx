import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  HelpCircle,
  Code2,
  Briefcase,
  Building2,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function SolutionFinder({ onOpenContact }) {
  const [selectedGoal, setSelectedGoal] = useState("build_app");

  const options = [
    {
      id: "build_app",
      title: "Build Websites, Web Apps & Mobile Apps",
      category: "Paceployt Tech Agency",
      icon: Code2,
      recommendation: "Paceployt Tech Agency Package",
      details:
        "Full stack development (React, Node/PHP), modern UI/UX design, custom mobile app & cloud infrastructure setup.",
      timeline: "2 - 6 Weeks",
      actionText: "Book Tech Discovery Session",
    },
    {
      id: "business_strategy",
      title: "Scale My Business & Tech Strategy",
      category: "Corporate Consulting",
      icon: Briefcase,
      recommendation: "Enterprise Growth & Advisory",
      details:
        "Digital transformation audit, risk governance, operations optimization, and strategic technology consulting.",
      timeline: "Ongoing Advisory",
      actionText: "Schedule Strategy Audit",
    },
    {
      id: "real_estate",
      title: "Smart Real Estate & Property Development",
      category: "Paceployt Real Estate",
      icon: Building2,
      recommendation: "Commercial Property & Asset Portfolio",
      details:
        "Commercial & residential real estate development, architectural design, smart building tech integration, and high-yield property investment portfolios.",
      timeline: "Custom Deployment",
      actionText: "Connect Real Estate Specialist",
    },
  ];

  const currentOption = options.find((o) => o.id === selectedGoal);

  return (
    <section
      id="solution-finder"
      style={{
        padding: "100px 0",
        background: "rgba(9, 5, 20, 0.4)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Title */}
        <ScrollReveal variant="fade-up" delay={50}>
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
              <HelpCircle size={14} /> Interactive Solution Finder
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              What Are You Looking To{" "}
              <span className="gradient-text-purple">Achieve?</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
              Select your goal below to get instant tailored solutions from the
              Paceployt Group ecosystem.
            </p>
          </div>
        </ScrollReveal>

        {/* Options Grid */}
        <div className="grid-3" style={{ marginBottom: "3rem", gap: "2rem" }}>
          {options.map((opt, idx) => {
            const Icon = opt.icon;
            const isSelected = selectedGoal === opt.id;
            return (
              <ScrollReveal
                key={opt.id}
                variant="fade-up"
                delay={(idx + 1) * 100}
              >
                <div
                  onClick={() => setSelectedGoal(opt.id)}
                  className="glass-card-elevated"
                  style={{
                    cursor: "pointer",
                    border: isSelected
                      ? "2px solid #5B1AEA"
                      : "1px solid rgba(255, 255, 255, 0.08)",
                    background: isSelected
                      ? "linear-gradient(145deg, rgba(45, 22, 90, 0.9) 0%, rgba(20, 11, 40, 0.95) 100%)"
                      : "rgba(18, 11, 36, 0.75)",
                    transform: isSelected ? "translateY(-6px)" : "none",
                    boxShadow: isSelected
                      ? "0 20px 45px rgba(91, 26, 234, 0.4)"
                      : "none",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: isSelected
                        ? "#5B1AEA"
                        : "rgba(255,255,255,0.06)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                      boxShadow: isSelected
                        ? "0 0 20px rgba(91, 26, 234, 0.5)"
                        : "none",
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div
                    style={{
                      fontSize: "0.775rem",
                      fontWeight: 800,
                      color: "#c084fc",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {opt.category}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#ffffff",
                    }}
                  >
                    {opt.title}
                  </h4>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Tailored Recommendation Card */}
        <ScrollReveal variant="scale-up" delay={250}>
          <div
            className="glass-card-elevated"
            style={{
              padding: "3rem 2.5rem",
              background:
                "linear-gradient(145deg, rgba(28, 15, 56, 0.95) 0%, rgba(14, 8, 28, 0.98) 100%)",
            }}
          >
            <div
              className="grid-2"
              style={{ alignItems: "center", gap: "2.5rem" }}
            >
              <div>
                <span
                  className="badge-pill badge-purple"
                  style={{ marginBottom: "1rem", fontSize: "0.75rem" }}
                >
                  RECOMMENDED SOLUTION
                </span>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    marginBottom: "0.85rem",
                  }}
                >
                  {currentOption.recommendation}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    marginBottom: "1.75rem",
                  }}
                >
                  {currentOption.details}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "var(--text-subtle)",
                        textTransform: "uppercase",
                      }}
                    >
                      Estimated Timeline
                    </span>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        color: "#c084fc",
                      }}
                    >
                      {currentOption.timeline}
                    </span>
                  </div>
                  <div
                    style={{
                      borderLeft: "1px solid rgba(255,255,255,0.12)",
                      paddingLeft: "2rem",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "var(--text-subtle)",
                        textTransform: "uppercase",
                      }}
                    >
                      Delivery Model
                    </span>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        color: "#ffffff",
                      }}
                    >
                      Dedicated Team
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                }}
              >
                <button
                  onClick={onOpenContact}
                  className="btn-primary"
                  style={{ padding: "1rem 2rem", justifyContent: "center" }}
                >
                  {currentOption.actionText} <ArrowRight size={20} />
                </button>

                <a
                  href="https://wa.me/2348148042760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: "1rem 2rem", justifyContent: "center" }}
                >
                  <WhatsAppIcon size={20} /> Quick Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
