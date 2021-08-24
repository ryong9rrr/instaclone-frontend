import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
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

  console.log(data, loading, error);

  return <h1>{username} profile!</h1>;
}

export default Profile;
