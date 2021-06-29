import styled from "styled-components";

const SInput = styled.input`
  margin-top: 5px;
  height: 40px;
  width: 100%;
  padding: 7px 10px;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;

function Input(props) {
  return <SInput {...props} />;
}

export default Input;
