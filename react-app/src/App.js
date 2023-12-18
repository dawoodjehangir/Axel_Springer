import React, { useState } from "react";
import JokeContainer from "./components/JokeContainer";
import "./App.css";

function App() {
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
      <MidDivider fetchTheJoke={fetchJoke} />
      <JokeContainer joke={joke} />
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="ChuckHeader">
        <img
          src="https://pngimg.com/uploads/chuck_norris/small/chuck_norris_PNG13.png"
          alt="Chuck Norris"
          className="ChuckFace"
        />
        <div className="TitleContainer">
          <span className="ChuckOrangeText">Chuck Norris</span>
        </div>
      </div>
    </>
  );
}

function MidDivider({ fetchTheJoke }) {
  return (
    <>
      <div className="Divider">
        <div className="DividerText">In mood of a random Joke?</div>
        <button onClick={fetchTheJoke}>Humor Me</button>
      </div>
    </>
  );
}

export default App;
