import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Avatar";
import { Icon } from "../Icon";
import { FatText, Username } from "../shared";

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Column = styled.div`
  &:first-child {
    width: 9%;
  }
  &:last-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div {
    width: 100%;
  }
`;

const Location = styled.div`
  margin-top: 5px;
  opacity: 0.9;
  font-size: 0.9em;
`;

function PostHeader({ avatarUrl, username, location }) {
  return (
    <Container>
      <Column>
        <Icon>
          <Avatar url={avatarUrl} size="35px" />
        </Icon>
      </Column>
      <Column>
        <div>
          <Username>
            <Link to={`/${username}/`}>{username}</Link>
          </Username>
          {location && <Location>{location}</Location>}
        </div>
        <Icon size="none">
          <FontAwesomeIcon icon={faEllipsisH} />
        </Icon>
      </Column>
    </Container>
  );
}

export default PostHeader;
