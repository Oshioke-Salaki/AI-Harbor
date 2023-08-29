import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo() {
  return (
    <NavLink className={styles.logo} to="/">
      AIHabor<div></div>
    </NavLink>
  );
}

export default Logo;
