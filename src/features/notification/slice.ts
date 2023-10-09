import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {v4 as uuidv4} from "uuid";

import {Notification, NotificationId, NotificationItem, NotificationState} from './model';

const initialState: NotificationState = [];

export const TIMEOUT = 2000;
export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification: (state: NotificationState, action: PayloadAction<Notification>) => {
      state.push({ id: uuidv4().toString(), ...action.payload, timeout: TIMEOUT});
      console.log(state)
    },
    removeNotification: (state: NotificationState, action: PayloadAction<NotificationId>) =>{
      const index = state.findIndex((it: NotificationItem) => it.id === action.payload);
      if (index === -1) {
        return
      }
      state.splice(index)
    }
  },
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;