const currentTemp = document.querySelector('#current-temp');
const currentWind = document.querySelector('#current-wind');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=64.8378&lon=-147.7164&units=imperial&appid=a2d4b0a9d6c39728fb31121be782a624';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentWind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.replace(/(^|\s)\w/g, l => l.toUpperCase()); // to capilise each word
}

// other way of doing
/*fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        currentTemp.innerHTML = `<strong>${jsObject.main.temp.toFixed(0)}</strong>`;
        currentWind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description; // the way to reference the weather array
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc.replace(/(^|\s)\w/g, l => l.toUpperCase());
    });*/
