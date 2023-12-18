import React from "react";
import "./Header.css";

function Header({ chuckPNG }) {
  return (
    <>
      <div className="ChuckHeader">
        <img src={chuckPNG} alt="Chuck Norris" className="ChuckFace" />
        <div className="TitleContainer">
          <span className="ChuckOrangeText">Chuck Norris</span>
        </div>
      </div>
    </>
  );
}

export default Header;
