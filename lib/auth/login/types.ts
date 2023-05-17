import type { User } from 'next-auth';

export type TMetaResponseSingle = {
  message: string
}

export type TLoginPayload = {
  email?: string;
  password?: string;
};

export type TTokenItem = {
  name: string
  value: string
  path: string
  domain: string
  max_age: number
  expires: string
  secure: boolean
  http_only: boolean
  same_site: string
  session_only: boolean
}

export type TLoginData = {
  message: string
  token: TTokenItem;
  user: {
    id: string;
    name: string;
    email: string;
  };
} & User;

export type TLoginResponse = TLoginData;
