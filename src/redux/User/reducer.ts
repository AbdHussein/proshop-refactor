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
  allUsers: {
    success: false,
    isLoading: false,
    error: '',
    users: [] as IUser[],
  },
  user: {
    success: false,
    isLoading: false,
    error: '',
    data: {} as IUser,
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
          ...state.myProfile,
          isLoading: true,
        },
      };
    case EnumUserAction.GET_PROFILE_USER_SUCCESS:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          isLoading: false,
          success: true,
          user: action.payload.user,
        },
      };
    case EnumUserAction.GET_PROFILE_USER_FILL:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          error: action.payload.error,
          isLoading: false,
        },
      };

    /** * ge UPDATE_PROFILE_USER_START */
    case EnumUserAction.UPDATE_PROFILE_USER_START:
      return {
        ...state,
        updatedProfile: {
          ...state.updatedProfile,
          isLoading: true,
        },
      };
    case EnumUserAction.UPDATE_PROFILE_USER_SUCCESS:
      return {
        ...state,
        updatedProfile: {
          ...state.updatedProfile,
          isLoading: false,
          success: true,
          user: action.payload.user,
        },
      };
    case EnumUserAction.UPDATE_PROFILE_USER_FILL:
      return {
        ...state,
        updatedProfile: {
          ...state.updatedProfile,
          error: action.payload.error,
          isLoading: false,
        },
      };

    case EnumUserAction.GET_ALL_USERS_START:
      return {
        ...state,
        allUsers: {
          ...state.allUsers,
          isLoading: true,
        },
      };
    case EnumUserAction.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: {
          ...state.allUsers,
          isLoading: false,
          success: true,
          users: action.payload.users,
        },
      };
    case EnumUserAction.GET_ALL_USERS_FAIL:
      return {
        ...state,
        allUsers: {
          ...state.allUsers,
          isLoading: false,
          error: action.payload.error,
        },
      };

    case EnumUserAction.GET_USER_BY_ID_START:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: true,
        },
      };
    case EnumUserAction.GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
          success: true,
          data: action.payload.data,
        },
      };
    case EnumUserAction.GET_USER_BY_ID_FAIL:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
          error: action.payload.error,
        },
      };

    /** * TOP PRODUCT */
    default:
      return state;
  }
};
