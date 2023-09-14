import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchFeedCard from "./SearchFeedCard";
import Loader from "./Loader";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "beb3a9814cmsh9fabc2abaaff9e0p159b6ejsnd4514a60a6be",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setVideos(result.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {!videos.length ? (
        <div>
          <Loader />
        </div>
      ) : (
        <section>{<SearchFeedCard videos={videos} />}</section>
      )}
    </div>
  );
};

export default SearchFeed;
