import { BACKEND_SERVER } from "../utils/constants";

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
