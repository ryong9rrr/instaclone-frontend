import styled from "styled-components";
import Navigation from "./nav/Navigation";

const Content = styled.main`
  max-width: 950px;
  margin: 30px auto 0px;
  width: 100%;
`;

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;
