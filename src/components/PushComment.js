import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

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

function PushComment() {
  return (
    <PushCommentContainer>
      <PushCommentForm>
        <Emoji type="button">
          <FontAwesomeIcon icon={faSmile} />
        </Emoji>
        <input type="text" placeholder="댓글 달기..." />
        <PushBtn disabled={true} type="submit">
          push
        </PushBtn>
      </PushCommentForm>
    </PushCommentContainer>
  );
}

export default PushComment;
