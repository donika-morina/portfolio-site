const footnotes = {
    "1": "I don't think the writing of the sentence was a creative endeavour, but the programming of it was.",
    "2": "Too many somes and something or others."
};


function createPopup(name, top, left, width) {
    console.log("hello");
    const popup = document.createElement("div");
    const dragHeader = document.createElement("div");
    dragHeader.classList.add("popup-header");
    const closeBtn = document.createElement("button");
    closeBtn.addEventListener("click", () => {
        closeBtn.parentNode.parentNode.remove();
    })
    dragHeader.appendChild(closeBtn);
    makeDraggable(dragHeader);
    const para = document.createElement("p");
    para.textContent = footnotes[name];
    popup.appendChild(dragHeader);
    popup.appendChild(para);
    popup.classList.add("popup");
    popup.style.top = top + 30 + "px";
    popup.style.left = left - (162 - Math.floor(width / 2)) + "px";
    document.body.appendChild(popup);
}

Array.from(document.getElementsByClassName("popup-btn")).map((btn) => {
    btn.addEventListener("click", (e) => {
        createPopup(e.target.id, e.target.offsetTop, e.target.offsetLeft, e.target.offsetWidth);
    })
});



// Draggable Code from W3Schools How to Create a Draggable HTML Element
// with minor modifications
// https://www.w3schools.com/howto/howto_js_draggable.asp
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.parentNode.style.top = (element.parentNode.offsetTop - pos2) + "px";
        element.parentNode.style.left = (element.parentNode.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

}

