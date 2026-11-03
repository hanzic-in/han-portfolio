import FrameAnimation from "./FrameAnimation";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <nav className="navbar">
        <div className="logo">
          HAN<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#works">WORKS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

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
            EXPLORE MY WORKS <span>↗</span>
          </a>

        </div>

        <div className="hero-visual">
          <FrameAnimation />
        </div>

        <div className="hero-index">
          <span>01 / 05</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>

      </div>

    </section>
  );
}
