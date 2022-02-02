import { Action } from 'redux';
import { EnumProductsAction } from './constant';

export interface IReview {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  user: string;
  createdAt: string;
  updatedAt: string;
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
  reviews: Array<IReview>;
  __v: number;
  createdAt: string;
  updatedAt: string;
  sizes?: string | string[];
}

export interface IGetAllProduct {
  products: IProducts[];
  page: number;
  pages: number;
}
export interface IGetAllCategory {
  name: string;
  image: string;
}

export interface ICategoryByNamePayload {
  name: string;
}
export interface IIProductByIDPayload {
  id: string;
}
export interface IAddReviewPayload {
  rating: number;
  comment: string;
}

export interface IStateProduct {
  allProducts: {
    allProduct?: IGetAllProduct;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  allCategory: {
    categories?: IGetAllCategory[];
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  topProducts: {
    product?: IProducts[];
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  categoryProductById: {
    product?: IGetAllProduct;
    success?: boolean;
    isLoading?: boolean;
    error?: string;
  };
  getProductById: {
    product?: IProducts;
    success?: boolean;
    isLoading: boolean;
    error?: string;
  };
  addReview: {
    review: IAddReviewPayload;
    success: boolean;
    isLoading: boolean;
    error: string;
  };
}

/**
 * IGetAllProduct
 */

export interface IGetAllProductStart extends Action<string> {
  type: EnumProductsAction.GET_ALL_PRODUCTS_START;
}
export interface IGetAllProductSuccess extends Action<string> {
  type: EnumProductsAction.GET_ALL_PRODUCTS_SUCCESS;
  payload: {
    products: IGetAllProduct;
  };
}
export interface IGetAllProductFilled extends Action<string> {
  type: EnumProductsAction.GET_ALL_PRODUCTS_FILL;
  payload: {
    error: string;
  };
}

/**
 * IGetProductById
 */
export interface IGetProductByIdStart extends Action<string> {
  type: EnumProductsAction.GET_PRODUCTS_BY_ID_START;
}
export interface IGetProductByIdSuccess extends Action<string> {
  type: EnumProductsAction.GET_PRODUCTS_BY_ID_SUCCESS;
  payload: {
    product: IProducts;
  };
}
export interface IGetProductByIdFilled extends Action<string> {
  type: EnumProductsAction.GET_PRODUCTS_BY_ID_FILL;
  payload: {
    error: string;
  };
}

/**
 * Top interface
 */

export interface IGetTopProductStart extends Action<string> {
  type: EnumProductsAction.GET_TOP_PRODUCTS_START;
}

export interface IGetTopProductSuccess extends Action<string> {
  type: EnumProductsAction.GET_TOP_PRODUCTS_SUCCESS;
  payload: {
    product: IProducts[];
  };
}
export interface IGetTopProductFilled extends Action<string> {
  type: EnumProductsAction.GET_TOP_PRODUCTS_FILL;
  payload: {
    error: string;
  };
}

/**
 * GET_ALL_CATEGORY
 *
 */

export interface IGetAllCategoryStart {
  type: EnumProductsAction.GET_ALL_CATEGORY_START;
}

export interface IGetAllCategorySuccess {
  type: EnumProductsAction.GET_ALL_CATEGORY_SUCCESS;
  payload: IGetAllCategory[];
}
export interface IGetAllCategoryFilled {
  type: EnumProductsAction.GET_ALL_CATEGORY_FILL;
  payload: {
    error: string;
  };
}

/**
 * GET_ALL_CATEGORY_NAME
 */

export interface IGetACategoryByNameStart extends Action<string> {
  type: EnumProductsAction.GET_ALL_CATEGORY_NAME_START;
}

export interface IGetACategoryByNameSuccess extends Action<string> {
  type: EnumProductsAction.GET_ALL_CATEGORY_NAME_SUCCESS;
  payload: {
    product: IGetAllProduct;
  };
}
export interface IGetACategoryByNameFilled extends Action<string> {
  type: EnumProductsAction.GET_ALL_CATEGORY_NAME_FILL;
  payload: {
    error: string;
  };
}

/**
 * add  review
 *
 */

export interface IAddReviewStart extends Action<string> {
  type: EnumProductsAction.ADD_REVIEW_TO_PRODUCT_START;
}

export interface IAddReviewSuccess extends Action<string> {
  type: EnumProductsAction.ADD_REVIEW_TO_PRODUCT_SUCCESS;
  payload: {
    review: IAddReviewPayload;
  };
}
export interface IAddReviewFilled extends Action<string> {
  type: EnumProductsAction.ADD_REVIEW_TO_PRODUCT_FILL;
  payload: {
    error: string;
  };
}

export type TAllActionProduct =
  | IGetAllProductStart
  | IGetAllProductSuccess
  | IGetAllProductFilled
  | IGetProductByIdStart
  | IGetProductByIdSuccess
  | IGetProductByIdFilled
  | IGetTopProductStart
  | IGetTopProductSuccess
  | IGetTopProductFilled
  | IGetAllCategoryStart
  | IGetAllCategorySuccess
  | IGetAllCategoryFilled
  | IGetACategoryByNameStart
  | IGetACategoryByNameSuccess
  | IGetACategoryByNameFilled
  | IAddReviewStart
  | IAddReviewSuccess
  | IAddReviewFilled;
