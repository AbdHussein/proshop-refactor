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
  allUsers: {
    users?: IUser[];
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  user: {
    success?: boolean;
    isLoading?: boolean;
    error?: string;
    data?: IUser;
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

export interface IGetAllUsersStart extends Action<string> {
  type: EnumUserAction.GET_ALL_USERS_START;
}
export interface IGetAllUsersSuccess extends Action<string> {
  type: EnumUserAction.GET_ALL_USERS_SUCCESS;
  payload: {
    users: Array<IUser>;
  };
}
export interface IGetAllUsersFail extends Action<string> {
  type: EnumUserAction.GET_ALL_USERS_FAIL;
  payload: {
    error: string;
  };
}

export interface IGetUserByIDStart extends Action<string> {
  type: EnumUserAction.GET_USER_BY_ID_START;
}
export interface IGetUserByIDSuccess extends Action<string> {
  type: EnumUserAction.GET_USER_BY_ID_SUCCESS;
  payload: {
    data: IUser;
  };
}
export interface IGetUserByIDFail extends Action<string> {
  type: EnumUserAction.GET_USER_BY_ID_FAIL;
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
  | IUpdateProfileFilled
  | IGetAllUsersStart
  | IGetAllUsersSuccess
  | IGetAllUsersFail
  | IGetUserByIDStart
  | IGetUserByIDSuccess
  | IGetUserByIDFail;
