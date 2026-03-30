let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");

let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

// Name validation
nameInput.addEventListener("blur", function () {
    if (nameInput.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
});

// Email validation
emailInput.addEventListener("blur", function () {
    if (emailInput.value === "") {
        emailErrMsg.textContent = "Required*";
    } else {
        emailErrMsg.textContent = "";
    }
});