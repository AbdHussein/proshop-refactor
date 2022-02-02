import { ICart } from '../User/type';
import { EnumCartAction } from './constant';
import { ActionCartType, ICartState } from './type';

const temp = localStorage.getItem('user');
const cart = (temp ? JSON.parse(temp).cart : {}) as ICart;

const initialState: ICartState = {
  cart: {
    items: cart.items || [],
    totalQty: cart.totalQty || 0,
    totalPrice: cart.totalPrice || 0,
  },
  success: false,
  isLoading: false,
  error: '',
};

export const CartReducer = (
  state = initialState,
  action: ActionCartType,
): ICartState => {
  switch (action.type) {
    case EnumCartAction.UPDATE_ITEM_START:
      return {
        ...state,
        // isLoading: true,
      };
    case EnumCartAction.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cart: action.payload.cart,
      };

    case EnumCartAction.UPDATE_ITEM_FILL:
      return { ...state, error: action.payload.error };

    case EnumCartAction.MY_CART_START:
      return {
        ...state,
        isLoading: true,
      };
    case EnumCartAction.MY_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cart: action.payload.cart,
      };

    case EnumCartAction.MY_CART_FILL:
      return { ...state, error: action.payload.error };

    case EnumCartAction.DELETE_ITEM_START:
      return state;
    /* eslint no-case-declarations: "error" */

    case EnumCartAction.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        cart: {
          ...state.cart,
          items: state.cart.items.filter(
            item => item.product._id !== action.payload._id,
          ),
        },
      };
    case EnumCartAction.DELETE_ITEM_FILL:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
