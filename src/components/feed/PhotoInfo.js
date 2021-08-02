import styled from "styled-components";
import { FatText } from "../shared";

const Username = styled(FatText)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Info = styled.div`
  margin: 0px 10px 5px;
  ${Username} {
    margin-right: 7px;
    font-size: 0.9rem;
  }
`;

function PhotoInfo({ username, caption, commentsNumber }) {
  return (
    <Info>
      <Username>{username}</Username>
      <span>{caption}</span>
    </Info>
  );
}

export default PhotoInfo;
