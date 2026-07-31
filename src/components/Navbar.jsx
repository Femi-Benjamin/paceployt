import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import "../index.css";

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
      className={`navbar ${mobileMenuOpen || isScrolled ? "navbar-scrolled" : "navbar-transparent"}`}
    >
      <div className="navbar-container">
        {/* Brand Official Logo */}
        <a href="#" className="navbar-brand">
          <div className="navbar-logo-wrapper">
            <img
              src="/images/logo.png"
              alt="Paceployt Ltd Logo"
              className="navbar-logo-img"
            />
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="navbar-desktop-nav">
          <a href="#about" className="navbar-link">
            About Us
          </a>

          <a href="#team" className="navbar-link">
            Our Team
          </a>

          {/* Group Divisions Dropdown */}
          <div
            className="navbar-dropdown-wrapper"
            onMouseEnter={() => setDivisionsDropdownOpen(true)}
            onMouseLeave={() => setDivisionsDropdownOpen(false)}
          >
            <button className="navbar-dropdown-trigger">
              Group Divisions
              <ChevronDown
                size={14}
                className={`navbar-dropdown-icon ${divisionsDropdownOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {divisionsDropdownOpen && (
              <div className="navbar-dropdown-menu">
                <a href="#divisions" className="navbar-dropdown-item">
                  <div className="navbar-dropdown-item-title-purple">
                    💻 Paceployt Tech Agency
                  </div>
                  <span className="navbar-dropdown-item-subtitle">
                    Software, Web & Mobile Builds
                  </span>
                </a>
                <a href="#divisions" className="navbar-dropdown-item">
                  <div className="navbar-dropdown-item-title-amber">
                    💼 Corporate Consulting
                  </div>
                  <span className="navbar-dropdown-item-subtitle">
                    Strategy & Tech Advisory
                  </span>
                </a>
                <a href="#divisions" className="navbar-dropdown-item">
                  <div className="navbar-dropdown-item-title-emerald">
                    🏢 Real Estate & Property
                  </div>
                  <span className="navbar-dropdown-item-subtitle">
                    Commercial & Smart Property
                  </span>
                </a>
              </div>
            )}
          </div>

          <a href="#portfolio" className="navbar-link">
            Portfolio
          </a>
          <a href="#solution-finder" className="navbar-link">
            Solution Finder
          </a>
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="navbar-desktop-cta">
          <a
            href="https://wa.me/2348148042760"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-whatsapp-btn"
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>

          <button onClick={onOpenContact} className="navbar-primary-btn">
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navbar-mobile-toggle"
          aria-label="Toggle mobile navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <div className="navbar-mobile-content">
            {/* About Us */}
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="navbar-mobile-link"
            >
              About Us
            </a>

            {/* Our Team */}
            <a
              href="#team"
              onClick={() => setMobileMenuOpen(false)}
              className="navbar-mobile-link"
            >
              Our Team
            </a>

            {/* Group Divisions Expandable Accordion */}
            <div>
              <button
                onClick={() => setMobileDivisionsOpen(!mobileDivisionsOpen)}
                className="navbar-mobile-accordion-trigger"
              >
                <span>Group Divisions</span>
                <ChevronDown
                  size={18}
                  className={`navbar-mobile-accordion-icon ${mobileDivisionsOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {mobileDivisionsOpen && (
                <div className="navbar-mobile-accordion-content">
                  <a
                    href="#divisions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="navbar-mobile-accordion-link-purple"
                  >
                    💻 Paceployt Tech Agency
                  </a>
                  <a
                    href="#divisions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="navbar-mobile-accordion-link-amber"
                  >
                    💼 Corporate Consulting
                  </a>
                  <a
                    href="#divisions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="navbar-mobile-accordion-link-emerald"
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
              className="navbar-mobile-link"
            >
              Portfolio
            </a>

            {/* Solution Finder */}
            <a
              href="#solution-finder"
              onClick={() => setMobileMenuOpen(false)}
              className="navbar-mobile-link"
            >
              Solution Finder
            </a>

            {/* Mobile CTA Buttons */}
            <div className="navbar-mobile-cta-wrapper">
              <a
                href="https://wa.me/2348148042760"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-mobile-whatsapp-btn"
              >
                <WhatsAppIcon size={20} /> Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="navbar-mobile-primary-btn"
              >
                Get Started <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
