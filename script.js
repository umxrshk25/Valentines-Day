let noClicks = 0;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("click", function() {
    noClicks++;
    yesBtn.style.fontSize = `${1 + noClicks * 2}rem`;
    yesBtn.style.padding = `${0.5 + noClicks * 1}rem ${1 + noClicks * 2}rem`;
    if (noClicks >= 10) {
        yesBtn.innerText = "YESSSS! CLICK NOW!";
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.display = "flex";
        yesBtn.style.alignItems = "center";
        yesBtn.style.justifyContent = "center";
    }
});

yesBtn.addEventListener("click", function() {
    if (noClicks >= 10) {
        window.location.href = "final.html";
    } else {
        window.location.href = "love.html";
    }
});