import { log } from 'console';
import { Dispatch } from 'redux';
import Api from '../../utils/Api/axios';
import { EnumProductsAction } from './constant';
import { IAddReviewPayload, TAllActionProduct } from './type';

export const getProducts = (keyword?: string, pageNumber?: number) => {
  return async (dispatch: Dispatch<TAllActionProduct>) => {
    dispatch({
      type: EnumProductsAction.GET_ALL_PRODUCTS_START,
    });
    let search = '';
    if (keyword && pageNumber) {
      search = `?keyword=${keyword}&pageNumber=${pageNumber}`;
    } else if (keyword) {
      search = `?keyword=${keyword}`;
    } else if (pageNumber) {
      search = `?pageNumber=${pageNumber}`;
    }

    try {
      const response = await Api.get(`/products${search}`);
      dispatch({
        type: EnumProductsAction.GET_ALL_PRODUCTS_SUCCESS,
        payload: {
          products: response.data,
        },
      });
    } catch (e: any) {
      dispatch({
        type: EnumProductsAction.GET_ALL_PRODUCTS_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

/**
 * getProducts
 * used  to  fech  all  the  peduct
 *
 */

export const getProductById = (id: string) => {
  return async (dispatch: Dispatch<TAllActionProduct>) => {
    dispatch({
      type: EnumProductsAction.GET_PRODUCTS_BY_ID_START,
    });

    try {
      const response = await Api.get(`/products/${id}`);
      if (response.status === 200) {
        dispatch({
          type: EnumProductsAction.GET_PRODUCTS_BY_ID_SUCCESS,
          payload: {
            product: response.data,
          },
        });
      } else {
        throw new Error('some  error habbend  in the Top  reated  peoduct');
      }
    } catch (e: any) {
      dispatch({
        type: EnumProductsAction.GET_PRODUCTS_BY_ID_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

/**
 *
 * getTopProducts to  get  the  3  item
 *
 */
export const getTopProducts = () => {
  return async (dispatch: Dispatch<TAllActionProduct>) => {
    dispatch({
      type: EnumProductsAction.GET_TOP_PRODUCTS_START,
    });

    try {
      const response = await Api.get('/products/top');

      dispatch({
        type: EnumProductsAction.GET_TOP_PRODUCTS_SUCCESS,
        payload: {
          product: response.data,
        },
      });
    } catch (e: any) {
      dispatch({
        type: EnumProductsAction.GET_TOP_PRODUCTS_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

/**
 *
 * getTopProducts to  Catogogry
 *
 */

export const getAlCategory = () => {
  return async (dispatch: Dispatch<TAllActionProduct>) => {
    dispatch({
      type: EnumProductsAction.GET_PRODUCTS_BY_ID_START,
    });

    try {
      const response = await Api.get('/products/category/all');
      dispatch({
        type: EnumProductsAction.GET_ALL_CATEGORY_SUCCESS,
        payload: response.data.categories || [],
      });
    } catch (e: any) {
      dispatch({
        type: EnumProductsAction.GET_ALL_CATEGORY_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
// export const getAlCategory = () => {
//   return async (dispatch: Dispatch<TAllActionProduct>) => {
//     dispatch({
//       type: EnumProductsAction.GET_ALL_CATEGORY_START,
//     });

//     try {
//       const response = await Api.get('/products/category/all');
//       console.log('ee', response.data);

//       dispatch({
//         type: EnumProductsAction.GET_ALL_CATEGORY_SUCCESS,
//         payload: {
//           // categories: [],
//           categories: response.data,
//         },
//       });
//     } catch (e: any) {
//       dispatch({
//         type: EnumProductsAction.GET_ALL_CATEGORY_FILL,
//         payload: {
//           error: e?.response?.data?.message,
//         },
//       });
//     }
//   };
// };

/**
 *
 * getTopProducts to  Catogogry
 *
 */
export const getCategoryByName = (name: string) => {
  return async (dispatch: Dispatch<TAllActionProduct>) => {
    dispatch({
      type: EnumProductsAction.GET_ALL_CATEGORY_NAME_START,
    });

    try {
      const response = await Api.get(`/products/category/${name}`);

      if (response.status === 200) {
        dispatch({
          type: EnumProductsAction.GET_ALL_CATEGORY_NAME_SUCCESS,
          payload: {
            product: response.data,
          },
        });
      } else {
        throw new Error('some  error habbend  in the Top  reated  peoduct');
      }
    } catch (e: any) {
      dispatch({
        type: EnumProductsAction.GET_ALL_CATEGORY_NAME_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const addReview = (productId: string, review: IAddReviewPayload) => {
  return async (dispatch: Dispatch<TAllActionProduct>) => {
    dispatch({
      type: EnumProductsAction.ADD_REVIEW_TO_PRODUCT_START,
    });

    try {
      const response = await Api.post(`/products/${productId}/reviews`, review);

      if (response.status === 201) {
        dispatch({
          type: EnumProductsAction.ADD_REVIEW_TO_PRODUCT_SUCCESS,
          payload: {
            review: response.data,
          },
        });
      } else {
        throw new Error('some  error habbend  in the Top  reated  peoduct');
      }
    } catch (e: any) {
      dispatch({
        type: EnumProductsAction.ADD_REVIEW_TO_PRODUCT_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const ProductActions = {
  getProducts,
  getTopProducts,
  getAlCategory,
  getCategoryByName,
  getProductById,
  addReview,
};
