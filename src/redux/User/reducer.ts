import { IUser } from '../Auth/type';
import { EnumUserAction } from './constant';
import { IStateUser, TAllActionUser } from './type';

const initialState: IStateUser = {
  myProfile: {
    success: false,
    isLoading: false,
    error: '',
    user: {} as IUser,
  },
  updatedProfile: {
    success: false,
    isLoading: false,
    error: '',
    user: {} as IUser,
  },
};

export const UserReducer = (
  state = initialState,
  action: TAllActionUser,
): IStateUser => {
  switch (action.type) {
    /**
     * GET_ALL_PRODUCTS
     */
    case EnumUserAction.GET_PROFILE_USER_START:
      return {
        ...state,
        myProfile: {
          isLoading: true,
        },
      };
    case EnumUserAction.GET_PROFILE_USER_SUCCESS:
      return {
        ...state,
        myProfile: {
          isLoading: false,
          success: true,
          user: action.payload.user,
        },
      };
    case EnumUserAction.GET_PROFILE_USER_FILL:
      return {
        ...state,
        myProfile: {
          error: action.payload.error,
          isLoading: false,
        },
      };

    /** * ge UPDATE_PROFILE_USER_START */
    case EnumUserAction.UPDATE_PROFILE_USER_START:
      return {
        ...state,
        updatedProfile: {
          isLoading: true,
        },
      };
    case EnumUserAction.UPDATE_PROFILE_USER_SUCCESS:
      return {
        ...state,
        updatedProfile: {
          isLoading: false,
          success: true,
          user: action.payload.user,
        },
      };
    case EnumUserAction.UPDATE_PROFILE_USER_FILL:
      return {
        ...state,
        updatedProfile: {
          error: action.payload.error,
          isLoading: false,
        },
      };
    /** * TOP PRODUCT */

    default:
      return initialState;
  }
};
