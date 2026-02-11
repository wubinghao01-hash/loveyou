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

// Move NO button within letter window bounds
noBtn.addEventListener("mouseover", () => {
    const container = document.querySelector(".letter-window");

    // Get container width and height
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Get button size
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const padding = 10; // keep away from edges

    // Calculate random positions inside container
    const randomX = padding + Math.random() * (containerWidth - btnWidth - 2 * padding);
    const randomY = padding + Math.random() * (containerHeight - btnHeight - 2 * padding);

    // Apply position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.transition = "all 0.2s ease";
});

// YES button click
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";
});
