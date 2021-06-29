import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import routes from "./routes";
//components
import AuthLayout from "../components/auth/AuthLayout";
import Separator from "../components/auth/Separator";
import Footer from "../components/Footer";
import DownloadApp from "../components/auth/DownloadApp";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { TitleText, Button, Input } from "../components/shared";

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
  return (
    <div>
      <AuthLayout>
        <FormBox>
          <div>
            <Title>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Title>
          </div>
          <form>
            <Input type="text" placeholder="Phone number, username, or email" />
            <Input type="password" placeholder="Password" />
            <Button type="submit" value="Log In" />
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
