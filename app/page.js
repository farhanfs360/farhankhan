"use client";

import { useEffect, useState } from 'react';

const Arrow = ({ size = 22, ...props }) => (
  <svg
    width={size}
    height={size * 0.55}
    viewBox="0 0 22 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 6h19M15 1l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeft = (props) => (
  <svg
    width="22"
    height="12"
    viewBox="0 0 22 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 6H2M7 1L2 6l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const services = [
  {
    title: 'WordPress Projects',
    subtitle: '280+ Project',
    image: '/images/service-wordpress.svg',
  },
  {
    title: 'Shopify Theme Coding',
    subtitle: '76+ Project',
    image: '/images/service-shopify.svg',
  },
  {
    title: 'Vibe Coding',
    subtitle: 'ReactJS | NextJS',
    image: '/images/service-vibe.svg',
  },
];

const projects = [
  { title: 'VPN Mobile App', category: 'Mobile App', image: '/images/project-1.svg' },
  { title: 'Streaming Mobile App', category: 'Mobile App', image: '/images/project-2.svg' },
  { title: 'Creative Digital Agency', category: 'Landing Page', image: '/images/project-3.svg' },
  { title: 'Podcast Mobile App', category: 'Mobile App', image: '/images/project-4.svg' },
  { title: 'Multimedia Design Platform', category: 'Web Design', image: '/images/project-5.svg' },
  { title: 'Parking Mobile App', category: 'Mobile App', image: '/images/project-6.svg' },
];

