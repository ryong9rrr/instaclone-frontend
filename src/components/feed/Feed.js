import { gql, useQuery } from "@apollo/client";
import Post from "./Post";

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

function Feed() {
  const { data } = useQuery(Query_seeFeed);

  return (
    <>
      {data?.seeFeed?.map((photo) => (
        <Post key={photo.id} {...photo} />
      ))}
    </>
  );
}

export default Feed;
