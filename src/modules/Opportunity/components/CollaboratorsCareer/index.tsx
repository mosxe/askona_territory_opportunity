import { useState } from 'react';
import Modal from 'components/Modal';
import Card from './components/Card';
import { ICollaboratorCarrer } from 'types';
import styles from './styles.module.scss';
import modalStyles from 'components/Modal/styles.module.scss';

type Props = {
  data: ICollaboratorCarrer[];
};

const CollaboratorsCareer = ({ data }: Props) => {
  const [isShowModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(!isShowModal);
  };

  if (!data.length) {
    return (
      <section>
        <div className={styles.wrapper}>Данные отсутствуют</div>
      </section>
    );
  }

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          {data.map((card) => (
            <Card data={card} key={card.id} onClick={handleCloseModal} />
          ))}
        </div>
      </section>
      <Modal isShow={isShowModal} onClose={handleCloseModal}>
        <Modal.Header>
          <button
            type='button'
            className={modalStyles['modal__button-close']}
            onClick={handleCloseModal}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.image}>
            <img
              src='https://get.wallhere.com/photo/landscape-mountains-lake-nature-reflection-grass-sky-river-national-park-valley-wilderness-Alps-tree-autumn-leaf-mountain-season-tarn-loch-mountainous-landforms-mountain-range-590185.jpg'
              alt='Картинка'
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CollaboratorsCareer;
