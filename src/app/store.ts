import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/slice';
import dashboardReducer from '../features/dashboard/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;