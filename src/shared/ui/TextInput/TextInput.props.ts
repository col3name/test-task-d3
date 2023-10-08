import {ChangeEvent, FocusEvent} from 'react';

export const TextInputSize = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg'
};

type TextInputProps = {
  className?: string,
  readonly?: boolean,
  disabled?: boolean,
  size?: typeof TextInputSize,
  type?: 'text' | 'password',
  value: string,
  placeholder?: string,
  autoComplete?: string,
  maxLength?: number,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void,
};

export default TextInputProps;
