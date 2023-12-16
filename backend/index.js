/**
 * Packages to be imported
 */
const express = require("express");
const axios = require("axios");

/**
 * Import the Constants
 */
const { PORT, CHUCKAPI } = require("./constants.js");

/**
 * Instantiating a minimal server
 */
const minimalServer = express();

/**
 * Middleware for our root and only endpoint
 */
const onlyGetMiddleware = (req, res, next) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Chuck says: Method Not Allowed!",
      allowedMethods: ["GET"],
    });
  }
  next();
};

/**
 * Routes - API - Endpoint
 */
minimalServer.all("/", onlyGetMiddleware, async (request, response) => {
  try {
    const randomJoke = await getJokeFromChuck();
    const headers = {
      "Content-Type": "application/json",
    };
    // "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    response.set(headers);
    response.status(200).json({ Id: randomJoke.id, Joke: randomJoke.value });
  } catch (error) {
    response.status(501);
    throw new Error(`Minimal Server has gotten an error: ${error}`);
  }
});

/**
 * Resonable error response for undefined Routes.
 */
minimalServer.use((request, response) => {
  response
    .status(404)
    .json({ error: "Minimal Server couldn't find the requested URL!" });
});

/**
 * Fetching the Jokes from Chuck Norris
 */
async function getJokeFromChuck() {
  try {
    const chuckAPIResponse = await axios.get(CHUCKAPI);
    return chuckAPIResponse.data;
  } catch (error) {
    throw new Error(`Chuck's feeling not funny: ${error}`);
  }
}

/**
 * Starting the server
 */
minimalServer.listen(PORT, () => {
  console.log(`Server has started listening at Port: ${PORT}`);
});
