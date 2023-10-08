import React, {FC} from 'react';
import cn from 'classnames';

import styles from './Title.module.css'

import TitleProps, {TitleAlign, TitleSize} from './Title.props';
import Colors from "../../styles/colors";

const Title: FC<TitleProps> = ({
  className,
  size = TitleSize.Large,
  align = TitleAlign.Left,
  color = Colors.blue,
  children,
}) => {
  return (
    <h1
      style={ { color: color} }
      className={ cn(className, styles.title, {
        [styles.titleXLarge]: size === TitleSize.XLarge,
        [styles.titleLarge]: size === TitleSize.Large,
        [styles.titleMedium]: size === TitleSize.Medium,
        [styles.titleAlignLeft]: align === TitleAlign.Left,
        [styles.titleAlignCenter]: align === TitleAlign.Center,
        [styles.titleAlignRight]: align === TitleAlign.Right,
      }) }
    >
      { children }
    </h1>
  )
}

export default Title;
