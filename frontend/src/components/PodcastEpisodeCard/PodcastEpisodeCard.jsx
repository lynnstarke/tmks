import React from 'react';
import './PodcastEpisodeCard.css';

export default function PodcastEpisodeCard({
  image,
  date,
  subtitle,
  duration = "45:30",
  isNew = true
}) {
  return (
    <div className="episode-card">
      <div className="thumbnail">
        <img src={image} alt="Episode" />
        <div className="play-overlay">
          <div className="play-button">
            <svg className="play-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="white"/>
            </svg>
            <div className="platform-links">
              <a
                href="https://www.youtube.com/@kieftjansenegmondgijp/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link youtube-link"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/show/4MUyn0Qo0MiITn8PY3MsgU"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link spotify-link"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" fill="#1DB954"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="duration-badge">
          <span>{duration}</span>
        </div>
      </div>
      <div className="episode-meta">
        <div className="meta-header">
          <p className="episode-date">{date}</p>
          {isNew && (
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span className="status-text">New</span>
            </div>
          )}
        </div>
        <h3 className="episode-subtitle">{subtitle}</h3>
        <div className="episode-actions">
          <button className="action-btn primary">
            <svg className="primary-play-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="#3a2c23"/>
            </svg>
            <span className="play-text">Play</span>
            <div className="primary-platform-links">
              <a
                href="https://www.youtube.com/@kieftjansenegmondgijp/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-platform-link"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#3a2c23"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/show/4MUyn0Qo0MiITn8PY3MsgU"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-platform-link"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" fill="#3a2c23"/>
                </svg>
              </a>
            </div>
          </button>
          <button className="action-btn secondary" title="More options">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="1" fill="#ccc"/>
              <circle cx="19" cy="12" r="1" fill="#ccc"/>
              <circle cx="5" cy="12" r="1" fill="#ccc"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
