let scroller = document.getElementById("scroller");
let message = "-- make things, break things, and maybe hide things too -- make things, break things, and maybe hide things too"

message.split("").map((letter) => {
    const scrollLetter = document.createElement("span");
    scrollLetter.textContent = letter;
    scroller.appendChild(scrollLetter);
}).join("");

message.split("").map((letter) => {
    const scrollLetter = document.createElement("span");
    scrollLetter.textContent = letter;
    scroller.appendChild(scrollLetter);
}).join("");
