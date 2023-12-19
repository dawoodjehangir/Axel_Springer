import React, { useState } from "react";
import Header from "../Header/Header";
import Divider from "../Divider/Divider";
import JokeContainer from "../JokeContainer/JokeContainer";
import { fetchJoke } from "../../services/backendAPI.js";
import "./JokeApp.css";

/**
 * Main React App component. Shows the main and invalid pages depending upon props 
 */

function JokeApp({ chuckIMG, invalidPage }) {

  /**
   * useState hook for changing joke in Joke Container after every button press
   */
  const [joke, setJoke] = useState("");

  /**
   * Fetching the joke from services
   */
  const handleFetchJoke = async () => {
    try {
      const gotAJoke = await fetchJoke();
      setJoke(gotAJoke);
    } catch (error) {
      setJoke("Failed to fetch joke. Please try again.");
    }
  };

  /**
   * Conditional rendering based on URL entered. Rendering all components
   * if the path is "/". Otherwise, for all other paths, it shows an
   * invalid page by just rendering Header component with basic IMG and text.
   */
  return (
    <div className="AppContainer">
      {!invalidPage ? (
        <>
          <Header chuckPNG={chuckIMG} pageTitle={"CHUCK NORRIS"}/>
          <Divider fetchTheJoke={handleFetchJoke} />
          <JokeContainer jokeText={joke} />
        </>
      ) : (
        <>
          <Header chuckPNG={chuckIMG} pageTitle={"404 - Invalid Page"} />
        </>
      )}
    </div>
  );
}

export default JokeApp;
