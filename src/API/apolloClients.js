import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
  }
}));

const createClientWithAuth = (uri) => {
    const httpLink = createHttpLink({ uri });
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  };
export const homeApi1 = createClientWithAuth('https://18.178.54.44:4000/graphql');