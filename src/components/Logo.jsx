import { NavLink } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo({ changeColor }) {
  return (
    <NavLink
      className={styles.logo}
      to="/"
      onClick={() => {
        changeColor('default');
      }}
    >
      AIHabor<div></div>
    </NavLink>
  );
}

export default Logo;
