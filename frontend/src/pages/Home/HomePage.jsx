import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HomePage.css';
import NewestEpisodesCarousel from '../../components/NewestEpisodesCarousel/NewestEpisodesCarousel';
import PodcastsHome from '../../components/PodcastsHome/PodcastsHome';
import ShortsHome from '../../components/ShortsHome/ShortsHome';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  const [dive, setDive] = useState(false);

  const handleDive = () => {
    setDive(true);
    setTimeout(() => {
      document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
    }, 800);
  };

  // Re-show header if user scrolls back to top
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
      <AnimatePresence>
        {!dive && (
          <motion.header
            className='home-header'
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 4, opacity: 0, transition: { duration: 1 } }}
          >
            <h1>The Mancave<br />Studios</h1>
            <p>Where football, culture and stories collide.</p>
            <button onClick={handleDive}>Discover Now</button>
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
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}
