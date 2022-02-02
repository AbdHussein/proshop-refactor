import React, { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/DashBoard'));
const AddNewProduct = lazy(() => import('../pages/NewProduct'));
const Orders = lazy(() => import('../pages/Orders'));
const OrderDetails = lazy(() => import('../pages/Orders/OrderDetails'));
const role = Boolean(localStorage.getItem('role'));
const adminRoutes: { path: string; component: React.ReactNode }[] = [];

if (role) {
  adminRoutes.push(
    {
      path: '/dashboard',
      component: <Dashboard />,
    },
    {
      path: '/addProduct',
      component: <AddNewProduct />,
    },
    {
      path: '/updateroduct/:id',
      component: <AddNewProduct />,
    },
    {
      path: '/orders',
      component: <Orders />,
    },
    {
      path: '/orders/:id',
      component: <OrderDetails />,
    },
  );
}
export default adminRoutes;
