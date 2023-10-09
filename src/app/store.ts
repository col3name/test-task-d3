import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/slice';
import dashboardReducer from '../features/dashboard/slice';
import notificationReducer from '../features/notification/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
    notification: notificationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;