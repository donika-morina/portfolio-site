
const filterBtns = Array.from(document.getElementsByClassName("filter-btn"));
const projects = Array.from(document.getElementById("projects").children);
let activeFilter = "Featured";

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

filterProjects(activeFilter);