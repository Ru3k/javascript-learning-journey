let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");
let spliceBtnEl = document.getElementById("spliceBtn");
let updatedArrayEl = document.getElementById("updatedArray");

// show initial array
updatedArrayEl.textContent = JSON.stringify(arr);

spliceBtnEl.onclick = function() {

    let startIndex = startIndexInputEl.value;
    let deleteCount = deleteCountInputEl.value;
    let itemToAdd = itemToAddInputEl.value;

    if (startIndex === "") {
        alert("Please enter the start index");
        return;
    }

    if (deleteCount === "") {
        deleteCount = 0;
    }

    startIndex = parseInt(startIndex);
    deleteCount = parseInt(deleteCount);

    if (itemToAdd === "") {
        arr.splice(startIndex, deleteCount);
    } else {
        arr.splice(startIndex, deleteCount, itemToAdd);
    }

    updatedArrayEl.textContent = JSON.stringify(arr);
};