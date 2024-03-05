import React, { useState, useRef } from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogCarousel: React.FC<Queries.BlogCarouselComponent> = ({data}) => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  return (
    <>
      <ul>
          {data.allMdx.edges.map(({ node }) => (
            <li key={node.id} className="mb-4 last-of-type:mb-0">
              <Link
                to={`/blog/${node.frontmatter?.slug}`}
                className="block rounded-lg border border-gray-400 p-6"
              >
                <div className="flex-1 md:h-72 md:w-full">
                  {node.frontmatter?.featuredImage && (
                    <GatsbyImage
                      image={
                        getImage(
                          node.frontmatter.featuredImage.childImageSharp,
                        )!
                      }
                      alt=""
                      className="h-full w-full"
                    />
                  )}
                </div>
                <h2 className="mb-4 text-xl font-bold">
                  {node.frontmatter?.title}
                </h2>
                <span className="mb-2 block text-sm font-thin">
                  By {node.frontmatter?.author} on {node.frontmatter?.date}
                </span>
                <span className="block text-lg">{node.excerpt}</span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default function Blogs() {
  return (
    <section
      className="bg-black flex py-40 rounded-bl-[3.75rem]"
      style={{ flexDirection: "column" }}
    >
      <h2 className="font-heavy text-white mb-10 pl-[6.25rem]">BLOGS</h2>
      <h1 className="font-serif text-[3.25rem] text-white w-2/5 pl-[6.25rem]">
        Check out our blogs to maximize your growth
      </h1>
      <BlogCarousel/>
    </section>
  );
}

export const query = graphql`
  query BlogCarousel {
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
