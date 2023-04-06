import fetch from 'cross-fetch';
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { FC } from 'react';
import { getAuthToken } from 'shared/api/auth';

/**
 * Setup cache.
 */
const cache = new InMemoryCache();
const REACT_APP_API_URL = '';

/**
 * Provide opportunity to make GraphQL queries over HTTP.
 */
// @ts-ignore
// eslint-disable-next-line new-cap
const httpLink = new createHttpLink({ uri: REACT_APP_API_URL, fetch });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAuthToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const resetToken = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      if (message === 'UNAUTHENTICATED') {
        // removeAuthToken();
        // window.location.reload();
      }
    });
  }

  // @ts-ignore
  if (networkError && networkError.name === 'ServerError' && networkError?.statusCode === 401) {
    // remove cached token on 401 from the server
    // removeAuthToken();
    // window.location.reload();
  }
});

const AuthFlowLink = authLink.concat(resetToken);

const client = new ApolloClient({
  link: AuthFlowLink.concat(httpLink),
  cache,
  connectToDevTools: import.meta.env.NODE_ENV === 'development',
});

const withApollo = <P extends object>(Component: FC<P>): FC<P> => {
  return function WithApollo(props) {
    return (
      <ApolloProvider client={client}>
        <Component {...props} />
      </ApolloProvider>
    );
  };
};

export default withApollo;
