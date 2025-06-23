import React from 'react';
import './AboutCard.css';

export default function AboutCard({ title, children }) {
  return (
    <section className="about-card">
      <div className="about-card-title">
        <h2>{title}</h2>
      </div>
      <div className="about-card-text">
        {children}
      </div>
    </section>
  );
}
