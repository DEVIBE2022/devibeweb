import React, { useRef } from "react";
import { Link } from "gatsby";
import { IoArrowForwardOutline } from "react-icons/io5";
import WorkImage1 from "../../images/work-image-1.webp";
import WorkImage2 from "../../images/work-image-2.webp";
import WorkImage3 from "../../images/work-image-3.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const ref = useRef([]);
  useGSAP(() => {
    const rightWork = gsap.to(".right-work", {
      marginTop: "16rem",
      ease: "easeInOut",
      duration: 1,
    });
    const leftWork = gsap.to(".left-work", {
      marginTop: "10rem",
      ease: "easeInOut",
      duration: 1,
    });
    ScrollTrigger.create({
      trigger: ".right-work",
      start: "center bottom",
      end: "center center",
      animation: rightWork,
      toggleActions: "play none none reverse",
    });
    ScrollTrigger.create({
      trigger: ".left-work",
      start: "center bottom",
      end: "center center",
      animation: leftWork,
      toggleActions: "play none none reverse",
    });
  });
  return (
    <section
      className="bg-black rounded-bl-[3.75rem] py-40 flex flex-row gap-[6.75rem] z-1"
      id="work"
    >
      <div className="pl-[6.25rem] flex-auto">
        <h2 className="font-heavy text-white">OUR WORKS</h2>

        <div className="w-8/12 mt-20">
          <h1 className="font-serif text-white text-[3.25rem]">
            From strategy tactic to end result, our output generates revenue
          </h1>
          <p className="font-regular text-white text-2xl mt-10">
            We had the opportunity and privilege to work with some challenging
            work in our past. Whether it is a startup or a top fortune company,
            we build and launch it by wearing the shoes of our client's.
          </p>
          <Link
            to="#works"
            className="link relative group mt-10 inline-flex gap-x-[0.38rem] items-center border-2 hover:z-10 border-white rounded bg-transparent px-[0.38rem] py-1 font-regular text-xl text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100"
          >
            <p>View all works</p>
            <IoArrowForwardOutline className="rotate-45 group-hover:rotate-0 transition-all ease-in-out" />
          </Link>
        </div>
        <div className="mt-20 w-8/12 left-work">
          <div className="h-[36rem] w-auto overflow-hidden">
            <img
              src={WorkImage1}
              alt="work image"
              className="object-cover h-full w-full hover:scale-110 transition-transform duration-300 delay-150 ease-in"
            />
          </div>
          <h3 className="font-heavy text-white text-2xl mt-5">WORKSTATION</h3>
          <p className="font-regular text-white text-xl mt-2">
            A digital app that lets you find co-working places near your area
            very easily.
          </p>
        </div>
      </div>
      <div className="pr-[6.25rem] w-full">
        <div className="right-work">
          <div className="h-[36rem] w-auto overflow-hidden">
            <img
              src={WorkImage2}
              alt="work image"
              className="object-cover h-full w-full hover:scale-110 transition-transform duration-300 delay-150 ease-in"
            />
          </div>
          <h3 className="font-heavy text-white text-2xl mt-5">VOLTIC</h3>
          <p className="font-regular text-white text-xl mt-2">
            An electrifying new brand and website for a cutting-edge electrical
            automotive company.
          </p>
        </div>
        <div className="mt-20">
          <div className="h-[36rem] w-auto overflow-hidden">
            <img
              src={WorkImage3}
              alt="work image"
              className="object-cover h-full w-full hover:scale-110 transition-transform duration-300 delay-150 ease-in"
            />
          </div>
          <h3 className="font-heavy text-white text-2xl mt-5">WORKSTATION</h3>
          <p className="font-regular text-white text-xl mt-2">
            A digital app that lets you find co-working places near your area
            very easily.
          </p>
        </div>
      </div>
    </section>
  );
}
