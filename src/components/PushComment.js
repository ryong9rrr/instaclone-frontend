import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

const MUTATION_createComment = gql`
  mutation createComment($photoId: Int!, $payload: String!) {
    createComment(photoId: $photoId, payload: $payload) {
      ok
      error
    }
  }
`;

const PushCommentContainer = styled.section`
  width: 100%;
  margin-top: 5px;
  border-top: 0.5px solid ${(props) => props.theme.borderColor};
  padding: 0px 1em;
`;

const PushCommentForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    background-color: inherit;
    width: 100%;
    &::placeholder {
      font-size: 0.9rem;
    }
  }
`;

const Emoji = styled.button`
  display: inline-block;
  border: none;
  background-color: inherit;
  padding: 14px 14px 14px 0px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  font-size: 1.6em;
  color: ${(props) => props.theme.fontColor};
`;

const PushBtn = styled.button`
  border: none;
  background-color: inherit;
  color: ${(props) => props.theme.accent};
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;

function PushComment({ photoId }) {
  const { register, handleSubmit, setValue, formState } = useForm({
    mode: "onChange",
  });

  const [createComment, { loading }] = useMutation(MUTATION_createComment);

  const onValid = (data) => {
    const { comment } = data;
    if (loading) {
      console.log("comment loading");
      return;
    }
    createComment({
      variables: {
        photoId,
        payload: comment,
      },
    });
    setValue("comment", "");
  };

  return (
    <PushCommentContainer>
      <PushCommentForm onSubmit={handleSubmit(onValid)}>
        <Emoji type="button">
          <FontAwesomeIcon icon={faSmile} />
        </Emoji>
        <input
          {...register("comment", { required: true })}
          type="text"
          placeholder="댓글 달기..."
        />
        <PushBtn disabled={!formState.isValid || loading} type="submit">
          push
        </PushBtn>
      </PushCommentForm>
    </PushCommentContainer>
  );
}

PushComment.propTypes = {
  photoId: PropTypes.number.isRequired,
};

export default PushComment;