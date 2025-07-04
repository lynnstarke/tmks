import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PodcastCard from '../PodcastCard/PodcastCard';
import './Podcasts.css';

import kjeLogo from '../../assets/images/podcastImage.png';
import rondjeLogo from '../../assets/images/podcastImage2.png';

export default function Podcasts() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const podcasts = [
    {
      id: 'kjeg',
      logo: kjeLogo,
      title: 'KieftJansenEgmondGijp',
      mobileTitle: 'KJEG', // Add mobile title
      episodeCount: 52,
      schedule: 'Weekly Shows',
      path: '/podcasts/kjeg'
    },
    {
      id: 'rondje-rob',
      logo: rondjeLogo,
      title: 'Rondje Rob',
      mobileTitle: 'Rondje Rob', // Same title for mobile
      episodeCount: 28,
      schedule: 'Bi-weekly',
      path: '/podcasts/rondje-rob'
    }
  ];

  return (
    <div className="carousel-wrapper">
      <div className="swiper-clipper">
        <h2 className="carousel-heading">All Podcasts</h2>
        <div className="podcasts-list">
          {podcasts.map((podcast) => (
            <Link key={podcast.id} to={podcast.path}>
              <PodcastCard
                logoSrc={podcast.logo}
                titleLines={[isMobile ? podcast.mobileTitle : podcast.title]}
                episodeCount={podcast.episodeCount}
                schedule={podcast.schedule}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
