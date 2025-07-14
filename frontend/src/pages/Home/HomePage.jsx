import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HomePage.css';
import NewestEpisodesCarousel from '../../components/NewestEpisodesCarousel/NewestEpisodesCarousel';
import PodcastsHome from '../../components/PodcastsHome/PodcastsHome';
import ShortsHome from '../../components/ShortsHome/ShortsHome';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  const [dive, setDive] = useState(false);
  const [showCaveAnimation, setShowCaveAnimation] = useState(false);

  const handleDive = () => {
    setShowCaveAnimation(true);

    setTimeout(() => {
      setDive(true);
      document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
    setTimeout(() => {
      setShowCaveAnimation(false);
    }, 2000);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 100) {
        setDive(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='home'>
      {/* Static overlays */}
      <div className="top-blur-overlay" />
      <div className="bottom-blur-overlay" />

      {/* Cave Animation Overlay */}
      <div className={`cave-overlay ${showCaveAnimation ? 'active' : ''}`} />

      <AnimatePresence>
        {!dive && (
          <motion.header
            className='home-header'
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 4, opacity: 0, transition: { duration: 1 } }}
          >
            <div className="header-content">
              {/* Main title with split animation */}
              <motion.div className="title-container">
                <motion.h1
                  className="main-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <motion.span
                    className="title-line title-line-1"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  >
                    The Mancave
                  </motion.span>
                  <motion.span
                    className="title-line title-line-2"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  >
                    Studios
                  </motion.span>
                </motion.h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                Where football, culture and stories collide.
              </motion.p>

              {/* Enhanced CTA button */}
              <motion.div
                className="cta-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <button className="discover-btn" onClick={handleDive}>
                  <span className="btn-text">Discover Now</span>
                  <div className="btn-gradient" />
                </button>
              </motion.div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <main className='content'>
        <div className='podcasts'>
          <PodcastsHome />
        </div>
        <div className='newest-episode-carousel'>
          <NewestEpisodesCarousel />
        </div>
        <div className='shorts'>
          <ShortsHome />
        </div>
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}
