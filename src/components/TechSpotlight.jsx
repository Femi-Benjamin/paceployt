import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Cpu, Smartphone, Monitor, Cloud, Zap, ArrowRight } from 'lucide-react';

export default function TechSpotlight({ onOpenContact }) {
  const capabilities = [
    {
      title: 'Bespoke Web & SaaS Apps',
      icon: Monitor,
      desc: 'High-speed, responsive Web Apps built with React.js, Next.js, and modern CSS systems optimized for SEO & conversions.'
    },
    {
      title: 'Mobile App Engineering',
      icon: Smartphone,
      desc: 'Feature-rich native and cross-platform iOS & Android mobile applications engineered for high performance.'
    },
    {
      title: 'AI & Enterprise Automation',
      icon: Cpu,
      desc: 'Integrating frontier AI models, custom LLM agents, workflow automation, and intelligent data pipelines.'
    },
    {
      title: 'Cloud Infrastructure & Security',
      icon: Cloud,
      desc: 'Secure cloud deployment, microservices architecture, automated CI/CD pipelines, and 99.9% uptime reliability.'
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'rgba(9, 5, 20, 0.9)', position: 'relative' }}>
      <div className="container">
        <ScrollReveal variant="scale-up" delay={100}>
          <div className="glass-card-elevated">
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <div className="badge-pill badge-purple" style={{ marginBottom: '1rem' }}>
                  <Zap size={14} /> Our Flagship Superpower
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
                  Paceployt Tech <span className="gradient-text-purple">Digital Agency</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  Whether you need a bespoke website, a complex SaaS platform, or a custom mobile application, Paceployt's engineering team brings your vision to life with precision and speed.
                </p>

                <div className="grid-2" style={{ gap: '1.25rem', marginBottom: '2rem' }}>
                  {capabilities.map((cap, idx) => {
                    const Icon = cap.icon;
                    return (
                      <div key={idx} style={{ display: 'flex', gap: '0.75rem' }}>
                        <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(91, 26, 234, 0.2)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>{cap.title}</h4>
                          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>{cap.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button onClick={onOpenContact} className="btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                  Start Your Tech Build <ArrowRight size={18} />
                </button>
              </div>

              {/* Dedicated Visual Image for Tech Spotlight Studio */}
              <div style={{ position: 'relative' }}>
                <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(147, 51, 234, 0.3)', boxShadow: '0 25px 50px rgba(0,0,0,0.7)' }}>
                  <img src="/images/tech_agency_studio.jpg" alt="Paceployt Tech Digital Agency Studio" style={{ width: '100%', height: 'clamp(240px, 35vw, 380px)', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
