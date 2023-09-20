import React from "react";
import about1 from "../assets/about1.webp";
import learning from "../assets/learning.jpg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Import react-scroll

const About = () => {
  const scrollToCategories = () => {
    scroll.scrollTo("categories-section", {
      duration: 800, 
      smooth: "easeInOutQuart", 
    });
  };

  return (
    <div>
      <section className="max-w-[90%] mx-auto flex flex-col lg:flex-row justify-between mt-[70px] items-center pb-[70px] md:pb-[100px] ">
        <div className="mr-0 lg:mr-[60px] text-center lg:text-left">
          <h1 className="font-bold mb-[20px] text-lg">WHAT IS LEARNHUB?</h1>
          <p className="text-gray-800">
            LearnHub is a platform, a dedicated space for individuals eager to
            embark on a journey of unrestricted exploration and knowledge
            acquisition. Our website is designed to facilitate and enhance the
            pursuit of learning and discovery. We provide a diverse range of
            resources, educational content, and tools to empower users from
            various backgrounds and interests.
            <span className="block mt-4">
              Whether you seek to expand your horizons, delve into new subjects,
              or stay updated on the latest insights, our website is your
              gateway to a world of boundless learning opportunities. Join us in
              your quest for personal and intellectual growth, where the
              boundaries of knowledge are limited only by your curiosity.
            </span>
          </p>

          <button
            onClick={scrollToCategories}
            className="bg-black text-white px-[40px] py-[10px] mt-4"
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
        </div>

        <div className="mt-4 lg:mt-0">
          <img
            className="w-[2600px] lg:w-[2000px] h-[300px] object-cover"
            src={learning}
            alt="about"
          />
        </div>
      </section>

      <section className="bg-black text-white py-[40px] lg:py-[70px]">
        <div className="max-w-[90%] mx-auto">
          <h1 className="font-bold my-[30px] text-center">
            WHO IS LEARNHUB FOR?
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-1/2">
              <img
                className="w-full lg:w-[85%] mx-auto"
                src={about1}
                alt="image"
              />
            </div>

            <div className="mt-4 lg:mt-0 lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[35px] mb-[10px]">
                Need a new career? We’ve got you
              </h1>
              <p className="text-lg mb-[40px]">
                Our website caters to a diverse community of individuals,
                including students, professionals, educators, and anyone with a
                thirst for knowledge. It is a valuable resource for those
                committed to lifelong learning and open to broadening their
                horizons across various fields of interest
              </p>
              <button
                onClick={scrollToCategories}
                className="bg-[#6262eb] px-[40px] py-[10px] text-bold"
              >
                <ScrollLink
                  to="categories-section"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Get Started
                </ScrollLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
