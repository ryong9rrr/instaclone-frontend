import styled from "styled-components";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faPaperPlane,
  faCompass,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../../apollo";
import { Link } from "react-router-dom";
import { routes } from "../../screens/routes";
import Avatar from "../Avatar";
import { Icon } from "../Icon";
import NavModal from "../modal/NavModal";

const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const Btn = styled(Icon)`
  margin-left: 7%;
`;

const LoginButton = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 3px;
  padding: 5px 15px;
  color: white;
  font-weight: 600;
`;

const SignUpButton = styled.span`
  margin-left: 5px;
  background-color: inherit;
  border-radius: 3px;
  padding: 5px 15px;
  color: ${(props) => props.theme.accent};
  font-weight: 600;
`;

function NavIcons({ myData }) {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <>
      {isLoggedIn ? (
        <Icons>
          <Btn>
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faCompass} size="lg" />
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </Btn>
          <Btn>
            <Link to={`/${myData?.userName}/`}>
              <Avatar url={myData?.avatar} />
            </Link>
          </Btn>
          <NavModal />
        </Icons>
      ) : (
        <>
          <Link to={routes.home}>
            <LoginButton>로그인</LoginButton>
          </Link>
          <Link to={routes.signUp}>
            <SignUpButton>가입하기</SignUpButton>
          </Link>
        </>
      )}
    </>
  );
}

export default NavIcons;
