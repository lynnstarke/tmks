import React from 'react';
import './PodcastEpisodeCard.css';

export default function PodcastEpisodeCard({ image, date, subtitle }) {
  return (
    <div className="episode-card">
      <div className="thumbnail">
        <img src={image} alt="Episode" />
      </div>
      <div className="episode-meta">
        <p className="episode-date">{date}</p>
        <p className="episode-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}
