/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-underscore-dangle */
import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { AppState } from '../store';
import Api from '../../utils/Api/axios';
import { EnumAdminAction } from './constant';
import { ICreateProduct, IProducts, TAllActionAdmin } from './type';
import { formDataCstom } from '../../utils/helper/formData';

//  ?keyword=iphone&pageNumber=1
export const getAllUser = (pageNumber?: number) => {
  return async (dispatch: Dispatch<TAllActionAdmin>) => {
    dispatch({
      type: EnumAdminAction.GET_ALL_USER_START,
    });
    let search = '';
    if (pageNumber) {
      search = `?pageNumber=${pageNumber}`;
    }

    try {
      const response = await Api.get(`/users${search}`);
      dispatch({
        type: EnumAdminAction.GET_ALL_USER_SUCCESS,
        payload: {
          user: response.data,
        },
      });
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.GET_ALL_USER_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const getUserById = (id: string) => {
  return async (dispatch: Dispatch<TAllActionAdmin>) => {
    dispatch({
      type: EnumAdminAction.GET_USER_BY_ID_START,
    });

    try {
      const response = await Api.get(`/users/${id}`);
      if (response.status === 200) {
        dispatch({
          type: EnumAdminAction.GET_USER_BY_ID_SUCCESS,
          payload: {
            user: response.data,
          },
        });
      } else {
        throw new Error('some  error habbend  in the Top  reated  peoduct');
      }

      //   history.push('/profile');
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.GET_USER_BY_ID_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const deleteUserById = (id: string) => {
  return async (dispatch: Dispatch<TAllActionAdmin>) => {
    dispatch({
      type: EnumAdminAction.DELETE_USER_START_START,
    });

    try {
      const response = await Api.delate(`/users/${id}`);
      if (response.status === 200) {
        dispatch({
          type: EnumAdminAction.DELETE_USER_START_SUCCESS,
          payload: {
            user: response.data,
          },
        });
      } else {
        throw new Error('some  error habbend  in the Top  reated  peoduct');
      }

      //   history.push('/profile');
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const addProduct = (product: ICreateProduct, fun?: Function) => {
  return async (dispatch: Dispatch<TAllActionAdmin>) => {
    dispatch({
      type: EnumAdminAction.CREATE_PRODUCTS_START,
    });

    try {
      const imageUpload = product.images.map(image => {
        return Api.post('/upload', formDataCstom(image));
      });
      const imagesUrl = await Promise.all<AxiosResponse>(imageUpload);
      const images = imagesUrl.map(x => x.data) as Array<string>;

      const data = {
        ...product,
        images,
      };

      const response = await Api.post<any>('/products', data);
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_SUCCESS,
        payload: {
          user: response.data,
        },
      });
      fun?.();
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const updateProduct = (
  id: string,
  product: ICreateProduct,
  fun?: Function,
) => {
  return async (dispatch: Dispatch<TAllActionAdmin>) => {
    dispatch({
      type: EnumAdminAction.CREATE_PRODUCTS_START,
    });

    try {
      const responseData = await Api.get(`/products/${id}`);
      const imageNeeedUpdated = (responseData.data.images as Array<any>).filter(
        x => typeof x !== 'string',
      );
      const imageString: Array<string> = (
        responseData.data.images as Array<any>
      ).filter(x => typeof x === 'string');
      const imageUpload = product.images.map(image => {
        return Api.post('/upload', formDataCstom(image));
      });
      const imagesUrl = await Promise.all<AxiosResponse>(imageUpload);
      const images = imagesUrl.map(x => x.data) as Array<string>;
      const data = {
        ...product,
        images,
      };

      const response = await Api.update<any>(`/products/${id}`, data);
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_SUCCESS,
        payload: {
          user: response.data,
        },
      });
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
      fun?.();
    }
  };
};
export const delateProduct = (id: string) => {
  return async (
    dispatch: Dispatch<TAllActionAdmin>,
    getState: () => AppState,
  ) => {
    dispatch({
      type: EnumAdminAction.DELETE_PRODUCTS_START,
    });

    try {
      const response = await Api.delate(`/products/${id}`);
      if (response.status === 200) {
        dispatch({
          type: EnumAdminAction.DELETE_PRODUCTS_SUCCESS,
          payload: {
            product: response.data,
          },
        });
      } else if (response.status === 404) {
        dispatch({
          type: EnumAdminAction.DELETE_PRODUCTS_FILL,
          payload: {
            error: 'item  not  found ',
          },
        });
      }
    } catch (e: any) {
      dispatch({
        type: EnumAdminAction.DELETE_USER_START_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
