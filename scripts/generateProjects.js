const PROJECTS = [
	{
		title: "Donika's Notebook",
		desc: "Some sort of description",
		tags: ["Web Development", "Featured"],
		date: "2025",
		link: "https://donikasnotebook.com",
	},
	{
		title: "Morning Dashboard",
		desc: "E-Ink Dashboard to display person schedule, to-dos, weather, and next bus times. ",
		tags: ["Hardware", "APIs", "Web Dev"],
		date: "2026",
		link: "#",
	},
	{
		title: "Portfolio Site",
		desc: "The current site you're viewing",
		tags: ["Web Development"],
		date: "2026",
		link: "https://donika.info",
	},
	{
		title: "Link Page Generator",
		desc: "Simple JS script to generate an HTML document to show all your social links.",
		tags: ["Web Development"],
		date: "2026",
		link: "https://github.com/donika-morina/links-page",
	},
	{
		title: "Happy Ransom Day",
		desc: "Stylized Birthday message made to look like the WannaCry popup, but containing a nicer message.",
		tags: ["Web Development", "Fun"],
		date: "2025",
		link: "https://donikasnotebook.com/desktop/",
	},
	{
		title: "Police Robot Motor Controls",
		desc: "",
		tags: ["Hardware"],
		date: "2019",
		link: "#",
	},
	{
		title: "Battle Bot",
		desc: "",
		tags: [""],
		date: "2017",
		link: "#",
	},


];

const container = document.getElementById("projects");

PROJECTS.forEach((project) => {
	container.innerHTML += `
        <a class="project-page-link" href=${project.link} target="_blank" data-tags='${JSON.stringify(project.tags)}'>
            <div>
                <h3 class="link-title">${project.title}</h3>
                <p class="desc">${project.desc}</p>
                <ul class="project-tags">
                    ${project.tags.map((tag) => { if (tag != "Featured") return "<li>" + tag + "</li>" }).join("\n")}
                </ul>
            </div>
            <p class="date">${project.date}</p>
        </a>
        `;
});
