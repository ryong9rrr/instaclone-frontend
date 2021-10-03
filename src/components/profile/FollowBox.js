import styled from "styled-components";
import { Link } from "react-router-dom";
import { solid } from "../FaIcons";
import { Icon } from "../Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";

const Box = styled.div`
  width: 100%;
  height: 400px;
`;

const BoxHeader = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  position: relative;
`;

const BoxSide = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: inherit;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
`;

function FollowBox({ title, children }) {
  document.body.style.overflow = "hidden";
  const { username } = useParams();
  return (
    <Box>
      <BoxHeader>
        <BoxSide />
        <h2>{title}</h2>
        <BoxSide>
          <Link
            to={`/${username}/`}
            onClick={() => (document.body.style.overflow = "")}
          >
            <Icon size="22px">
              <FontAwesomeIcon icon={solid.close} />
            </Icon>
          </Link>
        </BoxSide>
      </BoxHeader>
      <Contents>{children}</Contents>
    </Box>
  );
}

export default FollowBox;
