import { Action } from 'redux';
import { IProducts } from '../Product/type';
import { IItemCart } from '../User/type';
import { EnumCartAction } from './constant';

interface ICart {
  items: Array<IItemCart>;
  totalPrice: number;
  totalQty: number;
}

export interface IUpdateCardStart extends Action<string> {
  type: EnumCartAction.UPDATE_ITEM_START;
}

export interface IUpdateCardSuccess extends Action<string> {
  type: EnumCartAction.UPDATE_ITEM_SUCCESS;
  payload: {
    cart: ICart;
  };
}
export interface IUpdateCardFill extends Action<string> {
  type: EnumCartAction.UPDATE_ITEM_FILL;
  payload: {
    error: string;
  };
}

/**
 *DeleteItem
 */
export interface IDeleteCardStart extends Action<string> {
  type: EnumCartAction.DELETE_ITEM_START;
}
export interface IDeleteCardSuccess extends Action<string> {
  type: EnumCartAction.DELETE_ITEM_SUCCESS;
  payload: {
    _id: string;
  };
}
export interface IDeleteCardFill extends Action<string> {
  type: EnumCartAction.DELETE_ITEM_FILL;
  payload: {
    error: string;
  };
}

export interface IMyCardStart extends Action<string> {
  type: EnumCartAction.MY_CART_START;
}
export interface IMyCardSuccess extends Action<string> {
  type: EnumCartAction.MY_CART_SUCCESS;
  payload: {
    cart: ICart;
  };
}
export interface IMyCardFill extends Action<string> {
  type: EnumCartAction.MY_CART_FILL;
  payload: {
    error: string;
  };
}

export type ActionCartType =
  | IDeleteCardStart
  | IDeleteCardSuccess
  | IDeleteCardFill
  | IUpdateCardStart
  | IUpdateCardSuccess
  | IUpdateCardFill
  | IMyCardStart
  | IMyCardSuccess
  | IMyCardFill;

export interface ICartState {
  cart: ICart;
  success: boolean;
  isLoading: boolean;
  error: string;
}
