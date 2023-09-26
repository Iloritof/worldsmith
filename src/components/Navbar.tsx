import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="intro-nav h-sub">
      <div className="intro-nav__logo-box">
        <div className="intro-nav__logo bc-l"></div>
      </div>

      <div className="intro-nav__rule"></div>

      <ul className="intro-nav__menu">
        <li>
          <Link to={`world`} className="intro-nav__link">
            <span className="intro-nav__link-number">00</span>About
          </Link>
        </li>
        <li>
          <Link to={`world`} className="intro-nav__link">
            <span className="intro-nav__link-number">01</span>Instructions
          </Link>
        </li>
        <li>
          <Link to={`world`} className="intro-nav__link">
            <span className="intro-nav__link-number">02</span>Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
