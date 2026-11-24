const wordBtn = document.querySelector("#word-btn");

const WORDS = ["adapting", "growing", "expanding", "changing"];

wordBtn.addEventListener("click", () => {
    wordBtn.parentNode.parentNode.classList.remove(wordBtn.textContent);
    const nextWord = WORDS[(WORDS.indexOf(wordBtn.textContent) + 1) % WORDS.length];
    wordBtn.parentNode.parentNode.classList.add(nextWord);
    wordBtn.textContent = nextWord;
});