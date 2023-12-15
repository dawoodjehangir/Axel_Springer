document.addEventListener('DOMContentLoaded', function () {
    const getJokeBtn = document.getElementById('getJokeBtn');
    const jokeContainer = document.getElementById('jokeContainer');

    getJokeBtn.addEventListener('click', fetchJoke);

    function fetchJoke() {
        // Fetch a random Chuck Norris joke from the API
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                // Display the fetched joke on the page
                jokeContainer.textContent = data.value;
            })
            .catch(error => {
                console.error('Error fetching Chuck Norris joke:', error);
                jokeContainer.textContent = 'Failed to fetch joke. Please try again.';
            });
    }
});