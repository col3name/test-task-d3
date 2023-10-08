import { useLayoutEffect, useState} from 'react';

import {ACTIVE_TEXT, COMPLETED_TEXT, DashStatus, DashStatusTypes, DashType, INACTIVE_TEXT} from '../Dashboard.props';

import {Statistic} from '../../../features/dashboard/model';

const PieChartColors = {
  Completed: '#bab1c0',
  Inactive: '#d0cbd6',
  Active: '#f2f0f5',
}

export const useDashboard = (type: DashType, statistic: Statistic) => {
  const [active, setActive] = useState<DashStatus>(null);

  const getTotal = (stat: Statistic): number => stat.active + stat.completed + stat.inactive;

  const [total, setTotal] = useState<number>(getTotal(statistic));

  useLayoutEffect(() => {
    setTotal(getTotal(statistic))
  }, [statistic]);
  const onMouseOver = (value: DashType) => {
    setActive(value);
  };
  const getTitle = () => {
    if (active === DashStatusTypes.ACTIVE) {
      return ACTIVE_TEXT;
    }
    if (active === DashStatusTypes.INACTIVE) {
      return INACTIVE_TEXT;
    }
    if (active === DashStatusTypes.COMPLETED) {
      return COMPLETED_TEXT;
    }
    return type;
  }

  const data = [
    {label: DashStatusTypes.ACTIVE, data: 1, value: statistic.active, index: 0, padAngle: 0, color: PieChartColors.Active},
    {label: DashStatusTypes.INACTIVE, data: 2, value: statistic.inactive, index: 0, padAngle: 0, color: PieChartColors.Inactive},
    {label: DashStatusTypes.COMPLETED, data: 3, value: statistic.completed, index: 0, padAngle: 0, color: PieChartColors.Completed},
  ]

  const getCount = () => {
    if (active === DashStatusTypes.ACTIVE) {
      return statistic.active;
    }
    if (active === DashStatusTypes.INACTIVE) {
      return statistic.inactive;
    }
    if (active === DashStatusTypes.COMPLETED) {
      return statistic.completed;
    }
    return total;
  }

  return {
    data,
    total,
    active,
    setActive,
    getCount,
    getTitle,
    onMouseOver,
  }
}

