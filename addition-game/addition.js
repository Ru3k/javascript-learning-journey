let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let checkButton = document.getElementById("checkButton");
let restartButton = document.getElementById("restartButton");

let firstRandomNumber = Math.ceil(Math.random() * 100);
let secondRandomNumber = Math.ceil(Math.random() * 100);

firstNumberElement.textContent = firstRandomNumber;
secondNumberElement.textContent = secondRandomNumber;

checkButton.onclick = function () {

    let userAnswer = parseInt(userInputElement.value);
    let correctAnswer = firstRandomNumber + secondRandomNumber;

    if (userAnswer === correctAnswer) {
        gameResultElement.textContent = "Congratulations! You got it right.";
        gameResultElement.style.color = "#028a0f";
    } else {
        gameResultElement.textContent = "Please try again!";
        gameResultElement.style.color = "#1e217c";
    }

};

restartButton.onclick = function () {

    firstRandomNumber = Math.ceil(Math.random() * 100);
    secondRandomNumber = Math.ceil(Math.random() * 100);

    firstNumberElement.textContent = firstRandomNumber;
    secondNumberElement.textContent = secondRandomNumber;

    gameResultElement.textContent = "";
    userInputElement.value = "";

};