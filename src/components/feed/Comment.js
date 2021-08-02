import PropTypes from "prop-types";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Icon } from "../Icon";
import { FatText, HashtagText, markHashtags } from "../shared";

const Username = styled(FatText)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Payload = styled(HashtagText)``;

const CommentsBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3px;
  ${Username} {
    margin-right: 7px;
    font-size: 0.9rem;
  }
  ${Payload} {
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
      <Payload
        dangerouslySetInnerHTML={{
          __html: markHashtags(payload),
        }}
      />
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
