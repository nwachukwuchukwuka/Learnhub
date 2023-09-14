import React, { useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import music1 from "../assets/music1.jpg";
import podcast1 from "../assets/podcast1.jpg";
import crypto from "../assets/crypto.jpg";
import movies from "../assets/movies.jpg";
import gaming from "../assets/gaming.jpg";
import sport from "../assets/sport.jpg";
import fashion from "../assets/fashion.jpg";
import beauty from "../assets/beauty.jpg";
import comedy from "../assets/comedy.jpg";
import gym from "../assets/gym.jpg";
import live from "../assets/live.png";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categories = [
    {
      image: <img className="rounded-lg" src={image1} alt="image" />,
      title: "Education",
    },
    {
      image: <img className="rounded-lg" src={music1} alt="image" />,
      title: "Music",
    },
    {
      image: <img className="rounded-lg" src={crypto} alt="image" />,
      title: "Crypto",
    },
    {
      image: <img className="rounded-lg" src={movies} alt="image" />,
      title: "Movies",
    },
    {
      image: <img className="rounded-lg" src={gaming} alt="image" />,
      title: "Gaming",
    },
    {
      image: <img className="rounded-lg h-[125px]" src={live} alt="image" />,
      title: "Live",
    },
    {
      image: <img className="rounded-lg h-[125px]" src={sport} alt="image" />,
      title: "Sport",
    },
    {
      image: <img className="rounded-lg" src={fashion} alt="image" />,
      title: "Fashion",
    },
    {
      image: <img className="rounded-lg" src={beauty} alt="image" />,
      title: "Beauty",
    },
    {
      image: <img className="rounded-lg h-[125px]" src={comedy} alt="image" />,
      title: "Comedy",
    },
    {
      image: <img className="rounded-lg" src={gym} alt="image" />,
      title: "Gym",
    },
    {
      image: <img className="rounded-lg" src={podcast1} alt="image" />,
      title: "Podcast",
    },
  ];

  return (
    <div>
      <div className="py-[70px] max-w-[90%] m-auto">
        <div className="flex justify-between items-center">
          <section className="text-center md:text-start">
            <h1 className="text-[40px] font-bold"> Select a Category</h1>
            <p className="text-sm md:w-[70%]">
              choose the category that aligns with your preferred
              area of study. Each category provides comprehensive knowledge in
              video format, tailored to your specific field of interest.
            </p>
          </section>
          <div></div>
        </div>

        <div className="flex web-scroll mt-10">
          {categories.map((category) => (
            <div>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
