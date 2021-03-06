import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lightTheme } from "../styles";

export const BaseBox = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme === lightTheme ? "#FFF" : "#000"};
  border: ${(props) => (props.thickBorder ? "2px" : "1px")} solid
    ${(props) => props.theme.borderColor};
`;

export const Button = styled.button`
  font-size: ${(props) => props.fontsize || "16px"};
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  font-weight: 600;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
  padding: 5px ${(props) => props.side};
`;

export const NormalButton = styled.button`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 5px ${(props) => props.side};
  background-color: #fafafa;
  text-align: center;
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

export const symbol = "ππ·πΌπ½πͺπ°π»πͺπΆ";

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

export const FatText = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;

export const Username = styled(FatText)`
  display: inline-block;
  a {
    color: ${(props) => props.theme.fontColor};
  }
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/**************************************** Hashtag ************************************/

/* 
//import sanitizeHtml from "sanitize-html";

export const markHashtags = (text) => {
  const result = sanitizeHtml(text?.replace(/#[\w]+/g, "<mark>$&</mark>"), {
    allowedTags: ["mark"],
  });
  return result;
};
*/

export const CaptionOrPayload = styled.div`
  a {
    background-color: inherit;
    color: ${(props) => props.theme.hashtag};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const extractHashtags = (text) => {
  if (!text) {
    return;
  }

  const condition = (word) => /#[\w | κ°-ν£]+/g.test(word);

  return text?.split(" ").map((word, index) => {
    //console.log(word, index);
    return (
      <React.Fragment key={index}>
        {condition(word) ? (
          <>
            <Link to={`/explore/tags/${word}`}>{word}</Link>{" "}
          </>
        ) : (
          <>{word} </>
        )}
      </React.Fragment>
    );
  });
};

/////////////////////////////////////////////////////////////////////////////////////
