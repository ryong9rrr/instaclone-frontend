import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  makeVar,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem("token")));

export const darkModeVar = makeVar(false);

export const logUserIn = (token) => {
  localStorage.setItem("token", token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem("token");
  isLoggedInVar(false);
};

//network check
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
export const client = new ApolloClient({
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
