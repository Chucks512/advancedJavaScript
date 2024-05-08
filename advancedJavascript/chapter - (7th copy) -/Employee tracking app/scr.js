/*
Use first names, last names, 
and the number of years worked 
as values in the constructor.

Create two or more people with values for 
their first names, last names, and
the number of years they've worked at the company. 
Add the people into an array.

Set up a prototype to return 
the details of the person's first and last names
and how long they've worked at the company.

Iterate the contents of the array 
to output the results into the console, 
adding some text to make the output a full sentence.
*/

// 1stname, lastname, numYearsWorked - constructor
// 2/3 people to array
// prototyype to return person details -------------
// use sentances, output array to console

class worker {
    constructor(firstName, lastName, expYears) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.expYears = expYears;
    }
}
worker.prototype.getDetails = function () {
    let details = [this.firstName, this.lastName, this.expYears];
    return details;
}

worker1 = new worker("Courts", "McGamer", "50");
worker2 = new worker("Amanda", "vanCool", "50");

workers = [];
workers.push(worker1);
workers.push(worker2);

for (let index = 0; index < workers.length; index++) {
    console.log("hello, my name is " + workers[index].firstName + " " + workers[index].lastName +
        ". i have worked here for " + workers[index].expYears + " years");
}