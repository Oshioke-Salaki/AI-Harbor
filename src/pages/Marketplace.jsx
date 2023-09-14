import { NavLink } from 'react-router-dom';
import styles from './Marketplace.module.css';
import { useState } from 'react';
import ModelCard from '../components/ModelCard';
import model1 from '../assets/model.png';
import model2 from '../assets/model2.png';
import model3 from '../assets/model3.png';
import model4 from '../assets/model4.png';
import model5 from '../assets/model5.png';
import model6 from '../assets/model6.png';
import model7 from '../assets/model7.png';
import model8 from '../assets/model8.png';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import NewModelModal from '../components/NewModelModal';

const dummyModels = [
  {
    id: 1,
    img: model1,
    title: 'Natural Language Processing Suite',
    description:
      'Transform text data into valuable insights with our NLP Suite. From sentiment analysis to language translation, unlock the power of language for your business.',
  },
  {
    id: 2,
    img: model2,
    title: 'Natural Language Processing Suite',
    description:
      'Transform text data into valuable insights with our NLP Suite. From sentiment analysis to language translation, unlock the power of language for your business.',
  },
  {
    id: 3,
    img: model3,
    title: 'Natural Language Processing Suite',
    description:
      'Transform text data into valuable insights with our NLP Suite. From sentiment analysis to language translation, unlock the power of language for your business.',
  },
  {
    id: 4,
    img: model4,
    title: 'Natural Language Processing Suite',
    description:
      'Transform text data into valuable insights with our NLP Suite. From sentiment analysis to language translation, unlock the power of language for your business.',
  },
  {
    id: 5,
    img: model5,
    title: 'Natural Language Processing Suite',
    description:
      'Transform text data into valuable insights with our NLP Suite. From sentiment analysis to language translation, unlock the power of language for your business.',
  },
  {
    id: 6,
    img: model6,
    title: 'Natural Language Processing Suite',
    description:
      'Transform text data into valuable insights with our NLP Suite. From sentiment analysis to language translation, unlock the power of language for your business.',
  },
  {
    id: 7,
    img: model7,
    title: 'Natural Language Processing Suite',
    description:
      'Transform text data into valuable insights with our NLP Suite. From sentiment analysis to language translation, unlock the power of language for your business.',
  },
  {
    id: 8,
    img: model8,
    title: 'Natural Language Processing Suite',
    description:
      'Transform text data into valuable insights with our NLP Suite. From sentiment analysis to language translation, unlock the power of language for your business.',
  },
];

function Marketplace() {
  const [models] = useState(dummyModels);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.marketplaceContainer}>
      {showModal && <NewModelModal setShowModal={setShowModal} />}
      <div className={styles.marketplace}>
        <div className={styles.marketTop}>
          <div className={styles.marketplaceToggle}>
            <h2 className="active">New Models</h2>
            <h2>My Models</h2>
          </div>
          <NavLink
            className="addModelBtn"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Create new model
          </NavLink>
        </div>
        <div className={styles.modelsContainer}>
          {models.map((model) => (
            <ModelCard
              key={model.id}
              title={model.title}
              description={model.description}
              img={model.img}
            />
          ))}
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Marketplace;
