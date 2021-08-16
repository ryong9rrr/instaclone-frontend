import { Link } from "react-router-dom";
import styled from "styled-components";
import { extractHashtags, CaptionOrPayload, Username } from "../shared";

const Info = styled.div`
  display: flex;
  margin-bottom: 10px;
  ${Username} {
    margin-right: 7px;
    font-size: 0.9rem;
  }
`;

function PhotoInfo({ username, caption }) {
  return (
    <Info>
      <Username>
        <Link to={`/${username}/`}>{username}</Link>
      </Username>
      <CaptionOrPayload>{extractHashtags(caption)}</CaptionOrPayload>
    </Info>
  );
}

export default PhotoInfo;
