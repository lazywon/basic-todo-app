import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Error.module.css';

const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sub_container}>
        <div className={styles.box}>
          <div className={styles.card}>
            <div>
              <div className={styles.error_code}>404</div>
              <p className={styles.error_msg}>
                The page you're looking for is not found.
              </p>
              <hr className={styles.hr} />
              <p>
                Make sure the address is correct and that the page hasn't moved.
                If you think this is a mistake,
                <a
                  className={styles.contact_link}
                  href="mailto:jooowon.dev@gmail.com"
                >
                  {' '}
                  contact us
                </a>
                .
              </p>
              <button type="button" onClick={goBack}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
