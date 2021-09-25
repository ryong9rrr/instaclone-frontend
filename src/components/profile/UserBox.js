import styled from "styled-components";
import Avatar from "../Avatar";
import { Icon } from "../Icon";
import { FatText } from "../shared";
import PropTypes from "prop-types";
import EditButton from "./EditButton";
import FollowButton from "./FollowButton";

const Contatiner = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 44px;
`;

const UserAvatar = styled.div`
  margin-right: 30px;
  padding: 0px 70px;
`;

const UserInfo = styled.div`
  width: 100%;
`;

const User = styled.div`
  padding-top: 5px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  h2 {
    font-size: 28px;
    font-weight: 300;
  }
`;

const Btns = styled.div`
  display: flex;
  margin-left: 15px;
  button {
    margin-right: 10px;
  }
  ${Icon} {
    margin-left: 5px;
  }
`;

const UserTotal = styled.ul`
  display: flex;
  margin-bottom: 15px;
  li {
    margin-right: 35px;
  }
  .btn {
    cursor: pointer;
  }
`;

const UserBio = styled.div`
  margin-top: 10px;
  width: 100%;
`;

function ViewButton({ isMe, isFollowing, username }) {
  if (isMe) {
    return (
      <Btns>
        <EditButton />
      </Btns>
    );
  }
  return (
    <Btns>
      <FollowButton isFollowing={isFollowing} username={username} />
    </Btns>
  );
}

function UserBox({
  avatar,
  username,
  bio,
  totalPhotos,
  totalFollowers,
  totalFollowing,
  isFollowing,
  isMe,
}) {
  return (
    <Contatiner>
      <UserAvatar>
        <div>
          <Avatar size="150px" url={avatar} />
        </div>
      </UserAvatar>
      <UserInfo>
        <User>
          <h2>{username}</h2>
          {ViewButton({ isMe, isFollowing, username })}
        </User>
        <UserTotal>
          <li>
            게시물 <FatText>{totalPhotos}</FatText>
          </li>
          <li className="btn">
            팔로워 <FatText>{totalFollowers}</FatText>
          </li>
          <li className="btn">
            팔로잉 <FatText>{totalFollowing}</FatText>
          </li>
        </UserTotal>
        <div>
          <FatText>{username}</FatText>
          <UserBio>{bio}</UserBio>
        </div>
      </UserInfo>
    </Contatiner>
  );
}

UserBox.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string,
  totalPhotos: PropTypes.number.isRequired,
  totalFollowers: PropTypes.number.isRequired,
  totalFollowing: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isMe: PropTypes.bool.isRequired,
};

export default UserBox;
