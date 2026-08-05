import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Star,
  Quote,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center on middle card by default
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const reviews = [
    {
      id: 0,
      name: "Amara Okonkwo",
      role: "Product Operations Lead",
      category: "Digital Strategy",
      quote:
        "Paceployt delivered a clear, research-backed IT transformation roadmap that elevated our product speed and team efficiency beyond expectations.",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #a855f7, #6366f1)",
    },
    {
      id: 1,
      name: "Paceployt Trainee & Partner",
      role: "Customer Management & Client Success Specialist",
      category: "Customer Experience",
      quote:
        "It's been a beautiful, exciting, unlearning and relearning three weeks, with one more to go. Side Hustle has had a significant impact on people's lives and has helped me progress in customer management over the last few weeks. There is so much that has been taught, from who a customer is, to how to absolutely delight and create a loyal customer group, and so much more.",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #5B1AEA, #7c3aed)",
    },
    {
      id: 2,
      name: "Dr. Evelyn Sterling",
      role: "CEO, Enterprise Holdings",
      category: "Tech Agency Client",
      quote:
        "Paceployt transformed our outdated legacy systems into a sleek, high-performing web application. Their tech team delivered ahead of schedule with flawless code.",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #7c3aed, #9333ea)",
    },
    {
      id: 3,
      name: "Sarah Jenkins",
      role: "Operations Director, Agritech Ventures",
      category: "Consulting & AgTech Partner",
      quote:
        "Paceployt combines deep business strategy with cutting-edge tech execution. Their consulting and agritech logistics insight helped us scale across three regional hubs.",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #10b981, #059669)",
    },
    {
      id: 4,
      name: "Marcus Vance",
      role: "Chief Technology Officer",
      category: "Fintech Build Client",
      quote:
        "Building our financial wealth platform with Paceployt was seamless. Their engineering standards, API architecture, and UI execution are truly top tier.",
      stars: 5,
      avatarBg: "linear-gradient(135deg, #f59e0b, #d97706)",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        background: "rgba(7, 4, 18, 0.95)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Radial Glow & Wireframe Grid Graphic */}
      <div
        className="glow-spot-purple"
        style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={50}>
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 3rem auto",
            }}
          >
            <div
              className="badge-pill badge-purple"
              style={{ marginBottom: "1rem" }}
            >
              <MessageSquare size={14} /> Client & Partner Feedback
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              What People Say About{" "}
              <span className="gradient-text-purple">Paceployt</span>
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              }}
            >
              Explore verified reviews from our clients & partners.
            </p>
          </div>
        </ScrollReveal>

        {/* 3D Coverflow Container */}
        <ScrollReveal variant="scale-up" delay={150}>
          <div
            style={{
              position: "relative",
              height: isMobile ? "400px" : isTablet ? "440px" : "470px",
              maxWidth: "1100px",
              margin: "0 auto",
              perspective: "1200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {reviews.map((rev, idx) => {
              const offset = idx - activeIndex;
              const isCenter = offset === 0;

              // Calculate responsive 3D transforms
              let translateX = 0;
              let rotateY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 1;

              if (isMobile) {
                // Mobile layout logic: show active card, hide off-screen side cards cleanly
                if (offset === 0) {
                  translateX = 0;
                  rotateY = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = 20;
                } else {
                  translateX = offset < 0 ? -320 : 320;
                  rotateY = 0;
                  scale = 0.85;
                  opacity = 0;
                  zIndex = 0;
                }
              } else if (isTablet) {
                // Tablet layout logic: narrower spacing
                if (offset === 0) {
                  translateX = 0;
                  rotateY = 0;
                  scale = 1.05;
                  opacity = 1;
                  zIndex = 20;
                } else if (offset === -1) {
                  translateX = -180;
                  rotateY = 15;
                  scale = 0.85;
                  opacity = 0.6;
                  zIndex = 10;
                } else if (offset === 1) {
                  translateX = 180;
                  rotateY = -15;
                  scale = 0.85;
                  opacity = 0.6;
                  zIndex = 10;
                } else {
                  translateX = offset < 0 ? -380 : 380;
                  rotateY = 0;
                  scale = 0.7;
                  opacity = 0;
                  zIndex = 0;
                }
              } else {
                // Desktop layout logic
                if (offset === 0) {
                  translateX = 0;
                  rotateY = 0;
                  scale = 1.12;
                  opacity = 1;
                  zIndex = 20;
                } else if (offset === -1) {
                  translateX = -260;
                  rotateY = 18;
                  scale = 0.88;
                  opacity = 0.65;
                  zIndex = 10;
                } else if (offset === 1) {
                  translateX = 260;
                  rotateY = -18;
                  scale = 0.88;
                  opacity = 0.65;
                  zIndex = 10;
                } else if (offset === -2) {
                  translateX = -480;
                  rotateY = 28;
                  scale = 0.75;
                  opacity = 0.3;
                  zIndex = 5;
                } else if (offset === 2) {
                  translateX = 480;
                  rotateY = -28;
                  scale = 0.75;
                  opacity = 0.3;
                  zIndex = 5;
                } else {
                  translateX = offset < 0 ? -650 : 650;
                  rotateY = offset < 0 ? 35 : -35;
                  scale = 0.6;
                  opacity = 0;
                  zIndex = 0;
                }
              }

              return (
                <div
                  key={rev.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    position: "absolute",
                    width: isMobile ? "calc(100vw - 2.5rem)" : "370px",
                    maxWidth: "380px",
                    height: isMobile ? "370px" : "380px",
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: opacity,
                    zIndex: zIndex,
                    transition: "all 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
                    cursor: isCenter ? "default" : "pointer",
                    pointerEvents: opacity === 0 ? "none" : "auto",
                  }}
                >
                  <div
                    className="glass-card-elevated"
                    style={{
                      height: "100%",
                      padding: isMobile ? "1.35rem" : "1.85rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: isCenter
                        ? "linear-gradient(145deg, rgba(35, 19, 68, 0.95) 0%, rgba(16, 9, 34, 0.98) 100%)"
                        : "linear-gradient(145deg, rgba(20, 11, 40, 0.85) 0%, rgba(10, 5, 22, 0.92) 100%)",
                      border: isCenter
                        ? "1px solid rgba(168, 85, 247, 0.65)"
                        : "1px solid rgba(91, 26, 234, 0.25)",
                      boxShadow: isCenter
                        ? "0 30px 60px rgba(91, 26, 234, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)"
                        : "0 15px 35px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {/* Floating Glowing Quote Icon */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: isCenter
                          ? "rgba(91, 26, 234, 0.35)"
                          : "rgba(255, 255, 255, 0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isCenter ? "#c084fc" : "var(--text-subtle)",
                        boxShadow: isCenter
                          ? "0 0 20px rgba(168, 85, 247, 0.4)"
                          : "none",
                      }}
                    >
                      <Quote size={18} />
                    </div>

                    <div>
                      {/* Gold Stars */}
                      <div
                        style={{
                          display: "flex",
                          gap: "0.3rem",
                          color: "#fbbf24",
                          marginBottom: "1rem",
                        }}
                      >
                        {[...Array(rev.stars)].map((_, i) => (
                          <Star
                            key={i}
                            size={15}
                            fill="#fbbf24"
                            style={{
                              filter:
                                "drop-shadow(0 0 6px rgba(251, 191, 36, 0.5))",
                            }}
                          />
                        ))}
                      </div>

                      {/* Quote Body */}
                      <p
                        style={{
                          color: "#ffffff",
                          fontSize: "0.9rem",
                          lineHeight: 1.6,
                          fontStyle: "italic",
                          marginBottom: "1.25rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        "{rev.quote}"
                      </p>
                    </div>

                    {/* Author Card Footer */}
                    <div
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        paddingTop: "0.85rem",
                        marginTop: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.65rem",
                        }}
                      >
                        <div
                          style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "50%",
                            background: rev.avatarBg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#ffffff",
                            fontWeight: 800,
                            fontSize: "0.9rem",
                            flexShrink: 0,
                            boxShadow: "0 0 15px rgba(91, 26, 234, 0.4)",
                          }}
                        >
                          {rev.name.charAt(0)}
                        </div>

                        <div>
                          <div
                            style={{
                              fontWeight: 800,
                              fontSize: "0.9rem",
                              color: "#ffffff",
                              lineHeight: 1.2,
                            }}
                          >
                            {rev.name}
                          </div>
                          <div
                            style={{
                              fontSize: "0.725rem",
                              color: "var(--text-muted)",
                              lineHeight: 1.3,
                            }}
                          >
                            {rev.role}
                          </div>
                        </div>
                      </div>

                      <div>
                        <span
                          style={{
                            fontSize: "0.625rem",
                            fontWeight: 800,
                            padding: "0.25rem 0.65rem",
                            borderRadius: "9999px",
                            background: isCenter
                              ? "rgba(91, 26, 234, 0.35)"
                              : "rgba(255, 255, 255, 0.05)",
                            color: isCenter ? "#c084fc" : "var(--text-muted)",
                            border: "1px solid rgba(91, 26, 234, 0.4)",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            display: "inline-block",
                          }}
                        >
                          {rev.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Bar & Pagination Indicators */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
              marginTop: "2rem",
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(91, 26, 234, 0.3)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Indicators */}
            <div
              style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}
            >
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  style={{
                    width: activeIndex === idx ? "28px" : "9px",
                    height: "7px",
                    borderRadius: "9999px",
                    background:
                      activeIndex === idx
                        ? "linear-gradient(90deg, #5B1AEA, #c084fc)"
                        : "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow:
                      activeIndex === idx
                        ? "0 0 15px rgba(91, 26, 234, 0.6)"
                        : "none",
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(91, 26, 234, 0.3)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
