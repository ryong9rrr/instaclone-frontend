import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Icon } from "../Icon";
import { CaptionOrPayload, extractHashtags, Username } from "../shared";
import { Link } from "react-router-dom";
import { regular, solid } from "../FaIcons";

const CommentsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
  ${Username} {
    margin-right: 7px;
    font-size: 0.9rem;
  }
  ${CaptionOrPayload} {
    width: 100%;
  }
`;

const Icons = styled.div`
  display: flex;
  ${Icon} {
    margin-left: 5px;
  }
`;

function Comment({
  username,
  payload,
  isMine,
  openCommentModal,
  commentId,
  photoId,
}) {
  return (
    <CommentsBox>
      <Username>
        <Link to={`/${username}/`}>{username}</Link>
      </Username>
      <CaptionOrPayload>{extractHashtags(payload)}</CaptionOrPayload>
      <Icons>
        {isMine ? (
          <Icon
            className="comment"
            onClick={() => openCommentModal(commentId, photoId)}
            size="0.8rem"
          >
            <FontAwesomeIcon icon={solid.dotdotdot} />
          </Icon>
        ) : null}
        <Icon size="0.8rem">
          <FontAwesomeIcon icon={regular.heart} />
        </Icon>
      </Icons>
    </CommentsBox>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Comment;
