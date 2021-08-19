import styled from "styled-components";
import PropTypes from "prop-types";
import Navigation from "./nav/Navigation";

const MainContent = styled.main`
  max-width: 950px;
  margin: 30px auto 0px;
  width: 100%;
`;

function Layout({ children, myData }) {
  return (
    <>
      <Navigation myData={myData} />
      <MainContent>{children}</MainContent>
    </>
  );
}

Layout.propTypes = {
  myData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default Layout;
