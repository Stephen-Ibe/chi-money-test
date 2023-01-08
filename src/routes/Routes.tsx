import React, { lazy } from 'react';
import { useRoutes } from 'react-router';

const Shop = lazy(() => import('../pages/Shop'));
const Products = lazy(() => import('../pages/products'));
const ProductDetail = lazy(() => import('../pages/products/ProductDetails'));
const Checkout = lazy(() => import('../pages/Checkout'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  const appRoutes = useRoutes([
    {
      path: '/',
      children: [
        { element: <Shop />, index: true },
        { element: <Checkout />, path: '/checkout' },
      ],
    },
    {
      path: '/products',
      children: [
        { element: <Products />, index: true },
        { element: <ProductDetail />, path: ':id' },
      ],
    },
    { path: '*', element: <NotFound /> },
  ]);

  return appRoutes;
};

export default AppRoutes;
