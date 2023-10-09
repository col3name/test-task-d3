import { GET_DASHBOARD_STAT, getClientWithAuth } from 'shared/api/graphql';
import {getToken} from 'shared/services/auth/utils';
import {DashboardStat} from 'features/dashboard/model';

export const getDashboardStat = async (): Promise<DashboardStat | null> => {
  const token = getToken();
  if (!token) {
    return null;
  }
  const graphQlClient = getClientWithAuth()
  const resp = await graphQlClient.query({
    query: GET_DASHBOARD_STAT,
  });
  const data = resp.data;
  const { dialogs, lists, scenarios } = data.dashboard
  return {
    dialogs,
    lists,
    scenarios
  }
}
