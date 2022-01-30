import { Action } from 'redux';
import { IProducts } from '../Product/type';
import { IUser } from '../Auth/type';
import { EnumUserAction } from './constant';

export interface IUserProfile {
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
export interface ICart {
  items: Array<IItemCart>;
  totalQty: number;
  totalPrice: number;
}

export interface IItemCart {
  itemTotalPrice: number;
  product: IProducts;
  qty: number;
  id?: string;
}

export interface IStateUser {
  myProfile: {
    user?: IUser;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  updatedProfile: {
    user?: IUser;
    success?: boolean;
    isLoading: boolean;
    error?: string;
  };
}

/**
 * IGetAllUserStart
 */

export interface IGetProfileUserStart extends Action<string> {
  type: EnumUserAction.GET_PROFILE_USER_START;
}
export interface IGetProfileUserSuccess extends Action<string> {
  type: EnumUserAction.GET_PROFILE_USER_SUCCESS;
  payload: {
    user: IUserProfile;
  };
}
export interface IGetProfileUserFilled extends Action<string> {
  type: EnumUserAction.GET_PROFILE_USER_FILL;
  payload: {
    error: string;
  };
}

/**
 * IUpdateProfileStart
 */
export interface IUpdateProfileStart extends Action<string> {
  type: EnumUserAction.UPDATE_PROFILE_USER_START;
}
export interface IUpdateProfileSuccess extends Action<string> {
  type: EnumUserAction.UPDATE_PROFILE_USER_SUCCESS;
  payload: {
    user: IUserProfile;
  };
}
export interface IUpdateProfileFilled extends Action<string> {
  type: EnumUserAction.UPDATE_PROFILE_USER_FILL;
  payload: {
    error: string;
  };
}

export type TAllActionUser =
  | IGetProfileUserStart
  | IGetProfileUserSuccess
  | IGetProfileUserFilled
  | IUpdateProfileStart
  | IUpdateProfileSuccess
  | IUpdateProfileFilled;
