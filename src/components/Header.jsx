import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import images from '../assets/images';
import './Header.css';

const NAV = [
  { to: '/solutions', label: 'Solutions' },
  { to: '/shop', label: 'Energy Shop' },
  { to: '/hub', label: 'Energy Hub' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__logo" aria-label="Morph Energies home">
          <img src={images.logo} alt="Morph Energies" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className="nav-link">
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && <span className="nav-link__underline" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__cta">
          <Link to="/partnerships" className="btn-ghost">Partner with Morph</Link>
          <Link to="/contact" className="btn-solid">Talk to Morph</Link>
        </div>

        <button
          type="button"
          className="site-header__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="site-header__drawer">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="drawer-link">{item.label}</Link>
          ))}
          <div className="site-header__drawer-cta">
            <Link to="/partnerships" className="drawer-btn drawer-btn--ghost">Partner with Morph</Link>
            <Link to="/contact" className="drawer-btn drawer-btn--solid">Talk to Morph</Link>
          </div>
        </div>
      )}
    </header>
  );
}
