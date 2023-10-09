import React from 'react';

import Notification from 'shared/ui/notifications/Notification';

import styles from 'shared/ui/notifications/Notifications.module.css';

import {NotificationsListProps} from './Notification.props';
import {useNotificationRemove} from 'features/notification/hooks';

const NotificationsList: React.FC<NotificationsListProps> = ({
  notifications,
}) => {
  const removeNotification = useNotificationRemove();
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
