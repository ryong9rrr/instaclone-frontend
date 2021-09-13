import styled from "styled-components";

const Contatiner = styled.section`
  display: flex;
  width: 100%;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 28px;
`;

const PhotoBox = styled.div`
  display: flex;
  width: 298px;
  height: 298px;
  background-color: blue;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function UserPosts({ photos }) {
  if (!photos) {
    return <span>게시물</span>;
  }
  console.log(photos);

  return (
    <Contatiner>
      <Grid>
        {photos?.map((photo, index) => (
          <PhotoBox key={index}>
            <img src="https://instaclone-uploads-ryong9rrr.s3.ap-northeast-2.amazonaws.com/uploads/1-1623339037723-me.jpg" />
          </PhotoBox>
        ))}
      </Grid>
    </Contatiner>
  );
}

export default UserPosts;
