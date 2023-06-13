import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const post = data.markdownRemark;

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="facebook-button"
          style={{
            backgroundColor: "#4267B2",
            color: "#fff",
            width: "100px",
            height: "50px",
          }}
          onClick={openPopup}
        >
          주문하기
        </button>
      </div>

      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      />

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup Content</h2>
            <p>This is the content of the popup.</p>
            <button className="close-button" onClick={closePopup}>
              Close Popup
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};


export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />


export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  markdownRemark(fields: {slug: {eq: "/landing-page/"}}) {
    html
  }
}
`