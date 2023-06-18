import React from 'react';
import styles from './LoadingBar.module.css';

interface LoadingBarProps {
  isLoading: boolean;
}

const LoadingBar = ({ isLoading }: LoadingBarProps) => {
  return (
    <>{isLoading && <div className={styles.container}>LoadingBar..</div>}</>
  );
};

export default LoadingBar;
