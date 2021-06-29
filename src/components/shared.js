import styled from "styled-components";

export const BaseBox = styled.div`
  width: 100%;
  background-color: white;
  border: 2px solid ${(props) => props.theme.borderColor};
`;
