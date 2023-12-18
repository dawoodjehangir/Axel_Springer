import React, { useState } from "react";
import JokeContainer from "./JokeContainer";

const ChuckNorrisJokeApp = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error("Error fetching Chuck Norris joke:", error);
      setJoke("Failed to fetch joke. Please try again.");
    }
  };

  return (
    <div className="App">
      <Header />
      <MidDivider toCall={fetchJoke}/>
      <JokeContainer joke={joke} />
    </div>
  );
};

function Header() {
  return (
    <>
      <div className="ChuckHeader">
        <img
          src="https://pngimg.com/uploads/chuck_norris/small/chuck_norris_PNG13.png"
          alt="Chuck Norris"
          className="ChuckFace"
        />
        <div>
          <span className="ChuckOrangeText">Chuck Norris</span>
        </div>
      </div>
    </>
  );
}

function MidDivider({toCall}) {
  return (
    <>
      <div className="Divider">
        <div className="DividerText">Wanna get a Random Joke?</div>
        <button onClick={toCall}>Get Joke</button>
      </div>
    </>
  );
}

export default ChuckNorrisJokeApp;
