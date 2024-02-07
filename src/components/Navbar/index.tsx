import React from "react";
import Logo from "../../images/logo.svg";
import { Link } from "gatsby";
import ScrollProgress from "../ScrollProgress";

const Navbar = () => {
  const completion = ScrollProgress();
  return (
    <header className="w-full bg-light-yellow z-10">
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed bg-orange h-1 w-full top-0 z-20"
      />
      <nav className="px-[6.25rem] py-5 w-full flex flex-row justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-11 w-auto" />
        </Link>
        <div className="flex flex-row gap-x-14 items-center">
          <ul className="flex flex-row gap-x-10">
            <li>
              <Link
                to="#team"
                className="group relative font-regular text-black text-xl overflow-y-hidden h-fit w-full"
              >
                <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                  Team
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 flex-nowrap whitespace-nowrap">
                  Team
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#works"
                className="group relative font-regular text-black text-xl overflow-y-hidden h-fit w-full"
              >
                <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                  Works
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 flex-nowrap whitespace-nowrap">
                  Works
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#blogs"
                className="group relative font-regular text-black text-xl overflow-y-hidden h-fit w-full"
              >
                <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                  Blogs
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 flex-nowrap whitespace-nowrap">
                  Blogs
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="group relative font-regular text-black text-xl overflow-hidden h-fit w-full"
              >
                <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                  Contact Us
                </span>
                <span className="absolute inset-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 flex-nowrap whitespace-nowrap">
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>

          <Link
            to="mailto:tech.devibe@gmail.com"
            className="relative border-2 hover:z-10 border-black rounded bg-transparent px-[0.38rem] py-1 font-regular text-xl text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
          >
            Hire Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
