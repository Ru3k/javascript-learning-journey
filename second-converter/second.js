let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

convertBtn.addEventListener("click", function () {
  let hours = hoursInput.value;
  let minutes = minutesInput.value;

  if (hours === "" && minutes === "") {
    errorMsg.textContent = "Please enter hours and minutes";
    timeInSeconds.textContent = "";
  } else if (hours === "") {
    errorMsg.textContent = "Please enter hours";
    timeInSeconds.textContent = "";
  } else if (minutes === "") {
    errorMsg.textContent = "Please enter minutes";
    timeInSeconds.textContent = "";
  } else {
    let totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60;
    timeInSeconds.textContent = totalSeconds;
    errorMsg.textContent = "";
  }
});