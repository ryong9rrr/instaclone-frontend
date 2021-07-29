import { Link } from "react-router-dom";
import styled from "styled-components";
import DarkMode from "../DarkMode";
import { symbol, Symbol } from "../shared";

const DarkModeBtn = styled.span`
  margin-left: 15px;
  font-size: 18px;
  &:hover {
    font-size: 1.1rem;
  }
`;

function NavLogo({ link }) {
  return (
    <>
      <Link to={link}>
        <Symbol>{symbol}</Symbol>
      </Link>
      <DarkModeBtn>
        <DarkMode />
      </DarkModeBtn>
    </>
  );
}

export default NavLogo;
