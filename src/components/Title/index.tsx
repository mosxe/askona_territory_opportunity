import styles from './styles.module.scss';

type Props = {
  text: string;
  isDark?: boolean;
};
const Title = ({ text, isDark = false }: Props) => {
  const className = isDark
    ? `${styles.title} ${styles.title_dark}`
    : styles.title;

  return <h2 className={className}>{text}</h2>;
};

export default Title;
