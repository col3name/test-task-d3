import {RootState} from '../../app/store';
import {DashboardStat} from './model';

export const selectDashboard = (state: RootState): DashboardStat|null => state.dashboard.statistic;