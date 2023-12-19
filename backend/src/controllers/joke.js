const { getJokeFromChuck } = require("../services/joke.js");

/**
 * Communicating with the Chuck Norris API and sending a response back
 */
const getJoke = async (request, response) => {
  try {
    const randomJoke = await getJokeFromChuck();
    /**
     * Setting * in CORS since we aren't dealing with critical data, etc
     */
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    response.set(headers);
    response.status(200).json({ Id: randomJoke.id, Joke: randomJoke.value });
  } catch (error) {
    response.status(503);
    throw new Error(`Minimal Server has gotten an error: ${error}`);
  }
};

module.exports = { getJoke };
