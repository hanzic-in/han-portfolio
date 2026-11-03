import FrameAnimation from "./FrameAnimation";
import Navbar from "./Navbar";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background */}
      <div className="hero-visual">
        <FrameAnimation />
      </div>

      <div className="hero-overlay" />

      <Navbar />
      {/* Main Content */}
      <div className="hero-content">

        <div className="hero-text">

          <span className="eyebrow">
            INDEPENDENT DEVELOPER
          </span>

          <h1>
            Creative
            <br />
            Technologist<span>.</span>
          </h1>

          <p>
            Building digital experiences through
            software, interactive systems and
            creative technology.
          </p>

          <a href="#works" className="hero-button">
            <span>EXPLORE MY WORKS</span>
            <span className="button-arrow">↗</span>
          </a>

        </div>

      </div>

      {/* Floating Information */}
      <div className="hero-info">

        <div className="info-card">
          <span className="info-label">
            DEVELOPMENT FOCUS
          </span>

          <strong>
            Software & Interactive
          </strong>

          <span className="info-detail">
            Applications · Games · Systems
          </span>
        </div>

        <div className="info-card info-card-small">
          <span className="info-label">
            CURRENTLY EXPLORING
          </span>

          <strong>
            Creative Technology
          </strong>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="hero-index">
        <span>01 / 05</span>

        <span className="scroll-indicator">
          SCROLL TO EXPLORE
          <span>↓</span>
        </span>
      </div>

    </section>
  );
}
