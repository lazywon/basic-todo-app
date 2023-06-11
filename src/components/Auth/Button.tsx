import React, { MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  name: string;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const Button = ({ name, onButtonClick, disabled }: ButtonProps) => {
  return (
    <div>
      <button
        className={styles.button}
        onClick={onButtonClick}
        disabled={disabled}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
