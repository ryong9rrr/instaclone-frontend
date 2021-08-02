import styled from "styled-components";
import { BaseBox } from "../shared";
import PostHeader from "./PostHeader";
import PropTypes from "prop-types";
import PhotoBox from "./PhotoBox";
import PhotoInfo from "./PhotoInfo";

//좌우 10px

const PostContainer = styled(BaseBox)`
  max-width: 615px;
  margin-bottom: 25px;
`;

const PushComment = styled.div``;

function Post({ id, user, location, file, isLiked, likes, caption }) {
  return (
    <PostContainer key={id}>
      <PostHeader
        avatarUrl={user.avatar}
        username={user.userName}
        location={location}
      />
      <PhotoBox id={id} file={file} isLiked={isLiked} />
      <PhotoInfo likes={likes} username={user.userName} caption={caption} />
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
