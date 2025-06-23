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

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false); // scrolling down
      } else {
        setIsScrollingUp(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrollingUp ? 'show' : 'hide'}`}>
      <div className='navbarLeft'>
        <div className='navbarLogo'>
          <img src={logo} alt='Logo' />
        </div>

        <div className={`navbarLinks ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/podcasts" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Podcasts
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
        </div>
      </div>

      <div className='navbarActions'>
        <img src={search} alt='Search' />
        <img src={heart} alt='Heart' />
        <img src={user} alt='User' />

        <div className='burger' onClick={() => setMenuOpen(!menuOpen)}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </nav>
  );
}
