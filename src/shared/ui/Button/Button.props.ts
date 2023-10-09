import React, {CSSProperties, MouseEventHandler} from 'react';

type ButtonPropsType = {
  disabled?: boolean,
  iconOnly?: boolean,
  small?: boolean,
  success?: boolean,
  mutted?: boolean,
  large?: boolean,
  loading?: boolean,
  panelAction?: boolean,
  popupAction?: boolean,
  children?: React.ReactNode,
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string,
  onClick?: MouseEventHandler,
  warn?: boolean,
  alert?: boolean,
  done?: boolean,
  style?: CSSProperties | undefined,
}

export default ButtonPropsType;
