import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        HAN<span>.</span>
      </a>

      <nav className="nav-links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#works">WORKS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}
