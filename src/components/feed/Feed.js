import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { BaseBox, FatText } from "../shared";
import PhotoHeader from "./PhotoHeader";
import PhotoIcons from "./PhotoIcons";

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
          <PhotoIcons />
          {photo.likes === 0 ? null : (
            <Likes>
              {photo.likes === 1 ? "1 like" : `${photo.likes} likes`}
            </Likes>
          )}
          <Comments>comments</Comments>
          <PushComment>push comment</PushComment>
        </Post>
      ))}
    </>
  );
}

export default Feed;
