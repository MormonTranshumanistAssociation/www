import ApolloClient from 'apollo-boost';
import { GRAPHQL_URL } from './constants';

export default new ApolloClient({
  uri: GRAPHQL_URL,
  request: async (operation) => {
    const token = localStorage.getItem('conf-token');
    if (token) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
  },
});
