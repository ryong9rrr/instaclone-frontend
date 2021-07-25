import styled from "styled-components";
import { Input, Logo, LogoText } from "./shared";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faPaperPlane,
  faCompass,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lightTheme } from "../styles";

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

const Search = styled(Input)`
  width: 220px;
  height: 25px;
  &::placeholder {
    text-align: center;
  }
`;

const Icons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.span`
  font-size: 18px;
`;

function Navigation() {
  return (
    <Nav>
      <Wrapper>
        <Column>
          <Logo>{LogoText}</Logo>
        </Column>
        <Column>
          <Search type="text" placeholder="search" />
        </Column>
        <Column>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHome} size="lg" />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faCompass} size="lg" />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Icon>
          </Icons>
        </Column>
      </Wrapper>
    </Nav>
  );
}

export default Navigation;
