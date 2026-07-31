import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, ArrowUpRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer({ onOpenContact }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "rgba(5, 2, 12, 0.98)",
        borderTop: "1px solid rgba(91, 26, 234, 0.25)",
        paddingTop: "80px",
        paddingBottom: "40px",
        position: "relative",
      }}
    >
      <div className="container">
        <ScrollReveal variant="fade-up" delay={50}>
          <div className="grid-4" style={{ gap: "3rem", marginBottom: "4rem" }}>
            {/* Brand Column */}
            <div style={{ gridColumn: "span 1.5" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                // style={{
                //   padding: "0.2rem 0.5rem",
                //   borderRadius: '12px',
                //   background: "#ffffff",
                //   display: "flex",
                //   alignItems: "center",
                //   justifyContent: "center",
                //   boxShadow: "0 0 20px rgba(91, 26, 234, 0.4)",
                //   border: "1px solid rgba(91, 26, 234, 0.3)",
                // }}
                >
                  <img
                    className="h-8.25 object-contain rounded-2xl"
                    src="/images/logo.png"
                    alt="Paceployt Ltd Logo"
                    style={{ height: "36px", objectFit: "contain" }}
                  />
                </div>
              </div>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.925rem",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                  maxWidth: "340px",
                }}
              >
                Setting the pace in technology, pushing the boundaries of
                innovation, and inspiring exploits that leave a lasting impact.
              </p>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href="https://wa.me/2348148042760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: "0.55rem 1.1rem", fontSize: "0.825rem" }}
                >
                  <WhatsAppIcon size={16} /> WhatsApp
                </a>

                <a
                  href="mailto:paceploytltd@gmail.com"
                  className="btn-secondary"
                  style={{ padding: "0.55rem 1.1rem", fontSize: "0.825rem" }}
                >
                  <Mail size={16} /> Email Us
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Quick Navigation
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <li>
                  <a href="#about" style={footerLinkStyle}>
                    About Paceployt
                  </a>
                </li>
                <li>
                  <a href="#divisions" style={footerLinkStyle}>
                    Enterprise Divisions
                  </a>
                </li>
                <li>
                  <a href="#portfolio" style={footerLinkStyle}>
                    Case Studies & Portfolio
                  </a>
                </li>
                <li>
                  <a href="#solution-finder" style={footerLinkStyle}>
                    Solution Finder
                  </a>
                </li>
              </ul>
            </div>

            {/* Core Divisions Column */}
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Our Divisions
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <li
                  style={{
                    color: "#c084fc",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  💻 Paceployt Tech Agency
                </li>
                <li
                  style={{
                    color: "var(--consult-amber)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  💼 Corporate Consulting
                </li>
                <li
                  style={{
                    color: "var(--agri-emerald)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  🏢 Real Estate & Property
                </li>
              </ul>
            </div>

            {/* Direct Contact Column */}
            <div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Official Contact
              </h4>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  marginBottom: "0.75rem",
                }}
              >
                Email:{" "}
                <a
                  href="mailto:paceploytltd@gmail.com"
                  style={{
                    color: "#c084fc",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  paceploytltd@gmail.com
                </a>
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                }}
              >
                Phone:{" "}
                <a
                  href="https://wa.me/2348148042760"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--agri-emerald)",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  +234 814 804 2760
                </a>
              </p>

              <button
                onClick={onOpenContact}
                className="btn-primary"
                style={{ padding: "0.65rem 1.25rem", fontSize: "0.85rem" }}
              >
                Schedule Consultation <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Copyright Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "2rem",
            display: "flex",
            justify: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--text-subtle)",
          }}
        >
          <div>
            © {currentYear} Paceployt Ltd. All Rights Reserved. Building
            innovative solutions across Tech, Consulting & Real Estate.
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="#"
              style={{ color: "var(--text-subtle)", textDecoration: "none" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{ color: "var(--text-subtle)", textDecoration: "none" }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: "var(--text-muted)",
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "color 0.2s ease",
};
