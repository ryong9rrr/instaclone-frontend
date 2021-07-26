import {} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import DarkMode from "../DarkMode";

const Container = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  max-width: 350px;
  width: 100%;
`;

const DarkModeBtn = styled.footer`
  margin-top: 20px;
`;

function AuthLayout({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <DarkModeBtn>
        <DarkMode />
      </DarkModeBtn>
    </Container>
  );
}

export default AuthLayout;
