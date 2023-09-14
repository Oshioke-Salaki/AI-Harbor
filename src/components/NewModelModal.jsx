import styles from './NewModelModal.module.css';

function NewModelModal({ setShowModal }) {
  return (
    <div
      className={styles.overlay}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div className={styles.modalContainer}>
        NewModelModal
        <button
          onClick={() => {
            setShowModal(false);
          }}
        >
          closee
        </button>
      </div>
    </div>
  );
}

export default NewModelModal;
