import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'tech_agency',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(91, 26, 234, 0.25)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', boxShadow: '0 0 30px rgba(91, 26, 234, 0.5)' }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.4rem' }}>Request Submitted!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              A Paceployt representative will reach out to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            
            <div className="badge-pill badge-purple" style={{ alignSelf: 'flex-start', fontSize: '0.675rem', padding: '0.25rem 0.65rem' }}>
              <Sparkles size={12} /> Get Started With Paceployt
            </div>

            <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 800, marginBottom: '0.1rem', lineHeight: 1.2 }}>
              Schedule Consultation
            </h3>

            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="modal-input"
                style={{ padding: '0.7rem 0.95rem' }}
              />
            </div>

            <div className="grid-2" style={{ gap: '0.6rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="modal-input"
                  style={{ padding: '0.7rem 0.95rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+234 814 804 2760"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="modal-input"
                  style={{ padding: '0.7rem 0.95rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Select Pillar / Interest</label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="modal-input"
                style={{ background: 'rgba(12, 6, 26, 0.95)', padding: '0.7rem 0.95rem' }}
              >
                <option value="tech_agency">Paceployt Tech Agency (Website, Web / Mobile App)</option>
                <option value="consulting">Corporate Consulting & Tech Advisory</option>
                <option value="real_estate">Real Estate & Smart Property Development</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message / Project Brief</label>
              <textarea
                rows="2"
                required
                placeholder="Briefly describe your project or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="modal-input"
                style={{ padding: '0.7rem 0.95rem' }}
              ></textarea>
            </div>

            <div style={{ marginTop: '0.35rem' }}>
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.75rem 1.5rem', fontSize: '0.9rem', justifyContent: 'center' }}>
                Submit Request <Send size={15} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
