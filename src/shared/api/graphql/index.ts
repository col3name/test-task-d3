import {ApolloClient, InMemoryCache, gql, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {getToken} from '../../services/auth/utils';

export const url = 'https://graphql-demo.dev.aicall.ru/graphql';

export const httpLink = createHttpLink({
  uri: url,
});

export const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});


export const getClientWithAuth = () => {
  client.setLink(getAuthLink().concat(httpLink))
  return client;
}
export const getAuthLink = () => {
  const authToken = getToken()
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
    };
  });
}

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      token
    }
  }
`;

export const GET_DASHBOARD_STAT = gql`
  query {
    dashboard {
      scenarios {
        active
        inactive
        completed
      }
      lists {
        active
        inactive
        completed
      }
      dialogs {
        active
        inactive
        completed
      }
    }
  }
`;
