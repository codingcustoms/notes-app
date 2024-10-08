import { Navigate, RouteObject } from 'react-router-dom';
import { BASE_URL, PUBLIC_ROUTES } from './appRoutes';
import { SignIn } from '@/pages';

export const PublicRoutes: TArray<RouteObject> = [
  {
    path: BASE_URL,
    element: <Navigate to={PUBLIC_ROUTES.SIGN_IN} />,
  },
  {
    path: PUBLIC_ROUTES.SIGN_IN,
    element: <SignIn />,
  },
];
