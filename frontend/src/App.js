import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/Navigation/Navigation';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PodcastsPage from './pages/Podcasts/PodcastsPage';
import HomePage from './pages/Home/HomePage';
import KJEPodcastPage from './pages/KJEGPage/KJEGPage'; // make sure the filename matches

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
          <Route path="/podcasts/kjeg" element={<KJEPodcastPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}
