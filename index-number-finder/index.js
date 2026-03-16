let numbers = [17, 31, 77, 20, 63];

function findIndexOfNumber() {

  let userInputElement = document.getElementById("userInput");
  let indexOfNumberElement = document.getElementById("indexOfNumber");

  let userValue = parseInt(userInputElement.value);

  let index = numbers.findIndex(function(eachItem){
    return eachItem === userValue;
  });

  indexOfNumberElement.textContent = index;
}