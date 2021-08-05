import styled from "styled-components";
import { FatText, extractHashtags, CaptionOrPayload } from "../shared";

const Username = styled(FatText)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.div`
  display: flex;
  margin: 10px 10px 5px;
  ${Username} {
    margin-right: 7px;
    font-size: 0.9rem;
  }
`;

function PhotoInfo({ username, caption }) {
  return (
    <Info>
      <Username>{username}</Username>
      <CaptionOrPayload>{extractHashtags(caption)}</CaptionOrPayload>
    </Info>
  );
}

export default PhotoInfo;
