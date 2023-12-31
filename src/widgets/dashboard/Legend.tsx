import React from 'react';
import cn from 'classnames';

import styles from './Dashboard.module.css';

import {DashTextItemProps} from './Dashboard.props';

const Legend: React.FC<DashTextItemProps> = ({
  active = false,
  children,
  onMouseOver,
  onMouseOut,
}) => {
  return (
    <div
      className={ cn(styles.legend, {
        [styles.legendActive]: active
      })}
      onMouseOver={ () => onMouseOver && onMouseOver()}
      onMouseOut={ () => onMouseOut && onMouseOut()}
    >
      { children }
    </div>
  )
}

export default Legend;
