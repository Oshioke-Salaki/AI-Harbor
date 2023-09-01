import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo';
import { useState } from 'react';

function Navbar() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const pathname = window.location.pathname;
  // const [currentUrl, setCurrentUrl] = useState(pathname);

  // useEffect(() => {
  //   setCurrentUrl(pathname);
  // }, [pathname]);

  // useEffect(() => {
  //   if (currentUrl !== '/home') {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // }, [currentUrl]);
  const [navColor, setNavColor] = useState('default');

  return (
    <nav
      className={`${styles.navbar} ${
        navColor === 'default' ? styles.navbarDark : styles.navbarLight
      }`}
    >
      {/* {loggedIn ? <Logo /> : ''} */}
      <Logo changeColor={setNavColor} />
      <div className={styles.navRight}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to={'marketplace'}
              onClick={() => {
                setNavColor('light');
              }}
            >
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'products'}
              onClick={() => {
                setNavColor('light');
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              onClick={() => {
                setNavColor('light');
              }}
            >
              Services
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="signIn"
          className="btn btn-primary"
          onClick={() => {
            setNavColor('light');
          }}
        >
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
