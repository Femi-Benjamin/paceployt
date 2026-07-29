import React from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2348148042760"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        padding: "0.8rem 1.25rem",
        borderRadius: "9999px",
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: "#ffffff",
        fontWeight: 700,
        fontSize: "0.9rem",
        textDecoration: "none",
        boxShadow:
          "0 10px 25px rgba(16, 185, 129, 0.45), 0 0 20px rgba(16, 185, 129, 0.3)",
        border: "1px solid rgba(255, 255, 255, 0.25)",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      className="floating-whatsapp-btn"
    >
      <WhatsAppIcon size={22} />
      <span className="floating-whatsapp-text">Chat with Us</span>

      <style>{`
        .floating-whatsapp-btn:hover {
          transform: translateY(-4px) scale(1.05);
          boxShadow: 0 15px 35px rgba(16, 185, 129, 0.65), 0 0 30px rgba(16, 185, 129, 0.5);
        }
        @media (max-width: 480px) {
          .floating-whatsapp-btn {
            bottom: 18px;
            right: 18px;
            padding: 0.75rem 0.75rem;
            border-radius: 50%;
          }
          .floating-whatsapp-text {
            display: none;
          }
        }
      `}</style>
    </a>
  );
}
