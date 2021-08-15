import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

//header
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

//network check
const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    console.log(operation);
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
      //이걸 대체 어떻게 해야할지...
      window.location.href = "http://localhost:3000/serverError";
      throw new Error("network error!");
    }
  }
);

// If you provide a link chain to ApolloClient, you
// don't provide the `uri` option.
export const client = new ApolloClient({
  // The `from` function combines an array of individual links
  // into a link chain
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

const TOKEN = "TOKEN";
const DARK_MODE = "DARK_MODE";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

//Boolean(localStorage.getItem(DARK_MODE))도 되는뎅;
export const darkModeVar = makeVar(
  Boolean(localStorage.getItem(DARK_MODE) === "enabled")
);

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, "enabled");
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
};
