import Card from './components/Card';
import { ICollaboratorPosition } from 'types';
import styles from './styles.module.scss';

type Props = {
  data: ICollaboratorPosition[];
};

const CollaboratorsPositions = ({ data }: Props) => {
  return (
    <section>
      <div className={styles.wrapper}>
        {data.map((card) => {
          return <Card data={card} key={card.id} />;
        })}
      </div>
    </section>
  );
};

export default CollaboratorsPositions;
