import styled from "styled-components";
import Card from "../Card";
import GridContainer from "../grid/GridContainer";

const Container = styled.section`
  width: 100%;
`;

function UserPosts({ photos }) {
  if (!photos) {
    return <span>게시물</span>;
  }
  console.log(photos);

  return (
    <Container>
      <GridContainer>
        {photos?.map((photo, index) => (
          <Card
            key={index}
            id={photo.id}
            file={photo.file}
            commentsNumber={photo.commentsNumber}
            isLiked={photo.isLiked}
            likes={photo.likes}
          />
        ))}
      </GridContainer>
    </Container>
  );
}

export default UserPosts;
