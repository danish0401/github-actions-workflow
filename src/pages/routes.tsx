import { RouteObject } from 'react-router-dom';
import FourOThree from 'pages/error-pages/four-o-three';
import FourOFour from 'pages/error-pages/four-o-four';
import LoginPage from 'pages/auth';

import { RequireAuth } from 'features/auth/route-access-check/require-auth';
import { LayoutMain, LayoutLogin } from 'shared/ui/layout';
import MainPage from './main';

export const routes: RouteObject[] = [
  {
    element: <LayoutLogin />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        ),
      },
      {
        path: '/four-o-four',
        element: <FourOFour />,
      },
      {
        path: '/forbidden',
        element: <FourOThree />,
      },
      {
        path: '*',
        element: <FourOFour />,
      },
    ],
  },
];
