import React, { useCallback, useEffect, useState } from 'react';
import styles from './LoginForm.module.css';
import Button from './Button';
import { useRouter } from '../../hooks/common/useRouter';
import { emailValidator, passwordValidator } from '../../utils/validator';
import useSignin from '../../hooks/mutation/auth/useSignin';

const LoginForm = () => {
  const { routeTo } = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validData, setValidData] = useState({
    isEmailValid: false,
    isPasswordValid: false,
  });
  const [warning, setWarning] = useState('');
  const { mutate: signinMutate } = useSignin();

  const onEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputEmail = e.target.value;

      setEmail(inputEmail);
      setValidData((prevValidData) => ({
        ...prevValidData,
        isEmailValid: emailValidator(inputEmail),
      }));
    },
    [],
  );

  const onPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputPassword = e.target.value;

      setPassword(inputPassword);
      setValidData((prevValidData) => ({
        ...prevValidData,
        isPasswordValid: passwordValidator(inputPassword),
      }));
    },
    [],
  );

  const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('loginClick');

    signinMutate({ email, password });
  };

  const onMovetoSignup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    routeTo('/signup');
  };

  useEffect(() => {
    let msg = '';
    if (email.length === 0 || password.length === 0) {
      msg = 'Please enter your ID or Password.';
    } else if (!validData.isEmailValid) {
      msg = 'Invalid Email Address.';
    } else if (!validData.isPasswordValid) {
      msg = 'Invalid Password';
    }
    setWarning(msg);
  }, [email.length, password.length, setWarning, validData]);

  return (
    <form className={styles.form} method="POST">
      <div className={styles.label_wrap}>
        <label>ID</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
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
      <div className={styles.info}>
        <span className={styles.info_text}>{warning}</span>
      </div>
      <Button
        name="Login"
        onButtonClick={handleLoginClick}
        disabled={
          warning?.length > 0 ||
          !(validData.isEmailValid && validData.isPasswordValid)
        }
      ></Button>
      <div>
        <span>Don't have an account yet?</span>
        <button onClick={onMovetoSignup}>Sign Up</button>
      </div>
    </form>
  );
};

export default LoginForm;
