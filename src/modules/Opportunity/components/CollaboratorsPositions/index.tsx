import Card from './components/Card';
import { IData } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: IData[];
};

const CollaboratorsPositions = ({ data }: Props) => {
  if (!data.length) {
    return (
      <section>
        <div className={styles.wrapper}>
          <span className={styles.text}>
            На данный момент нет коллег, назначенных на новые должности
          </span>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className={styles.wrapper}>
        {data.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default CollaboratorsPositions;
