import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import { CHUCKNORRISIMAGE, NOT_ALLOWED } from "../utils/constants";

const JokeAppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main chuckIMG={CHUCKNORRISIMAGE} invalidPage={false}/>} />
        <Route path="*" element={<Main chuckIMG={NOT_ALLOWED} invalidPage={true}/>} />
      </Routes>
    </Router>
  );
};

export default JokeAppRouter;
