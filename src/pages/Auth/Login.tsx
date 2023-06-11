import React from 'react';
import AuthLayout from '../../components/Auth/AuthLayout';
import LoginForm from '../../components/Auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout
      title="LOGIN"
      subtitle="Welcome back! Please enter your details."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
