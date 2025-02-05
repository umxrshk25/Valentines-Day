let noClickCount = 0;
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

document.getElementById("yesBtn").addEventListener("click", function() {
    alert("Yay! I knew you'd say yes! ❤️");
});

document.getElementById("noBtn").addEventListener("click", function() {
    noClickCount++;
    
    if (noClickCount <= 10) {
        this.textContent = noResponses[noClickCount - 1]; // Change No button text
        document.getElementById("yesBtn").style.fontSize = (16 + noClickCount * 5) + "px"; // Increase Yes button size
    }
});
