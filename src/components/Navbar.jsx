import { useState, useEffect } from 'react';

const NAV_SECTIONS = [
  { id: 'person',   href: '/'          },
  { id: 'projects', href: '#projects'  },
  { id: 'skills',   href: '#skills'    },
  { id: 'about',    href: '#about'     },
  { id: 'contact',  href: '#contact'   },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState('person');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (href) => {
    if (href === '/') return activeSection === 'person';
    return activeSection === href.replace('#', '');
  };

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleNavClick   = () => setMenuOpen(false);

  return (
    <header className="navigation">
      <nav className="navbar">
        <ul className={`nav-menu${menuOpen ? ' ativo' : ''}`}>
          <li className="nav-item">
            <a href="/" className={isActive('/') ? 'active' : ''} onClick={handleNavClick}>
              Início
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={isActive('#projects') ? 'active' : ''} onClick={handleNavClick}>
              Projetos
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className={isActive('#skills') ? 'active' : ''} onClick={handleNavClick}>
              Habilidades
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className={isActive('#about') ? 'active' : ''} onClick={handleNavClick}>
              Sobre mim
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className={isActive('#contact') ? 'active' : ''} onClick={handleNavClick}>
              <i className="fa-regular fa-user"></i>
            </a>
          </li>
        </ul>

        <div className={`menu${menuOpen ? ' ativo' : ''}`} onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}
