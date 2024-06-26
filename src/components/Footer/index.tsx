import React from "react";
import { Link } from "gatsby";
import Logo from "../../images/FooterLogo.svg";
import { FiDribbble, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLogoPinterest } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black mt-20">
      <div className="mx-auto max-w-7xl flex-grow py-8 w-full px-4 xl:px-0">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="flex-col">
            <Link to="/">
              <img src={Logo} alt="logo" className="h-11 w-auto" />
            </Link>
            <p className="text-[#C0C0C0] mt-3 font-regular">
              Devibe is a full-service digital agency, specializing in design,
              development and brand strategy to find customers and drive
              revenue.
            </p>
            <div className="flex flex-row items-center justify-start gap-4 my-8">
              <Link to="/">
                <FiDribbble color="#C0C0C0" size="20" />
              </Link>
              <Link to="/">
                <FiTwitter color="#C0C0C0" size="20" />
              </Link>
              <Link to="/">
                <FiFacebook color="#C0C0C0" size="20" />
              </Link>
              <Link to="/">
                <FiInstagram color="#C0C0C0" size="20" />
              </Link>
              <Link to="/">
                <IoLogoPinterest color="#C0C0C0" size="20" />
              </Link>
            </div>
            <Link
              to="/hireUs"
              className="rounded-full bg-orange py-3 px-8 text-base text-white font-regular inline-block hover:bg-orange/80"
            >
              Contact Us
            </Link>
          </div>
          <div className="grid grid-cols-2 justify-between basis-11/12 sm:grid-cols-3 gap-8">
            <div className="flex-col flex">
              <h3 className="text-white text-base font-regular mb-2">
                Company
              </h3>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Customers
              </Link>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Blog
              </Link>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Refer a friend
              </Link>
            </div>
            <div className="flex-col flex">
              <h3 className="text-white text-base font-regular mb-2">
                Products
              </h3>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Login
              </Link>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Pricing
              </Link>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Walkthrough
              </Link>
            </div>
            <div className="flex-col flex">
              <h3 className="text-white text-base font-regular mb-2">
                Support
              </h3>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Email
              </Link>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Terms of service
              </Link>
              <Link
                to="/"
                className="text-[#C0C0C0] text-base font-regular hover:text-white transition-all mt-2"
              >
                Cancellation and refund
              </Link>
            </div>
          </div>
        </div>
        <div className="p-[0.1px] bg-white w-full my-10"></div>
        <p className="text-[#6E6D7A] text-sm font-regular mt-2">
          © {new Date().getFullYear()} Devibe. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
