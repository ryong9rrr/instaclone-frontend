import { gql, useQuery } from "@apollo/client";
import { NavLink, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import UserHeader from "../components/profile/UserHeader";
import UserPosts from "../components/profile/UserPosts";
import { PHOTO_FRAGMENT } from "../fragments";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

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
      <Router>
        <PageTitle
          title={`${
            data?.seeProfile?.lastName + data?.seeProfile?.firstName
          }(@${data?.seeProfile?.userName})`}
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
        <ul>
          <li>
            <NavLink
              to={`/${data?.seeProfile?.userName}/`}
              exact
              activeStyle={{ color: "blue" }}
            >
              게시물
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${data?.seeProfile?.userName}/channel/`}
              exact
              activeStyle={{ color: "blue" }}
            >
              동영상
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${data?.seeProfile?.userName}/saved/`}
              exact
              activeStyle={{ color: "blue" }}
            >
              저장됨
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${data?.seeProfile?.userName}/tagged/`}
              exact
              activeStyle={{ color: "blue" }}
            >
              태그됨
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={"/:username/"} exact>
            <UserPosts />
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
      </Router>
    </>
  );
}

export default Profile;
