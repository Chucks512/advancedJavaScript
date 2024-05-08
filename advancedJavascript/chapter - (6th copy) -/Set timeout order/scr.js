/*

let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(5, 3);

let sayHi = () => console.log("hi");

const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(e => console.log(e));

Four
Three
One
Two
One

Use the arrow format to create functions that 
output the values one and two to the console. 

Create a third function that 
outputs the value three to the console, and then
invokes the first two functions.


Create a fourth function that 
outputs the word four to the console and also 

use setTimeout() to invoke the first function immediately 
and then the third function.

*/

//------------------------     console.log("testing...");

/*
let sayHi = () => console.log("hi");
//sayHi();

let onePrint = () => console.log("One");
let twoPrint = () => {console.log("Two")};

function print312(sayHi, onePrint, twoPrint) {
    console.log("Three");
    onePrint();
    twoPrint();
}
function finalPrint(print312, onePrint)
{
    console.log("Four");
}
finalPrint();
setInterval(print312(), 1000);
setInterval(onePrint(), 2000);
*/


const one = () => console.log('one');
const two = () => console.log('two');
const three = () => {
    console.log('three');
    one();
    two();
}
const four = () => {
    console.log('four');
    setTimeout(one, 0);
    three();
}
four();