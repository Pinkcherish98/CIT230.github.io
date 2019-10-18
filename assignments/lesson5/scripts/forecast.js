var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for (i = 1; i < 6; i++) {
    if ([currentDate.getDay() + (i - 1)] <= 6) {
        document.getElementById("day" + i).innerHTML = day[currentDate.getDay() + (i - 1)]
    } else {
        document.getElementById("day" + i).innerHTML = day[currentDate.getDay() + (i - 1) - 7];
    }
}