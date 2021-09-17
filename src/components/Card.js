import { faClone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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
  font-size: 1rem;
`;

function Card({ id, file, commentsNumber, isLiked, likes }) {
  const [hover, setHover] = useState(false);
  return (
    <Container url={file}>
      {Array.isArray(file) && (
        <TopIcon>
          <FontAwesomeIcon icon={faClone} />
        </TopIcon>
      )}
      <Box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <HoverBox>
            {commentsNumber}/{likes}
          </HoverBox>
        )}
      </Box>
    </Container>
  );
}

export default Card;
