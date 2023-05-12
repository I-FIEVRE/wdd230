const lastUpdated = new Date(document.lastModified);
document.querySelector('#lastUpdated').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
document.querySelector('#lastUpdated-1').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
const currentDate = new Date();
document.querySelector('#currentyear').textContent = currentDate.getFullYear();
/*document.querySelector('#currentdate').textContent = `${currentDate.getDay()}, `;*/
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