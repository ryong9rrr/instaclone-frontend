import PropTypes from "prop-types";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Icon } from "../Icon";
import { CaptionOrPayload, extractHashtags, FatText } from "../shared";

const Username = styled(FatText)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const CommentsBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  ${Username} {
    margin-right: 7px;
    font-size: 0.9rem;
  }
  ${CaptionOrPayload} {
    width: 100%;
  }
  &:last-child {
    margin-right: auto;
  }
`;

function Comment({ username, payload }) {
  return (
    <CommentsBox>
      <Username>{username}</Username>
      <CaptionOrPayload>{extractHashtags(payload)}</CaptionOrPayload>
      <Icon size="0.8rem">
        <FontAwesomeIcon icon={faHeart} />
      </Icon>
    </CommentsBox>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;
