import { useParams } from "react-router";
import ModalContainer from "../modal/ModalContainer";
import FollowBox from "./FollowBox";

function Followings() {
  const { username } = useParams();

  return (
    <ModalContainer>
      <FollowBox title="팔로잉">{username}</FollowBox>
    </ModalContainer>
  );
}

export default Followings;
