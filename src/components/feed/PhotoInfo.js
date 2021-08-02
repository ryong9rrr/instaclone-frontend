import styled from "styled-components";
import { FatText } from "../shared";

const Likes = styled(FatText)`
  cursor: pointer;
`;

const Username = styled(FatText)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.div`
  margin-top: 10px;
  ${Username} {
    margin-right: 7px;
    font-size: 0.9rem;
  }
`;

const Comments = styled.div``;

function PhotoInfo({ likes, username, caption }) {
  return (
    <div className="photoInfoContainer" style={{ margin: "10px" }}>
      {likes === 0 ? null : (
        <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
      )}
      <Info>
        <Username>{username}</Username>
        <span>{caption}</span>
      </Info>
      <Comments>comments</Comments>
    </div>
  );
}

export default PhotoInfo;
