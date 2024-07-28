import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import Cursor from "../components/Cursor";
import { useState, useEffect } from "react";
import Team from "../components/Team";
import Footer from "../components/Footer";
import { CustomHead } from "../components/CustomHead";
import homeImage from "../images/social.jpg";
import Loading from "../components/Loading";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

const IndexPage: React.FC<PageProps> = () => {
  const [isDesktop, setisDesktop] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
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

  useEffect(() => {
    debouncedDimensionCalculator();
    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // Adjust the timeout duration as needed
    return () => clearTimeout(timeout);
  }, []);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  return (
    <>
      {isLoading && !isAnimationComplete && (
        <Loading onComplete={handleAnimationComplete} />
      )}
      {(!isLoading || isAnimationComplete) && (
        <>
          <Cursor isDesktop={isDesktop} />
          <Header />
          <main>
            <Hero />
            <Works />
            <Testimonials />
            <Blogs />
            <Team />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <CustomHead
    title="Devibe | Designing Tomorrow Your Ideas, Our Expertise"
    description="Devibe is a full-service digital agency, specializing in design, development and brand strategy to find customers and drive revenue."
    image={homeImage}
  />
);
