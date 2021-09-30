import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../../apollo";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../screens/routes";
import Avatar from "../Avatar";
import { Icon } from "../Icon";
import NavModal from "../modal/NavModal";
import { regular, solid } from "../FaIcons";
import { useEffect, useState } from "react";

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
  //const { pathname } = useLocation();
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((prev) => !prev);

  /*
  useEffect(() => {
    return () => setModal(false);
  }, [pathname]);
  */

  return (
    <>
      {isLoggedIn ? (
        <Icons>
          <Btn>
            <FontAwesomeIcon icon={solid.home} size="lg" />
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={regular.message} size="lg" />
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={regular.compass} size="lg" />
          </Btn>
          <Btn>
            <FontAwesomeIcon icon={regular.heart} size="lg" />
          </Btn>
          <Btn onClick={toggleModal}>
            <Avatar url={myData?.avatar} />
          </Btn>
          {modal && (
            <NavModal
              toggleModal={toggleModal}
              loggedUsername={myData?.userName}
            />
          )}
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
