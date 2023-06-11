import { AuthResponse, UserInfo } from '../../../types/auth';
import { useMutation } from 'react-query';
import authApi from '../../../api/auth';
import { useRouter } from '../../common/useRouter';
import { AxiosResponse } from 'axios';
import { setAuthFromLocalStorage } from '../../../utils/tokenHandler';

const useSignin = () => {
  const { routeTo } = useRouter();
  return useMutation((userInfo: UserInfo) => authApi.login(userInfo), {
    onSuccess: (data: AxiosResponse<AuthResponse>, userInfo: UserInfo) => {
      const { userid } = userInfo;
      const token = data.data.token as string;

      console.log(data.data.msg);

      setAuthFromLocalStorage({ userid, token });
      routeTo('/todo');
    },
  });
};

export default useSignin;
