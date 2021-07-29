import styled from "styled-components";
import { lightTheme } from "../styles";

export const BaseBox = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme === lightTheme ? "#FFF" : "#000"};
  border: ${(props) => (props.thickBorder ? "2px" : "1px")} solid
    ${(props) => props.theme.borderColor};
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

export const symbol = "𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶";

export const Symbol = styled.span`
  letter-spacing: -5px;
  color: ${(props) => props.theme.fontColor};
`;

export const SubTitleText = styled.h3`
  margin: 20px 0px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.gray};
`;

export const AvatarImg = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  max-width: 100%;
  background-color: #2c2c2c;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
`;

export const FatText = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;
