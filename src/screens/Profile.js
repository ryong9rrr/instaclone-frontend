import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import UserHeader from "../components/profile/UserHeader";
import UserLink from "../components/profile/UserLink";
import UserPosts from "../components/profile/UserPosts";
import { PHOTO_FRAGMENT } from "../fragments";

const QUERY_seeProfile = gql`
  ${PHOTO_FRAGMENT}
  query seeProfile($userName: String!) {
    seeProfile(userName: $userName) {
      id
      firstName
      lastName
      userName
      bio
      avatar
      photos {
        ...PhotoFragment
      }
      totalPhotos
      totalFollowers
      totalFollowing
      isMe
      isFollowing
    }
  }
`;

function Profile() {
  //params에 해당하는 유저가 없으면...
  const { username } = useParams();
  const { data, loading, error } = useQuery(QUERY_seeProfile, {
    variables: {
      userName: username,
    },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  console.log(data, loading, error);

  return (
    <>
      <PageTitle
        title={`${data?.seeProfile?.lastName + data?.seeProfile?.firstName}(@${
          data?.seeProfile?.userName
        })`}
      />
      <UserHeader
        avatar={data?.seeProfile?.avatar}
        username={data?.seeProfile?.userName}
        bio={data?.seeProfile?.bio}
        totalPhotos={data?.seeProfile?.totalPhotos}
        totalFollowers={data?.seeProfile?.totalFollowers}
        totalFollowing={data?.seeProfile?.totalFollowing}
        isFollowing={data?.seeProfile?.isFollowing}
        isMe={data?.seeProfile?.isMe}
      />
      <UserLink />
      <UserPosts />
    </>
  );
}

export default Profile;
