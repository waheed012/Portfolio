import React from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className=" h-14 flex justify-between items-center border-b-2 border-gray-200 mb-8">
      {/* left */}
      <div className=" flex items-center ml-8">
        <div className=" text-lg font-bold">Andrew</div>
        <Toggle />
      </div>
      {/* right */}
      <div className=" flex items-center mr-8 gap-48">
        <div className=" flex space-x-6">
          <Link
            to="Navbar"
            spy={true}
            smooth={true}
            className="hover:text-orange cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            className="hover:text-orange cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="works"
            spy={true}
            smooth={true}
            className="hover:text-orange cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            className="hover:text-orange cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            className="hover:text-orange cursor-pointer"
          >
            Testimonial
          </Link>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="n-button button px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg text-white font-semibold text-sm hover:bg-white hover:border-2 hover:border-orange hover:text-orange">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
