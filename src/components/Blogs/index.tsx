import React, { useState, useRef } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const BlogCarousel = () => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <>
      <ul className="flex flex-row w-full gap-4 pl-[6.25rem] pt-10 overflow-x-visible">
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id} className="w-full aspect-auto">
            <Link to={`/blog/${node.frontmatter?.slug}`} className="block">
              <div className="flex-1 md:h-96 md:w-full mb-5">
                {node.frontmatter?.featuredImage && (
                  <GatsbyImage
                    image={
                      getImage(node.frontmatter.featuredImage.childImageSharp)!
                    }
                    alt=""
                    className="h-full w-full"
                  />
                )}
              </div>
              <h2 className="mb-4 text-lg font-heavy text-white underline decoration-white">
                {node.frontmatter?.title}
              </h2>
              <span className="mb-2 block text-sm font-regular text-white">
                {node.frontmatter?.date}
              </span>
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
