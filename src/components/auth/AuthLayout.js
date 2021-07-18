import { useReactiveVar } from "@apollo/client";
import {} from "@fortawesome/free-regular-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../../apollo";

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

const Footer = styled.footer`
  margin-top: 20px;
`;

const DarkModeBtn = styled.span`
  cursor: pointer;
`;

function AuthLayout({ children }) {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </DarkModeBtn>
      </Footer>
    </Container>
  );
}

export default AuthLayout;
