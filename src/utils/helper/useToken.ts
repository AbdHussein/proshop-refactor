import { IUser } from '../../redux/Auth/type';

export const useToken = () => {
  const token: IUser = JSON.parse(localStorage.getItem('user') || '{}') || {};
  return token;
};
