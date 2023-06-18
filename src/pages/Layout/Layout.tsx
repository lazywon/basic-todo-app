import React, { ReactNode, useEffect } from 'react';
import { useRouter } from '../../hooks/common/useRouter';
import { getAuthFromLocalStorage } from '../../utils/tokenHandler';
import styles from './Layout.module.css';

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage = ({ children }: LayoutPageProps) => {
  const { routeTo } = useRouter();

  useEffect(() => {
    const authData = getAuthFromLocalStorage();

    if (authData.token === '') {
      routeTo('/signin');
      return;
    }
  }, [routeTo]);

  return <div>{children}</div>;
};

export default LayoutPage;
