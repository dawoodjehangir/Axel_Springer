import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import JokeApp from './components/JokeApp/JokeApp';
import JokeAppRouter from "./routes/JokeAppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <JokeApp /> */}
    <JokeAppRouter />
  </React.StrictMode>
);
