// time is milliseconds... parsed human reading time
let futureTime = Date.parse("April 29, 2027");
currentTime = Date.now();
futureParsed = new Date(futureTime);
currentParsed = new Date(currentTime);
timeLeft = futureTime - currentTime;

yr = 31557600000;
mo = 2629800000;
wk = 604800000;
dy = 86400000;
hr = 3600000;
mn = 60000;
sc = 1000;

if (timeLeft > yr) {
    var yearsLeft = Math.floor(timeLeft / yr);
    timeLeft -= (yearsLeft * yr);
}

if (timeLeft > mo) {
    var monthsLeft = Math.floor(timeLeft / mo);
    timeLeft -= (monthsLeft * mo);
}

if (timeLeft > wk) {
    var weeksLeft = Math.floor(timeLeft / wk);
    timeLeft -= (weeksLeft * wk);
}

if (timeLeft > dy) {
    var daysLeft = Math.floor(timeLeft / dy);
    timeLeft -= (daysLeft * dy);
}

if (timeLeft > hr) {
    var hoursLeft = Math.floor(timeLeft / hr);
    timeLeft -= (hoursLeft * hr);
}

if (timeLeft > mn) {
    var miutesLeft = Math.floor(timeLeft / mn);
    timeLeft -= (miutesLeft * mn);
}

if (timeLeft > sc) {
    var secondsLeft = Math.floor(timeLeft / sc);
    timeLeft -= (secondsLeft * sc);
}
milliSecondsLeft = timeLeft,
    overall = {

        years: yearsLeft,
        months: monthsLeft,
        weeks: weeksLeft,
        days: daysLeft,
        hours: hoursLeft,
        minutes: miutesLeft,
        seconds: secondsLeft,
        milliSeconds: milliSecondsLeft
    };

for (const [key, value] of Object.entries(overall)) {
    console.log(`${key}: ${value}`);
}
