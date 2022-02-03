import { EnumAuthAction } from './constant';
import { IStateAuth, IUser, TAllActionAuth } from './type';

const temp = localStorage.getItem('user');
const user = temp ? JSON.parse(temp) : {};
const initialState: IStateAuth = {
  user: {
    ...JSON.parse((localStorage.getItem('user') || null) as string),
  } as IUser,
  success: false,
  isLoading: false,
  error: '',
};

export const AuthReducer = (
  state = initialState,
  action: TAllActionAuth,
): IStateAuth => {
  switch (action.type) {
    case EnumAuthAction.USER_SIGHUP_START:
      return { ...state, isLoading: true };
    case EnumAuthAction.USER_SIGHUP_SUCCESS:
      return {
        ...state,
        isLoading: true,
        success: true,
        user: action.payload.user,
      };
    case EnumAuthAction.USER_SIGHUP_FILL:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };

    // FINS ALL STATUS OF THE  DIGNUP

    /** START THE LOGIN  STATUS   */

    case EnumAuthAction.USER_LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };

    case EnumAuthAction.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoading: false,
        success: true,
      };

    case EnumAuthAction.USER_LOGIN_FILL:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    /** END  THE LOGIN  STATUS   */
    case EnumAuthAction.USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
};
