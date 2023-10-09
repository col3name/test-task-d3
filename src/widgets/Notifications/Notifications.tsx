import React from 'react';

import NotificationsList from 'shared/ui/notifications/NotificationList';

import { useNotificationsSelector} from 'features/notification/hooks';

const Notifications = () => {
  const notifications = useNotificationsSelector();
  return (
    <NotificationsList notifications={notifications}/>
  );
};

export default Notifications;
