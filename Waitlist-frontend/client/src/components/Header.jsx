import React from 'react';
import logo from '../assets/nuely-logo.png';
import '../styles/App.css';

export default function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Nuely Organics" className="brand-logo" />
      <span className="coming-soon-tag">COMING SOON</span>
    </header>
  );
}