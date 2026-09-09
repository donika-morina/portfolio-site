
window.onload = () => {
    const clock = document.getElementById("eastern-time");
    const timer = document.getElementById("time-on-site");
    setInterval(() => {
        let date = new Date().toLocaleTimeString("en-GB", { timeZone: "America/New_York" });
        clock.textContent = date;
    }, 1000);
};
