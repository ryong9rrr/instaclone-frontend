import { faClone, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: relative;
  background: ${(props) =>
      /https/g.test(props.url)
        ? `url("${props.url}")`
        : `url("/img/noneimage.jpg")`}
    bottom center;
  background-size: cover;
  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const TopIcon = styled.div`
  position: absolute;
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  svg {
    margin-right: 10px;
  }
`;

const HoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Icons = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.span`
  svg {
    margin-right: 5px;
  }
`;

function Card({ id, file, commentsNumber, isLiked, likes }) {
  return (
    <Container url={file}>
      {Array.isArray(file) && (
        <TopIcon>
          <FontAwesomeIcon icon={faClone} />
        </TopIcon>
      )}
      <Box>
        <HoverBox>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faHeart} />
              {likes}
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faComment} />
              {commentsNumber}
            </Icon>
          </Icons>
        </HoverBox>
      </Box>
    </Container>
  );
}

export default Card;
