let applyButton = document.getElementById("applyButton");

applyButton.onclick = function() {

    let bgColor = document.getElementById("bgColorInput").value;
    let fontColor = document.getElementById("fontColorInput").value;
    let fontSize = document.getElementById("fontSizeInput").value;
    let fontWeight = document.getElementById("fontWeightInput").value;
    let padding = document.getElementById("paddingInput").value;
    let borderRadius = document.getElementById("borderRadiusInput").value;

    let customButton = document.getElementById("customButton");

    customButton.style.backgroundColor = bgColor;
    customButton.style.color = fontColor;
    customButton.style.fontSize = fontSize;
    customButton.style.fontWeight = fontWeight;
    customButton.style.padding = padding;
    customButton.style.borderRadius = borderRadius;

};