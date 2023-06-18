import React, { PropsWithChildren, useEffect } from 'react';
import styles from './AuthLayout.module.css';
import { useRouter } from '../../hooks/common/useRouter';
import { getAuthFromLocalStorage } from '../../utils/tokenHandler';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
}

const AuthLayout = ({
  title,
  subtitle,
  children,
}: PropsWithChildren<AuthLayoutProps>) => {
  const { routeTo } = useRouter();

  useEffect(() => {
    const authData = getAuthFromLocalStorage();

    if (authData && authData.token) {
      routeTo('/todo');
      return;
    }
  }, [routeTo]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.outer}>
        {/* <div className={styles.container}>
          <a className={styles.a_logo} href="/">
            <img className={styles.img_logo} src={logoImg} alt="logo" />
          </a>
        </div> */}
        <div className={styles.inner}>
          <div className={styles.header}>
            <span className={styles.title}>{title}</span>
            <span>{subtitle}</span>
          </div>
          <div>{children}</div>
        </div>
        <div className={styles.wrapper_bottom}>
          <div className={styles.inner_bottom}>
            <span>
              For any questions please{' '}
              <a href="mailto:jooowon.dev@gmail.com">
                Email to general manager
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
