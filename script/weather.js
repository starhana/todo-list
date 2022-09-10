
const API_KEY = "d90eb0fbb145eb1b5f2d4ec88bbd7f0d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {

        const city = document.querySelector(".weather-wrap p span:first-child");
        const weather = document.querySelector(".weather-wrap p span:last-child")

        city.innerText = `📍${data.name} `;
        weather.innerText = ` / ${data.weather[0].main}`;
    });
}

function onGeoError(){
    alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);