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
import useUser from "../../hooks/useUser";
import Avatar from "../Avatar";
import { Icon } from "../Icon";

const Icons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 3px;
  padding: 5px 15px;
  color: white;
  font-weight: 600;
`;

function NavIcons({ myData }) {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <>
      {isLoggedIn ? (
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
            <Link to={`/${myData?.userName}/`}>
              <Avatar url={myData?.avatar} />
            </Link>
          </Icon>
        </Icons>
      ) : (
        <Link to={routes.home}>
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
}

export default NavIcons;
