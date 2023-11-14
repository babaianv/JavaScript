const API_KEY = "9710a96666e19c16c5b3a481db8065d7";

const input = document.getElementById("locationInput");
const button = document.getElementById("getWeatherButton");
const info = document.getElementById("weatherContainer");
const errorMessage = document.getElementById('errorMessage');

button.addEventListener ('click', async () => {

    const cityName = input.value.trim();

    if(cityName) {

        try{
           await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`) 
            .then(response => response.json())
            .then(weather => displayWeather(weather))

            info.style.display = 'block';
        }catch(error){
            info.style.display = 'none';
            errorMessage.style.color = 'red';
            errorMessage.innerHTML = error.message;
            
        }
        
    }
        input.value = '';
});


function displayWeather (data) {
    
    const {name, main:{temp, temp_max, temp_min},visibility,weather:[{description}], wind: {speed}} = data;

    info.innerHTML = `
        <h2 style=" font-style: italic;" >${name} </h2>
        <p><b>Current temperature:</b> ${temp}°C </p>
        <p><b>Maximum temperature:</b> ${temp_max}°C</p>
        <p><b>Minimum temperature:</b> ${temp_min}°C</p>
        <p><b>Visibility:</b> ${visibility}m</p>
        <p><b>Description:</b> ${description} </p>
        <p><b>Wind speed:</b> ${speed} m/s</p>
      
        
    `;
}



