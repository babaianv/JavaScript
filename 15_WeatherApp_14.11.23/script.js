const API_KEY = "9710a96666e19c16c5b3a481db8065d7";

const input = document.getElementById("locationInput");
const button = document.getElementById("getWeatherButton");
const info = document.getElementById("weatherContainer");

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

button.onclick = () => {
  const cityName = input.value.trim();

  if (cityName) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric` )
      .then(response => response.json())
      .then(weather => displayWeather(weather));
  }

   input.value = '';
};


function displayWeather (data) {
    
    const {name, main:{temp},weather:[{description}], wind: {speed}} = data;

    info.innerHTML = `
        <h2>${name} </h2>
        <p>Temperature: ${temp} °C </p>
        <p>Description: ${description} </p>
        <p>Wind speed: ${speed} m/s</p>
    `;

}



