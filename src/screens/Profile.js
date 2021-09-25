import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import UserBox from "../components/profile/UserBox";
import UserPosts from "../components/profile/UserPosts";
import { PHOTO_FRAGMENT } from "../fragments";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import UserLink from "../components/profile/UserLink";
import Footer from "../components/footer/Footer";

export const QUERY_seeProfile = gql`
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

  if (error) {
    return <div>error..</div>;
  }

  if (data?.seeProfile === null) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <>
      <PageTitle
        title={`${data?.seeProfile?.lastName + data?.seeProfile?.firstName}(@${
          data?.seeProfile?.userName
        })`}
      />
      <UserBox
        avatar={data?.seeProfile?.avatar}
        username={data?.seeProfile?.userName}
        bio={data?.seeProfile?.bio}
        totalPhotos={data?.seeProfile?.totalPhotos}
        totalFollowers={data?.seeProfile?.totalFollowers}
        totalFollowing={data?.seeProfile?.totalFollowing}
        isFollowing={data?.seeProfile?.isFollowing}
        isMe={data?.seeProfile?.isMe}
      />
      <UserLink data={data?.seeProfile} />
      <Switch>
        <Route path={"/:username/"} exact>
          <UserPosts photos={data?.seeProfile?.photos} />
        </Route>
        <Route path={"/:username/channel/"} exact>
          channel
        </Route>
        <Route path={"/:username/saved/"} exact>
          saved
        </Route>
        <Route path={"/:username/tagged/"} exact>
          tagged
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default Profile;
