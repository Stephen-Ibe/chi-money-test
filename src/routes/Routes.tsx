import React, { lazy } from 'react';
import { useRoutes } from 'react-router';

const Shop = lazy(() => import('../pages/Shop'));

const AppRoutes = () => {
  const appRoutes = useRoutes([
    {
      path: '/',
      children: [{ element: <Shop />, index: true }],
    },
  ]);

  return appRoutes;
};

export default AppRoutes;
