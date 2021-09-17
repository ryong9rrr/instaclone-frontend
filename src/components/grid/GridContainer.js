import styled from "styled-components";

//gap을 %로 주면 튀어나감, 따라서 미디어쿼리로 화면이 작아졌을 때 반응형css를 추가.
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.column ? `repeat(${props.column}, 1fr)` : `repeat(3, 1fr)`};
  gap: 28px;
  @media screen and (max-width: 718px) {
    gap: 3px;
  }
`;

function GridContainer({ column, children }) {
  return <Container column={column}>{children}</Container>;
}

export default GridContainer;
