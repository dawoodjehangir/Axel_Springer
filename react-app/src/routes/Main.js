import React from "react";
import JokeApp from "../components/JokeApp/JokeApp";

function Main({ chuckIMG, invalidPage }) {
  return (
    <>
      <JokeApp chuckIMG={chuckIMG} invalidPage={invalidPage}/>
    </>
  );
}

export default Main;
