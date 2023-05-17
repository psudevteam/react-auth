import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  href?: string;
  children: ReactNode;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
}
