import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error/Error';
import React from 'react';
import SignupPage from './pages/Auth/Signup';
import LoginPage from './pages/Auth/Login';
import TodoPage from './pages/Todo/Todo';

interface RouterElement {
  id: number; // 페이지 아이디 (반복문용 고유값)
  path: string;
  label?: string;
  element?: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: '*',
    label: 'Error',
    element: <ErrorPage />,
  },
  {
    id: 1,
    path: '/signup',
    label: '회원가입',
    element: <SignupPage />,
  },
  {
    id: 2,
    path: '/signin',
    label: '로그인',
    element: <LoginPage />,
  },
  {
    id: 3,
    path: '/todo',
    label: 'todo',
    element: <TodoPage />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router: RouterElement) => {
    return {
      path: router.path,
      element: router.element,
    };
  }),
);
