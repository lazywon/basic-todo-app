import { AuthResponse, UserInfo } from '../../../types/auth';
import { useMutation } from 'react-query';
import authApi from '../../../api/auth';
import { useRouter } from '../../common/useRouter';
import { AxiosResponse } from 'axios';

const useSignup = () => {
  const { routeTo } = useRouter();

  return useMutation((userInfo: UserInfo) => authApi.signup(userInfo), {
    onSuccess: (data: AxiosResponse<AuthResponse>) => {
      console.log(data.data.msg);
      routeTo('/signin');
    },
  });
};

export default useSignup;
