import styled from "styled-components";
import { BaseBox, FatText } from "../shared";
import PostHeader from "./PostHeader";
import PostIcons from "./PostIcons";
import PropTypes from "prop-types";

//좌우 10px

const PostContainer = styled(BaseBox)`
  max-width: 615px;
  margin-bottom: 25px;
`;

const Photo = styled.img`
  width: 100%;
`;

const Likes = styled(FatText)`
  margin-left: 10px;
`;

const Caption = styled.div`
  padding: 5px 10px;
  ${FatText} {
    margin-right: 5px;
    font-size: 0.9rem;
  }
`;

const Comments = styled.div``;

const PushComment = styled.div``;

function Post({ id, user, location, file, isLiked, likes, caption }) {
  return (
    <PostContainer key={id}>
      <PostHeader
        avatarUrl={user.avatar}
        username={user.userName}
        location={location}
      />
      <Photo src={file} />
      <PostIcons id={id} isLiked={isLiked} />
      {likes === 0 ? null : (
        <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
      )}
      <Caption>
        <FatText>{user.userName}</FatText>
        <span>{caption}</span>
      </Caption>
      <Comments>comments</Comments>
      <PushComment>push comment</PushComment>
    </PostContainer>
  );
}

//typescript가 아니라면 넘겨주는 props의 type을 체크해줘야함.
Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
  }),
  location: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  caption: PropTypes.string,
};

export default Post;
