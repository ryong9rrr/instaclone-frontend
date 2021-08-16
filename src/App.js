import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import { RestrictRoute, routes } from "./screens/routes";
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Layout from "./components/Layout";
import ServerError from "./screens/ServerError";
import useUser from "./hooks/useUser";
import React from "react";
import Profile from "./screens/Profile";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  const myData = useUser();

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path={routes.home} exact>
              {isLoggedIn ? (
                <Layout myData={myData?.me}>
                  <Home />
                </Layout>
              ) : (
                <Login />
              )}
            </Route>
            <RestrictRoute
              isLoggedIn={isLoggedIn}
              path={routes.signUp}
              component={SignUp}
              exact
            />
            <Route path={`/:username/`} component={Profile} exact />
            <Route path={routes.serverError} component={ServerError} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
