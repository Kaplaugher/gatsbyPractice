import React from "react";
import Link from "gatsby-link";
import Counter from "./counter";

export default ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <h1>{data.site.siteMetadata.author}</h1>
    <Link to="/page-2">Page 2</Link>
    <Link to="/dir1/page-3">Page 3</Link>
    <Link to="/counter">Counter</Link>
    <Counter />
  </div>
);

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
