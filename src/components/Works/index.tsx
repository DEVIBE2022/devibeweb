import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
import { IoArrowForwardOutline } from "react-icons/io5";
import WorkImage1 from "../../images/work-image-1.webp";
import WorkImage2 from "../../images/work-image-2.webp";
import WorkImage3 from "../../images/work-image-3.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const workRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#work",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart none none reverse",
      },
    });

    workRefs.current.forEach((work, index) => {
      timeline.fromTo(
        work,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        index * 0.2,
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      timeline.kill();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !workRefs.current.includes(el)) {
      workRefs.current.push(el);
    }
  };

  return (
    <section className="bg-black rounded-bl-[3.75rem]" id="work">
      <div className="mx-auto max-w-7xl  py-20 md:py-40 flex flex-col xl:flex-row gap-10 md:gap-[6.75rem] px-6 xl:px-0">
        <div className="flex-auto">
          <h2 className="font-heavy text-white opacity-70">OUR WORKS</h2>

          <div className="w-full mt-10 md:mt-20">
            <h1 className="font-serif text-white text-[2rem] md:text-[3.25rem] xl:w-4/5">
              From strategy tactic to end result, our output{" "}
              <span className="text-other-gray">generates revenue</span>
            </h1>
            <p className="font-regular text-white text-lg md:text-2xl mt-5 md:mt-10">
              We had the opportunity and privilege to work with some challenging
              work in our past. Whether it is a startup or a top fortune
              company, we build and launch it by wearing the shoes of our
              client's.
            </p>
            <Link
              to="#works"
              className="link relative group mt-5 md:mt-10 inline-flex gap-x-[0.38rem] items-center border-2 hover:z-10 border-white rounded bg-transparent px-[0.38rem] py-1 font-regular text-lg md:text-xl text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100"
            >
              <p>View all works</p>
              <IoArrowForwardOutline className="rotate-45 group-hover:rotate-0 transition-all ease-in-out" />
            </Link>
          </div>
          <div ref={addToRefs} className="mt-10 md:mt-20 w-full left-work">
            <Link to="/#">
              <div className="h-96 w-auto xl:h-[56rem] xl:w-[36rem] overflow-hidden">
                <img
                  src={WorkImage1}
                  alt="work image"
                  className="object-cover h-full w-full hover:scale-110 transition-transform duration-300 delay-150 ease-in"
                />
              </div>
              <h3 className="font-heavy text-white text-xl md:text-2xl mt-5">
                WORKSTATION
              </h3>
              <p className="font-regular text-white text-lg md:text-xl mt-2">
                A digital app that lets you find co-working places near your
                area very easily
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div ref={addToRefs} className="right-work">
            <Link to="/#">
              <div className="h-96 w-auto xl:h-[48rem] xl:w-[36rem] overflow-hidden">
                <img
                  src={WorkImage2}
                  alt="work image"
                  className="object-cover h-full w-full hover:scale-110 transition-transform duration-300 delay-150 ease-in"
                />
              </div>
              <h3 className="font-heavy text-white text-xl md:text-2xl mt-5">
                VOLTIC
              </h3>
              <p className="font-regular text-white text-lg md:text-xl mt-2">
                An electrifying new brand and website for a cutting-edge
                electrical automotive company.
              </p>
            </Link>
          </div>
          <div ref={addToRefs} className="mt-10 md:mt-20">
            <Link to="/#">
              <div className="h-96 w-auto xl:h-[56rem] xl:w-[36rem] overflow-hidden">
                <img
                  src={WorkImage3}
                  alt="work image"
                  className="object-cover h-full w-full hover:scale-110 transition-transform duration-300 delay-150 ease-in"
                />
              </div>
              <h3 className="font-heavy text-white text-xl md:text-2xl mt-5">
                WORKSTATION
              </h3>
              <p className="font-regular text-white text-lg md:text-xl mt-2">
                A digital app that lets you find co-working places near your
                area very easily.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
