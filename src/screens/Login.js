import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { css } from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

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
  border: 2px solid rgb(219, 219, 219);
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
  background-color: #fafafa;
  width: 100%;
  padding: 7px 10px;
  border: 0.5px solid rgb(219, 219, 219);
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
  background-color: #0095f6;
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
    color: #0095f6;
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
    background-color: rgb(219, 219, 219);
    height: 1px;
    width: 100%;
  }
  span {
    margin: 0px 10px;
    color: #8e8e8e;
    font-weight: 600;
  }
`;

const FacebookLogin = styled.div`
  color: #385285;
  margin-bottom: 25px;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const LossPassword = styled.div`
  color: #385285;
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
    color: #8e8e8e;
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
            <a href="#">Sign up</a>
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
