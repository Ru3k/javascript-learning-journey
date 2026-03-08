let puppyImage = document.getElementById("puppyImage");
let likeIcon = document.getElementById("likeIcon");
let likeButton = document.getElementById("likeButton");

function onClickLikeButton() {

    if (puppyImage.src.includes("liked")) {

        puppyImage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIcon.style.color = "#cbd2d9";
        likeButton.style.color = "#9aa5b1";
        likeButton.style.backgroundColor = "#cbd2d9";

    } else {

        puppyImage.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIcon.style.color = "#0967d2";
        likeButton.style.color = "#ffffff";
        likeButton.style.backgroundColor = "#0967d2";

    }

}