let inputEl = document.getElementById("input");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");

let storageKey = "userInput";

// Get value from localStorage
let storageVal = localStorage.getItem(storageKey);

// If no value, set default
if (storageVal === null) {
    localStorage.setItem(storageKey, "Hello");
}

// Set input field value
inputEl.value = localStorage.getItem(storageKey);

// Save button functionality
saveBtnEl.onclick = function() {
    let inputVal = inputEl.value;
    localStorage.setItem(storageKey, inputVal);
};

// Clear button functionality
clearBtnEl.onclick = function() {
    inputEl.value = "";
    localStorage.removeItem(storageKey);
};