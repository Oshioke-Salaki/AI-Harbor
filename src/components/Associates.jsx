import styles from './Associates.module.css';
import acc1 from '../assets/acc1.png';
import acc2 from '../assets/acc2.png';
import acc3 from '../assets/acc3.png';
import acc4 from '../assets/acc4.png';
import acc5 from '../assets/acc5.png';

function Associates() {
  return (
    <div className={styles.accociates}>
      <img src={acc1} alt="" />
      <img src={acc2} alt="" />
      <img src={acc3} alt="" />
      <img src={acc4} alt="" />
      <img src={acc5} alt="" />
    </div>
  );
}

export default Associates;
