import { Dispatch } from 'redux';
import { IProducts } from '../Product/type';
import { AppState } from '../store';
import { ActionOrderType, IShippingAddress } from './type';
import { ICart } from '../User/type';
import { EnumOrderAction } from './constant';
import Api from '../../utils/Api/axios';

export const getOrderById = (id: string) => {
  return async (dispatch: Dispatch<ActionOrderType>) => {
    dispatch({
      type: EnumOrderAction.GET_ORDER_BY_ID_START,
    });

    try {
      const response = await Api.get(`/orders/${id}`);
      console.log('GET_ORDER_BY_ID_SUCCESS', response.data);

      dispatch({
        type: EnumOrderAction.GET_ORDER_BY_ID_SUCCESS,
        payload: {
          orders: response.data,
        },
      });
    } catch (e: any) {
      dispatch({
        type: EnumOrderAction.GET_ORDER_BY_ID_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
export const getOrders = () => {
  return async (dispatch: Dispatch<ActionOrderType>) => {
    dispatch({
      type: EnumOrderAction.GET_ORDERS_START,
    });

    try {
      const response = await Api.get('/orders');

      if (response.status === 200) {
        dispatch({
          type: EnumOrderAction.GET_ORDERS_SUCCESS,
          payload: {
            orders: response.data,
          },
        });
      }
    } catch (e: any) {
      dispatch({
        type: EnumOrderAction.GET_ORDERS_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const getMyOrder = () => {
  return async (dispatch: Dispatch<ActionOrderType>) => {
    dispatch({
      type: EnumOrderAction.GET_MY_ORDERS_START,
    });

    try {
      const response = await Api.get('/orders/myorders');
      if (response.status === 200) {
        dispatch({
          type: EnumOrderAction.GET_MY_ORDERS_SUCCESS,
          payload: {
            orders: response.data,
          },
        });
      }
    } catch (e: any) {
      dispatch({
        type: EnumOrderAction.GET_MY_ORDERS_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const createOrder = (data: IShippingAddress) => {
  return async (dispatch: Dispatch<ActionOrderType>) => {
    dispatch({
      type: EnumOrderAction.CREATE_ORDER_START,
    });

    try {
      const response = await Api.post<IShippingAddress>('/orders', data);
      dispatch({
        type: EnumOrderAction.CREATE_ORDER_SUCCESS,
        payload: {
          order: response.data.order,
        },
      });
    } catch (e: any) {
      dispatch({
        type: EnumOrderAction.CREATE_ORDER_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
export const deliverOrder = (id: string) => {
  return async (dispatch: Dispatch<ActionOrderType>) => {
    dispatch({
      type: EnumOrderAction.UPDATE_DELIVER_ORDERS_START,
    });

    try {
      const response = await Api.update(`/orders/${id}/deliver`, {});
      if (response.status === 200) {
        dispatch({
          type: EnumOrderAction.UPDATE_DELIVER_ORDERS_SUCCESS,
          payload: {
            orders: response.data,
          },
        });
      }
    } catch (e: any) {
      dispatch({
        type: EnumOrderAction.UPDATE_DELIVER_ORDERS_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
export const OrderActions = {
  getMyOrder,
  getOrderById,
  createOrder,
  getOrders,
};
