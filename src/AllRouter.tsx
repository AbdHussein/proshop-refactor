import { Navigate, Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import Loadable from './components/Loadable';
import { Navbar } from './components';
import Profile from './pages/Profile';
import { adminRoutes } from './Route/Admin';
import { userRoutes } from './Route/user';

const Signup = Loadable(lazy(() => import('./pages/Auth/Signup')));
const Login = Loadable(lazy(() => import('./pages/Auth/Login')));
const Product = Loadable(lazy(() => import('./pages/Gest/ProductDetails')));
const ReviewOrder = Loadable(lazy(() => import('./pages/User/ReviewOrder')));
const Home = Loadable(lazy(() => import('./pages/Gest/Home')));
const Search = Loadable(lazy(() => import('./pages/Gest/Search')));
const Cart = Loadable(lazy(() => import('./pages/Cart')));
const Dashboard = Loadable(lazy(() => import('./pages/DashBoard')));
const AddNewProduct = Loadable(lazy(() => import('./pages/NewProduct')));
const ProductDetails = Loadable(
  lazy(() => import('./pages/Gest/ProductDetails')),
);
const PaymentSuccess = Loadable(lazy(() => import('./pages/PaymentSuccess')));

export const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/search" element={<Search />} />
      {adminRoutes()}
      {userRoutes()}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
