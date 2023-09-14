import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Import react-scroll

const scrollToCategories = () => {
  // Scroll to the "categories" section with a smooth effect
  scroll.scrollTo("categories-section", {
    duration: 800, // Adjust the duration as needed
    smooth: "easeInOutQuart", // Choose the easing function
  });
};

const HeroSection = () => {
  return (
    <div className="bg-[#f9f4f5]">
      <section className="text-center max-w-[90%] md:max-w-[70%] m-auto py-[60px] md:py-[120px]">
        <h1 className="text-2xl md:text-[50px] md:leading-[70px] mb-4 md:mb-6">
          Unleash Your Potential with Lifelong Learning Adventures.
        </h1>
        <p className="text-md  md:text-2xl mb-4 md:mb-5">
          Engage in unrestricted exploration and knowledge acquisition.
        </p>

        <button
          onClick={scrollToCategories}
          className="bg-[black] text-white px-[20px] md:px-[35px] py-3 mb-4 md:mb-[50px] text-center font-bold"
        >
          <ScrollLink
            to="categories-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Start Learning
          </ScrollLink>
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
