import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import routes from "./routes";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
//components
import AuthLayout from "../components/auth/AuthLayout";
import Separator from "../components/auth/Separator";
import Footer from "../components/Footer";
import DownloadApp from "../components/auth/DownloadApp";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { TitleText, Button, Input } from "../components/shared";
import PageTitle from "../components/PageTitle";
import FormError from "../components/auth/FormError";
import { logUserIn } from "../apollo";
import { useHistory, useLocation } from "react-router-dom";

const Title = styled(TitleText)`
  margin-bottom: 35px;
`;

const FacebookLogin = styled.div`
  color: ${(props) => props.theme.facebookColor};
  margin: 10px 0px 25px;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
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

const Notification = styled.div`
  color: #27ae60;
  font-weight: 600;
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
    <div>
      <AuthLayout>
        <PageTitle title="Login" />
        <FormBox>
          <div>
            <Title>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Title>
          </div>
          <Notification>{location?.state?.message}</Notification>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <Input
              {...register("username", {
                required: "username is empty",
              })}
              type="text"
              placeholder="Phone number, username, or email"
              hasError={Boolean(formState.errors?.username?.message)}
              onFocus={clearLoginError}
            />
            <FormError message={formState.errors?.username?.message} />
            <Input
              {...register("password", { required: "password is empty" })}
              type="password"
              placeholder="Password"
              hasError={Boolean(formState.errors?.password?.message)}
              onFocus={clearLoginError}
            />
            <FormError message={formState.errors?.password?.message} />
            <FormError message={formState.errors?.result?.message} />
            <Button
              type="submit"
              value={loading ? "Loading..." : "Log In"}
              disabled={!formState.isValid || loading}
            />
          </form>
          <Separator />
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
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
      <Footer />
    </div>
  );
}

export default Login;
