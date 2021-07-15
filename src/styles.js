import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  //blue
  accent: "#0095f6",
  fontColor: "rgb(38, 38, 38)",
  borderColor: "rgb(219, 219, 219)",
  facebookColor: "#385285",
  footerColor: "#8e8e8e",
  subGray: "rgb(142,142,142)",
};

export const darkTheme = {
  //임시
  accent: "red",
  fontColor: "red",
  borderColor: "red",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    input {
      all: unset;
      background-color: #fafafa;
    }

    a {
      text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    body {
      background-color: #FAFAFA;
      font-size:14px;
      color: ${(props) =>
        props.theme.darkMode ? darkTheme.fontColor : lightTheme.fontColor};
    }
`;