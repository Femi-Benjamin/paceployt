import React from 'react';
import { GraduationCap, Code, Server, Palette, CheckCircle, ArrowRight, Award, Users, BookOpen } from 'lucide-react';

export default function AcademyHighlight({ onOpenContact }) {
  const tracks = [
    {
      title: 'Frontend Development Track',
      tech: 'React.js, JavaScript (ES6+), Modern CSS, Vite',
      icon: Code,
      color: 'var(--tech-cyan)',
      desc: 'Build high-performance, interactive user interfaces with modern React, hooks, state management, and responsive CSS frameworks.',
      features: ['Hands-on React projects', 'Component design architecture', 'API integration & state management', 'Portfolio development']
    },
    {
      title: 'Backend Development Track',
      tech: 'Node.js, Express, PHP, MySQL, REST APIs',
      icon: Server,
      color: '#a78bfa',
      desc: 'Master scalable server-side engineering, database modeling, secure authentication, and robust RESTful API construction.',
      features: ['Node.js & PHP server logic', 'Database design & queries', 'Authentication & JWT security', 'Server deployment']
    },
    {
      title: 'UI/UX Design Track',
      tech: 'Figma, Wireframing, Prototyping, Design Systems',
      icon: Palette,
      color: '#f43f5e',
      desc: 'Craft intuitive, user-centered digital product interfaces, interactive prototypes, design systems, and visual micro-animations.',
      features: ['Figma masterclass', 'User research & wireframing', 'Design tokens & component systems', 'Portfolio critique & presentation']
    }
  ];

  return (
    <section id="academy" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="glow-spot-purple" style={{ top: '20%', right: '-150px' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-pill badge-academy" style={{ marginBottom: '1rem' }}>
            <GraduationCap size={14} /> Paceployt Tech Academy
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            Shaping Next-Gen <span style={{ color: '#a78bfa' }}>Tech Leaders & Software Engineers</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            We don't just build digital solutions—we equip aspiring developers and designers with hands-on, practical expertise to build thriving tech careers.
          </p>
        </div>

        {/* 3 Training Tracks */}
        <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  borderTop: `4px solid ${track.color}`
                }}
              >
                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: `${track.color}20`,
                      color: track.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem' }}>{track.title}</h3>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: track.color, marginBottom: '1rem' }}>
                    {track.tech}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {track.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    {track.features.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        <CheckCircle size={14} style={{ color: track.color }} /> {f}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="btn-secondary"
                  style={{ width: '100%', fontSize: '0.875rem', justifyContent: 'center' }}
                >
                  Apply For Track <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Academy Callout Banner */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(7, 11, 20, 0.9) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <Award size={28} style={{ color: '#a78bfa' }} />
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Ready to Start Your Tech Journey with Paceployt Academy?</h3>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 1.75rem auto' }}>
            Get mentorship from active software engineers, build real client-grade projects, and join over 1,000+ empowered graduates setting the pace across the globe.
          </p>
          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', padding: '0.9rem 2rem' }}
          >
            Enroll in Next Cohort <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
