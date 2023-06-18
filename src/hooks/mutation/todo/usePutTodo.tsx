import { useMutation, useQueryClient } from 'react-query';
import todoApi from '../../../api/todo';
import { TodoUpdateForm } from '../../../types/todo';

const usePutTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((data: TodoUpdateForm) => todoApi.updateTodo(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getToDos']);
      // queryClient.invalidateQueries(['getToDoById', id]);
    },
  });
};

export default usePutTodo;
