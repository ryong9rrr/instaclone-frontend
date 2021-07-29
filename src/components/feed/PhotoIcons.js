import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Icon } from "../Icon";

const Icons = styled.div`
  display: flex;
  padding: 10px;
`;

const Column = styled.div`
  width: 33%;
  &:first-child {
    * {
      margin-right: 5px;
    }
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

function PhotoIcons({ isLiked }) {
  return (
    <Icons>
      <Column>
        <Icon>
          <FontAwesomeIcon
            style={{ color: isLiked ? "tomato" : "inherit" }}
            icon={isLiked ? SolidHeart : faHeart}
            size="lg"
          />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faComment} size="lg" />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
        </Icon>
      </Column>
      <Column>..</Column>
      <Column>
        <Icon>
          <FontAwesomeIcon icon={faBookmark} size="lg" />
        </Icon>
      </Column>
    </Icons>
  );
}

export default PhotoIcons;
