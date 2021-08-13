import { gql, useQuery } from "@apollo/client";
import Post from "./Post";

export const Query_seeFeed = gql`
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
      commentsNumber
      comments {
        id
        payload
        isMine
        createdAt
        user {
          id
          userName
        }
      }
      isMine
      isLiked
      createdAt
    }
  }
`;

function Feed({ openCommentModal }) {
  const { data, loading, error } = useQuery(Query_seeFeed, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
  });

  //console.log(loading, error);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {data?.seeFeed?.map((photo) => (
        <Post openCommentModal={openCommentModal} key={photo.id} {...photo} />
      ))}
    </>
  );
}

export default Feed;
