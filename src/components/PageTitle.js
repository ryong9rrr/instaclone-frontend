import { Helmet } from "react-helmet-async";
import { PropTypes } from "prop-types";

function PageTitle({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} | Instagram</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
