import { useEffect, useState } from 'react';
import styles from './Homepage.module.css';
import homeImg from '../assets/homeCover.png';
import { NavLink } from 'react-router-dom';
import Associates from '../components/Associates';

function Homepage({ setNavColor }) {
  const [lightsOn, setLightsOn] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setLightsOn((prev) => !prev);
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className={styles.home}>
      <div className={`${lightsOn ? 'lightsOn' : ''} ${styles.homepage}`}>
        <div className={styles.homepageLeft}>
          <h1>Where AI Ventures Take Shape</h1>
          <h1>Craft, Deploy, Succeed</h1>
          <p>
            Deploy Your Own Model In Minutes, Or Access 100&apos;s Of
            <br /> AI Models With A Push Of A Button
          </p>
          <NavLink
            className="btn btn-primary"
            to="marketplace"
            onClick={() => {
              setNavColor('light');
            }}
          >
            Explore market place
          </NavLink>
        </div>
        <img src={homeImg} alt="" />
      </div>
      <Associates />
    </div>
  );
}

export default Homepage;
