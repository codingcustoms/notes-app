import { AppLayout } from '@/components/custom';
import { buildAppRoutes } from '@/lib/utils';
import { Dashboard } from '@/pages';
import { Navigate, RouteObject } from 'react-router-dom';
import { APP_PREFIX, PRIVATE_ROUTES } from './appRoutes';

export const PrivateRoutes: TArray<RouteObject> = [
  {
    path: APP_PREFIX,
    element: <Navigate to={buildAppRoutes(PRIVATE_ROUTES.DASHBOARD.BASE)} />,
  },
  {
    path: APP_PREFIX,
    element: <AppLayout />,
    children: [
      {
        path: buildAppRoutes(PRIVATE_ROUTES.DASHBOARD.BASE),
        index: true,
        element: <Dashboard />,
      },
      {
        path: buildAppRoutes(PRIVATE_ROUTES.PROFILE.BASE),
        element: <>a very smoll nano pipi</>,
      },
    ],
  },
];
