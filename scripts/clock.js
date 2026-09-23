
window.onload = () => {
    const clock = document.getElementById("eastern-time");

    // Get current eastern time
    setInterval(() => {
        let date = new Date().toLocaleTimeString("en-GB", { timeZone: "America/New_York" });
        clock.textContent = date;
    }, 1000);


    const timer = document.getElementById("time-on-site");
    let time = JSON.parse(sessionStorage.getItem("sessionTime")) || [0, 0, 0];
    let [hours, minutes, seconds] = time;
    // Get current session time
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
        sessionStorage.setItem("sessionTime", JSON.stringify([hours, minutes, seconds]))
    }, 1000);
};
