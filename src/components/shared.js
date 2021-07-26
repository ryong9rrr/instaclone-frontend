import styled from "styled-components";
import { lightTheme } from "../styles";

export const BaseBox = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme === lightTheme ? "#FFF" : "#000"};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

export const Button = styled.input`
  margin-top: 15px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  font-weight: 600;
  padding: 8px 0px;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;

export const Input = styled.input`
  color: black;
  border: 0.5px solid
    ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
  border-radius: 3px;
  box-sizing: border-box;
  &:focus {
    border-color: ${(props) => props.theme.fontColor};
  }
`;

export const simbol = "𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶";

export const Simbol = styled.span`
  letter-spacing: -5px;
`;

export const SubTitleText = styled.h3`
  margin: 20px 0px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.gray};
`;
