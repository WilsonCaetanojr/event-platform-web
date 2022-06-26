import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.VITE_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});
