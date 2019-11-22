
const apiWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=0b631fd8b3c62ec024dcf7737ccf66cf&units=imperial';

fetch(apiWeatherURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //DEBUG:
            //console.log(currentWeather);

            let currentTemp = currentWeather.main.temp;
            let windSpeed = currentWeather.wind.speed;
            let windChill;

            if (currentTemp < 50 && windSpeed > 3) {
                windChill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * currentTemp * Math.pow(windSpeed, .16));
            }
            document.getElementById("currentTemp").innerHTML = currentTemp + '&deg;';
            document.getElementById("windSpeed").innerHTML = windSpeed + ' MPH';


            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = 'N/A';
            } else {
                document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;';
            }
        }
    );