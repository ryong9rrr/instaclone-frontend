import styled from "styled-components";
import { BaseBox } from "../shared";

const Container = styled(BaseBox)`
  margin-bottom: 10px;
  padding: 30px 40px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function FormBox({ children }) {
  return <Container thickBorder>{children}</Container>;
}

export default FormBox;
