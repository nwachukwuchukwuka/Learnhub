import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Loader from "./Loader";

const Video = () => {
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "beb3a9814cmsh9fabc2abaaff9e0p159b6ejsnd4514a60a6be",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setVideos(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!videos) return <Loader />;

  return (
    <div className="max-w-[97%] m-auto">
      <div className="relative aspect-[16/9]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Video;
