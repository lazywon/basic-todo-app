import React, { useCallback, useState } from 'react';
import styles from './LoginForm.module.css';
import Button from './Button';
import { useRouter } from '../../hooks/useRouter';

const SignupForm = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const onUseridChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputEmail = e.target.value;
      setUserid(inputEmail);
    },
    [],
  );

  const onPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputPassword = e.target.value;
      setPassword(inputPassword);
    },
    [],
  );

  const handleSignupClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('signupClick');
  };

  return (
    <form className={styles.form} method="POST">
      <div className={styles.label_wrap}>
        <label>ID</label>
        <input
          type="email"
          name="userid"
          value={userid}
          onChange={onUseridChange}
          placeholder="Email"
        />
      </div>
      <div className={styles.label_wrap}>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
      </div>
      {/* <div className={styles.info}>
    <span className={styles.info_text}>{warning}</span>
  </div> */}
      <Button name="Signup" onButtonClick={handleSignupClick}></Button>
    </form>
  );
};

export default SignupForm;
