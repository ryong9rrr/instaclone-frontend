import styled from "styled-components";
import PropTypes from "prop-types";
import Comment from "./Comment";

const ViewAllComment = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  opacity: 0.7;
  font-size: 0.9rem;
`;

const SomeComments = styled.div`
  margin-bottom: 10px;
`;

function Comments({ commentsNumber, comments }) {
  //console.log(comments);
  return (
    <>
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
    </>
  );
}

Comments.propTypes = {
  commentsNumber: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
};

export default Comments;
