import React, { useState } from "react";
import Logo from "../../images/logo.svg";
import { Link } from "gatsby";
import ScrollProgress from "../ScrollProgress";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const { title, navigation } = useSiteMetadata();
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;
  const completion = ScrollProgress();
  return (
    <header className="w-full bg-light-yellow z-10">
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed bg-orange h-1 w-full top-0 z-50"
      />
      {title && (
        <div className="lg:px-[6.25rem] px-8 py-5 w-full flex flex-row justify-between items-center">
          <Link to="/" className="z-50">
            <img src={Logo} alt="logo" className="h-11 w-auto" />
          </Link>
          <nav className="lg:flex lg:flex-row lg:gap-x-14 lg:items-center hidden">
            <ul className="flex flex-row gap-x-10">
              {navigation?.map(
                (nav) =>
                  nav?.path && (
                    <li key={nav.path}>
                      <Link
                        to={nav.path}
                        className="group relative font-regular text-black text-xl overflow-y-hidden h-fit w-full link"
                      >
                        <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                          {nav.name}
                        </span>
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 flex-nowrap whitespace-nowrap">
                          {nav.name}
                        </span>
                      </Link>
                    </li>
                  ),
              )}
            </ul>

            <Link
              to="mailto:tech.devibe@gmail.com"
              className="link relative border-2 hover:z-10 border-black rounded bg-transparent px-[0.38rem] py-1 font-regular text-xl text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
            >
              Hire Us
            </Link>
          </nav>
          <nav
            className={
              menuOpen
                ? `lg:hidden h-screen w-screen absolute top-0 left-0 z-20 bg-light-yellow`
                : `hidden`
            }
          >
            <div
              className="flex flex-column gap-y-20 items-center h-full w-full justify-center"
              style={{ flexDirection: "column" }}
            >
              <ul  style={{ gap: "2rem", display: "flex", flexDirection: "column" }}>
                {navigation?.map(
                  (nav) =>
                    nav?.path && (
                      <li key={nav.path} className="flex place-content-center">
                        <Link
                          to={nav.path}
                          className="font-regular text-black text-3xl overflow-y-hidden"
                        >
                          {nav.name}
                        </Link>
                      </li>
                    ),
                )}
              </ul>
              <Link
                to="mailto:tech.devibe@gmail.com"
                className="border-2 hover:z-10 border-black rounded bg-transparent px-[0.38rem] py-1 font-regular text-3xl text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
              >
                Hire Us
              </Link>
            </div>
          </nav>
          <button
            onClick={toggleNav}
            className="lg:hidden flex flex-col justify-center items-center group z-50"
          >
            <div
              className={`${genericHamburgerLine} ${
                menuOpen ? "rotate-45 translate-y-1.5 " : ""
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                menuOpen ? "-rotate-45 -translate-y-1.5 " : ""
              }`}
            />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
