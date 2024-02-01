import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Works from "../components/Works";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Works />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
