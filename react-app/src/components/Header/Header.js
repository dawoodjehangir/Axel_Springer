import React from "react";
import "./Header.css";

function Header({ chuckPNG, pageTitle }) {
  return (
    <>
      <div className="ChuckHeader">
        <a href="/">
          <img src={chuckPNG} alt="Chuck Norris" className="ChuckFace" />
        </a>
        <div className="TitleContainer">
          <span className="ChuckOrangeText">{pageTitle}</span>
        </div>
      </div>
    </>
  );
}

export default Header;
