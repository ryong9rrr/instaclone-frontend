import styled from "styled-components";
import PropTypes from "prop-types";
import Comment from "./Comment";

const Container = styled.div`
  margin: 0px 10px;
`;

const ViewAllComment = styled.div`
  cursor: pointer;
  opacity: 0.7;
  font-size: 0.8rem;
  margin: 10px 0px 7px;
`;

const SomeComments = styled.div``;

function Comments({ commentsNumber, comments }) {
  //console.log(comments);
  return (
    <Container>
      {commentsNumber > 2 ? (
        <>
          <ViewAllComment>View all {commentsNumber} comments</ViewAllComment>
          <SomeComments>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                username={comment.user.userName}
                payload={comment.payload}
              />
            ))}
          </SomeComments>
        </>
      ) : (
        <SomeComments>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              username={comment.user.userName}
              payload={comment.payload}
            />
          ))}
        </SomeComments>
      )}
    </Container>
  );
}

Comments.propTypes = {
  commentsNumber: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
};

export default Comments;
