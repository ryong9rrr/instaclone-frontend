import { useState } from "react";
import styled, { css } from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Container = styled.section``;

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
    </Container>
  );
}

export default Login;
