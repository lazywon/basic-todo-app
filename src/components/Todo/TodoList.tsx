import React, { useState } from 'react';
import styles from './TodoList.module.css';
import { TodoData } from '../../types/todo';
import LoadingBar from '../Common/LoadingBar';

interface TodoListProps {
  todoList: TodoData[] | undefined;
  onCheckTodo: (id: number, isCompleted: boolean) => void;
  onChangeTodo: (id: number, todo: string) => void;
  isLoading: boolean;
  onUpdateTodo: (id: number, isCompleted: boolean, todo: string) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList = ({
  todoList,
  onCheckTodo,
  onChangeTodo,
  isLoading,
  onUpdateTodo,
  onDeleteTodo,
}: TodoListProps) => {
  const [editMode, setEditMode] = useState(false);

  if (isLoading) return <LoadingBar isLoading={isLoading} />;

  return (
    <>
      <h2>Todo List</h2>
      {todoList?.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              {editMode ? (
                <>
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(e) => onCheckTodo(todo.id, e.target.checked)}
                  />
                  <input
                    type="text"
                    value={todo.todo}
                    onChange={(e) => onChangeTodo(todo.id, e.target.value)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    disabled={true}
                  />
                  <span>{todo.todo}</span>
                </>
              )}
            </label>
            <button
              onClick={() =>
                editMode ? setEditMode((prev) => !prev) : onDeleteTodo(todo?.id)
              }
            >
              {editMode ? '취소' : '삭제'}
            </button>
            <button
              onClick={() =>
                editMode
                  ? onUpdateTodo(todo.id, todo.isCompleted, todo.todo)
                  : setEditMode((prev) => !prev)
              }
            >
              {editMode ? '완료' : '수정'}
            </button>
            {/* <button
              data-testid="modify-button"
              onClick={() => onUpdateTodo(todo.id, todo.isCompleted, todo.todo)}
            >
              수정
            </button>
            <button data-testid="delete-button">삭제</button> */}
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
