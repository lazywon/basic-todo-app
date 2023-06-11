import React from 'react';
import AuthLayout from '../../components/Auth/AuthLayout';
import SignupForm from '../../components/Auth/SignupForm';

const SignupPage = () => {
  return (
    <AuthLayout title="SIGN UP" subtitle="Please enter your details.">
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;
