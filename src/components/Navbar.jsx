import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import "../index.css";

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);
  const [mobileDivisionsOpen, setMobileDivisionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Closes mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDivisionsOpen(false);
  }, [location.pathname]);

  // Prevents body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-transparent"}`}
    >
      <div className="navbar-container">
        {/* Brand Official Logo */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="navbar-logo-wrapper">
            <img
              src="/images/logo.png"
              alt="Paceployt Ltd Logo"
              className="navbar-logo-img"
            />
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="navbar-desktop-nav">
          <Link to="/about" className="navbar-link">
            About Us
          </Link>

          <Link to="/team" className="navbar-link">
            Our Team
          </Link>

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
                <Link to="/divisions" className="navbar-dropdown-item">
                  <div className="navbar-dropdown-item-title-purple">
                    💻 Paceployt Tech Agency
                  </div>
                  <span className="navbar-dropdown-item-subtitle">
                    Software, Web & Mobile Builds
                  </span>
                </Link>
                <Link to="/divisions" className="navbar-dropdown-item">
                  <div className="navbar-dropdown-item-title-amber">
                    💼 Corporate Consulting
                  </div>
                  <span className="navbar-dropdown-item-subtitle">
                    Strategy & Tech Advisory
                  </span>
                </Link>
                <Link to="/divisions" className="navbar-dropdown-item">
                  <div className="navbar-dropdown-item-title-emerald">
                    🏢 Real Estate & Property <span className="coming-soon-badge">Coming Soon</span>
                  </div>
                  <span className="navbar-dropdown-item-subtitle">
                    Commercial & Smart Property
                  </span>
                </Link>
              </div>
            )}
          </div>

          <Link to="/portfolio" className="navbar-link">
            Portfolio
          </Link>
          <Link to="/solution-finder" className="navbar-link">
            Solution Finder
          </Link>
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
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            console.log("Toggled mobile menu:", !mobileMenuOpen); // Debug log
          }}
          className="navbar-mobile-toggle"
          aria-label="Toggle mobile navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation - Always render but control visibility with CSS */}
      <div
        className={`navbar-mobile-drawer ${mobileMenuOpen ? "open" : "closed"}`}
        style={{ display: mobileMenuOpen ? "block" : "none" }}
      >
        <div className="navbar-mobile-content">
          {/* About Us */}
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar-mobile-link"
          >
            About Us
          </Link>

          {/* Our Team */}
          <Link
            to="/team"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar-mobile-link"
          >
            Our Team
          </Link>

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
                <Link
                  to="/divisions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="navbar-mobile-accordion-link-purple"
                >
                  💻 Paceployt Tech Agency
                </Link>
                <Link
                  to="/divisions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="navbar-mobile-accordion-link-amber"
                >
                  💼 Corporate Consulting
                </Link>
                <Link
                  to="/divisions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="navbar-mobile-accordion-link-emerald"
                >
                  🏢 Real Estate & Property <span className="coming-soon-badge">Coming Soon</span>
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio */}
          <Link
            to="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar-mobile-link"
          >
            Portfolio
          </Link>

          {/* Solution Finder */}
          <Link
            to="/solution-finder"
            onClick={() => setMobileMenuOpen(false)}
            className="navbar-mobile-link"
          >
            Solution Finder
          </Link>

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
    </header>
  );
}
