import TodoList from '../../components/Todo/TodoList';
import useGetTodos from '../../hooks/query/todo/useGetTodos';
import usePutTodo from '../../hooks/mutation/todo/usePutTodo';
import { useEffect, useState } from 'react';
import { TodoData } from '../../types/todo';
import useDeleteTodo from '../../hooks/mutation/todo/useDeleteTodo';
import usePostTodo from '../../hooks/mutation/todo/usePostTodo';

const TodoPage = () => {
  const [todoList, setTodoList] = useState<TodoData[]>([]);
  const [todoText, setTodoText] = useState('');
  const { data: todos, isLoading } = useGetTodos();
  const { mutate: putTodoMutate } = usePutTodo();
  const { mutate: deleteTodoMutate } = useDeleteTodo();
  const { mutate: createTodoMutate } = usePostTodo();

  const handleCheckTodo = (id: number, isCompleted: boolean) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo)),
    );
  };

  const handleChangeTodo = (id: number, text: string) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, todo: text } : todo)),
    );
  };

  const handleUpdateTodo = (id: number, isCompleted: boolean, todo: string) => {
    putTodoMutate({ id, isCompleted, todo });
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodoMutate(id);
  };

  const handleCreateTodo = (todo: string) => {
    createTodoMutate({ todo });
  };

  useEffect(() => {
    if (todos) {
      setTodoList(todos);
    }
  }, [todos]);

  return (
    <div>
      <input
        type="text"
        value={todoText}
        data-testid="new-todo-input"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        data-testid="new-todo-add-button"
        onClick={(e) => handleCreateTodo(todoText)}
      >
        + Add New Task
      </button>
      <TodoList
        todoList={todoList}
        onCheckTodo={handleCheckTodo}
        onChangeTodo={handleChangeTodo}
        isLoading={isLoading}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoPage;
