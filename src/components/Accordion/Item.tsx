import { useState, useRef, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './styles.module.scss';

type Props = {
  isActive?: boolean;
  title: ReactNode;
  children: ReactNode;
};

const AccordionItem = ({ title, isActive = false, children }: Props) => {
  const [isShow, setShow] = useState<boolean>(isActive);
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setShow(!isShow);
  };

  const classNamesActive = isShow
    ? `${styles.accordion__header} ${styles['accordion__header--active']}`
    : styles.accordion__header;

  const classNamesShow = isShow
    ? `${styles.accordion__content} ${styles['accordion__content--show']}`
    : styles.accordion__content;

  return (
    <div className={styles.accordion__item}>
      <div className={classNamesActive} onClick={handleToggle}>
        <svg
          width='12'
          height='6'
          viewBox='0 0 12 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.170067 0.155061C0.376209 -0.0328918 0.698787 -0.0499784 0.926099 0.103801L0.991223 0.155061L6 4.72165L11.0088 0.155061C11.2149 -0.0328918 11.5375 -0.0499784 11.7648 0.103801L11.8299 0.155061C12.0361 0.343014 12.0548 0.63713 11.8862 0.844385L11.8299 0.903762L6.41058 5.84494C6.20444 6.03289 5.88186 6.04998 5.65455 5.8962L5.58942 5.84494L0.170067 0.903762C-0.056689 0.697014 -0.056689 0.361809 0.170067 0.155061Z'
            fill='#878A8E'
          />
        </svg>
        {title}
      </div>
      <CSSTransition
        nodeRef={nodeRef}
        in={isShow}
        timeout={300}
        classNames={{
          enter: styles['accordion-enter'],
          enterActive: styles['accordion-enter-active'],
          exit: styles['accordion-exit'],
          exitActive: styles['accordion-exit-active']
        }}
        unmountOnExit
      >
        <div className={classNamesShow} ref={nodeRef}>
          <div className={styles.accordion__text}>{children}</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AccordionItem;
