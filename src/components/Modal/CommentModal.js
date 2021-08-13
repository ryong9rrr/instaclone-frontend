import styled from "styled-components";
import PropTypes from "prop-types";

const ModalOverlay = styled.div`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

function CommentModal({ state, closeCommentModal, commentId }) {
  return (
    <>
      {state ? (
        <ModalOverlay>
          <ModalWrapper tabIndex="-1">
            <ModalContents>
              {commentId}
              <Btn tabIndex="0" style={{ color: "tomato" }}>
                삭제
              </Btn>
              <Btn onClick={closeCommentModal} tabIndex="0">
                취소
              </Btn>
            </ModalContents>
          </ModalWrapper>
        </ModalOverlay>
      ) : null}
    </>
  );
}

CommentModal.propTypes = {
  state: PropTypes.bool.isRequired,
  commentId: PropTypes.number,
};

export default CommentModal;
