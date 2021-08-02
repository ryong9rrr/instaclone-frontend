import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const white = "#FFF";
const black = "#000";

export const lightTheme = {
  gray: "rgb(142,142,142)",
  bgColor: "#FAFAFA",
  accent: "#0095f6",
  fontColor: "rgb(38, 38, 38)",
  borderColor: "rgb(219, 219, 219)",
  facebookColor: "#385285",
  hashtag: "#007BBE",
};

export const darkTheme = {
  gray: "rgb(142,142,142)",
  bgColor: black,
  accent: "#0095f6",
  fontColor: white,
  borderColor: white,
  facebookColor: "#385285",
  hashtag: "#0095f6",
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
      color: ${(props) => props.theme.accent};
    }

    * {
        box-sizing: border-box;
    }

    body {
      background-color: ${(props) => props.theme.bgColor};
      font-size:14px;
      color: ${(props) => props.theme.fontColor};
    }
`;

//fontawesome 은 svg
