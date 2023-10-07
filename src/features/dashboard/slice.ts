import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {DashboardStat} from "./model";

type DashboardState = {
  statistic: DashboardStat | null,
}
const initialState: DashboardState = {
  statistic: null
};

export const dashboardSlice = createSlice({
  name: 'dasbboard',
  initialState,
  reducers: {
    updateDashboard: (state: DashboardState, action: PayloadAction<DashboardStat>) => {
      state.statistic = action.payload;
    },
    clearDashboard: (state: DashboardState) =>{
      state.statistic = null;
    }
  },
});

export const { updateDashboard, clearDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;