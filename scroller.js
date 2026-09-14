let scroller = document.getElementById("scroller");
let message = "make things, break things, and maybe hide things too."

message.split("").map((letter) => {
    const scrollLetter = document.createElement("span");
    scrollLetter.textContent = letter;
    scrollLetter.addEventListener("mouseover", () => { scrollLetter.classList.toggle("up") });
    scrollLetter.addEventListener("mouseout", () => { scrollLetter.classList.toggle("up") });
    scroller.appendChild(scrollLetter);
}).join("");

