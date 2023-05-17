import { api } from '../../service/';
import {
  TLoginPayload,
  TLoginResponse,
} from './types';

export const loginRequest = async (
  payload?: TLoginPayload
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>('/login', payload);
  return data;
};
