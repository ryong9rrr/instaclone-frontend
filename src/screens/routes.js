import { Redirect } from "react-router-dom";

export const routes = {
  home: "/",
  signUp: "/sign-up",
  serverError: "/serverError",
  edit: "/accounts/edit",
};

export const RestrictRoute = ({ component: Component, path, isLoggedIn }) => {
  return isLoggedIn ? <Redirect to={routes.home} /> : <Component path={path} />;
};
