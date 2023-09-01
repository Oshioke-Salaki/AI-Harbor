import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo';
import { useState, useEffect } from 'react';

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const pathname = window.location.pathname;
  const [currentUrl, setCurrentUrl] = useState(pathname);
  
  useEffect(() => {
    setCurrentUrl(pathname);
  }, [pathname]);

  useEffect(() => {
    if (currentUrl !== '/home') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [currentUrl]);

  return (
    <nav className={styles.navbar}>
      {loggedIn ? <Logo /> : ''}
      <Logo />
      <div className={styles.navRight}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to={'marketplace'}>Marketplace</NavLink>
          </li>
          <li>
            <NavLink to={'products'}>Products</NavLink>
          </li>
          <li>
            <NavLink to="services">Services</NavLink>
          </li>
        </ul>
        <NavLink to="signIn" className="btn btn-primary">
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
