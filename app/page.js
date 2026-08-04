'use client';

import { useEffect, useState } from 'react';

/* ---------- small inline icons ---------- */

const Icon = ({ path, size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {path}
  </svg>
);

const icons = {
  code: <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10 18.5h4" />
    </>
  ),
  api: (
    <>
      <circle cx="5" cy="12" r="2.5" />
      <circle cx="19" cy="5" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M7.3 10.8 16.7 6.2M7.3 13.2l9.4 4.6" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6.5 15h4" />
    </>
  ),
  mentor: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.8-3.4 3.6-5.5 7-5.5s6.2 2.1 7 5.5" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrowUp: <path d="M12 19V5m-6 6 6-6 6 6" />,
  send: <path d="m3 11 18-8-8 18-2.5-7.5L3 11Z" />,
  download: <path d="M12 4v11m-5-4 5 5 5-5M5 20h14" />,
  facebook: <path d="M14 3h-2.5A3.5 3.5 0 0 0 8 6.5V9H5.5v3.5H8V21h3.5v-8.5H14L14.8 9h-3.3V6.8c0-.7.3-1.3 1.3-1.3H15V3h-1Z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.3v.2M11.5 17v-4a2.3 2.3 0 0 1 4.6 0v4" />
    </>
  ),
  github: (
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
};

/* ---------- content ---------- */

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    icon: 'code',
    title: 'Web Development',
    text: 'Modern and mobile-ready website that will help you reach all of your marketing.',
  },
  {
    icon: 'briefcase',
    title: 'Project Management',
    text: 'Manage projects efficiently by combining strategic planning, clear communication, and seamless execution.',
  },
  {
    icon: 'phone',
    title: 'App Development',
    text: 'Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    icon: 'api',
    title: 'API Design / Integration',
    text: 'Developing a highly secure, fast and scalable APIs both REST and GraphQL.',
  },
  {
    icon: 'card',
    title: 'Payment Integration',
    text: 'Automate the process of payments to allow users pay right on your platform.',
  },
  {
    icon: 'mentor',
    title: 'Mentorship',
    text: 'Finds great joy in sharing my knowledge with others. As a technical mentor this allows me to give back to the community.',
  },
];

const education = [
  {
    title: 'Aptech AMSP Specialize',
    sub: 'Software Development · 2010 – 2013',
    text: 'Diligently attended software development courses, advancing skills and knowledge. With this being a continuous improvement, I get to work to contribute effectively in software development roles.',
  },
  {
    title: 'Karachi University of Science and Technology (UoK)',
    sub: 'Graduate · 2009',
    text: 'Completed graduation building a strong academic foundation for a career in software and web development.',
  },
];

const experience = [
  {
    title: 'Scepter Marketing · USA',
    sub: 'Web Developer | WordPress | Shopify · August 2024 – Present',
    text: 'Create web applications that maintain high standards of code quality and smart application design to ensure optimal performance, uptime, and scale.',
  },
  { title: 'FullStep 360 · USA', sub: 'Web Developer', text: '' },
  { title: 'LPS Brands · Dubai / UAE', sub: 'Web Developer', text: '' },
  { title: 'Go4Web Tech', sub: 'Web Developer', text: '' },
  { title: 'Premiersoft Technologies', sub: 'Web Developer', text: '' },
  { title: 'Korean Kenya Solar Limited', sub: 'Web Developer', text: '' },
  { title: 'Web Cloud Ltd', sub: 'Web Developer', text: '' },
];

const skills = [
  { name: 'Javascript', glyph: 'JS', color: '#f7df1e' },
  { name: 'Typescript', glyph: 'TS', color: '#3178c6' },
  { name: 'WordPress', glyph: 'W', color: '#21759b' },
  { name: 'PHP', glyph: 'php', color: '#777bb3' },
  { name: 'Next.Js', glyph: 'N', color: '#e4e4e7' },
  { name: 'Shopify', glyph: 'S', color: '#95bf47' },
  { name: 'Tailwind CSS', glyph: 'tw', color: '#38bdf8' },
  { name: 'Bootstrap', glyph: 'B', color: '#7952b3' },
  { name: 'jQuery', glyph: 'jQ', color: '#0769ad' },
  { name: 'Figma', glyph: 'F', color: '#f24e1e' },
];

