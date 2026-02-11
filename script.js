// Elements 
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope to open letter
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Move NO button randomly within the letter window
noBtn.addEventListener("mouseover", () => {
    const parentRect = letter.getBoundingClientRect();  // letter window
    const btnRect = noBtn.getBoundingClientRect();      // NO button

    const padding = 10; // optional padding from edges

    // Calculate maximum X and Y so button stays inside
    const maxX = parentRect.width - btnRect.width - padding;
    const maxY = parentRect.height - btnRect.height - padding;

    // Generate random positions within bounds
    const randomX = padding + Math.random() * maxX;
    const randomY = padding + Math.random() * maxY;

    // Apply new position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.transition = "all 0.2s ease";
});

// YES button click
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeeeeeeeeee!";
    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";
});
