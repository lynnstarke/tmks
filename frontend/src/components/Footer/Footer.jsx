import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';  // ← Import your logo

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Newsletter signup */}
        <div className="newsletter">
          <div className="newsletter-logo">
            <img src={logo} alt="Site Logo" />
          </div>
          <h3 className="newsletter-title">
            Meld je aan voor onze nieuwsbrief
          </h3>
          <p className="newsletter-text">
            Blijf voor op de wedstrijd. Ontvang nieuwe afleveringen voordat ze verschijnen.
          </p>
          <label className="newsletter-checkbox">
            <input type="checkbox" />
            Ik ga akkoord met het privacybeleid
          </label>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Email" />
            <button type="submit">Verstuur</button>
          </form>
        </div>

        {/* Navigation links */}
        <nav className="footer-nav">
          <h4>Navigatie</h4>
          <ul>
            <li><a href="#shows">Shows</a></li>
            <li><a href="#afleveringen">Afleveringen</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2025 The Mancave Studios. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
