import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Mail,
  Sparkles,
  ArrowRight,
  Crown,
  Briefcase,
  Palette,
} from "lucide-react";
import "../index.css";

const LinkedinIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Division-level accent system
const DIVISIONS = {
  purple: {
    ring: "team-card-purple",
    tag: "skill-tag-purple",
    avatarFrom: "avatar-purple",
    avatarTo: "avatar-purple-dark",
    avatarText: "avatar-text-purple",
    badgeBg: "badge-purple",
    badgeBorder: "badge-border-purple",
    badgeText: "badge-text-purple",
    chip: "chip-purple",
  },
  amber: {
    ring: "team-card-amber",
    tag: "skill-tag-amber",
    avatarFrom: "avatar-amber",
    avatarTo: "avatar-amber-dark",
    avatarText: "avatar-text-amber",
    badgeBg: "badge-amber",
    badgeBorder: "badge-border-amber",
    badgeText: "badge-text-amber",
    chip: "chip-amber",
  },
  emerald: {
    ring: "team-card-emerald",
    tag: "skill-tag-emerald",
    avatarFrom: "avatar-emerald",
    avatarTo: "avatar-emerald-dark",
    avatarText: "avatar-text-emerald",
    badgeBg: "badge-emerald",
    badgeBorder: "badge-border-emerald",
    badgeText: "badge-text-emerald",
    chip: "chip-emerald",
  },
};

function Avatar({ member, d }) {
  return (
    <div className={`avatar-container ${d.ring}`}>
      <img
        src={member.image}
        alt={member.name}
        className="avatar-image"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      <div className={`avatar-fallback ${d.avatarFrom} ${d.avatarTo}`}>
        <span className={`avatar-fallback-text ${d.avatarText}`}>
          {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>

      <div className="avatar-gradient-overlay" />

      <div className="avatar-badge-wrapper">
        <div className={`avatar-badge ${d.badgeBg} ${d.badgeBorder}`}>
          <span className={`avatar-badge-text ${d.badgeText}`}>
            {member.division}
          </span>
        </div>
        <span className={`avatar-icon-wrapper ${d.chip}`}>
          <member.RoleIcon size={14} />
        </span>
      </div>
    </div>
  );
}

function SocialRow({ socials, name }) {
  return (
    <div className="social-row">
      {socials.linkedin && (
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={`${name}'s LinkedIn`}
        >
          <LinkedinIcon size={14} />
        </a>
      )}
      {socials.twitter && (
        <a
          href={socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={`${name}'s Twitter`}
        >
          <TwitterIcon size={14} />
        </a>
      )}
      {socials.github && (
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
          aria-label={`${name}'s GitHub`}
        >
          <GithubIcon size={14} />
        </a>
      )}
      {socials.email && (
        <a
          href={socials.email}
          className="social-link"
          aria-label={`Email ${name}`}
        >
          <Mail size={14} />
        </a>
      )}
    </div>
  );
}

export default function TeamSection({ onOpenContact }) {
  const teamMembers = [
    {
      id: 1,
      name: "Timothy",
      role: "Founder & Chief Executive Officer",
      division: "Business Strategy & Advisory",
      divisionColor: "amber",
      RoleIcon: Briefcase,
      bio: "Guides operational transformation and market-entry strategy for growth-stage clients, with a particular focus on agri-tech adoption.",
      skills: [
        "Corporate Strategy",
        "Operations",
        "Market Intelligence",
        "AgTech Advisory",
      ],
      image: "/images/team_consultant.jpg?v=2",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:consulting@paceployt.com",
      },
    },
    {
      id: 2,
      name: "Benjamin",
      role: "Lead Frontend Architect",
      division: "Software Engineer",
      divisionColor: "purple",
      RoleIcon: Crown,
      bio: "Built Paceployt on a core conviction: engineering, capital strategy, and hands-on advisory deliver the most value when combined under one roof. Sets the direction across every venture the studio takes on.",
      skills: [
        "Performance Optimization",
        "Tech Architecture",
        "Enterprise Strategy",
        "Venture Growth",
      ],
      image: "/images/team_ceo.jpg?v=3",
      socials: {
        linkedin: "https://www.linkedin.com/in/benjamin-olufemi-7524ab226",
        twitter: "https://twitter.com",
        email: "mailto:contact@paceployt.com",
      },
    },
    {
      id: 3,
      name: "George",
      role: "Head of Product & Design",
      division: "Product & Experience",
      divisionColor: "emerald",
      RoleIcon: Palette,
      bio: "Shapes the interfaces and design systems behind every Paceployt build, keeping client products consistent, usable, and fast to ship.",
      skills: [
        "UI/UX Architecture",
        "Design Systems",
        "Product Strategy",
        "User Research",
      ],
      image: "/images/team_designer.jpg?v=2",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mailto:design@paceployt.com",
      },
    },
  ];

  return (
    <section id="team" className="team-section">
      <div className="glow-spot-purple" />
      <div className="glow-spot-violet" />

      <div className="container">
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} className="section-badge-icon" />
              <span>OUR LEADERSHIP & TEAM</span>
            </div>

            <h2 className="section-title">
              Meet the Visionaries Behind{" "}
              <span className="gradient-text-purple">Paceployt</span>
            </h2>

            <p className="section-description">
              A multidisciplinary team of engineers, corporate strategists,
              product leaders, and industry advisors dedicated to building
              high-impact digital products and strategic growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="team-grid">
          {teamMembers.map((member, idx) => {
            const d = DIVISIONS[member.divisionColor];
            return (
              <ScrollReveal
                key={member.id}
                animation="fade-up"
                delay={100 * (idx + 1)}
                duration={650}
              >
                <div className={`team-card ${d.ring}`}>
                  <div className="team-card-avatar-wrapper">
                    <Avatar member={member} d={d} />
                  </div>

                  <div className="team-card-content">
                    <h3 className="team-member-name">{member.name}</h3>
                    <div className="team-member-role">{member.role}</div>
                    <p className="team-member-bio">{member.bio}</p>

                    <div className="skill-tags">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className={`skill-tag ${d.tag}`}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="team-card-divider">
                      <SocialRow socials={member.socials} name={member.name} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal animation="fade-up" delay={500}>
          <div className="cta-banner">
            <div className="cta-content">
              <h3 className="cta-title">
                Want to join the team, or bring us in on a project?
              </h3>
              <p className="cta-description">
                We're always open to partnering with strong engineering talent,
                industry advisors, and ambitious clients.
              </p>
            </div>

            <button onClick={onOpenContact} className="cta-button">
              Work With Us <ArrowRight size={18} className="cta-button-icon" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
