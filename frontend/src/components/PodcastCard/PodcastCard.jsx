import React, { useRef } from 'react';
import './PodcastCard.css';

export default function PodcastCard({ logoSrc, titleLines, episodeCount, schedule }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    cardRef.current.style.setProperty('--x', `${x}%`);
    cardRef.current.style.setProperty('--y', `${y}%`);
  };

  return (
    <div
      className="podcast-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className="podcast-card-logo">
        <img src={logoSrc} alt="Podcast logo" />
      </div>
      <div className="podcast-card-content">
        {titleLines.map((line, i) => (
          <div key={i} className="podcast-card-title">
            {line}
          </div>
        ))}
        {(episodeCount || schedule) && (
          <div className="podcast-card-subtitle">
            {episodeCount && (
              <span className="episode-count">{episodeCount} Episodes</span>
            )}
            {schedule && <span>{schedule}</span>}
          </div>
        )}
      </div>
      <div className="play-button" aria-label="Play podcast"></div>
    </div>
  );
}
