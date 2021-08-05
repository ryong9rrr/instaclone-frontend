import styled from "styled-components";
import { FatText } from "../shared";
import PostIcons from "./PostIcons";

const Photo = styled.img`
  width: 100%;
`;

const Likes = styled(FatText)`
  margin: 10px;
  cursor: pointer;
`;

function PhotoBox({ id, file, isLiked, likes }) {
  return (
    <>
      <Photo src={file} />
      <PostIcons id={id} isLiked={isLiked} likes={likes} />
      {likes === 0 ? null : (
        <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
      )}
    </>
  );
}

export default PhotoBox;
