import styles from './AppLayout.module.css';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
