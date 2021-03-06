import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";

const SBottomBox = styled(BaseBox)`
  text-align: center;
  padding: 25px 0px;
  a {
    margin-left: 5px;
    font-weight: 600;
  }
`;

function BottomBox({ cta, link, linkText }) {
  return (
    <SBottomBox thickBorder>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
}

export default BottomBox;
