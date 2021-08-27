import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Avatar";
import { Icon } from "../Icon";
import { Username } from "../shared";

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Column = styled.div`
  &:first-child {
    margin-right: 10px;
  }
  &:nth-child(2) {
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
        <Username>
          <Link to={`/${username}/`}>{username}</Link>
        </Username>
        {location && <Location>{location}</Location>}
      </Column>
      <Column>
        <Icon size="none">
          <FontAwesomeIcon icon={faEllipsisH} />
        </Icon>
      </Column>
    </Container>
  );
}

export default PostHeader;
