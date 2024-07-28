import React, { useState, useRef } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import EmblaCarousel from "../EmblaCarousel";


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

  const mappedData = data.allMdx.edges.map(({ node }) => {
    // Your mapping logic here
    return {
      // Return the transformed object here
      id: node.id,
      title: node.frontmatter?.title,
      date: node.frontmatter?.date,
      image: node.frontmatter?.featuredImage,
      slug: node.frontmatter?.slug,
      getImage: node.frontmatter.featuredImage.childImageSharp,
    };
  });


  return (
    <>
      <div >
        <EmblaCarousel slides={mappedData} />
      </div>
    </>
  );
}

export default function Blogs() {
  return (
    <section
      className="bg-black flex md:py-40 py-20 rounded-bl-[3.75rem]"
      style={{ flexDirection: "column" }}
    >
      <div className="mx-auto max-w-7xl flex-grow py-8 w-full pl-6">
        <h2 className="font-heavy text-white mb-10">BLOGS</h2>
        <h1 className="font-serif text-white lg:w-2/5 text-3xl lg:text-5xl">
          Check out our blogs to maximize your growth
        </h1>
      </div>
      <BlogCarousel />
    </section>
  );
}
