import React, { useState } from 'react';
import './ShortsCard.css';

export default function ShortsCard({
  image,
  quote,
  views,
  timeAgo,
  isPlaying = false,
  youtubeUrl,
  onPlayInline,
  onNavigateToYouTube
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatViews = (viewCount) => {
    if (!viewCount) return '';
    if (viewCount >= 1000000) {
      return `${(viewCount / 1000000).toFixed(1)}M views`;
    } else if (viewCount >= 1000) {
      return `${(viewCount / 1000).toFixed(1)}K views`;
    }
    return `${viewCount} views`;
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    if (onNavigateToYouTube && youtubeUrl) {
      onNavigateToYouTube(youtubeUrl);
    }
  };

  return (
    <div className="shorts-card">
      <div className="shorts-thumbnail">
        {!imageLoaded && !imageError && (
          <div className="image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}

        {imageError && (
          <div className="image-error">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Image unavailable</span>
          </div>
        )}

        <img
          src={image}
          alt="Short thumbnail"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />

        {/* Hover Play button overlay - appears on hover and goes to YouTube */}
        <div className="hover-play-overlay">
          <button
            className="hover-play-button"
            onClick={handlePlayClick}
            title="Watch on YouTube"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polygon points="5,3 19,12 5,21" fill="currentColor"/>
            </svg>
          </button>
        </div>

        {/* Duration badge */}
        <div className="duration-badge">0:15</div>

        {/* Views indicator */}
        {views && (
          <div className="views-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {formatViews(views)}
          </div>
        )}
      </div>

      <div className="shorts-content">
        <div className="shorts-quote">
          {quote}
        </div>
      </div>
    </div>
  );
}
