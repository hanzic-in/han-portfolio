import FrameAnimation from "../../components/FrameAnimation";
import "./Hero.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-visual">
        <FrameAnimation />
      </div>

      <div className="hero-overlay" />
      
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
        </div>
      </div>

      {/* Right Profile */}
      <div className="hero-profile">
        <div className="profile-glass" aria-hidden="true" />

        <span className="profile-label text-eyebrow">
          MY APPROACH
        </span>

        <h2 className="profile-title">
          <span>Product Builder</span>
          <span>&amp; Product Architect</span>
        </h2>

        <p>
          Building ideas into meaningful
          digital products.
        </p>

        <div className="profile-socials">
          <a
            href="https://github.com/hanzic-in"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
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
