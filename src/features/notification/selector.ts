import {RootState} from '../../app/store';

import { NotificationItem } from './model';

export const selectNotifcations = (state: RootState): NotificationItem[] => state.notification;