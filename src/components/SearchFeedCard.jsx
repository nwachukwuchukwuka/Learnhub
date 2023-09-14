import React from "react";
import { Link } from "react-router-dom";

const SearchFeedCard = ({ videos }) => {


  return (
    <div className="flex flex-wrap justify-center  md:pl-[0] md:justify-start  max-w-[90%] m-auto mt-[20px]">

      {videos.map((item, idx) => (
        <Link to={`/video/${item.id.videoId}`}>
          <div>
            <section className="mb-[20px] shadow-2xl md:mr-[20px]  h-[340px]">
              <img
                className="w-[280px] rounded-lg"
                src={item.snippet.thumbnails.high.url}
                alt=""
              />
              <div className="p-2 ">
                <p className="w-[200px] text-md font-bold  ">
                  {item.snippet.title.slice(0, 60)}...
                </p>
                <p className="text-sm text-gray-500">
                  by {item.snippet.channelTitle}
                </p>
              </div>
            </section>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchFeedCard;
