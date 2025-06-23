import React from 'react';
import './ShortsCard.css';

export default function ShortsCard({ image, quote }) {
  return (
    <div className="shorts-card">
      <div className="shorts-thumbnail">
        <img src={image} alt="Short thumbnail" />
      </div>
      <div className="shorts-quote">
        {quote}
      </div>
    </div>
  );
}
