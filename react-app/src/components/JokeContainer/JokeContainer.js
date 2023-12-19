import React from "react";
import "./JokeContainer.css";

/**
 * The component for rendering jokes on the main page. 
 */
const JokeContainer = ({ jokeText }) => {
  return <div className="joke-container">{jokeText}</div>;
};

export default JokeContainer;
