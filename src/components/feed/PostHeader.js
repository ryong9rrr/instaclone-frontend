import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Icon } from "../Icon";
import { AvatarImg, FatText } from "../shared";

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 0px;
`;

const Column = styled.div`
  &:first-child {
    width: 10%;
    display: flex;
    justify-content: center;
  }
  &:nth-child(2) {
    width: 80%;
  }
  &:last-child {
    width: 10%;
    display: flex;
    justify-content: center;
  }
  div {
    width: 100%;
  }
`;

const Username = styled(FatText)`
  display: block;
`;

const Location = styled.div`
  margin-top: 3px;
`;

function PostHeader({ avatarUrl, username, location }) {
  return (
    <Container>
      <Column>
        <AvatarImg src={avatarUrl} size="35px" />
      </Column>
      <Column>
        <div>
          <Username>{username}</Username>
          {location ? <Location>{location}</Location> : null}
        </div>
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
