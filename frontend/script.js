document.addEventListener("DOMContentLoaded", function () {
  const getJokeBtn = document.getElementById("getJokeBtn");
  const jokeContainer = document.getElementById("jokeContainer");

  getJokeBtn.addEventListener("click", fetchJoke);

  function fetchJoke() {
    // Fetch a random Chuck Norris joke from the API
    fetch("http://192.168.1.102:8000/")
      .then((response) => response.json())
      .then((data) => {
        // Display the fetched joke on the page
        // jokeContainer.textContent = data.value;
        jokeContainer.textContent = data.Joke;
      })
      .catch((error) => {
        console.error("Error fetching Chuck Norris joke:", error);
        jokeContainer.textContent = "Failed to fetch joke. Please try again.";
      });
  }
});
