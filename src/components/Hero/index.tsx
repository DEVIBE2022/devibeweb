import React from "react";
import HeroVector from "../../images/hero-vector.svg";
import HeroImage from "../../images/hero-image.webp";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <section className="bg-white mx-auto max-w-7xl flex flex-row flex-grow items-center pt-40 lg:pt-72 pb-4 w-full sm:max-[1300px]:px-10 max-sm:px-6 align-top justify-between gap-10">
      <div>
        <div className="relative">
          <img
            src={HeroVector}
            alt="hero vector"
            className="absolute lg:top-[-40%] lg:left-[-5%] md:top-[-28%] md:left-[-5%] top-[-18%] left-[-10%] max-sm:size-12"
          />
          <h1 className="font-heavy text-black sm:text-[4rem] text-6xl max-sm:text-4xl">
            Designing Tomorrow <br></br>Your{" "}
            <span className="text-orange">Ideas,</span> Our
            <span className="text-green"> Expertise</span>
          </h1>
        </div>
        <p className="font-regular text-2xl max-sm:text-lg text-gray mt-2">
          Try a full-service digital agency, specializing in design, development
          and brand strategy to find customers and drive revenue.
        </p>
        <Link
          to="https://calendly.com/"
          className="link relative group mt-7 inline-flex gap-x-[0.38rem] items-center border-2 hover:z-10 border-black rounded bg-transparent px-[0.38rem] py-1 font-regular text-xl text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
        >
          <p>Request for a meeting</p>
          <IoArrowForwardOutline className="rotate-45 group-hover:rotate-0 transition-all ease-in-out" />
        </Link>
      </div>
      <img
        src={HeroImage}
        alt="hero image"
        className="w-auto h-96 xl:flex hidden"
      />
    </section>
  );
};

export default Hero;
