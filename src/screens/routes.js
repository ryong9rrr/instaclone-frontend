import { Redirect } from "react-router-dom";

export const routes = {
  home: "/",
  signUp: "/sign-up",
  serverError: "/serverError",
};

export const RestrictRoute = ({ component: Component, path, isLoggedIn }) => {
  return isLoggedIn ? <Redirect to={routes.home} /> : <Component path={path} />;
};
