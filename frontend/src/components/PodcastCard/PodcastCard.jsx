import React from 'react'
import './PodcastCard.css'

export default function PodcastCard({ logoSrc, titleLines }) {
  return (
    <div className="podcast-card">
      <div className="podcast-card-logo">
        <img src={logoSrc} alt="Podcast logo" />
      </div>
      <div className="podcast-card-content">
        {titleLines.map((line, i) => (
          <div key={i} className="podcast-card-title">
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
