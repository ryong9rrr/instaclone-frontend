import styled from "styled-components";
import Avatar from "../Avatar";
import { FatText } from "../shared";

const Contatiner = styled.header`
  background-color: green;
  display: flex;
  font-size: 16px;
`;

const UserAvatar = styled.div`
  padding: 30px 100px 30px 70px;
`;

const UserInfo = styled.section`
  width: 100%;
  padding-top: 35px;
`;

const User = styled.div`
  margin-bottom: 15px;
`;

const Username = styled.span`
  font-size: 28px;
  font-weight: 300;
  margin-right: 15px;
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
  margin-top: 5px;
`;

function UserHeader({
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
        <Avatar size="150px" url={avatar} />
      </UserAvatar>
      <UserInfo>
        <User>
          <Username>{username}</Username>
          {isMe ? (
            <button>edit</button>
          ) : (
            !isFollowing && <button>팔로우하기</button>
          )}
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

export default UserHeader;
