import styled from "styled-components";
import Navigation from "./nav/Navigation";

const Content = styled.main`
  background-color: green;
  margin-top: 30px;
  max-width: 950px;
  margin: 0 auto;
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
