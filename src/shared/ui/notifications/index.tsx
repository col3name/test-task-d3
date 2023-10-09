import React from 'react';
import Notification from './notification';

import styles from './styleNotifications.css';
import {useNotificationRemove, useNotificationsSelector} from "../../../features/notification/hooks";

const NotificationsList = () => {
  const notifications = useNotificationsSelector()
  const removeNotification = useNotificationRemove()
  return (
    <div className={ styles.container }>
      { notifications.map(notification => (
        <Notification
          key={ notification.id }
          removeNotification={ removeNotification }
          timeout={ notification.timeout }
          id={ notification.id }
          text={ notification.text }
          type={ notification.type }
        />
      )) }
    </div>
  );
};

export default NotificationsList;
