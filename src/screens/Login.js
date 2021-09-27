import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { routes } from "./routes";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
//components
import AuthLayout from "../components/auth/AuthLayout";
import Separator from "../components/auth/Separator";
import DownloadApp from "../components/auth/DownloadApp";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { Button, Input, Symbol, symbol } from "../components/shared";
import PageTitle from "../components/PageTitle";
import FormError from "../components/auth/FormError";
import { logUserIn } from "../apollo";
import { useHistory, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { solid } from "../components/FaIcons";

const Title = styled(Symbol)`
  display: block;
  font-size: 50px;
  margin-bottom: 35px;
`;

const FormInput = styled(Input)`
  margin-top: 5px;
  height: 40px;
  width: 100%;
  padding: 7px 10px;
  &::placeholder {
    font-size: 12px;
  }
`;

const FacebookLogin = styled.div`
  color: ${(props) => props.theme.facebookColor};
  margin: 10px 0px 25px;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Btn = styled(Button)`
  margin-top: 15px;
  width: 100%;
  padding: 6px 0px;
`;

const LossPassword = styled.div`
  color: ${(props) => props.theme.facebookColor};
  font-size: 12px;
`;

const MUTATION_login = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

function Login() {
  const history = useHistory();
  const location = useLocation();
  //console.log(location);

  const {
    register,
    handleSubmit,
    formState,
    getValues,
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password || "",
    },
  });

  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      login: { ok, token, error },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    if (token) {
      logUserIn(token, history);
      history.push({
        state: {
          username,
          password,
        },
      });
    }
  };

  const [login, { loading, data, called }] = useMutation(MUTATION_login, {
    onCompleted,
  });

  const onSubmitValid = (data) => {
    //console.log(data, "onValid")
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    login({
      variables: { userName: username, password },
    });
  };

  const clearLoginError = () => clearErrors();

  return (
    <React.Fragment>
      <AuthLayout>
        <PageTitle title="Login" />
        <FormBox>
          <div>
            <Title>{symbol}</Title>
          </div>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <FormInput
              {...register("username", {
                required: "username is empty",
              })}
              type="text"
              placeholder="Phone number, username, or email"
              hasError={Boolean(formState.errors?.username?.message)}
              onFocus={clearLoginError}
            />
            <FormError message={formState.errors?.username?.message} />
            <FormInput
              {...register("password", { required: "password is empty" })}
              type="password"
              placeholder="Password"
              hasError={Boolean(formState.errors?.password?.message)}
              onFocus={clearLoginError}
            />
            <FormError message={formState.errors?.password?.message} />
            <FormError message={formState.errors?.result?.message} />
            <Btn type="submit" disabled={!formState.isValid || loading}>
              {loading ? "Loading..." : "Log In"}
            </Btn>
          </form>
          <Separator />
          <FacebookLogin>
            <FontAwesomeIcon icon={solid.facebook} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
          <LossPassword>
            <span>Forgot password?</span>
          </LossPassword>
        </FormBox>
        <BottomBox
          cta="Don't have an account?"
          link={routes.signUp}
          linkText="Sign up"
        />
        <DownloadApp />
      </AuthLayout>
      <Footer screen="auth" />
    </React.Fragment>
  );
}

export default Login;
