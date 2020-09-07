import { 
  ApolloClient, 
  createHttpLink, 
  InMemoryCache 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//This REACT_APP_GRAPHQL_URL is defined in a .env file at the root of the project
const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  // This REACT_APP_ACCESS_TOKEN is defined in a .env file at the root of the project
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;