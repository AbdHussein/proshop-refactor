import { Action } from 'redux';
import { IUser } from '../Auth/type';
import { EnumAdminAction } from './constant';

export interface IUserAdmin {
  _id: string;
  email: string;
  token: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  dateOfBirth: string;
  isAdmin: boolean;
  password: string;
  cart: {
    items: Array<any>;
    totalQty: number;
    totalPrice: number;
  };
}

export interface IProducts {
  images: Array<string>;
  colors: Array<string>;
  categories: Array<string>;
  rating: number;
  numReviews: number;
  price: number;
  discount: number;
  countInStock: number;
  _id: string;
  name: string;
  description: string;
  brand: string;
  user: string;
  reviews: [
    {
      rating: number;
      comment: string;
    },
  ];
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface IGetAllUser {
  products: IUserAdmin[];
  page: number;
  pages: number;
}

export interface IStateAdmin {
  users: {
    user?: IGetAllUser;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  user: {
    user?: IUserAdmin;
    success?: boolean;
    isLoading: boolean;
    error?: string;
  };
  updatedUser: {
    user?: IUser;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  deletedUser: {
    user?: IUser;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  addProduct: {
    product?: IProducts;
    success?: boolean;
    isLoading: boolean;
    error?: string;
  };
  deleteProduct: {
    product?: IProducts;
    success?: boolean;
    isLoading: boolean;
    error?: string;
  };
  updateProduct: {
    product?: IProducts;
    success?: boolean;
    isLoading: boolean;
    error?: string;
  };
}

/**
 * IGetAllUserStart
 */

export interface IGetAllUserStart extends Action<string> {
  type: EnumAdminAction.GET_ALL_USER_START;
}
export interface IGetAllUserSuccess extends Action<string> {
  type: EnumAdminAction.GET_ALL_USER_SUCCESS;
  payload: {
    user: IGetAllUser;
  };
}
export interface IGetAllUserFilled extends Action<string> {
  type: EnumAdminAction.GET_ALL_USER_FILL;
  payload: {
    error: string;
  };
}

/**
 * IGetUserByIdStart
 */
export interface IGetUserByIdStart extends Action<string> {
  type: EnumAdminAction.GET_USER_BY_ID_START;
}
export interface IGetUserByIdSuccess extends Action<string> {
  type: EnumAdminAction.GET_USER_BY_ID_SUCCESS;
  payload: {
    user: IUserAdmin;
  };
}
export interface IGetUserByIdFilled extends Action<string> {
  type: EnumAdminAction.GET_USER_BY_ID_FILL;
  payload: {
    error: string;
  };
}

/**
 * IDelateUserStart
 */
export interface IDelateUserStart extends Action<string> {
  type: EnumAdminAction.DELETE_USER_START_START;
}
export interface IDelateUserSuccess extends Action<string> {
  type: EnumAdminAction.DELETE_USER_START_SUCCESS;
  payload: {
    user: IUserAdmin;
  };
}
export interface IDelateUserFilled extends Action<string> {
  type: EnumAdminAction.DELETE_USER_START_FILL;
  payload: {
    error: string;
  };
}

export interface IUpdatesStart extends Action<string> {
  type: EnumAdminAction.UPDATE_USER_START;
}
export interface IUpdatesSuccess extends Action<string> {
  type: EnumAdminAction.UPDATE_USER_SUCCESS;
  payload: {
    user: IUserAdmin;
  };
}
export interface IUpdatesFilled extends Action<string> {
  type: EnumAdminAction.UPDATE_USER_FILL;
  payload: {
    error: string;
  };
}
/**
 * Top interface
 */

export interface ICreateProductStart extends Action<string> {
  type: EnumAdminAction.CREATE_PRODUCTS_START;
}

export interface ICreateProductSuccess extends Action<string> {
  type: EnumAdminAction.CREATE_PRODUCTS_SUCCESS;
  payload: {
    product: IProducts;
  };
}
export interface ICreateProductFilled extends Action<string> {
  type: EnumAdminAction.CREATE_PRODUCTS_FILL;
  payload: {
    error: string;
  };
}

export interface IUpdateProductStart extends Action<string> {
  type: EnumAdminAction.UPDATE_PRODUCTS_START;
}

export interface IUpdateProductSuccess extends Action<string> {
  type: EnumAdminAction.UPDATE_PRODUCTS_SUCCESS;
  payload: {
    product: IProducts;
  };
}
export interface IUpdateProductFilled extends Action<string> {
  type: EnumAdminAction.UPDATE_PRODUCTS_FILL;
  payload: {
    error: string;
  };
}

export interface IDeleteProductStart extends Action<string> {
  type: EnumAdminAction.DELETE_PRODUCTS_START;
}

export interface IDeleteProductSuccess extends Action<string> {
  type: EnumAdminAction.DELETE_PRODUCTS_SUCCESS;
  payload: {
    product: IProducts;
  };
}
export interface IDeleteProductFilled extends Action<string> {
  type: EnumAdminAction.DELETE_PRODUCTS_FILL;
  payload: {
    error: string;
  };
}
/**
 * GET_ALL_CATEGORY
 *
 */

export type TAllActionAdmin =
  | IGetAllUserStart
  | IGetAllUserSuccess
  | IGetAllUserFilled
  | IGetUserByIdStart
  | IGetUserByIdSuccess
  | IGetUserByIdFilled
  | IDelateUserStart
  | IDelateUserSuccess
  | IDelateUserFilled
  | IUpdatesStart
  | IUpdatesSuccess
  | IUpdatesFilled
  | ICreateProductStart
  | ICreateProductSuccess
  | ICreateProductFilled
  | IUpdateProductStart
  | IUpdateProductSuccess
  | IUpdateProductFilled
  | IDeleteProductStart
  | IDeleteProductSuccess
  | IDeleteProductFilled;

export interface ICreateProduct {
  images: File[] | string[];
  colors?: string[];
  categories: string | string[];
  price: string | number;
  discount:string | number;
  countInStock: string | number;
  name: string;
  description: string;
  brand: string;
  user?: string;
}
