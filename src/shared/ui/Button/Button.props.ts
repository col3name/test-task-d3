import React from "react";

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
  onClick?: any,
  warn?: boolean,
  alert?: boolean,
  done?: boolean,
  style?: any,
}

export default ButtonPropsType;
