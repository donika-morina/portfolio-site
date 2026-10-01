
const filterBtns = Array.from(document.getElementsByClassName("filter-btn"));
const projects = Array.from(document.getElementById("projects").children);
const searchBar = document.getElementById("search");
let activeFilter = "Featured";

function filterProjects(activeFilter) {
    projects.forEach(project => {
        if (!activeFilter) {
            project.classList.remove("hidden");
        } else {
            const tags = JSON.parse(project.dataset.tags);
            if (tags.includes(activeFilter)) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }
        }
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.getAttribute("aria-pressed") === "true") {
            btn.setAttribute("aria-pressed", "false");
            activeFilter = null;
        } else {
            for (filter of filterBtns) {
                if (filter.getAttribute("aria-pressed") === "true") {
                    filter.setAttribute("aria-pressed", "false");
                    activeFilter = null;
                    break;
                }
            }
            btn.setAttribute("aria-pressed", "true");
            activeFilter = btn.dataset.filter;
        }
        filterProjects(activeFilter);
    });
});


// !! This will break if I redesign the links !!
function projectMatches(content, search) {
    const titleMatch = content[0].textContent.toLowerCase().includes(search);
    const descMatch = content[1].textContent.toLowerCase().includes(search);
    const tagMatch = content[2].textContent.toLowerCase().includes(search);
    return titleMatch || descMatch || tagMatch;
}

searchBar.addEventListener("keyup", () => {
    const search = searchBar.value.toLowerCase();
    if (search === "") {
        filterProjects(activeFilter);
        return;
    }
    projects.forEach(project => {
        const content = Array.from(project.children[0].children);
        if (projectMatches(content, search)) {
            project.classList.remove("hidden");
        } else {
            project.classList.add("hidden");
        }
    });
});



filterProjects(activeFilter);