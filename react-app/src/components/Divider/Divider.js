import React from "react";
import "./Divider.css";

/**
 * Simple component which contains the Button element
 */
function Divider({ fetchTheJoke }) {
  return (
    <>
      <div className="Divider">
        <div className="DividerText">In mood of a random Joke?</div>
        <button onClick={fetchTheJoke}>Humor Me</button>
      </div>
    </>
  );
}

export default Divider;
