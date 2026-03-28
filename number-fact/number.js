let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

userInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let userValue = userInputEl.value;

        if (userValue === "") {
            alert("Please enter a number");
            return;
        }

        spinnerEl.classList.remove("d-none");
        factEl.textContent = "";

        let url = "https://apis.ccbp.in/numbers-fact?number=" + userValue;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                spinnerEl.classList.add("d-none");
                factEl.textContent = data.fact;
            });
    }
});