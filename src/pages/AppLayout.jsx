import styles from './AppLayout.module.css';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function AppLayout({ navColor, setNavColor }) {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.appLayout}>
      <Navbar navColor={navColor} setNavColor={setNavColor} />
      <Outlet />
    </div>
  );
}

export default AppLayout;
