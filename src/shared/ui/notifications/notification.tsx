import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import styles from './styleNotifications.css';

import { NotificationProps } from './Notification.props';

const REMOVE_TIME_OUT = 4 * 1000;
const ANIMATION_DELTA = 500;
const MARGIN_TOP = '20px';
const MARGIN_TOP_AFTER = '-30px';

const Notification: React.FC<NotificationProps> = ({
  timeout,
  id,
  removeNotification,
  text,
  type,
}) => {
  const [animation, setAnimation] = useState({ marginTop: MARGIN_TOP });
  const hide = () => setAnimation({ marginTop: MARGIN_TOP_AFTER });
  const close = () => removeNotification(id);
  useEffect(() => {
    const tout = timeout || REMOVE_TIME_OUT;
    const timeoutId = setTimeout(
      () => close(),
      tout
    );

    const removeAnimationTimeoutId = setTimeout(
      () => hide(),
      tout - ANIMATION_DELTA
    );
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(removeAnimationTimeoutId);
    };
  }, []);
  return (
    <div
      style={ animation }
      className={ cn(
        styles.notification,
        {
          [styles.error]: type === 'error',
          [styles.info]: type === 'info',
          [styles.warn]: type === 'warn',
          [styles.success]: type === 'success',
        }
      ) }
    >
      <span
        className={ styles.closeBtn }
        onClick={ close }
      >
        &#215;
      </span>
      { text }
    </div>
  );
};

export default Notification;
