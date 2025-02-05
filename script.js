let noClicks = 0;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const noResponses = [
    "Are you sure?",
    "Are you really sure?",
    "Think again!",
    "Last chance...",
    "Please reconsider 🥺",
    "You might regret this...",
    "Give it one more thought?",
    "I'm getting sad 😢",
    "Don't break my heart 💔",
    "You HAVE to say yes now!"
];

// Yes button click event
yesBtn.addEventListener("click", function() {
    // Check if the "Yes" button is in full screen mode
    if (noClicks >= 10) {
        window.location.href = "final.html"; // Redirect to final.html if full screen
    } else {
        window.location.href = "love.html"; // Otherwise, redirect to love.html
    }
});

// No button click event
noBtn.addEventListener("click", function() {
    noClicks++;
    
    // Change the No button text from the predefined responses
    if (noClicks <= 10) {
        this.textContent = noResponses[noClicks - 1]; // Change No button text
        yesBtn.style.fontSize = (16 + noClicks * 5) + "px"; // Increase Yes button size
        yesBtn.style.padding = `${0.5 + noClicks * 0.5}rem ${1 + noClicks * 1.5}rem`; // Adjust padding

        // If No button has been clicked 10 times, make the Yes button full screen
        if (noClicks >= 10) {
            yesBtn.innerText = "YESSSS! CLICK NOW!"; // Change Yes button text
            yesBtn.style.width = "100vw"; // Full width
            yesBtn.style.height = "100vh"; // Full height
            yesBtn.style.position = "fixed"; // Fix position
            yesBtn.style.top = "0";
            yesBtn.style.left = "0";
            yesBtn.style.display = "flex";
            yesBtn.style.alignItems = "center";
            yesBtn.style.justifyContent = "center";
        }
    }
});
