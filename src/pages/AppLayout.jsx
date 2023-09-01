import styles from './AppLayout.module.css';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';

function AppLayout() {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className={styles.appLayout}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
