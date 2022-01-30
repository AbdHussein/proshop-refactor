import { Action } from 'redux';
import { EnumOrderAction } from './constant';
import { IProducts } from '../Product/type';
import { IUser } from '../Auth/type';

export interface IOrderState {
  myOrder: {
    orders?: IMyOrder;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };

  orders: {
    orders?: IMyOrder;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  deliver: {
    orders?: IOrders;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  orderById: {
    orders?: IOrders;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  createOrder: {
    orders?: IOrders;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
}

export interface IShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface IOorderItems {
  _id: string;
  product: IProducts;
  qty: number;
  itemTotalPrice: number;
}

export interface IOrders {
  shippingAddress: IShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: IUser;
  orderItems: Array<IOorderItems>;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  clientSecret: string;
}

export interface IMyOrder {
  orders: Array<IOrders>;
  page: number;
  pages: number;
}

export interface IGetOrderByIdStart extends Action<string> {
  type: EnumOrderAction.GET_ORDER_BY_ID_START;
}

export interface IGetOrderByIdSuccess extends Action<string> {
  type: EnumOrderAction.GET_ORDER_BY_ID_SUCCESS;
  payload: {
    orders: IOrders;
  };
}
export interface IGetOrderByIdFill extends Action<string> {
  type: EnumOrderAction.GET_ORDER_BY_ID_FILL;
  payload: {
    error: string;
  };
}

/**
 * get  order
 */
export interface IGetMyOrderStart extends Action<string> {
  type: EnumOrderAction.GET_MY_ORDERS_START;
}

export interface IGetMyOrderSuccess extends Action<string> {
  type: EnumOrderAction.GET_MY_ORDERS_SUCCESS;
  payload: {
    orders: IMyOrder;
  };
}
export interface IGetMyOrderFill extends Action<string> {
  type: EnumOrderAction.GET_MY_ORDERS_FILL;
  payload: {
    error: string;
  };
}

/** *
 * CREATE_ORDER_START
 */
export interface ICreateOrderStart extends Action<string> {
  type: EnumOrderAction.CREATE_ORDER_START;
}

export interface ICreateOrderSuccess extends Action<string> {
  type: EnumOrderAction.CREATE_ORDER_SUCCESS;
  payload: {
    order: IOrders;
  };
}

export interface ICreateOrderFill extends Action<string> {
  type: EnumOrderAction.CREATE_ORDER_FILL;
  payload: {
    error: string;
  };
}
/** *
 * CREATE_ORDER_START
 */
export interface IAllOrderStart extends Action<string> {
  type: EnumOrderAction.GET_ORDERS_START;
}

export interface IAllOrderSuccess extends Action<string> {
  type: EnumOrderAction.GET_ORDERS_SUCCESS;
  payload: {
    orders: IMyOrder;
  };
}

export interface IAllOrderFill extends Action<string> {
  type: EnumOrderAction.GET_ORDERS_FILL;
  payload: {
    error: string;
  };
}

export interface IUpdateDeliverOrderStart extends Action<string> {
  type: EnumOrderAction.UPDATE_DELIVER_ORDERS_START;
}

export interface IUpdateDeliverOrderSuccess extends Action<string> {
  type: EnumOrderAction.UPDATE_DELIVER_ORDERS_SUCCESS;
  payload: {
    orders: IOrders;
  };
}

export interface IUpdateDeliverOrderFill extends Action<string> {
  type: EnumOrderAction.UPDATE_DELIVER_ORDERS_FILL;
  payload: {
    error: string;
  };
}

export type ActionOrderType =
  | IGetOrderByIdStart
  | IGetOrderByIdSuccess
  | IGetOrderByIdFill
  | IGetMyOrderStart
  | IGetMyOrderSuccess
  | IGetMyOrderFill
  | ICreateOrderStart
  | ICreateOrderSuccess
  | ICreateOrderFill
  | IAllOrderStart
  | IAllOrderSuccess
  | IAllOrderFill
  | IUpdateDeliverOrderStart
  | IUpdateDeliverOrderSuccess
  | IUpdateDeliverOrderFill;
