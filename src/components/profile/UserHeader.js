import {
  faCheck,
  faChevronDown,
  faCog,
  faEllipsisH,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Avatar";
import { Icon } from "../Icon";
import { Button, FatText, NormalButton } from "../shared";
import PropTypes from "prop-types";

const Contatiner = styled.header`
  display: flex;
  width: 100%;
  margin-bottom: 44px;
`;

const UserAvatar = styled.div`
  margin-right: 30px;
  padding: 0px 70px;
`;

const UserInfo = styled.section`
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

const FollowBtn = styled(Button)`
  padding: 4px 20px;
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
        <div>
          <Avatar size="150px" url={avatar} />
        </div>
      </UserAvatar>
      <UserInfo>
        <User>
          <h2>{username}</h2>
          {isMe ? (
            <Btns>
              <Link to="/">
                <NormalButton className="edit" side="9px">
                  프로필 편집
                </NormalButton>
              </Link>
              <Icon>
                <FontAwesomeIcon icon={faCog} size="lg" />
              </Icon>
            </Btns>
          ) : isFollowing ? (
            <Btns>
              <NormalButton className="message" side="7px">
                메세지 보내기
              </NormalButton>
              <NormalButton className="isFollow" side="20px">
                <FontAwesomeIcon icon={faUser} size="sm" />
                <FontAwesomeIcon icon={faCheck} size="sm" />
              </NormalButton>
              <NormalButton className="recommend" side="12px">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  style={{ opacity: "0.7" }}
                />
              </NormalButton>
              <Icon>
                <FontAwesomeIcon icon={faEllipsisH} />
              </Icon>
            </Btns>
          ) : (
            <Btns>
              <FollowBtn>팔로우</FollowBtn>
              <Button className="recommend" fontsize="10px" side="12px">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="sm"
                  style={{ opacity: "0.7" }}
                />
              </Button>
              <Icon>
                <FontAwesomeIcon icon={faEllipsisH} />
              </Icon>
            </Btns>
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

UserHeader.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string,
  totalPhotos: PropTypes.number.isRequired,
  totalFollowers: PropTypes.number.isRequired,
  totalFollowing: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isMe: PropTypes.bool.isRequired,
};

export default UserHeader;
