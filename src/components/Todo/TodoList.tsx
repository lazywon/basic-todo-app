import React from 'react';
import styles from './TodoList.module.css';
import { TodoData } from '../../types/todo';
import LoadingBar from '../Common/LoadingBar';

interface TodoListProps {
  todoList: TodoData[] | undefined;
  onCheckTodo: (id: number, isCompleted: boolean) => void;
  isLoading: boolean;
  onUpdateTodo: (id: number, isCompleted: boolean, todo: string) => void;
}

const TodoList = ({
  todoList,
  onCheckTodo,
  isLoading,
  onUpdateTodo,
}: TodoListProps) => {
  if (isLoading) return <LoadingBar isLoading={isLoading} />;

  return (
    <>
      <h2>Todo List</h2>
      {todoList?.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(e) => onCheckTodo(todo.id, e.target.checked)}
              />
              <span>{todo.todo}</span>
            </label>
            <button
              data-testid="modify-button"
              onClick={() => onUpdateTodo(todo.id, todo.isCompleted, todo.todo)}
            >
              수정
            </button>
            <button data-testid="delete-button">삭제</button>
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
