let imageElement = document.getElementById("image");

let defaultImageWidth = 200;

let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function increment() {
    if (defaultImageWidth >= 300) {
        warningMessageElement.textContent = "Too Big. Decrease the size of the Image.";
    } else {
        defaultImageWidth += 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidthElement.textContent = defaultImageWidth + "px";
        warningMessageElement.textContent = "";
    }
}

function decrement() {
    if (defaultImageWidth <= 100) {
        warningMessageElement.textContent = "Too Small. Increase the size of the Image.";
    } else {
        defaultImageWidth -= 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidthElement.textContent = defaultImageWidth + "px";
        warningMessageElement.textContent = "";
    }
}