import styled from "styled-components";

const Container = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  max-width: 350px;
  width: 100%;
`;

function AuthLayout({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default AuthLayout;
