import styles from './ModelCard.module.css';

function ModelCard({ title, description, img }) {
  return (
    <div className={styles.modelCard}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ModelCard;
