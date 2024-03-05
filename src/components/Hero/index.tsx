import React from "react";
import HeroVector from "../../images/hero-vector.svg";
import HeroImage from "../../images/hero-image.webp";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <section className="bg-light-yellow px-[6.25rem] pt-72 pb-4 flex flex-row align-top justify-between gap-10">
      <div>
        <div className="relative">
          <img
            src={HeroVector}
            alt="hero vector"
            className="absolute top-[-16%] left-[-5%]"
          />
          <h1 className="font-heavy text-black text-[4rem]">
            Designing Tomorrow <br></br>Your{" "}
            <span className="text-orange">Ideas,</span> Our
            <span className="text-green"> Expertise</span>
          </h1>
        </div>
        <p className="font-regular text-2xl text-gray">
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
      <img src={HeroImage} alt="hero image" className="w-auto h-96" />
    </section>
  );
};

export default Hero;
