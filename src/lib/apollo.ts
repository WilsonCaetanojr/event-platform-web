import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${import.meta.env.VITE_API_URL}/v2/cl4u0etmj0ebt01ue4y4n68fa/master`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
