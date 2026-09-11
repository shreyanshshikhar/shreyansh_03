import { useEffect, useState } from 'react';
import './Home.css';

const roles = ['React Developer', 'MERN / MEAN Developer', 'Web Developer'];

const Arrow = () => <span className="arrow-mark" aria-hidden="true">↗</span>;

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const speed = deleting ? 42 : 72;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = role.slice(0, roleText.length + 1);
        setRoleText(next);
        if (next === role) setDeleting(true);
      } else {
        const next = role.slice(0, Math.max(0, roleText.length - 1));
        setRoleText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIndex((value) => (value + 1) % roles.length);
        }
      }
    }, roleText === role && !deleting ? 1500 : speed);

    return () => clearTimeout(timer);
  }, [roleText, deleting, roleIndex]);

  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) window.scrollTo({ top: section.offsetTop - 105, behavior: 'smooth' });
  };

  const stack = ['React', 'Angular', 'Node.js', 'Express', 'MongoDB'];

  return (
    <section className="hero-section" id="home">
      <div className="hero-rule" />

      <div className="hero-layout">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span>FRONTEND • FULL-STACK • WEB</span>
          </div>

          <div className="availability">
            <span className="availability-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-title">
            I build web products
            <span> people remember.</span>
          </h1>

          <div className="role-line">
            <span>Currently</span>
            <strong>{roleText}<i /></strong>
          </div>

          <p className="hero-description">
            I'm Shreyansh Shikhar Srivastava — a B.Tech Computer Science graduate
            building thoughtful, scalable web applications with React, Angular,
            Node.js and modern JavaScript.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="https://www.linkedin.com/in/shreyansh-shikhar-srivastava" target="_blank" rel="noopener noreferrer">
              Let's connect <Arrow />
            </a>
            <button className="button button-light" onClick={scrollToProjects}>
              Explore work <span className="arrow-mark">↓</span>
            </button>
          </div>

          <div className="hero-stack">
            <span className="stack-label">Core stack</span>
            <div className="stack-list">
              {stack.map((item, index) => (
                <span className="stack-item" key={item}>
                  <b>{String(index + 1).padStart(2, '0')}</b>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-frame">
            <div className="art-top">
              <span>SHREYANSH / 2026</span>
              <span>01 — INTRO</span>
            </div>

            <div className="art-center">
              <span className="art-small">ENGINEERING</span>
              <div className="art-monogram">S<span>/</span></div>
              <span className="art-small">WITH INTENT</span>
            </div>

            <div className="art-bottom">
              <span>BUILD / SHIP / IMPROVE</span>
              <span className="art-index">01</span>
            </div>
          </div>

          <div className="art-note note-one">
            <span>01</span>
            <strong>Clean interfaces</strong>
            <small>Detail over decoration.</small>
          </div>

          <div className="art-note note-two">
            <span>02</span>
            <strong>Full-stack thinking</strong>
            <small>Frontend to database.</small>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-footer-line" />
        <span>BASED IN INDIA</span>
      </div>
    </section>
  );
};

export default Home;
