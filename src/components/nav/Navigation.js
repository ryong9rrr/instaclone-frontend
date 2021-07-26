import styled from "styled-components";
import { lightTheme } from "../../styles";
import routes from "../../screens/routes";
import Logo from "./Logo";
import Icons from "./Icons";
import Search from "./Search";

const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) =>
    props.theme === lightTheme ? "#FFF" : "#000"};
  padding: 10px 0px;
`;

const Wrapper = styled.div`
  max-width: 950px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 33%;
  &:first-child {
    font-size: 25px;
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

function Navigation() {
  return (
    <Nav>
      <Wrapper>
        <Column>
          <Logo link={routes.home} />
        </Column>
        <Column>
          <Search />
        </Column>
        <Column>
          <Icons />
        </Column>
      </Wrapper>
    </Nav>
  );
}

export default Navigation;
