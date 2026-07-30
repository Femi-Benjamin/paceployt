import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ExternalLink, ShieldCheck, Zap, TrendingUp, Lock, Wallet, ArrowRight } from 'lucide-react';

export default function PaveSpotlight({ onOpenContact }) {
  return (
    <section id="pave-spotlight" className="section-padding" style={{ position: 'relative' }}>
      <div className="glow-spot-purple" style={{ top: '10%', right: '5%' }}></div>
      <div className="glow-spot-violet" style={{ bottom: '10%', left: '5%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <ScrollReveal variant="scale-up" delay={100}>
          <div
            className="glass-card-elevated"
            style={{
              background: 'linear-gradient(145deg, rgba(32, 16, 64, 0.95) 0%, rgba(14, 8, 28, 0.98) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.45)',
              boxShadow: '0 30px 60px -12px rgba(91, 26, 234, 0.35)'
            }}
          >
            <div className="grid-2" style={{ alignItems: 'center' }}>
              
              {/* Content Column */}
              <div>
                <div className="badge-pill badge-purple" style={{ marginBottom: '1rem' }}>
                  <Zap size={14} /> Flagship Proprietary Product
                </div>

                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
                  PAVE — <span className="gradient-text-purple">Let's Build Wealth Together</span>
                </h2>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  Engineered from the ground up by <strong style={{ color: '#ffffff' }}>Paceployt Tech</strong>, PAVE is a premier next-generation digital wealth & financial technology ecosystem designed to help individuals and enterprises build wealth, automate savings, and process secure transactions seamlessly.
                </p>

                {/* Product Feature Pills */}
                <div className="grid-2" style={{ gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(91, 26, 234, 0.25)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff' }}>Smart Wealth Growth</h4>
                      <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Automated digital savings & returns</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.25)', color: 'var(--agri-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Lock size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff' }}>Bank-Grade Security</h4>
                      <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Encrypted transaction infrastructure</p>
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://pave-fintech-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
                  >
                    Launch Live PAVE App <ExternalLink size={18} />
                  </a>

                  <button
                    onClick={onOpenContact}
                    className="btn-secondary"
                    style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
                  >
                    Inquire Fintech Build <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Visual Image & Interactive Live Card */}
              <div>
                <div
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(168, 85, 247, 0.4)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                    position: 'relative',
                    height: 'clamp(240px, 35vw, 380px)'
                  }}
                >
                  <img
                    src="/images/pave_fintech.jpg"
                    alt="PAVE Fintech App Dashboard"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,5,20,0.92) 0%, transparent 60%)' }}></div>
                  
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>PAVE Fintech</div>
                      <div style={{ fontSize: '0.8rem', color: '#c084fc', fontWeight: 700 }}>Let's Build Wealth Together</div>
                    </div>
                    
                    <a
                      href="https://pave-fintech-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.45rem 0.9rem',
                        borderRadius: '9999px',
                        background: 'rgba(91, 26, 234, 0.8)',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '0.775rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
