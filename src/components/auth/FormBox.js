import styled from "styled-components";
import { BaseBox } from "../shared";

const Container = styled(BaseBox)`
  margin-bottom: 10px;
  padding: 30px 40px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    letter-spacing: -5px;
  }
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function FormBox({ children }) {
  return <Container>{children}</Container>;
}

export default FormBox;
