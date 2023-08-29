import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className={styles.navbar}>
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
