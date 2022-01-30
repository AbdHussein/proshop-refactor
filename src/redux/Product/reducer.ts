import { EnumProductsAction } from './constant';
import {
  IAddReviewPayload,
  IGetAllProduct,
  IProducts,
  IStateProduct,
  TAllActionProduct,
} from './type';

const initialState: IStateProduct = {
  addReview: {
    success: false,
    isLoading: false,
    error: '',
    review: {} as IAddReviewPayload,
  },
  allCategory: {
    success: false,
    isLoading: false,
    error: '',
    categories: [],
  },
  allProducts: {
    success: false,
    isLoading: false,
    error: '',
    allProduct: {} as IGetAllProduct,
  },
  categoryProductById: {
    success: false,
    isLoading: false,
    error: '',
    product: {} as IGetAllProduct,
  },
  topProducts: {
    success: false,
    isLoading: false,
    error: '',
    product: [],
  },
  getProductById: {
    success: false,
    isLoading: false,
    error: '',
    product: {} as IProducts,
  },
};

export const ProductReducer = (
  state = initialState,
  action: TAllActionProduct,
): IStateProduct => {
  switch (action.type) {
    /**
     * GET_ALL_PRODUCTS
     */
    case EnumProductsAction.GET_ALL_PRODUCTS_START:
      return {
        ...state,
        allProducts: {
          isLoading: true,
        },
      };
    case EnumProductsAction.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: {
          isLoading: false,
          success: true,
          allProduct: action.payload.products,
        },
      };
    case EnumProductsAction.GET_ALL_PRODUCTS_FILL:
      return {
        ...state,
        allProducts: {
          error: action.payload.error,
          isLoading: false,
        },
      };

    /** * ge GET_PRODUCTS_BY_ID_START */
    case EnumProductsAction.GET_PRODUCTS_BY_ID_START:
      return {
        ...state,
        getProductById: {
          isLoading: true,
        },
      };
    case EnumProductsAction.GET_PRODUCTS_BY_ID_SUCCESS:
      return {
        ...state,
        getProductById: {
          isLoading: false,
          success: true,
          product: action.payload.product,
        },
      };
    case EnumProductsAction.GET_PRODUCTS_BY_ID_FILL:
      return {
        ...state,
        getProductById: {
          error: action.payload.error,
          isLoading: false,
        },
      };
    /** * TOP PRODUCT */
    case EnumProductsAction.GET_TOP_PRODUCTS_START:
      return {
        ...state,
        topProducts: {
          isLoading: true,
        },
      };
    case EnumProductsAction.GET_TOP_PRODUCTS_SUCCESS:
      return {
        ...state,
        topProducts: {
          isLoading: false,
          success: true,
          product: action.payload.product,
        },
      };
    case EnumProductsAction.GET_TOP_PRODUCTS_FILL:
      return {
        ...state,
        topProducts: {
          error: action.payload.error,
          isLoading: false,
        },
      };
    /** * CATEGORY  */
    case EnumProductsAction.GET_ALL_CATEGORY_START:
      return {
        ...state,
        allCategory: {
          isLoading: true,
        },
      };
    case EnumProductsAction.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        allCategory: {
          isLoading: false,
          success: true,
          categories: action.payload,
        },
      };
    case EnumProductsAction.GET_ALL_CATEGORY_FILL:
      return {
        ...state,
        allCategory: {
          error: action.payload.error,
        },
      };

    /** * CATEGORY by NAME  */
    case EnumProductsAction.GET_ALL_CATEGORY_NAME_START:
      return {
        ...state,
        categoryProductById: {
          // ...state.categoryProductById,
          isLoading: true,
        },
      };
    case EnumProductsAction.GET_ALL_CATEGORY_NAME_SUCCESS:
      return {
        ...state,
        categoryProductById: {
          // ...state.categoryProductById,
          isLoading: false,
          success: true,
          product: action.payload.product,
        },
      };
    case EnumProductsAction.GET_ALL_CATEGORY_NAME_FILL:
      return {
        ...state,
        categoryProductById: {
          // ...state.categoryProductById,
          error: action.payload.error,
          isLoading: false,
        },
      };

    /** * ADD_REVIEW_TO_PRODUCT  */
    case EnumProductsAction.ADD_REVIEW_TO_PRODUCT_START:
      return {
        ...state,
        addReview: {
          ...state.addReview,
          isLoading: true,
        },
      };
    case EnumProductsAction.ADD_REVIEW_TO_PRODUCT_SUCCESS:
      return {
        ...state,
        addReview: {
          ...state.addReview,
          isLoading: false,
          success: true,
          review: action.payload.review,
        },
      };
    case EnumProductsAction.ADD_REVIEW_TO_PRODUCT_FILL:
      return {
        ...state,
        addReview: {
          ...state.addReview,
          error: action.payload.error,
          isLoading: false,
        },
      };

    default:
      return initialState;
  }
};
