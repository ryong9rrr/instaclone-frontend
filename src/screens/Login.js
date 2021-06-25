import { useState } from "react";
import styled, { css } from "styled-components";
import { isLoggedInVar } from "../apollo";

const Container = styled.section`
  background-color: brown;
`;

const Title = styled.h1`
  color: ${(props) => (props.potato ? "red" : "black")};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  ${(props) =>
    props.potato
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 40px;
        `}
`;

const TogglePotato = styled.button`
  color: red;
`;

function Login() {
  const [potato, setPotato] = useState(false);
  const togglePotato = () => setPotato((current) => !current);

  return (
    <Container>
      <Title potato={potato}>Login</Title>
      <TogglePotato onClick={togglePotato}>TogglePotato</TogglePotato>
    </Container>
  );
}

export default Login;
