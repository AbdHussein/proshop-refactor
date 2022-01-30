import { EnumOrderAction } from './constant';
import {
  ActionOrderType,
  IMyOrder,
  IOrders,
  IOrderState,
  IShippingAddress,
} from './type';

const initialState: IOrderState = {
  myOrder: {
    orders: {} as IMyOrder,
    error: '',
    isLoading: false,
    success: false,
  },
  orders: {
    orders: {} as IMyOrder,
    error: '',
    isLoading: false,
    success: false,
  },
  deliver: {
    orders: {} as IOrders,
    error: '',
    isLoading: false,
    success: false,
  },
  orderById: {
    orders: {} as IOrders,
    error: '',
    isLoading: false,
    success: false,
  },
  createOrder: {
    orders: {} as IOrders,
    error: '',
    isLoading: false,
    success: false,
  },
};

export const OrderReducer = (
  state = initialState,
  action: ActionOrderType,
): IOrderState => {
  switch (action.type) {
    case EnumOrderAction.GET_MY_ORDERS_START:
      return {
        ...state,
        myOrder: {
          isLoading: true,
        },
      };
    case EnumOrderAction.GET_MY_ORDERS_SUCCESS:
      return {
        ...state,
        myOrder: {
          isLoading: false,
          success: true,
          orders: action.payload.orders,
        },
      };

    case EnumOrderAction.GET_MY_ORDERS_FILL:
      return {
        ...state,
        myOrder: {
          isLoading: false,
          success: true,
          error: action.payload.error,
        },
      };

    case EnumOrderAction.GET_ORDERS_START:
      return {
        ...state,
        orders: {
          isLoading: true,
        },
      };

    case EnumOrderAction.GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: {
          isLoading: false,
          success: true,
          orders: action.payload.orders,
        },
      };
    case EnumOrderAction.GET_ORDERS_FILL:
      return {
        ...state,
        orders: {
          error: action.payload.error,
        },
      };

    case EnumOrderAction.GET_ORDER_BY_ID_START:
      return {
        ...state,
        orderById: {
          isLoading: true,
        },
      };

    case EnumOrderAction.GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        orderById: {
          isLoading: false,
          success: true,
          orders: action.payload.orders,
        },
      };
    case EnumOrderAction.GET_ORDER_BY_ID_FILL:
      return {
        ...state,
        orderById: {
          error: action.payload.error,
        },
      };

    case EnumOrderAction.UPDATE_DELIVER_ORDERS_START:
      return {
        ...state,
        deliver: {
          isLoading: true,
        },
      };

    case EnumOrderAction.UPDATE_DELIVER_ORDERS_SUCCESS:
      return {
        ...state,
        deliver: {
          isLoading: false,
          success: true,
          orders: action.payload.orders,
        },
      };
    case EnumOrderAction.UPDATE_DELIVER_ORDERS_FILL:
      return {
        ...state,
        orderById: {
          error: action.payload.error,
        },
      };

    case EnumOrderAction.CREATE_ORDER_START:
      return {
        ...state,
        createOrder: {
          isLoading: true,
        },
      };

    case EnumOrderAction.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        createOrder: {
          isLoading: false,
          success: true,
          orders: action.payload.order,
        },
      };
    case EnumOrderAction.CREATE_ORDER_FILL:
      return {
        ...state,
        createOrder: {
          error: action.payload.error,
        },
      };

    default:
      return state;
  }
};
