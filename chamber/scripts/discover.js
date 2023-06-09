const today = new Date().getTime();
const daysDisplay = document.querySelector(".days");
let lastDayVisit = Number(window.localStorage.getItem("lastDayVisit-ls")) || 0;
const diffTime = today - lastDayVisit;
const diffDays = diffTime / (1000 * 60 * 60 * 24);
if (diffTime !== today) {
	if (diffDays.toFixed(0) == '0' || diffDays.toFixed(0) =='1') {
		daysDisplay.textContent = `It's been ` + diffDays.toFixed(0) + ` day since your last visit.`;
	} else {
		daysDisplay.textContent = `It's been ` + diffDays.toFixed(0) + ` days since your last visit.`;
	}
} else {
	daysDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
localStorage.setItem("lastDayVisit-ls", today);

