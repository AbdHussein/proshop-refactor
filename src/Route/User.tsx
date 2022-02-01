import React, { lazy } from 'react';

const Cart = lazy(() => import('../pages/Cart'));
const ReviewOrder = lazy(() => import('../pages/User/ReviewOrder'));
const Profile = lazy(() => import('../pages/Profile'));
const PaymentSuccess = lazy(() => import('../pages/PaymentSuccess'));

const token = localStorage.getItem('token');
const userRoutes: { path: string; component: React.ReactNode }[] = [];

if (token) {
  userRoutes.push(
    {
      path: '/profile',
      component: <Profile />,
    },
    {
      path: '/review',
      component: <ReviewOrder />,
    },
    {
      path: '/cart',
      component: <Cart />,
    },
    {
      path: '/payment-success',
      component: <PaymentSuccess />,
    },
  );
}
export default userRoutes;
