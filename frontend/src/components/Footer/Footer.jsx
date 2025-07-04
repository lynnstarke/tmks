import React, { useState } from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !isChecked) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setEmail('');
    setIsChecked(false);
    setIsSubmitting(false);

    // You could add success notification here
    console.log('Newsletter subscription submitted:', email);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-top">
          {/* Newsletter signup */}
          <div className="newsletter">
            <div className="newsletter-logo">
              <img src={logo} alt="The Mancave Studios Logo" />
            </div>
            <h3 className="newsletter-title">
              Meld je aan voor onze nieuwsbrief
            </h3>
            <p className="newsletter-text">
              Blijf voor op de wedstrijd. Ontvang nieuwe afleveringen voordat ze verschijnen.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="newsletter-checkbox">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    required
                  />
                  <span className="checkmark"></span>
                  Ik ga akkoord met het <a href="#privacy" className="privacy-link">privacybeleid</a>
                </label>
              </div>

              <div className="form-group">
                <div className="email-input-container">
                  <input
                    type="email"
                    placeholder="Voer je email adres in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    aria-label="Email adres"
                  />
                  <button
                    type="submit"
                    disabled={!email || !isChecked || isSubmitting}
                    aria-label="Verstuur nieuwsbrief aanmelding"
                  >
                    {isSubmitting ? 'Versturen...' : 'Verstuur'}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Navigation links */}
          <nav className="footer-nav" role="navigation" aria-label="Footer navigatie">
            <h4>Navigatie</h4>
            <ul>
              <li><a href="#shows" aria-label="Ga naar Shows pagina">Shows</a></li>
              <li><a href="#afleveringen" aria-label="Ga naar Afleveringen pagina">Afleveringen</a></li>
              <li><a href="#about" aria-label="Ga naar About pagina">About</a></li>
              <li><a href="#contact" aria-label="Ga naar Contact pagina">Contact</a></li>
            </ul>
          </nav>

          {/* Additional links */}
          <nav className="footer-legal" role="navigation" aria-label="Juridische links">
            <h4>Juridisch</h4>
            <ul>
              <li><a href="#privacy" aria-label="Bekijk ons privacybeleid">Privacy</a></li>
              <li><a href="#terms" aria-label="Bekijk onze voorwaarden">Voorwaarden</a></li>
              <li><a href="#cookies" aria-label="Bekijk ons cookiebeleid">Cookies</a></li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {currentYear} The Mancave Studios. Alle rechten voorbehouden.</p>
          <div className="social-icons" role="group" aria-label="Social media links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Volg ons op Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Volg ons op Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Volg ons op Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
