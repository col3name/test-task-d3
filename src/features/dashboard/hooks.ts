import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectDashboard} from "./selector";
import {DashboardStat} from "./model";
import {clearDashboard, updateDashboard} from "./slice";
import {useEffect, useState} from "react";
import {getDashboardStat} from "../../shared/services/dashboard/hooks";

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
  }, []);

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
