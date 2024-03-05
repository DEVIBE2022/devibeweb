import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import Cursor from "../components/Cursor";
import { useState } from "react";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

const IndexPage: React.FC<PageProps> = () => {
  const [isDesktop, setisDesktop] = useState(true);
  let timer: NodeJS.Timeout | null = null;

  const debouncedDimensionCalculator = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  React.useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 -z-1"></div>
  );
  return (
    <>
    <Cursor isDesktop={isDesktop}/>
      <Header />
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
