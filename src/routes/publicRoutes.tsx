import { Navigate, RouteObject } from 'react-router-dom';
import { BASE_URL, PUBLIC_ROUTES } from './appRoutes';
import { SignIn, SignUp } from '@/pages';
import { AuthLayout } from '@/components/custom';

export const PublicRoutes: TArray<RouteObject> = [
  {
    path: BASE_URL,
    element: (
      <>
        <AuthLayout />
        <Navigate to={PUBLIC_ROUTES.SIGN_IN} />,
      </>
    ),
    children: [
      {
        path: PUBLIC_ROUTES.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: PUBLIC_ROUTES.SIGN_UP,
        element: <SignUp />,
      },
    ],
  },
];
