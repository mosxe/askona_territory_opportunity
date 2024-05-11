import Card from './components/Card';
import { IData } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: IData[];
};

const CollaboratorsCareer = ({ data }: Props) => {
  if (!data.length) {
    return (
      <section>
        <div className={styles.wrapper}>
          <span className={styles.text}>
            На данный момент нет коллег, готовых к карьерному росту
          </span>
        </div>
      </section>
    );
  }

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          {data.map((card) => (
            <Card data={card} key={card.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CollaboratorsCareer;
