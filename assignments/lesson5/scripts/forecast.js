/* GET DATE */
var currentDate = new Date();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

document.getElementById("day1").innerHTML = days[currentDate.getDay()+1];
document.getElementById("day2").innerHTML = days[currentDate.getDay()+2];
document.getElementById("day3").innerHTML = days[currentDate.getDay()+3];
document.getElementById("day4").innerHTML = days[currentDate.getDay()+4];
document.getElementById("day5").innerHTML = days[currentDate.getDay()+5];

/* GET TEMPERATURE */
