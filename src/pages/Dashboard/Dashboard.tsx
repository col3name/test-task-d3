import DashboardStatistic from "../../widgets/dashboard/DashboardStatistic";
import styles from './Dashboard.module.css';

import {useUpdateDashboardStat} from "../../features/dashboard/hooks";

import {DashTypes} from "../../widgets/dashboard/Dashboard.props";
import Header from "../../widgets/header/Header";

const Dashboard = () => {
  const { error, dashboard} = useUpdateDashboardStat();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <Header />
      { (!error && dashboard) ? (
        <div className={styles.dashboardWrapper}>
          <DashboardStatistic type={DashTypes.Scenarios} statistic={dashboard.scenarios}/>
          <DashboardStatistic type={DashTypes.List} statistic={dashboard.lists}/>
          <DashboardStatistic type={DashTypes.Dialogs} statistic={dashboard.dialogs}/>
        </div>
      ) : (
        <div>{ error || 'Loading...' }</div>
      )}
    </div>
  )
}

export default Dashboard;
