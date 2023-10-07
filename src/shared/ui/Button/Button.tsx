import React from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

import ButtonPropsType from "./Button.props";

const Button: React.FC<ButtonPropsType> = ({
  type = 'button',
  warn = false,
  loading,
  disabled,
  onClick,
  className,
  iconOnly,
  mutted,
  small,
  success,
  large,
  alert,
  popupAction,
  panelAction,
  done,
  children,
  style
}) => {
  const withLoader = typeof loading !== 'undefined';
  return (
    <button
      style={ style }
      type={ type }
      disabled={ disabled }
      onClick={ onClick }
      className={ cn(
        styles.button,
        className,
        {
          [styles.iconOnly]: iconOnly,
          [styles.mutted]: mutted,
          [styles.success]: success,
          [styles.small]: small,
          [styles.large]: large,
          [styles.popupAction]: popupAction,
          [styles.panelAction]: panelAction,
          [styles.disabled]: disabled,
          [styles.loadingButtonOpacity]: withLoader && loading,
          [styles.hideButtonText]: withLoader && loading,
          [styles.decline]: warn,
          [styles.alert]: alert,
          [styles.done]: done,
        }
      ) }
    >
      { children }
    </button>
  );
};

export default Button;