const projects = [
  {
    category: 'Website',
    title: 'Mount Kenya Wildlife Conservancy',
    text: 'A non-profit trust dedicated to preserving the environment and the wildlife within.',
    image: '/images/project-mount-kenya.svg',
  },
  {
    category: 'Web Application',
    title: 'Third African Congress on Conservation Agriculture (3ACCA)',
    text: 'A Congress for building a Resilient Future in Africa through Conservation Agriculture and Sustainable Mechanisation.',
    image: '/images/project-3acca.svg',
  },
  {
    category: 'Mobile Application · iOS, Android',
    title: 'Paya',
    text: 'Paya lets you open a bank account in minutes and send money to anyone in seconds. Pay bills, make purchases, and transfer money with the Paya app.',
    image: '/images/project-paya.svg',
  },
  {
    category: 'Website',
    title: 'QNET Say NO! campaign',
    text: 'A website to mobilise stakeholder action against job scams, human trafficking and illegal migration in Africa.',
    image: '/images/project-qnet.svg',
  },
  {
    category: 'Web Application',
    title: 'The Newmark Group Limited',
    text: 'A leading African Integrated Marketing Communications (IMC) firm that ranks among the fastest growing with a strong presence in the Multinational Brand segment of the market.',
    image: '/images/project-newmark.svg',
  },
];

const contactPoints = [
  '15+ Years of Experience',
  'Professional Web Developer',
  'Website & E-Commerce Sites',
  'Technical Mentor',
  'Project Leadership',
];

const socials = [
  { icon: 'facebook', label: 'Facebook', href: '#' },
  { icon: 'instagram', label: 'Instagram', href: '#' },
  { icon: 'linkedin', label: 'LinkedIn', href: '#' },
  { icon: 'github', label: 'GitHub', href: '#' },
  { icon: 'mail', label: 'Email', href: 'mailto:hello@farhankhan.dev' },
];

