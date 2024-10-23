import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
  const navigateTo = useNavigate();

  return { navigateTo };
};
