import React, { useState } from 'react';
import './KJEGPage.css';
import kjegBanner from '../../assets/images/kjegimage.png';
import podcastImage from '../../assets/images/podcastImage.png';
import egmond from '../../assets/images/egmond.png';
import kieft from '../../assets/images/kieft.png';
import jansen from '../../assets/images/jansen.png';
import gijp from '../../assets/images/gijp.png';
import { FaInstagram, FaSpotify, FaYoutube, FaApple } from 'react-icons/fa';
import ShortsHome from '../../components/ShortsHome/ShortsHome';
import Footer from '../../components/Footer/Footer';

const episodes = [
  { date: '14 April 2025', quote: 'Ze gooien gewoon met een bidon…' },
  { date: '10 April 2025', quote: 'De gekste vraag tijdens een onderhandeling?' },
  { date: '7 April 2025', quote: 'Max Verstappen had een restaurantje kunnen pakken…' },
  { date: '3 April 2025', quote: 'Waarom zijn jullie geen trainer geworden?' },
  { date: '31 March 2025', quote: 'Wouter Goes heeft weer iemand geknepen…' },
  { date: '27 March 2025', quote: 'De assistent was bozer dan de hoofdtrainer…' },
  { date: '24 March 2025', quote: 'Er zat een duif op de bal…' },
  { date: '20 March 2025', quote: 'Van Basten belde op een scooter!' },
];

const INITIAL_VISIBLE = 5;

export default function KJEPodcastPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <div className="kjeg-page">
      {/* Banner */}
      <div className="kjeg-banner-wrapper">
        <div className="kjeg-banner-container">
          <img src={kjegBanner} alt="KJEG Podcast Banner" className="kjeg-banner" />
          <div className="kjeg-banner-overlay">
            <div className="kjeg-logo-container">
              <img src={podcastImage} alt="KJEG Podcast Logo" className="kjeg-logo" />
            </div>
            <div className="kjeg-banner-content">
              <h1 className="kjeg-title">KieftJansenEgmondGijp</h1>
              <div className="kjeg-social-icons">
                <a href="#" aria-label="Instagram" className="kjeg-social-link">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Spotify" className="kjeg-social-link">
                  <FaSpotify />
                </a>
                <a href="#" aria-label="YouTube" className="kjeg-social-link">
                  <FaYoutube />
                </a>
                <a href="#" aria-label="Apple Podcasts" className="kjeg-social-link">
                  <FaApple />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="kjeg-about-section">
        <h2 className="kjeg-about-title">Over de show</h2>
        <div className="kjeg-about-grid">
          <div className="kjeg-about-textbox">
            <div className="kjeg-about-header">
              <div className="kjeg-about-icon">
                <img src={podcastImage} alt="KJEG Podcast" />
              </div>
              <div className="kjeg-about-meta">
                <h3 className="kjeg-about-subtitle">Voetbaltalk op z'n best</h3>
                <div className="kjeg-about-stats">
                  <span className="kjeg-stat">
                    <span className="kjeg-stat-number">50+</span>
                    <span className="kjeg-stat-label">Episodes</span>
                  </span>
                  <span className="kjeg-stat">
                    <span className="kjeg-stat-number">Weekly</span>
                    <span className="kjeg-stat-label">New Episodes</span>
                  </span>
                </div>
              </div>
            </div>
            <p className="kjeg-about-description">
              Wim Kieft, Rob Jansen, Michel van Egmond en René van der Gijp bespreken wekelijks op geheel eigen wijze
              de wondere wereld van het topvoetbal. Van transfergeruchten tot tactische analyses, van anekdotes
              uit het verleden tot de nieuwste ontwikkelingen - niets blijft onbesproken in deze unieke podcast.
            </p>
          </div>
          <div className="kjeg-hosts">
            <div className="kjeg-hosts-header">
              <h3 className="kjeg-hosts-title">Presentatoren</h3>
            </div>
            <div className="kjeg-host">
              <img src={egmond} alt="Michel van Egmond" />
              <div className="kjeg-host-info">
                <span className="kjeg-host-name">Michel van Egmond</span>
                <span className="kjeg-host-role">Sportjournalist</span>
              </div>
            </div>
            <div className="kjeg-host">
              <img src={kieft} alt="Wim Kieft" />
              <div className="kjeg-host-info">
                <span className="kjeg-host-name">Wim Kieft</span>
                <span className="kjeg-host-role">Voormalig international</span>
              </div>
            </div>
            <div className="kjeg-host">
              <img src={jansen} alt="Rob Jansen" />
              <div className="kjeg-host-info">
                <span className="kjeg-host-name">Rob Jansen</span>
                <span className="kjeg-host-role">Voetbalanalist</span>
              </div>
            </div>
            <div className="kjeg-host">
              <img src={gijp} alt="René van der Gijp" />
              <div className="kjeg-host-info">
                <span className="kjeg-host-name">René van der Gijp</span>
                <span className="kjeg-host-role">Voetbalcommentator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="kjeg-episodes-section">
        <div className="kjeg-episodes-header">
          <h2 className="kjeg-episodes-title">Afleveringen</h2>
          <div className="kjeg-episodes-meta">
            <span className="kjeg-episodes-count">{episodes.length} afleveringen beschikbaar</span>
            <div className="kjeg-episodes-filter">
              <button className="kjeg-filter-btn active">Alle</button>
              <button className="kjeg-filter-btn">Recent</button>
            </div>
          </div>
        </div>

        <div className="kjeg-episodes-list">
          {episodes.slice(0, visibleCount).map((episode, index) => (
            <article
              key={`episode-${index}`}
              className="kjeg-episode-item"
              role="button"
              tabIndex={0}
            >
              <div className="kjeg-episode-number">
                #{episodes.length - index}
              </div>
              <div className="kjeg-episode-icon">
                <img src={podcastImage} alt="KJEG Podcast Episode" />
                <div className="kjeg-episode-play-overlay">
                  <div className="kjeg-play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="kjeg-episode-content">
                <div className="kjeg-episode-header">
                  <time className="kjeg-episode-date" dateTime={episode.date}>
                    {episode.date}
                  </time>
                  <span className="kjeg-episode-duration">45 min</span>
                </div>
                <h3 className="kjeg-episode-quote">"{episode.quote}"</h3>
                <div className="kjeg-episode-actions">
                  <button className="kjeg-action-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                    Luister nu
                  </button>
                  <button className="kjeg-action-btn kjeg-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Favoriet
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="kjeg-load-more-container">
          {visibleCount < episodes.length && (
            <button className="kjeg-load-more" onClick={handleLoadMore}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Meer Afleveringen Laden
            </button>
          )}

          {visibleCount > INITIAL_VISIBLE && (
            <button className="kjeg-load-more kjeg-show-less" onClick={handleShowLess}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 12H6" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Toon Minder
            </button>
          )}
        </div>
      </section>

      <div className="shorts">
        <ShortsHome />
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
