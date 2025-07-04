import React from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';
import './ContactPage.css';
import Footer from '../../components/Footer/Footer';

export default function ContactPage() {
  return (
    <section className="contact-page">
      {/* Left copy section */}
      <div className="contact-copy">
        <h1>Neem contact op</h1>
        <p>Heb je een idee, vraag of wil je gewoon even wat kwijt?</p>
        <p>
          Of je nu een samenwerking wilt bespreken, feedback hebt op een aflevering,
          of gewoon fan bent van wat we doen — laat van je horen.
        </p>
        <p>
          Wij staan open voor partnerships, suggesties, media-aanvragen en natuurlijk goede gesprekken.
          Vul het formulier in, dan nemen wij zo snel mogelijk contact met je op.
        </p>
      </div>

      {/* Right form card */}
      <div className="contact-form-wrapper">
        <ContactCard />
      </div>
      <footer className='footer'>
            <div>
                <Footer />
            </div>
        </footer>
    </section>
  );
}
