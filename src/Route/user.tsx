import { Outlet, Route } from 'react-router-dom';

import { lazy } from 'react';

import Loadable from '../components/Loadable';

const Cart = Loadable(lazy(() => import('../pages/Cart')));
const ReviewOrder = Loadable(lazy(() => import('../pages/User/ReviewOrder')));
const Profile = Loadable(lazy(() => import('../pages/Profile')));
const PaymentSuccess = Loadable(lazy(() => import('../pages/PaymentSuccess')));

export const userRoutes = () => {
  const token = localStorage.getItem('token');
  return (
    <>
      {token && (
        <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/review" element={<ReviewOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        </>
      )}
    </>
  );
};
