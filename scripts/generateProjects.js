const PROJECTS = [
	{
		title: "Donika's Notebook",
		desc: "Some sort of description",
		tags: ["Web Development", "JavaScript", "Featured"],
		date: "2022 - Present",
		link: "https://donikasnotebook.com",
	},
	{
		title: "Morning Dashboard",
		desc: "E-Ink Dashboard to display person schedule, to-dos, weather, and next bus times. ",
		tags: ["Hardware", "APIs", "Python", "Featured"],
		date: "2026",
		link: "#",
	},
	{
		title: "Portfolio Site",
		desc: "The current site you're viewing",
		tags: ["Web Development", "JavaScript"],
		date: "2026",
		link: "https://donika.info",
	},
	{
		title: "Link Page Generator",
		desc: "Simple JS script to generate an HTML document to show all your social links.",
		tags: ["Web Development", "JavaScript"],
		date: "2026",
		link: "https://github.com/donika-morina/links-page",
	},
	{
		title: "Happy Ransom Day",
		desc: "Stylized Birthday message made to look like the WannaCry popup, but containing a nicer message.",
		tags: ["Web Development", "JavaScript", "Fun"],
		date: "2025",
		link: "https://donikasnotebook.com/desktop/",
	},
	{
		title: "Police Robot Motor Controls",
		desc: "",
		tags: ["Hardware", "Featured"],
		date: "2019",
		link: "#",
	},
	{
		title: "Battle Bot",
		desc: "A small 3D printed robot designed to stay within a ring and ram into opponents (badly).",
		tags: ["Hardware", "C"],
		date: "2017",
		link: "#",
	},
	{
		title: "The Games",
		desc: "A collection of arcade games recreated for the browser using vanilla JavaScript.",
		tags: ["Web Development", "Games", "JavaScript", "Featured"],
		date: "2020 - Present",
		link: "https://donikasnotebook.com/games/",
	},
	{
		title: "Mainframe V2",
		desc: "A remake of .",
		tags: ["Games", "JavaScript"],
		date: "2026",
		link: "#",
	},
	{
		title: "QuestHero V2",
		desc: "A remake of .",
		tags: ["Games", "JavaScript"],
		date: "2026",
		link: "#",
	},
	{
		title: "The Desktop",
		desc: "",
		tags: ["Web Development", "JavaScript"],
		date: "",
		link: "https://donikasnotebook.com/desktop/",
	},
	{
		title: "The Terminal",
		desc: "",
		tags: ["Web Development", "JavaScript"],
		date: "",
		link: "https://donikasnotebook.com/terminal/",
	},
	{
		title: "Online Scoreboard",
		desc: "",
		tags: ["Web Development", "JavaScript"],
		date: "",
		link: "https://donikasnotebook.com/scoreboard/",
	},
	{
		title: "Chess Clock",
		desc: "",
		tags: ["Web Development", "JavaScript"],
		date: "",
		link: "https://donikasnotebook.com/chess/",
	},
	{
		title: "The Media Journal",
		desc: "",
		tags: ["Web Development", "JavaScript"],
		date: "",
		link: "https://donikasnotebook.com/media-journal/",
	},
	{
		title: "Online Scoreboard",
		desc: "",
		tags: ["Web Development", "JavaScript"],
		date: "",
		link: "https://donikasnotebook.com/scoreboard/",
	},
	{
		title: "Light Mode Extension",
		desc: "",
		tags: ["Web Development", "JavaScript", "Browser Extension"],
		date: "",
		link: "",
	},
	{
		title: "Calculator",
		desc: "",
		tags: ["Web Development", "JavaScript"],
		date: "",
		link: "https://donikasnotebook.com/calculator/",
	},
	{
		title: "Python Automations",
		desc: "Python scripts I use to automate menial everyday tasks.",
		tags: ["Scripting", "Python"],
		date: "",
		link: "https://github.com/donika-morina/python-scripts",
	},
	{
		title: "Bash Scripts",
		desc: "Small bash scripts I used on my Linux system.",
		tags: ["Scripting", "Bash"],
		date: "",
		link: "https://github.com/donika-morina/bash-scripts",
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
