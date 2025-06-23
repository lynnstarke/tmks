import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/Navigation/Navigation';
import AboutPage from './pages/AboutPage/AboutPage';
import Contact from './pages/Contact/Contact';
import PodcastsPage from './pages/Podcasts/PodcastsPage';
import HomePage from './pages/Home/HomePage';

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/podcasts" element={<PodcastsPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}
