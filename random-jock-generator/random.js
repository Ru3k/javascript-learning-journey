let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

jokeBtnEl.addEventListener("click", function () {

    // Show spinner
    spinnerEl.classList.remove("d-none");
    jokeTextEl.textContent = "";

    let url = "https://apis.ccbp.in/jokes/random";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Hide spinner
            spinnerEl.classList.add("d-none");

            // Display joke
            jokeTextEl.textContent = data.value;
        })
        .catch(function () {
            spinnerEl.classList.add("d-none");
            jokeTextEl.textContent = "Failed to load joke 😢";
        });
});