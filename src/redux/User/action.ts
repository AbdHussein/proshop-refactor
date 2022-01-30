import { Dispatch } from 'redux';
import Api from '../../utils/Api/axios';
import { EnumUserAction } from './constant';
import { TAllActionUser } from './type';

export const getProfile = () => {
  return async (dispatch: Dispatch<TAllActionUser>) => {
    dispatch({
      type: EnumUserAction.GET_PROFILE_USER_START,
    });

    try {
      const response = await Api.get(`/users/profile`);
      if (response.status === 200) {
        console.log('GET_PROFILE_USER_SUCCESS', response.data);
        dispatch({
          type: EnumUserAction.GET_PROFILE_USER_SUCCESS,
          payload: {
            user: response.data,
          },
        });
      }
    } catch (e: any) {
      dispatch({
        type: EnumUserAction.GET_PROFILE_USER_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};

interface InterfaceUpdateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: File;
  isAdmin: boolean;
  dateOfBirth: string;
}

export const updateUser = (data: InterfaceUpdateUser) => {
  return async (dispatch: Dispatch<TAllActionUser>) => {
    dispatch({
      type: EnumUserAction.UPDATE_PROFILE_USER_START,
    });

    try {
      const formData = new FormData();
      formData.append('image', data.profileImage);
      try {
        const profileImage = await Api.post('/upload', formData);
        const dataObj = {
          ...data,
          profileImage: profileImage.data,
        };

        const response = await Api.update<InterfaceUpdateUser>(
          `/users/profile`,
          dataObj,
        );

        dispatch({
          type: EnumUserAction.GET_PROFILE_USER_SUCCESS,
          payload: {
            user: response.data,
          },
        });
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', JSON.stringify(response.data.token));
      } catch (e: any) {
        dispatch({
          type: EnumUserAction.GET_PROFILE_USER_FILL,
          payload: {
            error: e?.response?.data?.message,
          },
        });
      }
    } catch (e: any) {
      dispatch({
        type: EnumUserAction.GET_PROFILE_USER_FILL,
        payload: {
          error: e?.response?.data?.message,
        },
      });
    }
  };
};
