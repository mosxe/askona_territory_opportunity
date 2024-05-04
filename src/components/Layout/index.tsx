﻿import { ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
