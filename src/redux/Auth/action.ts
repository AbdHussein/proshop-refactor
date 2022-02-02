/* eslint-disable @typescript-eslint/ban-types */
import { Dispatch } from 'redux';
import Api from '../../utils/Api/axios';
import { EnumAuthAction } from './constant';
import { ISignupPayload, LoginPayload, TAllActionAuth } from './type';

export const loginAction = (userData: LoginPayload, fun?: Function) => {
  return async (dispatch: Dispatch<TAllActionAuth>) => {
    dispatch({
      type: EnumAuthAction.USER_LOGIN_START,
    });

    try {
      const response = await Api.post('/users/login', userData);
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('role', JSON.stringify(response.data.isAdmin));

      dispatch({
        type: EnumAuthAction.USER_LOGIN_SUCCESS,
        payload: {
          user: response.data,
        },
      });
      fun?.();
    } catch (e: any) {
      dispatch({
        type: EnumAuthAction.USER_LOGIN_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

export const singUpSuccess = (data: ISignupPayload, fun?: Function) => {
  return async (dispatch: Dispatch<TAllActionAuth>) => {
    try {
      dispatch({
        type: EnumAuthAction.USER_SIGHUP_START,
      });

      const response = await Api.post('/users/signup', data);
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('role', JSON.stringify(response.data.isAdmin));

      dispatch({
        type: EnumAuthAction.USER_SIGHUP_SUCCESS,
        payload: response.data,
      });

      fun?.();
    } catch (e: any) {
      dispatch({
        type: EnumAuthAction.USER_SIGHUP_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
export const logoutSuccess = (fun?: Function) => {
  return (dispatch: Dispatch<TAllActionAuth>) => {
    dispatch({ type: EnumAuthAction.USER_LOGOUT });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    fun?.();
  };
};

export const AuthActions = {
  logoutSuccess,
  singUpSuccess,
  loginAction,
};
