import { BACKEND_SERVER } from "../utils/constants";

  /**
   * Fetching the Joke from the backend express app.
   */

const fetchJoke = async () => {
  try {
    const response = await fetch(BACKEND_SERVER);
    const data = await response.json();
    return data.Joke;
  } catch (error) {
    console.error("Error from Server:", error);
  }
};

export { fetchJoke };
