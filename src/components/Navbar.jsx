import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Import react-scroll
import logo from "../assets/logo.jpg";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const scrollToCategories = () => {
    scroll.scrollTo("categories-section", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  const closeMenu = () => {
    setIsClicked(false);
  };
  return (
    <div>
      <section className="flex justify-between max-w-[90%] m-auto py-2 md:py-6 pb-4 md:pb-6 items-center text-gray-600">
        <div className="w-[150px] md:w-[180px]">
          <img src={logo} alt="logo" />
        </div>
        <div className=" md:mt-0 ">
          <form className="relative mr-[15px] hidden md:block">
            <input
              className="border py-2  w-11/9 md:w-[600px] px-2 rounded-2xl outline-none mr-[10px] md:mr-0"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="absolute right-5 top-2 text-gray-200"
              onClick={handleClick}
            >
              <i class="fa-solid fa-magnifying-glass fa-beat "></i>
            </button>
          </form>
        </div>

        <div>
          <div className="hidden md:block">
            <ul className="flex justify-between">
              <Link to="/">
                <li className="bg-[#f9f4f5] font-bold p-2 px-3 mr-6 text-lg rounded-md text-black hover:bg-[#e9d1d6]">
                  Home
                </li>
              </Link>

              <li
                className=" text-white p-2 bg-black rounded-md px-3 cursor-pointer hover:bg-[#605f5f]"
                onClick={scrollToCategories}
              >
                <ScrollLink
                  to="categories-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Categories
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* for responsive menu */}

          <div className="md:hidden">
            <p
              className="cursor-pointer"
              onClick={() => setIsClicked(!isClicked)}
            >
              {!isClicked ? (
                <i className="fa-solid fa-bars fa-lg"></i>
              ) : (
                <div className="cursor-pointer  " onClick={closeMenu}>
                  <i className="fa-solid fa-xmark fa-lg"></i>
                </div>
              )}
            </p>
            {isClicked && (
              <div>
                <ul className="absolute right-5 top-[50px] text-md rounded-lg p-4 bg-[#131313] flex z-10 flex-col justify-between">
                  <Link to="/">
                    <li
                      onClick={() => setIsClicked(!isClicked)}
                      className="text-white mt-[20px] font-normal md:font-bold mb-2 md:mb-0 p-2 px-3 mr-6 text-lg text-black hover:border-b"
                    >
                      Home
                    </li>
                  </Link>
                  <li
                    className="text-white p-2 px-3 cursor-pointer hover:border-b"
                    onClick={scrollToCategories}
                  >
                    <ScrollLink
                      to="categories-section"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <p onClick={closeMenu}>Categories</p>
                      
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <form className=" relative max-w-[80%] m-auto md:hidden text-center pb-6">
        <input
          className="border py-2 w-full md:w-[600px] px-2 rounded-2xl outline-none  md:mr-0"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="absolute right-3  top-2 text-gray-200"
          onClick={handleClick}
        >
          <i class="fa-solid fa-magnifying-glass fa-beat "></i>
        </button>
      </form>
    </div>
  );
};

export default Navbar;
