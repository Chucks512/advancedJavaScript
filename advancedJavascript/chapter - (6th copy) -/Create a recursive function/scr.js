userInput = prompt("enter a number less than 10");
addOne(userInput)
userInput = parseInt(userInput);

function addOne(userInput) {
    if (userInput <= 10) {
        console.log(userInput);
        userInput++;
        addOne(userInput)  
    }
}



