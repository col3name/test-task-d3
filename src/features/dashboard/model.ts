export type DashboardStat = {
  scenarios: Statistic,
  lists: Statistic,
  dialogs: Statistic,
}

export type Statistic = {
  active: number,
  inactive: number,
  completed: number,
}