const testimonials = [
  {
    quote:
      'Stefan is a profesional worker who always gives resuslts that are beyond our expectacions, thanks for your services',
    name: 'Jasmin',
    role: 'Businessman',
  },
  {
    quote:
      'Working with Farhan was seamless from start to finish. He delivered our project ahead of schedule with outstanding quality',
    name: 'Michael',
    role: 'Startup Founder',
  },
  {
    quote:
      'Our online store has never performed better. Communication was clear and every request was handled quickly',
    name: 'Sarah',
    role: 'Store Owner',
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const testimonial = testimonials[activeTestimonial];

  const prevTestimonial = () =>
    setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () =>
    setActiveTestimonial((i) => (i + 1) % testimonials.length);

  return (
    <div className="page">
      <span className="glow glow-purple-left" aria-hidden="true" />
      <span className="glow glow-pink-right" aria-hidden="true" />
      <span className="glow glow-purple-bottom" aria-hidden="true" />

      {/* ---------- Navigation ---------- */}
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="#" className="logo">
            FARHAN<span>*</span>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
          <div id="nav-menu" className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </div>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <header className="hero" id="about">
        <div className="container hero-grid">
          <div className="hero-copy reveal reveal-left">
            <p className="hero-role">Web Developer</p>
            <h1 className="hero-name">Farhan Khan</h1>
            <div className="hero-underline" />
            <p>
              As a Senior Lead Developer at Scepter Marketing USA, I drive the development of high-performing WordPress and Shopify solutions tailored to client needs. My expertise spans creating custom themes, optimizing eCommerce platforms, enhancing user experiences, and ensuring seamless project execution from planning to launch. With over 12 years in web development, I manage cross-functional teams, lead front-end development initiatives, and collaborate closely with clients to deliver digital solutions that align with their brand vision and business objectives. My contributions have directly supported client growth, improved website performance, and strengthened long-term partnerships.
</p>
<p>
Previously, at LPS Brands, I played a key role in delivering innovative WordPress and Shopify solutions that elevated the company’s digital presence. I contributed to the successful rollout of multiple high-impact projects, improved site performance, and enhanced customer retention through strategic design and development. My work involved project management, front-end development, and cross-team collaboration to achieve high-quality, goal-driven outcomes.
            </p>
            <a href="#contact" className="link-arrow">
              Let&apos;s talk
              <Arrow />
            </a>
          </div>

          <div className="hero-photo reveal reveal-scale" style={{ '--d': '0.15s' }}>
            <img src="/images/hero-portrait.svg" alt="Portrait of Farhan Khan" />
          </div>

          <div className="hero-stats">
            <div className="reveal reveal-right" style={{ '--d': '0.25s' }}>
              <p className="stat-label">
                Years of
                <br />
                Experience
              </p>
              <p className="stat-value">16+</p>
            </div>
            <div className="reveal reveal-right" style={{ '--d': '0.4s' }}>
              <p className="stat-label">
                Complete
                <br />
                Project
              </p>
              <p className="stat-value">500+</p>
            </div>
            <div className="reveal reveal-right" style={{ '--d': '0.55s' }}>
              <p className="stat-label">Client</p>
              <p className="stat-value">200+</p>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Brand strip ---------- */}
      <section className="brand-strip">
        <div className="container brand-inner">
          {/* Behance */}
          <svg viewBox="0 0 140 40" role="img" aria-label="Behance" className="reveal">
            <text
              x="0"
              y="29"
              fontFamily="Georgia, serif"
              fontSize="26"
              fontWeight="700"
              fill="currentColor"
            >
              Bēhance
            </text>
          </svg>
          {/* Dribbble */}
          <svg viewBox="0 0 150 40" role="img" aria-label="Dribbble" className="reveal" style={{ '--d': '0.12s' }}>
            <circle cx="17" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2.4" />
            <path
              d="M8 13c7 5 12 10 15 18M11 28c4-6 10-9 17-9M22 10c-2 7-2 13 1 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <text
              x="36"
              y="28"
              fontFamily="'Segoe Script', 'Brush Script MT', cursive"
              fontSize="21"
              fontStyle="italic"
              fontWeight="600"
              fill="currentColor"
            >
              dribbble
            </text>
          </svg>
          {/* Upwork */}
          <svg viewBox="0 0 130 40" role="img" aria-label="Upwork" className="reveal" style={{ '--d': '0.24s' }}>
            <text
              x="0"
              y="29"
              fontFamily="Verdana, sans-serif"
              fontSize="25"
              fontWeight="700"
              fill="currentColor"
            >
              upwork
            </text>
          </svg>
          {/* Fiverr */}
          <svg viewBox="0 0 110 40" role="img" aria-label="Fiverr" className="reveal" style={{ '--d': '0.36s' }}>
            <text
              x="0"
              y="29"
              fontFamily="Arial, sans-serif"
              fontSize="26"
              fontWeight="700"
              fill="currentColor"
            >
              fiverr
            </text>
          </svg>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="services" id="services">
        <div className="container services-grid">
          <div className="services-copy reveal reveal-left">
            <h2 className="section-title">
              My Awesome
              <br />
              Service
            </h2>
            <p>
              Eget malesuada tortor ut sed. Tincidunt viverra malesuada nisl
              vehicula vestibulum. Ut blandit fermentum, cursus nulla. Imperdiet
              neque mi convallis quis interdum sagittis.
            </p>
          </div>

          <div className="service-list">
            {services.map((service, i) => (
              <a
                key={service.title}
                href="#portfolio"
                className="service-card reveal reveal-right"
                style={{ '--d': `${i * 0.15}s` }}
              >
                <img className="service-thumb" src={service.image} alt="" />
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Portfolio ---------- */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio-panel">
            <div className="portfolio-head reveal">
              <h2 className="section-title">Our Portofolio</h2>
              <a href="#portfolio" className="see-all">
                See All
                <Arrow />
              </a>
            </div>

            <div className="portfolio-grid">
              {projects.map((project, i) => (
                <a
                  key={project.title}
                  href="#portfolio"
                  className="project-card reveal"
                  style={{ '--d': `${(i % 3) * 0.12}s` }}
                >
                  <div className="project-thumb">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Testimonial ---------- */}
      <section className="testimonial">
        <div className="container testimonial-grid">
          <div className="testimonial-photo reveal reveal-left">
            <img src="/images/testimonial.svg" alt={`Photo of ${testimonial.name}`} />
          </div>

          <div className="reveal reveal-right" style={{ '--d': '0.15s' }}>
            <svg
              className="quote-mark"
              width="52"
              height="40"
              viewBox="0 0 52 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M0 40V24.6C0 10.8 6.9 2.6 20.6 0l2.8 6.2c-7.7 2.3-11.6 6.8-11.9 13.4H22V40H0Zm30 0V24.6C30 10.8 36.9 2.6 50.6 0l1.4 6.2c-7.7 2.3-11.6 6.8-11.9 13.4H52V40H30Z" />
            </svg>
            <p className="testimonial-quote quote-swap" key={`quote-${activeTestimonial}`}>
              {testimonial.quote}
            </p>
            <div className="testimonial-meta">
              <div className="testimonial-author quote-swap" key={`author-${activeTestimonial}`}>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
              <div className="testimonial-nav">
                <button type="button" aria-label="Previous testimonial" onClick={prevTestimonial}>
                  <ArrowLeft />
                </button>
                <button
                  type="button"
                  className="active"
                  aria-label="Next testimonial"
                  onClick={nextTestimonial}
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta" id="contact">
        <div className="container cta-grid">
          <div className="reveal reveal-left">
            <h2 className="cta-title">Want to make awesome and impactful Product?</h2>
            <a href="mailto:hello@farhankhan.dev" className="cta-link">
              Contact Us
              <Arrow />
            </a>
          </div>
          <div className="cta-photo reveal reveal-right" style={{ '--d': '0.15s' }}>
            <img src="/images/cta-laptop.svg" alt="Laptop showing design and development work" />
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container reveal">
          <h4>Follow us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14 3h-2.5A3.5 3.5 0 0 0 8 6.5V9H5.5v3.5H8V21h3.5v-8.5H14L14.8 9h-3.3V6.8c0-.7.3-1.3 1.3-1.3H15V3h-1Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7.5 10.5V17M7.5 7.3v.2M11.5 17v-4a2.3 2.3 0 0 1 4.6 0v4" />
              </svg>
            </a>
            <a href="#" aria-label="Dribbble">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M5.5 6.5c5 3.5 8.5 7.5 10.5 13.5M7.5 19c3-4.5 7.5-6.5 13-6M17 5c-1.5 5-1.5 9.5.5 14" />
              </svg>
            </a>
            <a href="mailto:hello@farhankhan.dev" aria-label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
