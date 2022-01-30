import { Action } from 'redux';
import { IProducts } from '../Product/type';
/* eslint-disable @typescript-eslint/ban-types */
import { EnumAuthAction } from './constant';

interface IItemCart {
  product: IProducts;
  itemTotalPrice: number;
  qty: number;
}
export interface ICart {
  items: Array<IItemCart>;
  totalPrice: number;
  totalQty: number;
}
export interface IUser {
  _id: string;
  email: string;
  token: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  dateOfBirth: string;
  isAdmin: boolean;
  cart: ICart;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ISignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IStateAuth {
  user: IUser;
  success: boolean;
  isLoading: boolean;
  error: string;
}

export interface ILoginStart extends Action<string> {
  type: EnumAuthAction.USER_LOGIN_START;
}
export interface ILoginSuccess extends Action<string> {
  type: EnumAuthAction.USER_LOGIN_SUCCESS;
  payload: {
    user: IUser;
  };
}
export interface ILoginFilled extends Action<string> {
  type: EnumAuthAction.USER_LOGIN_FILL;
  payload: {
    error: string;
  };
}
export interface ISuginUpStart extends Action<string> {
  type: EnumAuthAction.USER_SIGHUP_START;
}
export interface ISuginUpSuccess extends Action<string> {
  type: EnumAuthAction.USER_SIGHUP_SUCCESS;
  payload: {
    user: IUser;
  };
}
export interface ILogoutSuccess extends Action<string> {
  type: EnumAuthAction.USER_LOGOUT;
}
export interface ISuginUpFilled {
  type: EnumAuthAction.USER_SIGHUP_FILL;
  payload: {
    error: string;
  };
}

export type TLogin = ILoginStart | ILoginSuccess | ILoginFilled;
export type TSuginUp = ISuginUpStart | ISuginUpSuccess | ISuginUpFilled;

export type TAllActionAuth =
  | ILoginStart
  | ILoginSuccess
  | ILoginFilled
  | ISuginUpStart
  | ISuginUpSuccess
  | ILogoutSuccess
  | ISuginUpFilled;
