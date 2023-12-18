import React, { useState } from "react";
import Header from "../Header/Header";
import Divider from "../Divider/Divider";
import JokeContainer from "../JokeContainer/JokeContainer";
import { fetchJoke } from "../../services/backendAPI.js";
import { CHUCKNORRISIMAGE } from "../../utils/constants";
import "./JokeApp.css";

function JokeApp() {
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
      <Header chuckPNG={CHUCKNORRISIMAGE}/>
      <Divider fetchTheJoke={handleFetchJoke} />
      <JokeContainer jokeText={joke} />
    </div>
  );
}

export default JokeApp;
