import React from "react";
import loader from "../assets/loader.mp4";

const Loader = () => (
  <div className="w-[60px] max-w-[100px] m-auto mt-[30vh]">
    <video autoPlay loop muted playsInline>
      <source src={loader} type="video/mp4" />
    </video>
  </div>
);

export default Loader;
