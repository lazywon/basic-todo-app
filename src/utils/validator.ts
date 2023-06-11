export const emailValidator = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const passwordValidator = (password: string) => {
  // 최소 8자 이상 및 대문자, 소문자, 숫자, 특수문자 하나 이상 포함
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return passwordRegex.test(password);
};
