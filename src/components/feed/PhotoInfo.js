import styled from "styled-components";
import { FatText, HashtagText, markHashtags } from "../shared";

const Username = styled(FatText)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.div`
  display: flex;
  margin: 0px 10px 5px;
  ${Username} {
    margin-right: 7px;
    font-size: 0.9rem;
  }
`;

const Caption = styled(HashtagText)``;

function PhotoInfo({ username, caption }) {
  return (
    <Info>
      <Username>{username}</Username>
      <Caption
        dangerouslySetInnerHTML={{
          __html: markHashtags(caption),
        }}
      />
    </Info>
  );
}

export default PhotoInfo;
