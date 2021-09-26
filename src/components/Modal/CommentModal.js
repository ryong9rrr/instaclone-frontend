import styled from "styled-components";
import PropTypes from "prop-types";
import { gql, useMutation } from "@apollo/client";
import ModalContainer from "./ModalContainer";

const MUTATION_deleteComment = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      ok
    }
  }
`;

const Btn = styled.button`
  all: unset;
  border-top: 0.5px solid ${(props) => props.theme.borderColor};
  cursor: pointer;
  width: 100%;
  height: 3rem;
  font-size: 1.1em;
  text-align: center;
  &:hover {
    font-weight: 600;
  }
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 1em;
  width: 400px;
  background-color: ${(props) => props.theme.bgColor};
  ${Btn}:first-child {
    border-top: none;
  }
`;

function CommentModal({ state, closeCommentModal, commentId, photoId }) {
  const updateDeleteComment = (cache, result) => {
    const {
      data: {
        deleteComment: { ok },
      },
    } = result;
    if (ok) {
      cache.evict({
        id: `Comment:${commentId}`,
      });
      cache.modify({
        id: `Photo:${photoId}`,
        fields: {
          commentsNumber(prev) {
            return prev - 1;
          },
        },
      });
    }
  };

  const [deleteCommentMutation, { loading }] = useMutation(
    MUTATION_deleteComment,
    {
      variables: {
        id: commentId,
      },
      update: updateDeleteComment,
    }
  );

  const onDeleteClick = () => {
    deleteCommentMutation();
    if (!loading) {
      closeCommentModal();
    }
  };

  /*
  useEffect(() => {
    if (!loading) {
      closeCommentModal();
    }
  }, [loading]);
  */

  return (
    <>
      {state ? (
        <ModalContainer>
          <ModalContents>
            <Btn
              onClick={onDeleteClick}
              tabIndex="0"
              style={{ color: "tomato" }}
            >
              삭제
            </Btn>
            <Btn onClick={closeCommentModal} tabIndex="0">
              취소
            </Btn>
          </ModalContents>
        </ModalContainer>
      ) : null}
    </>
  );
}

CommentModal.propTypes = {
  state: PropTypes.bool.isRequired,
  commentId: PropTypes.number,
  photoId: PropTypes.number,
};

export default CommentModal;
