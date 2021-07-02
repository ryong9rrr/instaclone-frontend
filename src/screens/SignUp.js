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
import { SubTitleText, TitleText, Button, Input } from "../components/shared";
import PageTitle from "../components/PageTitle";

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

function SignUp() {
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
          <form>
            <Input type="text" placeholder="Mobile Number or Email" />
            <Input type="text" placeholder="Full Name" />
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <SignUpButton type="submit" value="Sign up" />
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
    </div>
  );
}

export default SignUp;
