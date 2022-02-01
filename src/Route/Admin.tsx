import React, { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/DashBoard'));
const AddNewProduct = lazy(() => import('../pages/NewProduct'));

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
  );
}
export default adminRoutes;
