import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import Cursor from "../components/Cursor";
import { useState } from "react";

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

const IndexPage: React.FC<PageProps> = () => {
  const [isDesktop, setisDesktop] = useState(true);
  return (
    <>
    <Cursor isDesktop={isDesktop}/>
      <Navbar />
      <main>
        <Hero />
        <Works />
        <Testimonials />
        <Blogs />
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
