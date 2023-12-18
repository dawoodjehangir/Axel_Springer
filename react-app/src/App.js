import React, { useState } from "react";
import JokeContainer from "./components/JokeContainer/JokeContainer";
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

export default App;
