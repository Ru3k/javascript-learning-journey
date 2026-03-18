let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

// Random font size generator
function getRandomFontSize() {
    return Math.ceil(Math.random() * 40) + "px";
}

// Function to create word
function createWord(word) {
    let span = document.createElement("span");
    span.textContent = word;
    span.style.fontSize = getRandomFontSize();
    span.style.margin = "5px";
    wordsContainer.appendChild(span);
}

// Load initial words
for (let word of wordCloud) {
    createWord(word);
}

// Button click
addBtn.onclick = function () {
    let inputValue = userInput.value.trim();

    if (inputValue === "") {
        errorMsg.textContent = "Please enter a word";
    } else {
        errorMsg.textContent = "";
        createWord(inputValue);
        userInput.value = "";
    }
};