import styled from "styled-components";
import { BaseBox } from "../shared";
import PostHeader from "./PostHeader";
import PropTypes from "prop-types";
import PhotoBox from "./PhotoBox";
import PhotoInfo from "./PhotoInfo";
import Comments from "./Comments";
import TimeLag from "../TimeLag";
import PushComment from "../PushComment";
import { FatText } from "../shared";

//좌우 10px

const PostContainer = styled(BaseBox)`
  border-radius: 3px;
  max-width: 615px;
  margin-bottom: 25px;
`;

const Contents = styled.section`
  padding: 0px 16px;
`;

const Likes = styled(FatText)`
  display: inline-block;
  cursor: pointer;
  margin-bottom: 10px;
`;

function Post({
  id,
  user,
  location,
  file,
  isLiked,
  likes,
  caption,
  commentsNumber,
  comments,
  createdAt,
}) {
  return (
    <PostContainer key={id}>
      <PostHeader
        avatarUrl={user.avatar}
        username={user.userName}
        location={location}
      />
      <PhotoBox id={id} file={file} isLiked={isLiked} likes={likes} />
      <Contents>
        {likes === 0 ? null : (
          <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
        )}
        <PhotoInfo username={user.userName} caption={caption} />
        {commentsNumber === 0 ? null : (
          <Comments commentsNumber={commentsNumber} comments={comments} />
        )}
        <TimeLag createdAt={createdAt} />
      </Contents>
      <PushComment />
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
  commentsNumber: PropTypes.number.isRequired,
  comments: PropTypes.array,
  createdAt: PropTypes.string.isRequired,
};

/*
comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      payload: PropTypes.string.isRequired,
      isMine: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired,
      }),
    })
  ).isRequired
*/

export default Post;
