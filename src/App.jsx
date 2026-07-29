import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import AboutSection from "./components/AboutSection";
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

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenContact = () => setModalOpen(true);
  const handleCloseContact = () => setModalOpen(false);

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
