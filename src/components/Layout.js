import styled from "styled-components";
import PropTypes from "prop-types";
import Navigation from "./nav/Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const MainContent = styled.main`
  max-width: 950px;
  margin: 0 auto;
  width: 100%;
  padding-top: 30px;
`;

function Layout({ children, myData }) {
  return (
    <Container>
      <Header>
        <Navigation myData={myData} />
      </Header>
      <MainContent>{children}</MainContent>
    </Container>
  );
}

Layout.propTypes = {
  myData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
};

export default Layout;
