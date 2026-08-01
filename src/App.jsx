import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import DivisionsSection from "./components/DivisionsSection";
import TechSpotlight from "./components/TechSpotlight";
import PaveSpotlight from "./components/PaveSpotlight";
import ProcessSteps from "./components/ProcessSteps";
import SolutionFinder from "./components/SolutionFinder";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

// Route to section ID mapping
const ROUTE_MAP = {
  "/": null,
  "/about": "about",
  "/team": "team",
  "/divisions": "divisions",
  "/tech": "tech",
  "/pave": "pave",
  "/process": "process",
  "/solution-finder": "solution-finder",
  "/portfolio": "portfolio",
  "/testimonials": "testimonials",
  "/contact": "contact",
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenContact = () => setModalOpen(true);
  const handleCloseContact = () => setModalOpen(false);

  // Scroll to section when URL path changes or on direct visit
  useEffect(() => {
    const currentPath = location.pathname;
    const targetId = ROUTE_MAP[currentPath];

    if (targetId) {
      // Small timeout allows DOM elements to render/settle before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (currentPath === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  // Sync current visible section with URL path on scroll (without hash #)
  useEffect(() => {
    const sections = Object.entries(ROUTE_MAP)
      .filter(([path, id]) => id !== null)
      .map(([path, id]) => ({ path, element: document.getElementById(id) }))
      .filter((item) => item.element !== null);

    let isManualNav = false;

    const observerCallback = (entries) => {
      if (isManualNav) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matched = sections.find((s) => s.element === entry.target);
          if (matched && window.location.pathname !== matched.path) {
            window.history.replaceState(null, "", matched.path);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.35,
    });

    sections.forEach(({ element }) => observer.observe(element));

    return () => {
      sections.forEach(({ element }) => observer.unobserve(element));
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-dark)",
        color: "var(--text-main)",
        overflowX: "hidden",
      }}
    >
      {/* Fixed Sticky Header Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Content */}
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <TrustMarquee />
        <AboutSection onOpenContact={handleOpenContact} />
        <TeamSection onOpenContact={handleOpenContact} />
        <DivisionsSection onOpenContact={handleOpenContact} />
        <TechSpotlight onOpenContact={handleOpenContact} />
        <PaveSpotlight onOpenContact={handleOpenContact} />
        <ProcessSteps onOpenContact={handleOpenContact} />
        <SolutionFinder onOpenContact={handleOpenContact} />
        <PortfolioSection onOpenContact={handleOpenContact} />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Popup Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={handleCloseContact} />
    </div>
  );
}
