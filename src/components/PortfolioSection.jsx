import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Briefcase, ExternalLink, ArrowUpRight } from "lucide-react";

export default function PortfolioSection({ onOpenContact }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "PAVE — Let's Build Wealth Together",
      category: "tech",
      categoryLabel: "Paceployt Flagship Fintech",
      tech: "React.js, Modern CSS, Financial Security",
      desc: "Engineered by Paceployt Tech, PAVE is a premier next-gen wealth-building & financial technology application enabling smart digital savings, automated investment pipelines, and instant payments.",
      image: "/images/pave_fintech.jpg",
      liveUrl: "https://pave-fintech-app.vercel.app/",
    },
    {
      id: 2,
      title: "Enterprise Payments & Web Portal",
      category: "tech",
      categoryLabel: "Paceployt Tech",
      tech: "React.js, Node.js, Cloud Security",
      desc: "Bespoke high-security financial payment application handling transactions, real-time analytics, and automated reporting.",
      image: "/images/hero_tech_network.jpg",
      liveUrl: null,
    },
    {
      id: 3,
      title: "Corporate Digital Transformation Roadmap",
      category: "consulting",
      categoryLabel: "Corporate Consulting",
      tech: "Strategic IT Audit & Governance",
      desc: "Complete digital restructuring and tech advisory for a multi-regional enterprise, scaling operational efficiency by 40%.",
      image: "/images/consulting.jpg",
      liveUrl: null,
    },
    {
      id: 4,
      title: "Smart Real Estate & Commercial Property Hub",
      category: "real_estate",
      categoryLabel: "Paceployt Real Estate",
      tech: "Smart Architecture, Asset Development",
      desc: "Modern commercial real estate acquisition, smart building management, and high-yield property investment development.",
      image: "/images/real_estate.jpg",
      liveUrl: null,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      style={{ padding: "110px 0", position: "relative" }}
    >
      <div className="container">
        {/* Section Header */}
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
              <Briefcase size={14} /> Proven Track Record
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              Featured Case Studies &{" "}
              <span className="gradient-text-purple">Projects</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
              Explore how Paceployt delivers excellence across fintech
              platforms, custom engineering, corporate consulting, and real
              estate development.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.85rem",
              marginBottom: "3.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { id: "all", label: "All Projects" },
              { id: "tech", label: "Paceployt Tech & Apps" },
              { id: "consulting", label: "Consulting" },
              { id: "real_estate", label: "Real Estate" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`badge-pill ${filter === f.id ? "badge-purple" : "btn-secondary"}`}
                style={{
                  cursor: "pointer",
                  padding: "0.6rem 1.4rem",
                  fontSize: "0.85rem",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid-2" style={{ gap: "2.5rem" }}>
          {filteredProjects.map((proj, idx) => (
            <ScrollReveal
              key={proj.id}
              variant="fade-up"
              delay={(idx + 1) * 100}
            >
              <div
                className="glass-card-elevated"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <div
                    style={{
                      height: "240px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "rgba(9, 5, 20, 0.9)",
                        backdropFilter: "blur(8px)",
                        padding: "0.35rem 0.85rem",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        color: "#c084fc",
                        border: "1px solid rgba(91, 26, 234, 0.4)",
                      }}
                    >
                      {proj.categoryLabel}
                    </div>
                  </div>

                  <div style={{ padding: "2rem" }}>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#c084fc",
                        fontWeight: 700,
                        marginBottom: "0.4rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {proj.tech}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        marginBottom: "0.75rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.95rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    padding: "0 2rem 2rem 2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.5rem 1.25rem",
                        borderRadius: "9999px",
                        background:
                          "linear-gradient(135deg, #5B1AEA 0%, #7c3aed 100%)",
                        color: "#ffffff",
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        boxShadow: "0 0 15px rgba(91, 26, 234, 0.4)",
                      }}
                    >
                      Launch Live App <ExternalLink size={16} />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenContact}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#c084fc",
                        fontSize: "0.925rem",
                        fontWeight: 800,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: 0,
                      }}
                    >
                      Inquire About Similar Build <ArrowUpRight size={18} />
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
