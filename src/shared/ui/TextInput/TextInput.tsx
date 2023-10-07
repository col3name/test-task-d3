import React from 'react';
import cn from 'classnames';

import styles from './TextInputStyle.module.css';

import TextInputProps from './TextInput.props';

const TextInput: React.FC<TextInputProps> =(props) => {
  const {
    className,
    value,
    placeholder,
    type,
    onChange,
    onBlur,
  } = props;

  return (
    <input
      value={ value }
      className={ cn(className, styles.input)}
      type={type}
      // size={size}
      placeholder={placeholder}
      // style={{ width }}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default TextInput;