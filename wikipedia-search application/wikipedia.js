let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function createAndAppendResult(result) {
    let { title, link, description } = result;

    let resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.textContent = title;
    titleEl.target = "_blank";
    titleEl.classList.add("result-title");

    let breakEl = document.createElement("br");

    let urlEl = document.createElement("a");
    urlEl.href = link;
    urlEl.textContent = link;
    urlEl.target = "_blank";
    urlEl.classList.add("result-url");

    let descEl = document.createElement("p");
    descEl.textContent = description;
    descEl.classList.add("link-description");

    resultItem.appendChild(titleEl);
    resultItem.appendChild(breakEl);
    resultItem.appendChild(urlEl);
    resultItem.appendChild(descEl);

    searchResults.appendChild(resultItem);
}

function displayResults(results) {
    spinner.classList.add("d-none");

    for (let result of results) {
        createAndAppendResult(result);
    }
}

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let searchValue = searchInput.value.trim();

        if (searchValue === "") return;

        searchResults.textContent = "";
        spinner.classList.remove("d-none");

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchValue;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                displayResults(data.search_results);
            });
    }
});