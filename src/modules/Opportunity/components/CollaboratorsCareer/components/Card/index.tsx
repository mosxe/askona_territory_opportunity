import { useState } from 'react';
import Modal from 'components/Modal';
import { IData } from 'types';
import styles from './styles.module.scss';
import modalStyles from 'components/Modal/styles.module.scss';

type Props = {
  data: IData;
};

const Card = ({ data }: Props) => {
  const { person_name, position_name, photo_link, card_link } = data;
  const [isShowModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(!isShowModal);
  };

  return (
    <>
      <div className={styles['card-career']} onClick={handleCloseModal}>
        <div className={styles['card-career__photo']}>
          <img src={photo_link} alt='Фото' />
        </div>
        <div className={styles['card-career__wrapper']}>
          <div className={styles['card-career__title']}>{person_name}</div>
          <div className={styles['card-career__desc']}>{position_name}</div>
        </div>
      </div>
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
            <img src={card_link} alt='Картинка' />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Card;
