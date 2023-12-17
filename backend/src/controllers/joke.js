const { getJokeFromChuck } = require("../services/joke.js");

/**
 * Communicating with the Chuck Norris API and sending a response back
 */
const getJoke = async (request, response) => {
  try {
    const randomJoke = await getJokeFromChuck();
    const headers = {
      "Content-Type": "application/json",
    };
    // "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    response.set(headers);
    response.status(200).json({ Id: randomJoke.id, Joke: randomJoke.value });
  } catch (error) {
    response.status(503);
    throw new Error(`Minimal Server has gotten an error: ${error}`);
  }
};

module.exports = { getJoke };
