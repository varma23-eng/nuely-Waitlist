import React from 'react';
import '../styles/App.css';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <p className="eyebrow">A NEW RITUAL IS COMING</p>
      <h1>Your skin's <br/><em>new beginning.</em></h1>
      <p className="description">
        Thoughtful skincare is almost here. Join the private Nuely waitlist for early access, launch updates and first access to our opening collection.
      </p>
      <div className="feature-tags">
        <span>EARLY ACCESS</span>
        <span className="dot">•</span>
        <span>LAUNCH PRIVILEGES</span>
        <span className="dot">•</span>
        <span>PRIVATE UPDATES</span>
      </div>
    </div>
  );
}