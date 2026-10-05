const footnotes = {
    "donika": "Pronouced Duh-<em>knee</em>-ka, with stress on the knee.",
    "site": "It wasn't a particularly good website, but I thought it was the coolest thing I'd done up until that point.",
    "media": "Since I've always had a small obsession with books, why not merge some hobbies and make a virtual library? You can look around <a href='https://donikasnotebook.com/media-journal/' target='_blank'>here</a>.",
    "blog": "It technically is a blog, but I mostly consider it an archive for my work processes that happens to be public. If you feel like doing some more reading, you can find it <a href='https://donikasnotebook.com/blog/' target='_blank'>here</a>.",
    "hardware": "I accidentally blew up a circuit board one (1) time and now I'm not allowed to use car batteries as power sources without supervision.",
    "karate": "I have a first-degree black belt in Go-ju Ryu and spent many of my teenage years helping teach the lower belts.",
    "soccer": "There is a surprising amount of joy to be had trying to wrangle a group of children long enough to have them work together to chase a ball."
};


const site = document.querySelector(".site-container");
const aboutSection = document.querySelector(".about-section");


// pass a string of html, and get it back as an HTMLElement
// if html is not wrapped in one parent, only the first element will 
// be returned
function stringToElement(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.firstElementChild;
}



function createPopup(name, top, left, targ) {
    const halfPopupWidth = 162
    const popup = stringToElement(
        `<div class="popup">
            <div class="popup-header"><button class="close-btn"></button></div>
            <p>${footnotes[name]}</p>
        </div>`
    );

    popup.querySelector(".close-btn").addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove();
    });

    popup.style.top = top + targ.offsetHeight + 5 + "px";
    // if the text has wrapped, use container offsetLeft
    if (targ.offsetHeight > 25) {
        popup.style.left = aboutSection.offsetLeft + "px";
    } else {
        popup.style.left = Math.min(Math.max(0, left + Math.floor(targ.offsetWidth / 2) - halfPopupWidth), site.offsetWidth - halfPopupWidth * 2 - 10) + "px";
    }
    makeDraggable(popup.querySelector(".popup-header"));
    site.appendChild(popup);

}


Array.from(document.getElementsByClassName("popup-btn")).map((btn) => {
    btn.addEventListener("click", (e) => {
        createPopup(e.target.id, e.target.offsetTop, e.target.offsetLeft, e.target);
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

