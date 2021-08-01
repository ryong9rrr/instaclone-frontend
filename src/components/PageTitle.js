import { Helmet } from "react-helmet-async";
import { PropTypes } from "prop-types";

function PageTitle({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} | Instagram` : "Instagram"}</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
