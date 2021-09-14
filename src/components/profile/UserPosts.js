import styled from "styled-components";

const Container = styled.section`
  display: block;
  border: 3px solid red;
`;
//gap을 %로 주면 튀어나감
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;

const PhotoContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: green;
  &::after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

const PhotoBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

function UserPosts({ photos }) {
  if (!photos) {
    return <span>게시물</span>;
  }
  console.log(photos);

  return (
    <Container>
      <Grid>
        <PhotoContainer>
          <PhotoBox>hi</PhotoBox>
        </PhotoContainer>
        <PhotoContainer></PhotoContainer>
        <PhotoContainer></PhotoContainer>
        <PhotoContainer>
          <PhotoBox>hi</PhotoBox>
        </PhotoContainer>
        <PhotoContainer></PhotoContainer>
        <PhotoContainer></PhotoContainer>
        <PhotoContainer></PhotoContainer>
      </Grid>
    </Container>
  );
}

export default UserPosts;
