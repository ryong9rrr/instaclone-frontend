import { useReactiveVar } from "@apollo/client";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { darkModeVar, disableDarkMode, enableDarkMode } from "../apollo";
import { solid } from "./FaIcons";

const DarkModeBtn = styled.span`
  cursor: pointer;
`;

function DarkMode() {
  const darkMode = useReactiveVar(darkModeVar);

  return (
    <DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode}>
      <FontAwesomeIcon icon={darkMode ? solid.sun : solid.moon} />
    </DarkModeBtn>
  );
}

export default DarkMode;
