import { MDXProvider } from "@mdx-js/react";
import { graphql, HeadFC, PageProps } from "gatsby";
import React from "react";
import Header from "../components/Header";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { components, MainContent } from "../components/mdx-components"; 
import Footer from "../components/Footer";
import { CustomHead } from "../components/CustomHead";


const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({
  data,
  children,
}) => {
  return (
    <>
      <Header />
      <MainContent className="mb-10">
        {data.mdx?.frontmatter?.featuredImage && (
          <GatsbyImage
            image={getImage(data.mdx.frontmatter.featuredImage.childImageSharp)!}
            alt="featured image"
            className="rounded-lg"
          />
        )}
        <h1 className="mb-4 text-3xl font-bold sm:text-5xl font-sans mt-2">
          {data.mdx?.frontmatter?.title}
        </h1>
        <div className="mb-8">
          <span className="text-sm font-regular">
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
      excerpt(pruneLength: 159)
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

export const Head: HeadFC<Queries.BlogPostQuery, unknown> = ({ data }) => {
  const imageUrl =
    data.mdx?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData
      .images.fallback?.src;

  return (
    <CustomHead
      title={`${data.mdx?.frontmatter?.title} - Blog | Devibe` || ""}
      description={`Written by ${data.mdx?.frontmatter?.author}` || ""}
      image={imageUrl}
      article
    />
  );
};
