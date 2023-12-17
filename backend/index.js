/**
 * Packages to be imported
 */
const express = require("express");
const { jokeRouter } = require("./src/routes/joke.js");

/**
 * Import the Constants
 */
const { PORT } = require("./src/utils/constants.js");

/**
 * Instantiating a minimal server
 */
const minimalServer = express();

/**
 * Attaching a Router
 */
minimalServer.use(jokeRouter);

/**
 * Starting the server
 */
minimalServer.listen(PORT, () => {
  console.log(`Server has started listening at Port: ${PORT}`);
});
