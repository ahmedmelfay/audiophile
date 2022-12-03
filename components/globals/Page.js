import Head from "next/head";
import PropTypes from "prop-types";
import CustomContainer from "./CustomContainer";

const Page = ({ children, pageTitle }) => {
  const titleWithOrg = pageTitle === "Audiophile" ? pageTitle : `Audiophile | ${pageTitle}`;
  return (
    <div>
      <Head>
        <title>{titleWithOrg}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CustomContainer>{children}</CustomContainer>
    </div>
  );
};

Page.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

// Page.defaultProps = {
// };

export default Page;
