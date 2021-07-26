import { useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../apollo";

const DarkModeBtn = styled.span`
  cursor: pointer;
`;

function DarkMode() {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode}>
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </DarkModeBtn>
  );
}

export default DarkMode;
