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

function FollowButton({ isFollowing }) {
  return isFollowing ? (
    <>
      <Btn className="message" side="7px">
        메세지 보내기
      </Btn>
      <Btn className="isFollow" side="20px">
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
      <FollowBtn>팔로우</FollowBtn>
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
