import { UserInfo } from '../types/auth';
import client from './client';

const authApi = {
  login: (data: UserInfo) => {
    return client.post('/auth/signin', data);
  },
  signup: (data: UserInfo) => {
    return client.post('/auth/signup', data);
  },
};

export default authApi;
