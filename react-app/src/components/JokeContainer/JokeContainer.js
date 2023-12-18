import React from "react";
import "./JokeContainer.css";

const JokeContainer = ({ jokeText }) => {
  return <div className="joke-container">{jokeText}</div>;
};

export default JokeContainer;
