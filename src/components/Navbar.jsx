import { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'home', text: 'Home' },
  { id: 'technologies', text: 'Stack' },
  { id: 'education', text: 'Education' },
  { id: 'projects', text: 'Work' },
  { id: 'certifications', text: 'Certificates' },
  { id: 'contact', text: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const marker = window.scrollY + 180;
      let current = 'home';

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && marker >= section.offsetTop && marker < section.offsetTop + section.offsetHeight) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (!section) return;
    window.scrollTo({ top: section.offsetTop - 105, behavior: 'smooth' });
  };

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => goTo('home')} aria-label="Go to home">
          <span className="brand-mark">S</span>
          <span className="brand-name">Shreyansh<span>.</span></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => goTo(item.id)}
            >
              {item.text}
            </button>
          ))}
          <a
            className="nav-resume mobile-resume"
            href="/Shreyansh_Shikhar_Srivastava_Final_Resume.pdf"
            download="Shreyansh_Shikhar_Srivastava_Resume.pdf"
          >
            Resume <span>↗</span>
          </a>
        </nav>

        <a
          className="nav-resume desktop-resume"
          href="/Shreyansh_Shikhar_Srivastava_Final_Resume.pdf"
          download="Shreyansh_Shikhar_Srivastava_Resume.pdf"
        >
          Resume <span>↗</span>
        </a>

        <button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
