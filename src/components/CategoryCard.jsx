import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  }, [searchTerm, navigate]);

  const handleClick = () => {
    setSearchTerm(category.title);
  };

  return (
    <div className="card"  id="categories-section">
      <div
        className="bg-[white] mx-3 mb-[30px] rounded-lg pl-2 pt-4 shadow-lg pr-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="w-[200px] rounded-full flex justify-center">
          {category.image}
        </div>
        <div className="w-[200px] mt-3 font-semibold text-md pb-2 text-center">
          {category.title}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

