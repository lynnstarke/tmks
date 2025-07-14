import './Navigation.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import heart from '../../assets/images/heart.png';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrollingUp ? 'show' : 'hide'}`}>
      <div className='navbarContainer'>
        <div className='navbarLeft'>
          <div className='navbarLogo'>
            <img src={logo} alt='Logo' />
          </div>

          <div className={`navbarLinks ${menuOpen ? 'open' : ''}`}>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/podcasts"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={handleLinkClick}
            >
              Podcasts
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={handleLinkClick}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className='navbarActions'>
          <div className='navbarIcons'>
            <button className='icon-btn' aria-label='Search'>
              <img src={search} alt='Search' />
            </button>
            <button className='icon-btn' aria-label='Favorites'>
              <img src={heart} alt='Heart' />
            </button>
            <button className='icon-btn' aria-label='User Profile'>
              <img src={user} alt='User' />
            </button>
          </div>

          <button
            className={`burger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle navigation menu'
            aria-expanded={menuOpen}
          >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && <div className='mobile-overlay' onClick={() => setMenuOpen(false)}></div>}
    </nav>
  );
}
