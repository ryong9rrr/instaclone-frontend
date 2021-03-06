import styled from "styled-components";
import { Input } from "../shared";

const SSearch = styled(Input)`
  width: 220px;
  height: 25px;
  &::placeholder {
    text-align: center;
  }
`;

function NavSearch() {
  return <SSearch type="text" placeholder="search" />;
}

export default NavSearch;
