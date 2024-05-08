// r = rock,    p = paper,  s = scissors
// r>s          p>r         s > p
/*
paper
scissors
rock
*/

score = "";
cpu = "";
user = "";

game = ["paper", "scissors", "rock"];
letters = ["p", "s","r"];

user = prompt("'p' for paper. 's' for scissors. 'r' for rock");
userLetterIndex = -1;

switch (user.toLowerCase()) {
    case "p":
        userLetterIndex = 0;
        break;
    case "s":
        userLetterIndex = 1;
        break;
    case "r":
        userLetterIndex = 2;
        break;
    default:
        break;
}

cpuLetterIndex = Math.floor(Math.random() * (3 - 0) + 0);
cpu = letters[cpuLetterIndex];

if (cpu == user) {
    score = "its a tie!";
} else if ( (cpu == "r") && (user == "p") ) {
    score = "user wins!";
    
} else if ( (cpu == "p") && (user == "r") ) {
    score = "cpu wins!";
    
} else if ( cpuLetterIndex > userLetterIndex ) {
    score = "cpu wins!";
    
} else {
    score = "user wins!";
    
}

console.log(cpu);
console.log(score)