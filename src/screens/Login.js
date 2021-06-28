import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 45px 0px;
`;

const Wrapper = styled.section`
  width: 350px;
`;

const WhiteBox = styled.div`
  width: 100%;
  background-color: white;
  border: 2px solid ${(props) => props.theme.borderColor};
`;

const TopBox = styled(WhiteBox)`
  margin-bottom: 10px;
  padding: 30px 40px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    letter-spacing: -5px;
  }
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 7px 10px;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

const Button = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  font-weight: 600;
  margin-top: 15px;
  padding: 8px 0px;
  text-align: center;
  cursor: pointer;
`;

const BottomBox = styled(WhiteBox)`
  text-align: center;
  padding: 25px 0px;
  a {
    margin-left: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.accent};
  }
`;

const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background-color: ${(props) => props.theme.borderColor};
    height: 1px;
    width: 100%;
  }
  span {
    margin: 0px 10px;
    color: ${(props) => props.theme.footerColor};
    font-weight: 600;
  }
`;

const FacebookLogin = styled.div`
  color: ${(props) => props.theme.facebookColor};
  margin-bottom: 25px;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const LossPassword = styled.div`
  color: ${(props) => props.theme.facebookColor};
  font-size: 12px;
`;

const DownLoadApp = styled.div`
  text-align: center;
  div:first-child {
    padding: 25px 0px;
  }
`;

const Footer = styled.footer`
  div {
    color: ${(props) => props.theme.footerColor};
    text-align: center;
  }
`;

function Login() {
  return (
    <div>
      <Container>
        <Wrapper>
          <TopBox>
            <div>
              <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
            </div>
            <form>
              <Input
                type="text"
                placeholder="Phone number, username, or email"
              />
              <Input type="password" placeholder="Password" />
              <Button type="submit" value="Log In" />
            </form>
            <Separator>
              <div></div>
              <span>OR</span>
              <div></div>
            </Separator>
            <FacebookLogin>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <span>Log in with Facebook</span>
            </FacebookLogin>
            <LossPassword>
              <span>Forgot password?</span>
            </LossPassword>
          </TopBox>
          <BottomBox>
            <span>Don't have an account?</span>
            <Link to="/sign-up">Sign up</Link>
          </BottomBox>
          <DownLoadApp>
            <div>Get the app.</div>
            <div>
              <span>App Store</span>
              <span>Google Play</span>
            </div>
          </DownLoadApp>
        </Wrapper>
      </Container>
      <Footer>
        <div>About...</div>
      </Footer>
    </div>
  );
}

export default Login;
