import { ICollaboratorCarrer } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: ICollaboratorCarrer;
  onClick: () => void;
};

const Card = ({ data, onClick }: Props) => {
  const { fullname, position_name, photo } = data;
  return (
    <div className={styles['card-career']} onClick={onClick}>
      <div className={styles['card-career__photo']}>
        <img src={photo} alt='Фото' />
      </div>
      <div className={styles['card-career__wrapper']}>
        <div className={styles['card-career__title']}>{fullname}</div>
        <div className={styles['card-career__desc']}>{position_name}</div>
      </div>
    </div>
  );
};

export default Card;
