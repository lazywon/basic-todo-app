import { UseQueryResult, useQuery } from 'react-query';
import todoApi from '../../../api/todo';
import { AxiosResponse } from 'axios';
import { TodoData } from '../../../types/todo';

const useGetTodos = (): UseQueryResult<TodoData[]> => {
  return useQuery(['getTodos'], () => todoApi.getTodos(), {
    select: (response: AxiosResponse<TodoData[]>) => {
      console.log(response.data);
      return response.data;
    },
  });
};

export default useGetTodos;
