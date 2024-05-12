console.log("testing string...............");
gameOver = 6;

function printDeadistLevel(gameover) {
    document.getElementById('hangManPic').src = gameover+'.jpg';
}
//printDeadistLevel(gameover);
function output(theString){
outTake = document.getElementById('outputHere');
outTake.innerHTML = theString;
}
function input(){
    return document.getElementById('userInput').value ;

}

const randomList = [
	"Administration",
	"Appearance",
	"Atmosphere",
	"Combination",
	"Championship",
	"Conversation",
	"Distribution",
	"Establishment",
	"Independence",
	"Introduction",
	"Manufacturer",
	"Organization",
	"Performance",
	"Presentation",
	"Recommendation",
	"Responsibility",
	"Significance",
	"Supermarket",
	"Technology",
	"Transportation"
];




/*

charByIndexMap = new Map();
wordCharsSet = new Set();
userRandomsSet = new Set();
let randomWord;
let userRandomWord;

function StringHandler(){
    randomWord = getRandomWord(randomList);
    randomWord = randomWord.toUpperCase();
    wordToHashSet();
    threeRandoms();
    storeCharIndexes();
    dampenWord();
    theLoop();
}

function theLoop(){
    while(true){
        alert(randomWord + "YOU WIN!!!")
        fail;
    }
    printDeadistLevel(gameOver);
    output(userRandomWord);
    alert("enter more inputs");
    userEntry = input();
    charUserEntry = userEntry
    checkUserCorrecttnesss(charUserEntry);
}
 `  `
checkUserCorrecttnesss(userInput){
    strUserInput = input();
    userInput = strUserInput.toUpperCase();
    copyRandomWord = randomWord;

    builderUserRandomWord = userRandomWord;
    let arrUserRandomWord = [];//split something??
    arrUserRandomWord = userRandomWord.split("");
    let coordinates = [];
    coordinates = charByIndexMap.get(input());
    //

}



*/