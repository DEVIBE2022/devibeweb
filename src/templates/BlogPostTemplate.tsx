import { MDXProvider } from "@mdx-js/react";
import { graphql, PageProps } from "gatsby";
import React from "react";
import Header from "../components/Header";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { components, MainContent } from "../components/mdx-components"; 
import Footer from "../components/Footer";


const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  return (
    <>
      <Header />
      <MainContent>
        {data.mdx?.frontmatter?.featuredImage && (
          <GatsbyImage
            image={getImage(data.mdx.frontmatter.featuredImage.childImageSharp)!}
            alt="featured image"
          />
        )}
        <h1 className="mb-4 text-3xl font-bold sm:text-5xl font-sans">
          {data.mdx?.frontmatter?.title}
        </h1>
        <div className="mb-8">
          <span className="text-sm font-thin">
            By {data.mdx?.frontmatter?.author} on {data.mdx?.frontmatter?.date}
          </span>
        </div>
        <MDXProvider components={components}>{children}</MDXProvider>
      </MainContent>
      <Footer/>
    </>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
