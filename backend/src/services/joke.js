const axios = require("axios");
const { CHUCKAPI } = require("../utils/constants.js");

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

module.exports = { getJokeFromChuck };
