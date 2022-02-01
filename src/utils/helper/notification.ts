import { toast } from 'react-toastify';

export type toastType = 'info' | 'success' | 'warning' | 'error' | 'default';

export const notify = (type: toastType, message: string) =>
  toast(message, { type });
