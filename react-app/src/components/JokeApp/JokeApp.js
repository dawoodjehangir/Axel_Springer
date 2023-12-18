import React, { useState } from "react";
import Header from "../Header/Header";
import Divider from "../Divider/Divider";
import JokeContainer from "../JokeContainer/JokeContainer";
import { fetchJoke } from "../../services/backendAPI.js";
import "./JokeApp.css";

function JokeApp({ chuckIMG, invalidPage }) {
  const [joke, setJoke] = useState("");

  const handleFetchJoke = async () => {
    try {
      const gotAJoke = await fetchJoke();
      setJoke(gotAJoke);
    } catch (error) {
      setJoke("Failed to fetch joke. Please try again.");
    }
  };

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
