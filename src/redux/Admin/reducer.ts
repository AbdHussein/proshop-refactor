import { IUser } from '../Auth/type';
import { EnumAdminAction } from './constant';
import {
  IGetAllUser,
  IProducts,
  IStateAdmin,
  IUserAdmin,
  TAllActionAdmin,
} from './type';

const initialState: IStateAdmin = {
  users: {
    success: false,
    isLoading: false,
    error: '',
    user: {} as IGetAllUser,
  },
  user: {
    success: false,
    isLoading: false,
    error: '',
    user: {} as IUserAdmin,
  },
  updatedUser: {
    success: false,
    isLoading: false,
    error: '',
    user: {} as IUser,
  },
  deletedUser: {
    success: false,
    isLoading: false,
    error: '',
    user: {} as IUser,
  },
  addProduct: {
    success: false,
    isLoading: false,
    error: '',
    product: {} as IProducts,
  },
  deleteProduct: {
    success: false,
    isLoading: false,
    error: '',
    product: {} as IProducts,
  },
  updateProduct: {
    success: false,
    isLoading: false,
    error: '',
    product: {} as IProducts,
  },
};

export const AdminReducer = (
  state = initialState,
  action: TAllActionAdmin,
): IStateAdmin => {
  switch (action.type) {
    /**
     * GET_ALL_PRODUCTS
     */
    case EnumAdminAction.GET_ALL_USER_START:
      return {
        ...state,
        users: {
          // ...state.allProducts,
          isLoading: true,
        },
      };
    case EnumAdminAction.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        users: {
          // ...state.allProducts,
          isLoading: false,
          success: true,
          user: action.payload.user,
        },
      };
    case EnumAdminAction.GET_ALL_USER_FILL:
      return {
        ...state,
        user: {
          // ...state.allProducts,
          error: action.payload.error,
          isLoading: false,
        },
      };

    /** * ge GET_PRODUCTS_BY_ID_START */
    case EnumAdminAction.GET_USER_BY_ID_START:
      return {
        ...state,
        user: {
          // ...state.getProductById,
          isLoading: true,
        },
      };
    case EnumAdminAction.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: {
          // ...state.getProductById,
          isLoading: false,
          success: true,
          user: action.payload.user,
        },
      };
    case EnumAdminAction.GET_USER_BY_ID_FILL:
      return {
        ...state,
        user: {
          // ...state.getProductById,
          error: action.payload.error,
          isLoading: false,
        },
      };
    /** * TOP PRODUCT */
    case EnumAdminAction.DELETE_USER_START_START:
      return {
        ...state,
        deletedUser: {
          // ...state.topProducts,
          isLoading: true,
        },
      };
    case EnumAdminAction.DELETE_USER_START_SUCCESS:
      return {
        ...state,
        deletedUser: {
          // ...state.topProducts,
          isLoading: false,
          success: true,
          // error: '',
          user: action.payload.user,
        },
      };
    case EnumAdminAction.DELETE_USER_START_FILL:
      return {
        ...state,
        user: {
          // ...state.topProducts,
          error: action.payload.error,
          isLoading: false,
        },
      };
    /** * CATEGORY  */
    case EnumAdminAction.UPDATE_USER_START:
      return {
        ...state,
        updatedUser: {
          isLoading: true,
        },
      };
    case EnumAdminAction.UPDATE_USER_SUCCESS:
      return {
        ...state,
        updatedUser: {
          isLoading: false,
          success: true,
          user: action.payload.user,
        },
      };
    case EnumAdminAction.UPDATE_USER_FILL:
      return {
        ...state,
        updatedUser: {
          error: action.payload.error,
          isLoading: false,
        },
      };

    /** * CATEGORY by NAME  */
    case EnumAdminAction.CREATE_PRODUCTS_START:
      return {
        ...state,
        addProduct: {
          // ...state.categoryProductById,
          isLoading: true,
        },
      };
    case EnumAdminAction.CREATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        addProduct: {
          // ...state.categoryProductById,
          isLoading: false,
          success: true,
          product: action.payload.product,
        },
      };
    case EnumAdminAction.CREATE_PRODUCTS_FILL:
      return {
        ...state,
        addProduct: {
          // ...state.categoryProductById,
          error: action.payload.error,
          isLoading: false,
        },
      };

    /** * ADD_REVIEW_TO_PRODUCT  */
    case EnumAdminAction.UPDATE_PRODUCTS_START:
      return {
        ...state,
        updateProduct: {
          isLoading: true,
        },
      };
    case EnumAdminAction.UPDATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        updateProduct: {
          isLoading: false,
          success: true,
          product: action.payload.product,
        },
      };
    case EnumAdminAction.UPDATE_PRODUCTS_FILL:
      return {
        ...state,
        updateProduct: {
          error: action.payload.error,
          isLoading: false,
        },
      };
    case EnumAdminAction.DELETE_PRODUCTS_START:
      return {
        ...state,
        deleteProduct: {
          isLoading: true,
        },
      };
    case EnumAdminAction.DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        deleteProduct: {
          isLoading: false,
          success: true,
          product: action.payload.product,
        },
      };
    case EnumAdminAction.DELETE_PRODUCTS_FILL:
      return {
        ...state,
        deleteProduct: {
          error: action.payload.error,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};
