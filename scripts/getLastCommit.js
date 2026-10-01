const gitLink = document.getElementById("last-commit");

async function getLastCommit() {
	const url = "https://api.github.com/repos/donika-morina/portfolio-site/commits?per_page=1";

	try {
		const response = await fetch(url);
		const data = await response.json();
		gitLink.href = data[0]["html_url"];
		gitLink.textContent = data[0]["sha"].slice(0, 7);
	} catch {
		gitLink.textContent = "unable to get last commit";
	}
}

getLastCommit();
