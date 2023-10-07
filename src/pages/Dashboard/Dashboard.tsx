import DashboardStatistic from "../../widgets/dashboard/DashboardStatistic";
import Button from "../../shared/ui/Button";

import styles from './Dashboard.module.css';

import { useUpdateDashboardStat} from "../../features/dashboard/hooks";

import {useLogout} from "../../shared/services/auth/hooks";
import {DashTypes} from "../../widgets/dashboard/Dashboard.props";

const Dashboard = () => {
  const { error, dashboard} = useUpdateDashboardStat();
  const logout = useLogout();

  if (error) {
    return <div>{error}</div>
  }
  if (!dashboard) {
    return <div>Loading</div>
  }
  return (
    <div className={styles.container}>
      <Button onClick={logout}>logout</Button>
      { (!error && dashboard) ? (
        <div className={styles.dashboardWrapper}>
          <DashboardStatistic type={DashTypes.Scenarios} statistic={dashboard.scenarios}/>
          <DashboardStatistic type={DashTypes.List} statistic={dashboard.lists}/>
          <DashboardStatistic type={DashTypes.Dialogs} statistic={dashboard.dialogs}/>
        </div>
      ) : (
        <div>{ error || 'Loading' }</div>
      )}
    </div>
  )
}

export default Dashboard;
