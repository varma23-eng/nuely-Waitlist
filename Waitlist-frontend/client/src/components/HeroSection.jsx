import React from "react";
import { PiLeafFill } from "react-icons/pi";
import "../styles/Hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section">

      <span className="launching">
        LAUNCHING SOON
      </span>

      <h1 className="hero-title">
        Nothing To Fix.
        <br />
        <em>Everything To</em>
        <br />
        Give Back.
      </h1>

      <p className="hero-subtitle">
        Because true care doesn't change who you are —
        <br />
        it supports what nature already created.
      </p>

      <div className="hero-line"></div>

      <div className="feature-tags">

        

      </div>

    </section>
  );
}