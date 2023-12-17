const jokeRouter = require("express").Router();
const { getJoke } = require("../controllers/joke.js");
const {
  onlyAllowGetMethod,
  invalidEndpoints,
} = require("../middlewares/joke.js");

/**
 * Random Joke Endpoint
 */

jokeRouter.all("/joke", onlyAllowGetMethod, getJoke);

/**
 * Router dealing with all invalid endpoints
 */
jokeRouter.use("/*", invalidEndpoints);

module.exports = { jokeRouter };
