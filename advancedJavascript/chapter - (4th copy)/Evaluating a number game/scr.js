/*
Ask the user to enter a number and
check whether it's greater than, equal to, or less
than a dynamic number value in your code.
Output the result to the user.
*/

num = Math.floor(Math.random() * (10 - 1) + 1);
//console.log(num); 
let guess = "";

guess = prompt("__________________________ pick a number from 1 to 10")
while( guess != num){
    if (guess > num)
        console.log("too high")
    if (guess < num)
        console.log("too low")
    guess = prompt("__________________________ pick a number from 1 to 10")

}


// var tempToday = Math.floor(Math.random() * (10 ‐ 1) + 1);

