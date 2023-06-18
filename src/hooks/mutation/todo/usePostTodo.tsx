import { useMutation, useQueryClient } from 'react-query';
import { TodoData, TodoForm } from '../../../types/todo';
import todoApi from '../../../api/todo';
import { AxiosResponse } from 'axios';

const usePostTodo = () => {
  const queryClient = useQueryClient();
  return useMutation((data: TodoForm) => todoApi.createTodo(data), {
    onSuccess: (data: AxiosResponse<TodoData>) => {
      console.log(data);
      queryClient.invalidateQueries(['getTodos']);
    },
  });
};

export default usePostTodo;
