import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {User, UserState} from "./model";

const initialState: UserState = {
  user: null,
}
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state: UserState) =>{
      state.user = null;
    }
  },
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;