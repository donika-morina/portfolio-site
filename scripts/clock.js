// take a time in ms and display it nicely
function formatTime(timestamp) {
	const timeSeconds = Math.round(timestamp / 1000);
	const hours = Math.floor(timeSeconds / 3600);
	const minutes = Math.floor((timeSeconds % 3600) / 60);
	const seconds = Math.floor((timeSeconds % 3600) % 60);
	return `${(hours) ? String(hours).padStart(2, "0") + ":" : ""}${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


window.onload = () => {
	// Get Elements
	const clock = document.getElementById("eastern-time");
	const timer = document.getElementById("time-on-site");
	const year = document.getElementById("year");

	year.textContent = "2026";

	// Get session start time from storage, or store current time in session storage
	let sessionStartTime = JSON.parse(sessionStorage.getItem("sessionStartTime"));
	if (!sessionStartTime) {
		sessionStartTime = Date.now()
		sessionStorage.setItem("sessionStartTime", JSON.stringify(sessionStartTime));
	}

	// every second, get current time to update clock, and use that to calculate time elapsed (for session time)
	setInterval(() => {
		const now = new Date();
		clock.textContent = now.toLocaleTimeString("en-GB", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit" });
		const timeElapsed = now - sessionStartTime;
		timer.textContent = formatTime(timeElapsed);
	}, 1000);
};

