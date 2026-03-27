let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");

let countriesList = [];

// Create country card
function createCountryCard(country) {
    let col = document.createElement("div");
    col.classList.add("col-11", "col-md-6", "col-lg-4");

    let card = document.createElement("div");
    card.classList.add("country-card", "d-flex", "flex-row");

    let flag = document.createElement("img");
    flag.src = country.flag;
    flag.classList.add("country-flag");

    let details = document.createElement("div");
    details.classList.add("ml-3");

    let name = document.createElement("h1");
    name.textContent = country.name;
    name.classList.add("country-name");

    let population = document.createElement("p");
    population.textContent = "Population: " + country.population;
    population.classList.add("country-population");

    details.appendChild(name);
    details.appendChild(population);

    card.appendChild(flag);
    card.appendChild(details);
    col.appendChild(card);

    resultCountries.appendChild(col);
}

// Display countries
function displayCountries(list) {
    resultCountries.textContent = "";

    for (let country of list) {
        createCountryCard(country);
    }
}

// Fetch API
function getCountries() {
    spinner.classList.remove("d-none");

    fetch("https://apis.ccbp.in/countries-data")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            countriesList = data;
            displayCountries(countriesList);
            spinner.classList.add("d-none");
        });
}

// Search functionality
searchInput.addEventListener("input", function(event) {
    let searchValue = event.target.value.toLowerCase();

    let filteredData = countriesList.filter(function(country) {
        return country.name.toLowerCase().includes(searchValue);
    });

    displayCountries(filteredData);
});

// Initial call
getCountries();