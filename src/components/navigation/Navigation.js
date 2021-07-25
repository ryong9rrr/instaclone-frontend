import styled from "styled-components";
import { Input, LogoText, TitleText } from "../shared";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faPaperPlane,
  faCompass,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lightTheme } from "../../styles";

const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) =>
    props.theme === lightTheme ? "#FFF" : "#000"};
  padding: 10px 0px;
`;

const Wrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(TitleText)`
  font-size: 25px;
`;

const Search = styled(Input)`
  margin: 0px;
  width: 220px;
  height: 25px;
`;

const Icon = styled.span``;

const Icons = () => {
  return (
    <div>
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
    </div>
  );
};

function Navigation() {
  return (
    <Nav>
      <Wrapper>
        <Logo>{LogoText}</Logo>
        <Search type="text" placeholder="search" />
        <Icons />
      </Wrapper>
    </Nav>
  );
}

export default Navigation;
