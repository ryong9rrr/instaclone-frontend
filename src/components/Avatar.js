import styled from "styled-components";
import { Img } from "./shared";

const SImg = styled(Img)`
  width: 25px;
  height: 25px;
`;

function Avatar({ url }) {
  return <SImg src={url ? url : null} />;
}

export default Avatar;
