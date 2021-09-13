import styled from "styled-components";

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size : "18px")};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
