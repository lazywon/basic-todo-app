import { TodoForm, TodoUpdateForm } from '../types/todo';
import client from './client';

const todoApi = {
  createTodo: (todo: TodoForm) => {
    return client.post('/todos', todo);
  },
  getTodos: () => {
    return client.get('/todos');
  },
  updateTodo: ({ id, todo }: TodoUpdateForm) => {
    return client.put(`/todos/${id}`, todo);
  },
  deleteTodo: (id: number | undefined) => {
    return client.delete(`/todos/${id}`);
  },
};

export default todoApi;
