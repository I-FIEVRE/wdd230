const lastUpdated = new Date(document.lastModified);
document.querySelector('#lastUpdated').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
const currentDate = new Date();
document.querySelector('#currentyear').textContent = currentDate.getFullYear();