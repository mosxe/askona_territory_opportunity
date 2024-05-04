import styles from './styles.module.scss';

type Props = {
  isInner?: boolean;
};
const Loader = ({ isInner = false }: Props) => {
  const className = isInner
    ? `${styles.loader__wrapper} ${styles.loader__wrapper_inner}`
    : styles.loader__wrapper;
  return (
    <div className={className}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
