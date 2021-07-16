import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import routes from "./routes";
import AuthLayout from "../components/auth/AuthLayout";
import Separator from "../components/auth/Separator";
import Footer from "../components/Footer";
import DownloadApp from "../components/auth/DownloadApp";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { SubTitleText, TitleText, Button, Input } from "../components/shared";
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import FormError from "../components/auth/FormError";
import Notification from "../components/Notification";
import { useState } from "react";

const SignUpButton = styled(Button)`
  margin-bottom: 20px;
`;

const FacebookLogin = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  font-weight: 600;
  padding: 8px 0px;
  text-align: center;
  cursor: pointer;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const MUTATION_createAccount = gql`
  mutation createAccount(
    $email: String!
    $firstName: String!
    $lastName: String
    $userName: String!
    $password: String!
  ) {
    createAccount(
      email: $email
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const [notification, setNotification] = useState(false);
  const history = useHistory();
  //console.log(history);

  const {
    register,
    handleSubmit,
    formState,
    setError,
    clearErrors,
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const clearSingUpError = () => clearErrors();

  const onCompleted = (data) => {
    const { userName, password } = getValues();

    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return setError("result", {
        message: error,
      });
    }
    setNotification(true);
    setTimeout(() => {
      history.push(routes.home, {
        username: userName,
        password,
      });
    }, 2000);
  };

  const [createAccount, { loading, data, called }] = useMutation(
    MUTATION_createAccount,
    {
      onCompleted,
    }
  );

  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    //const { email, firstName, lastName, userName, password } = getValues();
    createAccount({
      variables: {
        ...data,
      },
    });
  };

  return (
    <div>
      <AuthLayout>
        <PageTitle title="Sign up" />
        <FormBox>
          <div>
            <TitleText>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</TitleText>
            <SubTitleText>
              Sign up to see photos and videos from your friends.
            </SubTitleText>
          </div>
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            <span>Log in with Facebook</span>
          </FacebookLogin>
          <Separator />
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <Input
              {...register("email", {
                required: "email is required.",
              })}
              type="text"
              placeholder="Mobile Number or Email"
              hasError={Boolean(formState.errors?.email?.message)}
              onFocus={clearSingUpError}
            />
            <FormError message={formState.errors?.email?.message} />
            <Input
              {...register("firstName", {
                required: "first name is required.",
              })}
              type="text"
              placeholder="first Name"
              hasError={Boolean(formState.errors?.firstName?.message)}
              onFocus={clearSingUpError}
            />
            <FormError message={formState.errors?.firstName?.message} />
            <Input
              {...register("lastName")}
              type="text"
              placeholder="last Name(not required)"
              onFocus={clearSingUpError}
            />
            <Input
              {...register("userName", {
                required: "username is required.",
              })}
              type="text"
              placeholder="Username"
              hasError={Boolean(formState.errors?.userName?.message)}
              onFocus={clearSingUpError}
            />
            <FormError message={formState.errors?.userName?.message} />
            <Input
              {...register("password", {
                required: "password is required.",
              })}
              type="password"
              placeholder="Password"
              hasError={Boolean(formState.errors?.password?.message)}
              onFocus={clearSingUpError}
            />
            <FormError message={formState.errors?.password?.message} />
            <FormError message={formState.errors?.result?.message} />
            <SignUpButton
              type="submit"
              value={loading ? "Loading..." : "Sign up"}
              disabled={!formState.isValid || loading}
            />
          </form>
        </FormBox>
        <BottomBox
          cta="Have an account?"
          link={routes.home}
          linkText="Log in"
        />
        <DownloadApp />
      </AuthLayout>
      <Footer />
      <Notification
        state={notification}
        message="Account created. Please log in."
      />
    </div>
  );
}

export default SignUp;
