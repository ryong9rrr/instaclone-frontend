import { gql, useQuery } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../../fragments";
import Post from "./Post";

export const QUERY_seeFeed = gql`
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        userName
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      isMine
      createdAt
    }
  }
`;

function Feed({ openCommentModal }) {
  const { data, loading, error } = useQuery(QUERY_seeFeed, {
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
