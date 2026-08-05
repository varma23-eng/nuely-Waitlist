import React from "react";
import logo from "../assets/nuely-logo.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div></div>

        <img
          src={logo}
          alt="Nuely Organics"
          className="brand-logo"
        />

        <div></div>
      </div>
    </header>
  );
}