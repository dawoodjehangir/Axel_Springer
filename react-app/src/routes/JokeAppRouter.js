import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { CHUCKNORRISIMAGE, NOT_ALLOWED } from "../utils/constants";

const JokeAppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home chuckIMG={CHUCKNORRISIMAGE} invalidPage={false}/>} />
        <Route path="*" element={<Home chuckIMG={NOT_ALLOWED} invalidPage={true}/>} />
      </Routes>
    </Router>
  );
};

export default JokeAppRouter;
