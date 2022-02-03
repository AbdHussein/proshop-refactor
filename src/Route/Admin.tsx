import React, { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/DashBoard'));
const AddNewProduct = lazy(() => import('../pages/NewProduct'));
const Orders = lazy(() => import('../pages/Orders'));
const Users = lazy(() => import('../pages/Users'));
const UserDetails = lazy(() => import('../pages/Users/UserDetails'));

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
      path: '/update-product/:id',
      component: <AddNewProduct />,
    },
    {
      path: '/orders',
      component: <Orders />,
    },

    {
      path: '/users',
      component: <Users />,
    },
    {
      path: '/users/:id',
      component: <UserDetails />,
    },
  );
}
export default adminRoutes;
