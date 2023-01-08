import React, { lazy } from 'react';
import { useRoutes } from 'react-router';

const Shop = lazy(() => import('../pages/Shop'));
const Products = lazy(() => import('../pages/Products'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  const appRoutes = useRoutes([
    {
      path: '/',
      children: [
        { element: <Shop />, index: true },
        { element: <Products />, path: '/products' },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);

  return appRoutes;
};

export default AppRoutes;
