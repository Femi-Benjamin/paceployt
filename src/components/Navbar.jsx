import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background page scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: mobileMenuOpen || isScrolled ? "#090514" : "transparent",
        backdropFilter: mobileMenuOpen || isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter:
          mobileMenuOpen || isScrolled ? "blur(16px)" : "none",
        borderBottom:
          mobileMenuOpen || isScrolled
            ? "1px solid rgba(91, 26, 234, 0.3)"
            : "1px solid transparent",
        padding: isScrolled ? "0.65rem 0" : "1.1rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand Official Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              padding: "0.2rem 0.5rem",
              borderRadius: "12px",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(91, 26, 234, 0.4)",
              border: "1px solid rgba(91, 26, 234, 0.3)",
            }}
          >
            <img
              src="/images/logo.png"
              alt="Paceployt Ltd Logo"
              style={{ height: "33px", objectFit: "contain" }}
            />
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          style={{
            display: "none",
            mdDisplay: "flex",
            alignItems: "center",
            gap: "2.2rem",
          }}
          className="desktop-nav"
        >
          <a href="#about" style={navLinkStyle}>
            About Us
          </a>

          {/* Group Divisions Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDivisionsDropdownOpen(true)}
            onMouseLeave={() => setDivisionsDropdownOpen(false)}
          >
            <button
              style={{
                ...navLinkStyle,
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              Group Divisions{" "}
              <ChevronDown
                size={14}
                style={{
                  transition: "transform 0.2s ease",
                  transform: divisionsDropdownOpen
                    ? "rotate(180deg)"
                    : "rotate(0)",
                }}
              />
            </button>

            {divisionsDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "-20px",
                  width: "290px",
                  background: "#0e081c",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(91, 26, 234, 0.3)",
                  borderRadius: "20px",
                  padding: "0.85rem",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                <a href="#divisions" style={dropdownItemStyle}>
                  <div style={{ color: "#c084fc", fontWeight: 700 }}>
                    💻 Paceployt Tech Agency
                  </div>
                  <span
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    Software, Web & Mobile Builds
                  </span>
                </a>
                <a href="#divisions" style={dropdownItemStyle}>
                  <div
                    style={{ color: "var(--consult-amber)", fontWeight: 700 }}
                  >
                    💼 Corporate Consulting
                  </div>
                  <span
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    Strategy & Tech Advisory
                  </span>
                </a>
                <a href="#divisions" style={dropdownItemStyle}>
                  <div
                    style={{ color: "var(--agri-emerald)", fontWeight: 700 }}
                  >
                    🏢 Real Estate & Property
                  </div>
                  <span
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    Commercial & Smart Property
                  </span>
                </a>
              </div>
            )}
          </div>

          <a href="#portfolio" style={navLinkStyle}>
            Portfolio
          </a>
          <a href="#solution-finder" style={navLinkStyle}>
            Solution Finder
          </a>
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div
          style={{
            display: "none",
            mdDisplay: "flex",
            alignItems: "center",
            gap: "0.85rem",
          }}
          className="desktop-nav"
        >
          <a
            href="https://wa.me/2348148042760"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              padding: "0.65rem 1.35rem",
              fontSize: "0.875rem",
              minWidth: "138px",
              justifyContent: "center",
            }}
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>

          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{
              padding: "0.65rem 1.35rem",
              fontSize: "0.875rem",
              minWidth: "138px",
              justifyContent: "center",
            }}
          >
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          className="mobile-toggle"
          aria-label="Toggle mobile navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "100%",
            left: 0,
            right: 0,
            height: "calc(100vh - 100%)",
            background: "#090514",
            borderTop: "1px solid rgba(91, 26, 234, 0.3)",
            padding: "1.75rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {/* About Us */}
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={mobileNavLinkStyle}
          >
            About Us
          </a>

          {/* Group Divisions Expandable Accordion */}
          <div>
            <button
              onClick={() => setMobileDivisionsOpen(!mobileDivisionsOpen)}
              style={{
                ...mobileNavLinkStyle,
                background: "none",
                border: "none",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <span>Group Divisions</span>
              <ChevronDown
                size={18}
                style={{
                  transition: "transform 0.2s ease",
                  transform: mobileDivisionsOpen
                    ? "rotate(180deg)"
                    : "rotate(0)",
                }}
              />
            </button>

            {mobileDivisionsOpen && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  marginTop: "0.75rem",
                  paddingLeft: "1rem",
                  borderLeft: "2px solid rgba(91, 26, 234, 0.4)",
                }}
              >
                <a
                  href="#divisions"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "#c084fc",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                  }}
                >
                  💻 Paceployt Tech Agency
                </a>
                <a
                  href="#divisions"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "var(--consult-amber)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                  }}
                >
                  💼 Corporate Consulting
                </a>
                <a
                  href="#divisions"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "var(--agri-emerald)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                  }}
                >
                  🏢 Real Estate & Property
                </a>
              </div>
            )}
          </div>

          {/* Portfolio */}
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            style={mobileNavLinkStyle}
          >
            Portfolio
          </a>

          {/* Solution Finder */}
          <a
            href="#solution-finder"
            onClick={() => setMobileMenuOpen(false)}
            style={mobileNavLinkStyle}
          >
            Solution Finder
          </a>

          {/* Mobile CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginTop: "1.25rem",
            }}
          >
            <a
              href="https://wa.me/2348148042760"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <WhatsAppIcon size={20} /> Chat on WhatsApp
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Get Started <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* CSS helper for responsive display */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}

const navLinkStyle = {
  color: "var(--text-muted)",
  textDecoration: "none",
  fontSize: "0.925rem",
  fontWeight: 600,
  transition: "color 0.2s ease",
};

const mobileNavLinkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "1.15rem",
  fontWeight: 700,
};

const dropdownItemStyle = {
  textDecoration: "none",
  padding: "0.65rem 0.85rem",
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.03)",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.2s ease",
};
