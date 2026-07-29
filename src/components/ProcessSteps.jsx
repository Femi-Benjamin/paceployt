import React from 'react';
import { MessageSquare, Layout, Layers, Rocket } from 'lucide-react';

export default function ProcessSteps({ onOpenContact }) {
  const steps = [
    {
      number: '01',
      title: 'Ideation & Strategy',
      description: 'We align your goals with a clear, research-backed plan and technology roadmap.',
      icon: MessageSquare,
      btnText: 'CHAT NOW',
      action: onOpenContact,
      color: '#f59e0b'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'We craft user-focused designs, interactive prototypes, and functional mockups.',
      icon: Layout,
      btnText: 'LEARN MORE',
      action: () => {
        const el = document.getElementById('what-we-do');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      color: '#c084fc'
    },
    {
      number: '03',
      title: 'Development & Integration',
      description: 'We build powerful, scalable software solutions with seamless technology integration.',
      icon: Layers,
      btnText: 'LEARN MORE',
      action: () => {
        const el = document.getElementById('divisions');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      color: '#a855f7'
    },
    {
      number: '04',
      title: 'Launch & Growth Support',
      description: 'We ensure a smooth deployment and provide ongoing support to drive continuous growth.',
      icon: Rocket,
      btnText: 'GET STARTED',
      action: onOpenContact,
      color: '#10b981'
    }
  ];

  return (
    <section id="process-steps" className="section-padding" style={{ background: 'rgba(7, 4, 18, 0.95)', position: 'relative', borderTop: '1px solid rgba(91, 26, 234, 0.2)' }}>
      <div className="glow-spot-purple" style={{ top: '10%', right: '20%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--consult-amber)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
            OUR STEPS
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            From Vision to Execution, <span className="gradient-text-purple">Simplified in Four Phases</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)' }}>
            Our battle-tested four-step engineering methodology turns complex ideas into world-class digital products.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div
          className="grid-4"
          style={{
            alignItems: 'stretch'
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card-elevated"
                style={{
                  padding: '1.75rem 1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '100%',
                  background: 'linear-gradient(145deg, rgba(22, 12, 44, 0.85) 0%, rgba(11, 6, 24, 0.95) 100%)',
                  position: 'relative'
                }}
              >
                {/* Step Number Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: 'rgba(255, 255, 255, 0.25)',
                    letterSpacing: '0.1em'
                  }}
                >
                  PHASE {step.number}
                </div>

                {/* Top & Content Section */}
                <div style={{ width: '100%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Icon Circle */}
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto',
                      boxShadow: '0 0 25px rgba(217, 119, 6, 0.4)',
                      border: '2px solid rgba(251, 191, 36, 0.3)',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>

                {/* Pill Action Button - Locked to Bottom Straight Baseline */}
                <div style={{ marginTop: 'auto', paddingTop: '1.5rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <button
                    onClick={step.action}
                    style={{
                      padding: '0.5rem 1.4rem',
                      borderRadius: '9999px',
                      background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.8) 0%, rgba(180, 83, 9, 0.9) 100%)',
                      color: '#ffffff',
                      fontSize: '0.725rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      border: '1px solid rgba(251, 191, 36, 0.4)',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(217, 119, 6, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(217, 119, 6, 0.3)';
                    }}
                  >
                    {step.btnText}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
