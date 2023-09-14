import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import "./App.css";
import SearchFeed from "./components/SearchFeed";
import Feed from "./components/Feed";
import Video from "./components/Video";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
