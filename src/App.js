import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import routes from "./screens/routes";
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Navigation from "./components/navigation/Navigation";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Navigation />
          <Switch>
            <Route path={routes.home} exact>
              {isLoggedIn ? <Home /> : <Login />}
            </Route>
            {!isLoggedIn ? (
              <Route path={routes.signUp}>
                <SignUp />
              </Route>
            ) : null}
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
