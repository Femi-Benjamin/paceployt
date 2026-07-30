import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "tech_agency",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "tech_agency",
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" style={{ padding: "110px 0", position: "relative" }}>
      <div
        className="glow-spot-purple"
        style={{ bottom: "-100px", left: "20%" }}
      ></div>

      <div
        className="container"
        style={{ position: "relative", zIndex: 2 }}
      ></div>

      <ScrollReveal variant="fade-up" delay={50}>
        <div
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto 4rem auto",
          }}
        >
          <div
            className="badge-pill badge-purple"
            style={{ marginBottom: "1rem" }}
          >
            <Sparkles size={14} /> Get In Touch
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            Let's Set The Pace{" "}
            <span className="gradient-text-purple">Together</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Whether you want to build a digital product, consult on business
            strategy, or invest in real estate, we are ready to bring your ideas
            to life.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid-2" style={{ gap: "3rem", alignItems: "start" }}>
        {/* Contact Info Card */}
        <ScrollReveal variant="slide-left" delay={150}>
          <div className="glass-card-elevated" style={{ padding: "2.75rem" }}>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                marginBottom: "1.75rem",
              }}
            >
              Contact Paceployt Group
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "rgba(91, 26, 234, 0.2)",
                    color: "#c084fc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-subtle)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Email Inquiries
                  </div>
                  <a
                    href="mailto:paceploytltd@gmail.com"
                    style={{
                      fontWeight: 800,
                      color: "#ffffff",
                      fontSize: "1rem",
                      textDecoration: "none",
                    }}
                  >
                    paceploytltd@gmail.com
                  </a>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "rgba(16, 185, 129, 0.2)",
                    color: "var(--agri-emerald)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WhatsAppIcon size={22} color="var(--agri-emerald)" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-subtle)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Phone & WhatsApp
                  </div>
                  <a
                    href="https://wa.me/2348148042760"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontWeight: 800,
                      color: "var(--agri-emerald)",
                      textDecoration: "none",
                      fontSize: "1rem",
                    }}
                  >
                    +234 814 804 2760
                  </a>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "rgba(245, 158, 11, 0.2)",
                    color: "var(--consult-amber)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-subtle)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Corporate HQ
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      color: "#ffffff",
                      fontSize: "1rem",
                    }}
                  >
                    Paceployt Ltd Global Operations Hub
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "1.35rem",
                borderRadius: "16px",
                background: "rgba(91, 26, 234, 0.08)",
                border: "1px solid rgba(91, 26, 234, 0.3)",
              }}
            >
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: "#c084fc",
                  marginBottom: "0.35rem",
                }}
              >
                ⚡ Direct Contact Guaranteed
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Our team responds to all project inquiries via email at
                paceploytltd@gmail.com and WhatsApp +234 814 804 2760.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Form Card */}
        <ScrollReveal variant="slide-right" delay={250}>
          <div className="glass-card-elevated" style={{ padding: "2.75rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(91, 26, 234, 0.25)",
                    color: "#c084fc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem auto",
                  }}
                >
                  <CheckCircle2 size={40} />
                </div>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    marginBottom: "0.5rem",
                  }}
                >
                  Thank You!
                </h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Your message has been received. A Paceployt specialist will
                  contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    marginBottom: "0.25rem",
                  }}
                >
                  Send Us A Message
                </h3>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.775rem",
                      fontWeight: 800,
                      color: "var(--text-muted)",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="modal-input"
                  />
                </div>

                <div className="grid-2" style={{ gap: "1rem" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.775rem",
                        fontWeight: 800,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="modal-input"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.775rem",
                        fontWeight: 800,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 814 804 2760"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="modal-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.775rem",
                      fontWeight: 800,
                      color: "var(--text-muted)",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Service / Division Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="modal-input"
                    style={{ background: "rgba(12, 6, 26, 0.95)" }}
                  >
                    <option value="tech_agency">
                      Paceployt Tech Agency (Website, Web / Mobile App)
                    </option>
                    <option value="consulting">
                      Corporate & Tech Advisory Consulting
                    </option>
                    <option value="real_estate">
                      Real Estate & Smart Property Development
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.775rem",
                      fontWeight: 800,
                      color: "var(--text-muted)",
                      marginBottom: "0.4rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Project Details / Inquiry
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell us about your project or consultation goals..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="modal-input"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: "0.95rem 2rem", justifyContent: "center" }}
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
