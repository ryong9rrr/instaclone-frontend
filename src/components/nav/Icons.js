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
import routes from "../../screens/routes";
import useUser from "../../hooks/useUser";
import Avatar from "../Avatar";

const SIcons = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.span`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    font-size: 1.1rem;
  }
`;

const Button = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 3px;
  padding: 5px 15px;
  color: white;
  font-weight: 600;
`;

function Icons() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const data = useUser();

  return (
    <>
      {isLoggedIn ? (
        <SIcons>
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
            <Avatar url={data?.me?.avatar} />
          </Icon>
        </SIcons>
      ) : (
        <Link to={routes.home}>
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
}

export default Icons;
