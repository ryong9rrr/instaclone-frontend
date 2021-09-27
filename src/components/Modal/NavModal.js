import styled from "styled-components";
import { Link } from "react-router-dom";
import { lightTheme } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "../FaIcons";
import { logUserOut } from "../../apollo";

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  outline: 0;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 38px;
  right: -20px;
`;

const ModalContents = styled.div`
  width: 250px;
  margin-left: auto;
  position: relative;
  border-radius: 5px;
`;

const Box = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) =>
    props.theme !== lightTheme && `0.5px solid ${props.theme.borderColor}`};
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  a {
    color: inherit;
  }
`;

const Line = styled.hr`
  all: unset;
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.borderColor};
`;

//z-index : 포지셔닝이 되어있지 않은 컴포넌트는 가장 아래쪽에 위치하게 된다.
// position: absolute, z-index가 5 이므로 가장 위쪽에 위치하게 됨.
const Arrow = styled.div`
  z-index: 5;
  position: absolute;
  top: -7px;
  right: 25px;
  width: 14px;
  height: 14px;
  background-color: ${(props) =>
    props.theme === lightTheme ? "#FFF" : "#000"};
  border: ${(props) =>
    props.theme !== lightTheme && `0.5px solid ${props.theme.borderColor}`};
  transform: rotate(45deg);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

/************* Button ******************** */
// Arrow -- 하지만 여기서 position:relative를 해주고 z-index를 더 높게 설정해주면서 Arrow보다 위에 위치하게 됨
const Btn = styled.span`
  position: relative;
  z-index: 10;
  display: block;
  cursor: pointer;
  font-size: 14px;
  padding: 12px 18px;
  background-color: ${(props) =>
    props.theme === lightTheme ? "#FFF" : "#000"};
  &:hover {
    background-color: ${(props) => props.theme.bgColor};
  }
`;

const BtnInner = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-left: ${(props) => props.left};
  margin-right: ${(props) => `-${props.left}`};
  width: 10%;
  font-size: 16px;
`;

function Button({ link, icon, ctx, left }) {
  return (
    <>
      <Link to={link}>
        <Btn>
          <BtnInner>
            <Icon left={left}>
              <FontAwesomeIcon icon={icon} />
            </Icon>
            <span>{ctx}</span>
          </BtnInner>
        </Btn>
      </Link>
    </>
  );
}

function NavModal({ loggedUsername }) {
  return (
    <>
      <ModalOverlay />
      <ModalWrapper>
        <ModalContents>
          <Arrow />
          <Box>
            <Button
              link={`/${loggedUsername}/`}
              icon={regular.userCircle}
              ctx="프로필"
            />
            <Button
              link={`/${loggedUsername}/saved`}
              icon={regular.bookmark}
              ctx="저장됨"
              left="1px"
            />
            <Button link={`/accounts/edit`} icon={solid.cog} ctx="설정" />
            <Button link="/" icon={solid.exchange} ctx="계정 전환" />
            <Line />
            <Btn onClick={() => logUserOut()}>로그아웃</Btn>
          </Box>
        </ModalContents>
      </ModalWrapper>
    </>
  );
}

export default NavModal;
