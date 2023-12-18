import React from 'react';

const JokeContainer = ({ joke }) => {
  return (
    <div className="joke-container">
      <p>{joke}</p>
    </div>
  );
};

export default JokeContainer;