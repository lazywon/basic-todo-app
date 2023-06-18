import TodoList from '../../components/Todo/TodoList';
import useGetTodos from '../../hooks/query/todo/useGetTodos';
import usePutTodo from '../../hooks/mutation/todo/usePutTodo';
import { useEffect, useState } from 'react';
import { TodoData } from '../../types/todo';

const TodoPage = () => {
  const [todoList, setTodoList] = useState<TodoData[]>([]);
  const { data: todos, isLoading } = useGetTodos();
  const { mutate: putTodoMutate } = usePutTodo();

  const handleCheckTodo = (id: number, isCompleted: boolean) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo)),
    );
  };

  const handleUpdateTodo = (id: number, isCompleted: boolean, todo: string) => {
    putTodoMutate({ id, isCompleted, todo });
  };
  useEffect(() => {
    if (todos) {
      setTodoList(todos);
    }
  }, [todos]);

  return (
    <div>
      <input type="text" data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">+ Add New Task</button>
      <TodoList
        todoList={todoList}
        onCheckTodo={handleCheckTodo}
        isLoading={isLoading}
        onUpdateTodo={handleUpdateTodo}
      />
    </div>
  );
};

export default TodoPage;
