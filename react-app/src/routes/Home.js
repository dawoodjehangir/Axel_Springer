import React from "react";
import JokeApp from "../components/JokeApp/JokeApp";

function Home({ chuckIMG, invalidPage }) {
  return (
    <>
      <JokeApp chuckIMG={chuckIMG} invalidPage={invalidPage}/>
    </>
  );
}

export default Home;
