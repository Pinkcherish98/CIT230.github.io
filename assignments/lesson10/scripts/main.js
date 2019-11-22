var currentDate = new Date();
var currentDateString;

var weekDayNumber = currentDate.getDay();



var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

var monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

var monthNumber = currentDate.getMonth();

var month = monthsOfYear[monthNumber]

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ", ";

currentDateString += currentDate.getDate();

currentDateString += ' ' + month;

currentDateString += ' ' + currentDate.getFullYear();

document.getElementById("currentDate").innerHTML = currentDateString;

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
    currentDay++;

    if (currentDay > 6) {
        currentDay = 0;
    }

    const element = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
}

if (weekDayNumber === 5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=0b631fd8b3c62ec024dcf7737ccf66cf&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {
            //DEBUG:
            console.log(forecasts);

            let tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrowDate.getDate() + 1);

            let dateString =
                //get full year 
                tomorrowDate.getFullYear() + "-" +

                // get month
                (tomorrowDate.getMonth() + 1) + "-" +

                //get day
                tomorrowDate.getDate();

            let hourString = '18:00:00';

            //DEBUG:
            console.log(dateString);

            let counter = 1;

            // loop through results

            forecasts.list.forEach(
                (forecast) => {

                    if (forecast.dt_txt.includes(dateString) && forecast.dt_txt.includes(hourString)) {

                        //DEBUG:
                        console.log(forecast.main.temp);

                        const element = document.getElementById(`temp${counter}`);
                        element.innerHTML = forecast.main.temp + '&deg;';

                        counter += 1;
                    }

                }
            );
        }
    );