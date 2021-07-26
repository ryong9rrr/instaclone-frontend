import { Link } from "react-router-dom";
import styled from "styled-components";
import DarkMode from "../DarkMode";
import { simbol, Simbol } from "../shared";

const SSimbol = styled(Simbol)`
  color: ${(props) => props.theme.fontColor};
`;

const DarkModeBtn = styled.span`
  margin-left: 15px;
  font-size: 18px;
`;

function Logo({ link }) {
  return (
    <>
      <Link to={link}>
        <SSimbol>{simbol}</SSimbol>
      </Link>
      <DarkModeBtn>
        <DarkMode />
      </DarkModeBtn>
    </>
  );
}

export default Logo;
