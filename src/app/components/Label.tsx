import React from 'react';
import styles from './Label.module.css';

export interface LabelProps {
  children: React.ReactNode;
  className: String;
}

export default function Label({ children, className }: LabelProps) {
  return (
    <span className={`${styles.label} ${styles[className]}`}>{children}</span>
  );
}
