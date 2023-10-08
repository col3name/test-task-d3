import React from 'react';

import {Statistic} from '../../features/dashboard/model';

export type DashTextItemProps = {
  active?: boolean,
  onMouseOver?: () => void,
  onMouseOut?: () => void,
  children: React.ReactNode,
}
export type DashboardStatisticProps = {
  statistic: Statistic,
  type: DashType,
}
export const DashStatusTypes = {
  ALL: 'all',
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  COMPLETED: 'completed',
}
export const DashTypes = {
  List: 'Списки',
  Scenarios: 'Сценарии',
  Dialogs: 'Диалоги',
}
export type DashStatus = typeof DashStatusTypes[keyof typeof DashStatusTypes] | null;
export type DashType = typeof DashTypes[keyof typeof DashTypes];

export const COMPLETED_TEXT = 'Завершенных';
export const INACTIVE_TEXT = 'Неактивных';
export const ACTIVE_TEXT = 'Активных';