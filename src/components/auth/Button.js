import styled from "styled-components";

const SButton = styled.input`
  margin-top: 15px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  font-weight: 600;
  padding: 8px 0px;
  text-align: center;
  cursor: pointer;
`;

function Button(props) {
  return <SButton {...props} />;
}

export default Button;
