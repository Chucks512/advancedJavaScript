let inches = prompt("Enter height inches");
let pounds = prompt("Enter weight pounds");
/*
inches = 67;
pounds = 150;
*/

cm = inches * 2.54;
kilo = pounds / 2.2046;
metre = cm/100;
bmi = (kilo/(metre**2)); 
//this is equal to weight (in kilos) divided by squared height (in meters).
/*
console.log("inches " + inches);
console.log("pounds " + pounds);
console.log("cm " + cm);
console.log("kilo " + kilo);
console.log("metre " + metre);
console.log("bmi " + bmi);
*/

alert("BMI = " + bmi);

/*
BMI calculator
Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:
•1 inch is equal to 2.54 cm
•2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console.

// 
input: inches & pounds
to: cm & kilo
cm = inch * 2.54
kilo = pound * 2.2046
output:kilo/(height*height)
*/
