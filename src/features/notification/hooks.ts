import {useAppDispatch, useAppSelector} from 'app/hooks';

import { selectNotifcations } from './selector';
import {addNotification, removeNotification} from './slice';
import {NotificationItem, NotificationType, NotificationId} from './model';

export const useNotificationsSelector = (): NotificationItem[] => useAppSelector(selectNotifcations);
export const DEFAULT_ERROR = 'Critical error! Something went wrong. Please retry or contact administrator';

export const useNotificationAdd = () => {
  const dispatch = useAppDispatch();
  const addNotify = (text: string, type: NotificationType) => {
    dispatch(addNotification({ text, type }));
  };
  const addNotificationFactory = (notificationType: NotificationType) => (text: string) => {
    dispatch(addNotification({ text, type: notificationType}))
  }

  const showError = addNotificationFactory('error');

  const showInfo = addNotificationFactory('info');

  const showWarn = addNotificationFactory('warn');

  const showSuccess = addNotificationFactory('success');
  const showDefaultError = () => showError(DEFAULT_ERROR);

  return {
    addNotify,
    showError,
    showSuccess,
    showInfo,
    showWarn,
    showDefaultError,
  };
};

export const useNotificationRemove = () => {
  const dispatch = useAppDispatch();
  return (id: NotificationId) => {
    dispatch(removeNotification(id));
  }
};
