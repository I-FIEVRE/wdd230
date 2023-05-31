const lastUpdated = new Date(document.lastModified);
document.querySelector('#lastUpdated').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
document.querySelector('#lastUpdated-1').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
const currentDate = new Date();
document.querySelector('#currentyear').textContent = currentDate.getFullYear();
document.querySelector('#currentyear-1').textContent = currentDate.getFullYear();
const date = document.querySelector("#currentdate");
try {
    const option = {
        weekday: "long"
    }
	const options = {
		month: "long",
		day: "numeric",
		year: "numeric"
	};
	date.innerHTML = `${new Date().toLocaleDateString("en-UK", option)}, ${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
};


const today = new Date().getTime();
const daysDisplay = document.querySelector(".days");

let lastDayVisit = Number(window.localStorage.getItem("lastDayVisit-ls")) || 0;

const diffTime = today - lastDayVisit;
const diffDays = diffTime / (1000 * 60 * 60 * 24);

if (diffTime !== today) {
	daysDisplay.textContent = `It's been ` + diffDays.toFixed(0) + ` day(s) since your last visit.`;
} else {
	daysDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
localStorage.setItem("lastDayVisit-ls", today);

