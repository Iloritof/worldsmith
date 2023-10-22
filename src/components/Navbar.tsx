import { Link } from 'react-router-dom';

interface NavbarProps {
  intro?: boolean;
  navText?: string;
}

export default function Navbar({ intro, navText }: NavbarProps) {
  const exp = intro ? (
    <nav className='nav--intro h-sub'>
      <div className='nav--intro__logo-box'>
        <Link to={`/`}>
          <div className='nav--intro__logo bc-l'></div>
        </Link>
      </div>

      <div className='nav--intro__rule'></div>

      <ul className='nav--intro__menu'>
        <li>
          <Link to={`universe`} className='nav--intro__link'>
            <span className='nav--intro__link-number'>00</span>About
          </Link>
        </li>
        <li>
          <Link to={`universe`} className='nav--intro__link'>
            <span className='nav--intro__link-number'>01</span>Instructions
          </Link>
        </li>
        <li>
          <Link to={`universe`} className='nav--intro__link'>
            <span className='nav--intro__link-number'>02</span>Contact
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav className='nav h-sub tc-t'>
      <p>
        <span>{'>'}</span> {navText}
      </p>
    </nav>
  );

  return exp;
}
