import React, { lazy } from 'react';
import adminRoutes from './Admin';
import { userRoutes } from './User';

const Signup = lazy(() => import('../pages/Auth/Signup'));
const Login = lazy(() => import('../pages/Auth/Login'));
const ReviewOrder = lazy(() => import('../pages/User/ReviewOrder'));
const Home = lazy(() => import('../pages/Gest/Home'));
const Search = lazy(() => import('../pages/Gest/Search'));
const Cart = lazy(() => import('../pages/Cart'));
const Dashboard = lazy(() => import('../pages/DashBoard'));
const AddNewProduct = lazy(() => import('../pages/NewProduct'));
const ProductDetails = lazy(() => import('../pages/Gest/ProductDetails'));
const PaymentSuccess = lazy(() => import('../pages/PaymentSuccess'));

export const AllRoutes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: 'login',
    component: <Login />,
  },
  {
    path: 'Signup',
    component: <Signup />,
  },
  {
    path: '/product/:id',
    component: <ProductDetails />,
  },
  {
    path: 'search',
    component: <Search />,
  },
  ...adminRoutes,
  ...userRoutes,
];
