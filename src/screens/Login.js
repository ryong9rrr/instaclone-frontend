import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import routes from "./routes";
import { useForm } from "react-hook-form";
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

function Login() {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });

  const onValid = (data) => console.log(data, "onValid");

  return (
    <div>
      <AuthLayout>
        <PageTitle title="Login" />
        <FormBox>
          <div>
            <Title>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Title>
          </div>
          <form onSubmit={handleSubmit(onValid)}>
            <Input
              {...register("username", {
                required: "username is empty",
                minLength: {
                  value: 5,
                  message: "username is too short",
                },
              })}
              type="text"
              placeholder="Phone number, username, or email"
              hasError={Boolean(formState.errors?.username?.message)}
            />
            <FormError message={formState.errors?.username?.message} />
            <Input
              {...register("password", { required: "password is empty" })}
              type="password"
              placeholder="Password"
              hasError={Boolean(formState.errors?.password?.message)}
            />
            <FormError message={formState.errors?.password?.message} />
            <Button
              type="submit"
              value="Log In"
              disabled={!formState.isValid}
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
