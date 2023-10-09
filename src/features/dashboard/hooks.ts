import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'app/hooks';

import {selectDashboard} from './selector';
import {clearDashboard, updateDashboard} from './slice';
import {getDashboardStat} from 'shared/services/dashboard/hooks';
import {DashboardStat} from './model';

export const useDashboardSelector = (): DashboardStat |null => useAppSelector(selectDashboard);

export const useUpdateDashboardStat= () => {
  const dashboard: DashboardStat | null = useDashboardSelector();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  useEffect(() => {
    if (!dashboard) {
      getDashboardStat()
        .then(stat => {
          if (!stat) {
            setError('Failed get dashboard');
            return;
          }
          dispatch(updateDashboard(stat));
        });
    }
  }, [dashboard, dispatch]);

  return {
    dashboard, error
  }
}
export const useClearDashboard = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(clearDashboard());
  };
};
