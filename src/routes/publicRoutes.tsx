import { Navigate, RouteObject } from 'react-router-dom';
import { BASE_URL, PUBLIC_ROUTES } from './appRoutes';
import { SignIn, SignUp } from '@/pages';

export const PublicRoutes: TArray<RouteObject> = [
  {
    path: BASE_URL,
    element: <Navigate to={PUBLIC_ROUTES.SIGN_IN} />,
  },
  {
    path: PUBLIC_ROUTES.SIGN_IN,
    element: <SignIn />,
  },
  {
    path: PUBLIC_ROUTES.SIGN_UP,
    element: <SignUp />,
  },
];
