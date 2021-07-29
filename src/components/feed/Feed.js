import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { BaseBox, FatText } from "../shared";
import PhotoHeader from "./PhotoHeader";
import PhotoIcons from "./PhotoIcons";

//좌우 10px

const Query_seeFeed = gql`
  query seeFeed {
    seeFeed {
      id
      user {
        userName
        avatar
      }
      file
      caption
      likes
      comments
      isMine
      isLiked
      createdAt
    }
  }
`;

const Post = styled(BaseBox)`
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

function Feed() {
  const { data } = useQuery(Query_seeFeed);
  console.log(data);

  return (
    <>
      {data?.seeFeed?.map((photo) => (
        <Post key={photo.id}>
          <PhotoHeader
            avatarUrl={photo.user.avatar}
            username={photo.user.userName}
            location={photo.location}
          />
          <Photo src={photo.file} />
          <PhotoIcons isLiked={photo.isLiked} />
          {photo.likes === 0 ? null : (
            <Likes>
              {photo.likes === 1 ? "1 like" : `${photo.likes} likes`}
            </Likes>
          )}
          <Caption>
            <FatText>{photo.user.userName}</FatText>
            <span>{photo.caption}</span>
          </Caption>
          <Comments>comments</Comments>
          <PushComment>push comment</PushComment>
        </Post>
      ))}
    </>
  );
}

export default Feed;
