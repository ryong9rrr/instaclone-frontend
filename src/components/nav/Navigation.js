import styled from "styled-components";
import PropTypes from "prop-types";
import NavLogo from "./NavLogo";
import NavIcons from "./NavIcons";
import NavSearch from "./NavSearch";
import { BaseBox } from "../shared";
import { routes } from "../../screens/routes";

const NavContainer = styled(BaseBox).attrs({
  as: "header",
})`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 15px 0px;
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

function Navigation({ myData }) {
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
          <NavIcons myData={myData} />
        </Column>
      </Nav>
    </NavContainer>
  );
}

Navigation.propTypes = {
  myData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
};

export default Navigation;
