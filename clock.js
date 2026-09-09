
window.onload = () => {
    const clock = document.getElementById("eastern-time");
    const timer = document.getElementById("time-on-site");
    let minutes = 0;
    let hours = 0;
    let seconds = 0;
    setInterval(() => {
        let date = new Date().toLocaleTimeString("en-GB", { timeZone: "America/New_York" });
        clock.textContent = date;
    }, 1000);
    setInterval(() => {
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
            if (minutes >= 60) {
                hours++;
                minutes = 0;
            }
        } else {
            seconds++;
        }
        if (hours) {
            timer.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        } else {
            timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        }
    }, 1000);
};
