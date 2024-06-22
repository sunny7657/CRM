import React from 'react';
import styles from './Label.module.css';

export interface LabelProps {
  children: React.ReactNode;
  state: 'active' | 'notActive';
}

export default function Label({ children, state }: LabelProps) {
  return (
    <span
      className={`${styles.label} ${
        state === 'active' ? styles.activeLabel : styles.notActiveLabel
      }`}
    >
      {children}
    </span>
  );
}
