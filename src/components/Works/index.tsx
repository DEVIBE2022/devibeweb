import React from "react";
import { Link } from "gatsby";
import { IoArrowForwardOutline } from "react-icons/io5";


export default function Works() {
  return (
    <section className="bg-black py-40 flex flex-column" id="works">
      <div>
        <h2>OUR WORKS</h2>

        <div>
          <h1>
            From strategy tactic to end result, our output generates revenue
          </h1>
          <p>
            We had the opportunity and privilege to work with some challenging
            work in our past. Whether it is a startup or a top fortune company,
            we build and launch it by wearing the shoes of our client's.
          </p>
          <Link
            to="#works"
            className="relative group mt-7 inline-flex gap-x-[0.38rem] items-center border-2 hover:z-10 border-white rounded bg-transparent px-[0.38rem] py-1 font-regular text-xl text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100"
          >
            <p>View all works</p>
            <IoArrowForwardOutline className="rotate-45 group-hover:rotate-0 transition-all ease-in-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}
