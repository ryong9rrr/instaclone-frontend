import { useParams } from "react-router";
import styled from "styled-components";
import ModalContainer from "../modal/ModalContainer";
import FollowBox from "./FollowBox";

const Contents = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const Friend = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  border: 1px solid gray;
`;

function Followers() {
  const { username } = useParams();

  return (
    <ModalContainer>
      <FollowBox title="팔로워">
        <Contents>
          <Friend>hi</Friend>
          <Friend>hi</Friend>
          <Friend>hi</Friend>
        </Contents>
      </FollowBox>
    </ModalContainer>
  );
}

export default Followers;
