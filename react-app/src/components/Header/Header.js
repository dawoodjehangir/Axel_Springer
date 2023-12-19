import React from "react";
import "./Header.css";

/**
 * Simple Header component comprising of an IMG element and the main page title.
 * Clicking the Img reloads the entire page. Useful for redirecting to correct URL
 * if you land on invalid page.
 */

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
