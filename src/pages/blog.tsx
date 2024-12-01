import { graphql, HeadFC, Link, PageProps } from "gatsby";
import React from "react";
import Header from "../components/Header";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Footer from "../components/Footer";
import { CustomHead } from "../components/CustomHead";

const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
  return (
    <>
      <Header />
      <h1 className="mb-8 text-center text-4xl font-bold sm:text-5xl mt-20">
        Blogs
      </h1>
      <div className="mx-auto max-w-7xl p-4 sm:p-0 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id} className="mb-4 last-of-type:mb-10">
            <Link
              to={`/blog/${node.frontmatter?.slug}`}
              className="block rounded-lg"
            >
              <div className="flex-1 md:h-72 md:w-full overflow-hidden rounded-md">
                {node.frontmatter?.featuredImage && (
                  <GatsbyImage
                    image={
                      getImage(node.frontmatter.featuredImage.childImageSharp)!
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <h2 className="sm:mt-2 mt-1 sm:mb-2 mb-0 text-lg lg:text-xl font-heavy">
                {node.frontmatter?.title}
              </h2>
              <span className="block text-sm">
                By {node.frontmatter?.author} on {node.frontmatter?.date}
              </span>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <CustomHead
    title="Blogs | Devibe"
    description="Devibe is a full-service digital agency, specializing in design, development and brand strategy to find customers and drive revenue."
  />
);
