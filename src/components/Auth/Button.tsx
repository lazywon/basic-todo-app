import React, { MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  name: string;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ name, onButtonClick }: ButtonProps) => {
  return (
    <div>
      <button className={styles.button} onClick={onButtonClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
