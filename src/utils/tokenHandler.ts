import { AuthInfo } from '../types/auth';

export const getAuthFromLocalStorage = (): AuthInfo => {
  return localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth') || '{}')
    : { userid: '', token: '' };
};

export const setAuthFromLocalStorage = (auth: AuthInfo) => {
  localStorage.setItem('auth', JSON.stringify(auth));
};
