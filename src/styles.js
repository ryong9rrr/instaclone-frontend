import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  bgColor: "#FAFAFA",
  color: "#262626",
};

export const darkTheme = {
  bgColor: "#262626",
  color: "#FAFAFA",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    input {
      all: unset;
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
      color: rgb(38, 38, 38);
    }
`;
