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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen || isScrolled
          ? "bg-[#090514] backdrop-blur-xl border-b border-[rgba(91,26,234,0.3)] py-3.5 min-[900px]:py-4"
          : "bg-transparent backdrop-blur-none border-b border-transparent py-5 min-[900px]:py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Official Logo */}
        <a href="#" className="flex items-center gap-3.5 no-underline">
          <div className="px-2 py-2 flex items-center justify-center shadow-[0_0_20px_rgba(91,26,234,0.4)] border border-[rgba(91,26,234,0.3)] rounded-2xl">
            <img
              src="/images/logo.png"
              alt="Paceployt Ltd Logo"
              className="h-8.25 object-contain rounded-2xl"
            />
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden min-[900px]:flex items-center gap-8 my-10">
          <a
            href="#about"
            className="text-zinc-400 hover:text-white no-underline text-[0.925rem] font-semibold transition-colors duration-200"
          >
            About Us
          </a>

          {/* Group Divisions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDivisionsDropdownOpen(true)}
            onMouseLeave={() => setDivisionsDropdownOpen(false)}
          >
            <button className="text-zinc-400 hover:text-white bg-transparent border-0 cursor-pointer flex items-center gap-1.5 text-[0.925rem] font-semibold transition-colors duration-200">
              Group Divisions{" "}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  divisionsDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {divisionsDropdownOpen && (
              <div className="absolute top-full -left-5 w-72.5 bg-[#0e081c] backdrop-blur-xl border border-[rgba(91,26,234,0.3)] rounded-[20px] p-3.5 shadow-2xl flex flex-col gap-2.5 z-50">
                <a
                  href="#divisions"
                  className="no-underline p-2.5 rounded-xl bg-white/3 hover:bg-white/10 flex flex-col transition-all duration-200"
                >
                  <div className="text-purple-400 font-bold">
                    💻 Paceployt Tech Agency
                  </div>
                  <span className="text-xs text-zinc-400">
                    Software, Web & Mobile Builds
                  </span>
                </a>
                <a
                  href="#divisions"
                  className="no-underline p-2.5 rounded-xl bg-white/3 hover:bg-white/10 flex flex-col transition-all duration-200"
                >
                  <div className="text-amber-500 font-bold">
                    💼 Corporate Consulting
                  </div>
                  <span className="text-xs text-zinc-400">
                    Strategy & Tech Advisory
                  </span>
                </a>
                <a
                  href="#divisions"
                  className="no-underline p-2.5 rounded-xl bg-white/3 hover:bg-white/10 flex flex-col transition-all duration-200"
                >
                  <div className="text-emerald-500 font-bold">
                    🏢 Real Estate & Property
                  </div>
                  <span className="text-xs text-zinc-400">
                    Commercial & Smart Property
                  </span>
                </a>
              </div>
            )}
          </div>

          <a
            href="#portfolio"
            className="text-zinc-400 hover:text-white no-underline text-[0.925rem] font-semibold transition-colors duration-200"
          >
            Portfolio
          </a>
          <a
            href="#solution-finder"
            className="text-zinc-400 hover:text-white no-underline text-[0.925rem] font-semibold transition-colors duration-200"
          >
            Solution Finder
          </a>
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden min-[900px]:flex items-center gap-3.5">
          <a
            href="https://wa.me/2348148042760"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-5 py-2.5 text-sm min-w-34.5 justify-center"
          >
            <WhatsAppIcon size={18} /> WhatsApp
          </a>

          <button
            onClick={onOpenContact}
            className="btn-primary px-5 py-2.5 text-sm min-w-34.5 justify-center"
          >
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="min-[900px]:hidden bg-transparent border-0 text-white cursor-pointer p-2"
          aria-label="Toggle mobile navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed top-full left-0 right-0 h-[calc(100vh-100%)] bg-[#090514] border-t border-[rgba(91,26,234,0.3)] py-7 overflow-y-auto z-50">
          {/* About Us */}
          <div className="container flex flex-col gap-5 pt-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white no-underline text-lg font-bold"
            >
              About Us
            </a>

            {/* Group Divisions Expandable Accordion */}
            <div>
              <button
                onClick={() => setMobileDivisionsOpen(!mobileDivisionsOpen)}
                className="text-white no-underline text-lg font-bold bg-transparent border-0 w-full flex items-center justify-between p-0 cursor-pointer"
              >
                <span>Group Divisions</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    mobileDivisionsOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {mobileDivisionsOpen && (
                <div className="flex flex-col gap-2.5 mt-3 pl-4 border-l-2 border-[rgba(91,26,234,0.4)]">
                  <a
                    href="#divisions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="no-underline text-purple-400 text-[0.95rem] font-bold"
                  >
                    💻 Paceployt Tech Agency
                  </a>
                  <a
                    href="#divisions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="no-underline text-amber-500 text-[0.95rem] font-bold"
                  >
                    💼 Corporate Consulting
                  </a>
                  <a
                    href="#divisions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="no-underline text-emerald-500 text-[0.95rem] font-bold"
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
              className="text-white no-underline text-lg font-bold"
            >
              Portfolio
            </a>

            {/* Solution Finder */}
            <a
              href="#solution-finder"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white no-underline text-lg font-bold"
            >
              Solution Finder
            </a>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 mt-5">
              <a
                href="https://wa.me/2348148042760"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <WhatsAppIcon size={20} /> Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="btn-primary w-full justify-center"
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