/* ---------- page ---------- */

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.target.reset();
  };

  return (
    <div className="page" id="home">
      {/* ---------- Navigation ---------- */}
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="#home" className="logo">
            Farhan Khan
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <Icon path={<path d="M5 5l14 14M19 5L5 19" />} />
            ) : (
              <Icon path={<path d="M3 6h18M3 12h18M3 18h18" />} />
            )}
          </button>
          <div id="nav-menu" className={`nav-links${menuOpen ? ' open' : ''}`}>
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={i === 0 ? 'active' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal reveal-left">
            <p className="hero-hello">Hello, my name is</p>
            <h1 className="hero-name">Farhan Khan</h1>
            <p className="hero-role">Senior Level Web Developer</p>
            <p className="hero-intro">
              I&apos;m a Web Developer specializing in WordPress, Shopify, and modern web
              technologies, building fast, scalable, and user-friendly websites with
              AI-powered workflows and vibe coding. I also lead development teams, manage
              projects, and drive technical excellence.
            </p>
            <div className="hero-actions">
              <a href="/resume.pdf" className="btn btn-primary" download>
                Download Resume
                <Icon path={icons.download} size={18} />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
            </div>
            <div className="social-row">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <Icon path={icons[social.icon]} size={19} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-photo reveal reveal-right" style={{ '--d': '0.15s' }}>
            <img src="/images/portrait.png" alt="Portrait of Farhan Khan" />
          </div>
        </div>
      </header>

      {/* ---------- About ---------- */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-photo reveal reveal-left">
            <img src="/images/about.png" alt="Farhan Khan at his workstation" />
          </div>
          <div className="reveal reveal-right" style={{ '--d': '0.12s' }}>
            <p className="about-kicker">About Me</p>
            <h2>
              Driven, innovative
              <br />
              <span className="accent">Website Engineer</span>
            </h2>
            <p>
              I drive the development of high-performing WordPress and Shopify solutions
              tailored to client needs. My expertise spans creating custom themes,
              optimizing eCommerce platforms, enhancing user experiences, and ensuring
              seamless project execution from planning to launch.
            </p>
            <p>
              With over 12 years in web development, I manage cross-functional teams, lead
              front-end development initiatives, and collaborate closely with clients to
              deliver digital solutions that align with their brand vision and business
              objectives. My contributions have directly supported client growth, improved
              website performance, and strengthened long-term partnerships.
            </p>
            <p className="about-fun">I like to make things easy and fun</p>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">
              My <span className="accent">Special Services</span> For your
              <br />
              Business <span className="accent">Development</span>
            </h2>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="service-card reveal"
                style={{ '--d': `${(i % 3) * 0.12}s` }}
              >
                <span className="service-icon">
                  <Icon path={icons[service.icon]} size={28} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Resume ---------- */}
      <section className="resume" id="resume">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-kicker">My Resume</p>
            <h2 className="section-title">
              Real <span className="accent">Problem Solutions</span> Experience
            </h2>
          </div>
          <div className="resume-grid">
            <div className="resume-col reveal reveal-left">
              <h3>Education</h3>
              <div className="timeline">
                {education.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <h4>{item.title}</h4>
                    <p className="tl-sub">{item.sub}</p>
                    {item.text ? <p>{item.text}</p> : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="resume-col reveal reveal-right" style={{ '--d': '0.12s' }}>
              <h3>Experience</h3>
              <div className="timeline">
                {experience.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <h4>{item.title}</h4>
                    <p className="tl-sub">{item.sub}</p>
                    {item.text ? <p>{item.text}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="skills" id="skills">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-kicker">My Talent</p>
            <h2 className="section-title">Professional Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="skill-card reveal"
                style={{ '--d': `${(i % 5) * 0.08}s` }}
              >
                <span className="skill-icon" style={{ background: skill.color }}>
                  {skill.glyph}
                </span>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-kicker">Latest Works</p>
            <h2 className="section-title">
              Explore My Popular <span className="accent">Projects</span>
            </h2>
          </div>
          {projects.map((project, i) => (
            <div key={project.title} className={`project-row${i % 2 ? ' flip' : ''}`}>
              <div className="project-media reveal reveal-left">
                <img src={project.image} alt={`Screenshot of ${project.title}`} />
              </div>
              <div className="project-info reveal reveal-right" style={{ '--d': '0.12s' }}>
                <p className="project-cat">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <a href="#contact" className="project-link">
                  View Project
                  <Icon path={<path d="M7 17 17 7M9 7h8v8" />} size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-info reveal reveal-left">
            <p className="contact-kicker">Get In Touch</p>
            <h2>
              Let&apos;s Talk For your
              <br />
              <span className="accent">Next Projects</span>
            </h2>
            <p>
              Discuss a project or just want to say hi? Connect with me via email or
              through a phone call.
            </p>
            <ul className="contact-points">
              {contactPoints.map((point) => (
                <li key={point}>
                  <Icon path={icons.check} size={18} />
                  {point}
                </li>
              ))}
            </ul>
            <div className="social-row">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <Icon path={icons[social.icon]} size={19} />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form reveal reveal-right" style={{ '--d': '0.12s' }} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="+92 (300) 0000000" />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." required />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Send Message
                <Icon path={icons.send} size={17} />
              </button>
            </div>
            {sent ? (
              <p className="form-sent" role="status">
                Thanks! Your message has been noted — I&apos;ll get back to you soon.
              </p>
            ) : null}
          </form>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>Copyright ©2026, Farhan Khan. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#resume">Resume</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <button
            type="button"
            className="to-top"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Icon path={icons.arrowUp} size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
}
