import { useMutation, useQueryClient } from 'react-query';
import todoApi from '../../../api/todo';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((id: number | undefined) => todoApi.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getTodos']);
    },
  });
};

export default useDeleteTodo;
