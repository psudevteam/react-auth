import { ChangeEventHandler } from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export type TTextFieldProps<T extends FieldValues> = UseControllerProps<T> & {
  type?: 'text' | 'password' | 'email' | 'number' | 'date';
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  className?: string;
  labelClassName?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  status?: 'success' | 'error' | 'warning' | 'none';
  message?: string;
  hint?: string;
};
