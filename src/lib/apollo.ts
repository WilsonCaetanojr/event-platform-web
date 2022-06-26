import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u0etmj0ebt01ue4y4n68fa/master",
  cache: new InMemoryCache(),
});
