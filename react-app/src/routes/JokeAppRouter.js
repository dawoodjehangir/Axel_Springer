import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JokeApp from "../components/JokeApp/JokeApp";
import mainPage from "../assets/images/mainPage.png";
import invalidPage from "../assets/images/invalidPage.png";

/**
 * Router for correct navigation and invalid paths
 */
const JokeAppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<JokeApp chuckIMG={mainPage} invalidPage={false}/>} />
        <Route path="*" element={<JokeApp chuckIMG={invalidPage} invalidPage={true}/>} />
      </Routes>
    </Router>
  );
};

export default JokeAppRouter;
