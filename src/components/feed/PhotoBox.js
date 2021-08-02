import styled from "styled-components";
import PostIcons from "./PostIcons";

const Photo = styled.img`
  width: 100%;
`;

function PhotoBox({ id, file, isLiked }) {
  return (
    <>
      <Photo src={file} />
      <PostIcons id={id} isLiked={isLiked} />
    </>
  );
}

export default PhotoBox;
