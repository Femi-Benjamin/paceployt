import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Zap } from "lucide-react";

export default function TrustMarquee() {
  const partners = [
    { name: "Paceployt Tech Agency", type: "Flagship Digital" },
    { name: "React.js Ecosystem", type: "Frontend Stack" },
    { name: "Node.js & PHP Backend", type: "Server Architecture" },
    { name: "Figma UI/UX Studio", type: "Design System" },
    { name: "Paceployt Tech Academy", type: "Talent Incubator" },
    { name: "Corporate Advisory", type: "Strategy & Growth" },
    { name: "Smart AgTech Solutions", type: "Sustainable Farming" },
    { name: "Enterprise Cloud Infrastructure", type: "99.9% Uptime" },
  ];

  return (
    <ScrollReveal variant="fade-in" duration={800}>
      <div
        style={{
          padding: "2rem 0",
          background: "rgba(11, 17, 32, 0.6)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="container"
          style={{ textAlign: "center", marginBottom: "1.25rem" }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "var(--text-subtle)",
              textTransform: "uppercase",
            }}
          >
            Trusted By 1,000+ Businesses, Enterprise Partners & Tech
            Professionals
          </p>
        </div>

        <div className="marquee-container">
          <div className="marquee-content">
            {partners.concat(partners).map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.6rem 1.4rem",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  whiteSpace: "nowrap",
                }}
              >
                <Zap size={14} style={{ color: "var(--tech-cyan)" }} />
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  {item.name}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-subtle)",
                    paddingLeft: "0.3rem",
                    borderLeft: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
