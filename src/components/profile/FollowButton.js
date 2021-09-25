import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faEllipsisH,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Button, NormalButton as Btn } from "../shared";
import styled from "styled-components";
import { Icon } from "../Icon";
import gql from "graphql-tag";
import { useApolloClient, useMutation } from "@apollo/client";
import useUser from "../../hooks/useUser";

const MUTATION_followUser = gql`
  mutation followUser($userName: String!) {
    followUser(userName: $userName) {
      ok
      error
    }
  }
`;

const MUTATION_unfollowUser = gql`
  mutation unfollowUser($userName: String!) {
    unfollowUser(userName: $userName) {
      ok
      error
    }
  }
`;

const FollowBtn = styled(Button)`
  padding: 4px 20px;
`;

const iconStyle = { opacity: "0.7" };

function FollowButton({ isFollowing, username }) {
  //"내정보" 업데이트를 위해 불러옴.
  const userData = useUser();
  // apollo에서 캐시를 업데이트 하는 2가지 방법
  // 1. update 사용
  const followUserUpdate = (cache, result) => {
    const {
      data: {
        followUser: { ok },
      },
    } = result;

    if (!ok) {
      return;
    }
    cache.modify({
      id: `User:${username}`,
      fields: {
        isFollowing(prev) {
          return true;
        },
        totalFollowers(prev) {
          return prev + 1;
        },
      },
    });
    cache.modify({
      id: `User:${userData?.me?.userName}`,
      fields: {
        totalFollowing(prev) {
          return prev + 1;
        },
      },
    });
  };

  const [followUser] = useMutation(MUTATION_followUser, {
    variables: {
      userName: username,
    },
    update: followUserUpdate,
  });

  // 2. onCompleted 사용(apllo-client를 이용해 캐시에 접근)
  const client = useApolloClient();
  const unfollowUserCompleted = (data) => {
    const {
      unfollowUser: { ok },
    } = data;

    if (!ok) {
      return;
    }
    const { cache } = client;
    cache.modify({
      id: `User:${username}`,
      fields: {
        isFollowing(prev) {
          return false;
        },
        totalFollowers(prev) {
          return prev - 1;
        },
      },
    });
    cache.modify({
      id: `User:${userData?.me?.userName}`,
      fields: {
        totalFollowing(prev) {
          return prev - 1;
        },
      },
    });
  };

  const [unfollowUser] = useMutation(MUTATION_unfollowUser, {
    variables: {
      userName: username,
    },
    onCompleted: unfollowUserCompleted,
  });

  return isFollowing ? (
    <>
      <Btn className="message" side="7px">
        메세지 보내기
      </Btn>
      <Btn onClick={unfollowUser} className="isFollow" side="20px">
        <FontAwesomeIcon icon={faUser} size="sm" />
        <FontAwesomeIcon icon={faCheck} size="sm" />
      </Btn>
      <Btn className="recommend" side="12px">
        <FontAwesomeIcon icon={faChevronDown} size="sm" style={iconStyle} />
      </Btn>
      <Icon>
        <FontAwesomeIcon icon={faEllipsisH} />
      </Icon>
    </>
  ) : (
    <>
      <FollowBtn onClick={followUser}>팔로우</FollowBtn>
      <Button className="recommend" fontsize="10px" side="12px">
        <FontAwesomeIcon icon={faChevronDown} size="sm" style={iconStyle} />
      </Button>
      <Icon>
        <FontAwesomeIcon icon={faEllipsisH} />
      </Icon>
    </>
  );
}

export default FollowButton;
