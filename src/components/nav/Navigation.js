import styled from "styled-components";
import NavLogo from "./NavLogo";
import NavIcons from "./NavIcons";
import NavSearch from "./NavSearch";
import { BaseBox } from "../shared";
import { routes } from "../../screens/routes";

const NavContainer = styled(BaseBox)`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 10px 0px;
`;

const Nav = styled.nav`
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
    <NavContainer>
      <Nav>
        <Column>
          <NavLogo link={routes.home} />
        </Column>
        <Column>
          <NavSearch />
        </Column>
        <Column>
          <NavIcons />
        </Column>
      </Nav>
    </NavContainer>
  );
}

export default Navigation;
