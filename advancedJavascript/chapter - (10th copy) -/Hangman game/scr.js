console.log("testing string...............");
gameOver = 0;

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

function printDeadistLevel(gameover) {
    document.getElementById('hangManPic').src = gameover + '.jpg';
}
//printDeadistLevel(gameover);
function output(theString) {
    outTake = document.getElementById('outputHere');
    outTake.innerHTML = theString;
}
function input() {
    return document.getElementById('userInput').value;

}

charByIndexMap = new Map();
wordCharsSet = new Set();
userRandomsSet = new Set();
let randomWord;
let userRandomWord;
//----------------------------------------------------------------THE ABOVE IS ALL GOOD

randomWord = "Hello";

function wordToHashSet() { //---------------------------------------TO BE APPROVED
    for (let i = 0; i < randomWord.length(); i++) {
        wordCharsSet.add(randomWord.charAt(i));
    }
}

wordToHashSet();
console.log(wordCharsSet);



//------------------------------------------------------------- BELOW FUNCTIONS TO BE APPROVED
/*
function StringHandler() { //---------------------------------------TO BE APPROVED
    randomWord = getRandomWord(randomList);
    randomWord = randomWord.toUpperCase();
    wordToHashSet();
    threeRandoms();
    storeCharIndexes();
    dampenWord();
    theLoop();
}

function theLoop() { //---------------------------------------TO BE APPROVED
    while (true) {
        if (userRandomWord == randomWord) {
            alert(randomWord + "YOU WIN!!!")
            fail;
        }
        else {
            break;
        }
    }//----------------------------------logic broer
    printDeadistLevel(gameOver);
    output(userRandomWord);
    alert("enter more inputs");
    userEntry = input();
    charUserEntry = userEntry
    checkUserCorrecttnesss(charUserEntry);
}

function checkUserCorrecttnesss(userInput) { //---------------------------------------TO BE APPROVED
    strUserInput = input();
    userInput = strUserInput.toUpperCase();
    copyRandomWord = randomWord;

    builderUserRandomWord = userRandomWord;
    let arrUserRandomWord = [];//split something??
    arrUserRandomWord = userRandomWord.split("");
    let coordinates = [];
    coordinates = charByIndexMap.get(input());

    if (userRandomsSet.includes(input())) {
        userRandomsSet.delete(input());
        counter = coordinates.length;

        for (let i of coordinates) {
            counter = copyRandomWord.indexOf(strUserInput);
            copyRandomWord = copyRandomWord.replace(strUserInput, "_");
            builderUserRandomWord[counter] = userInput;

            arrUserRandomWord[counter] = userInput;
        }
        userRandomWord = "";
        for (let myChar of arrUserRandomWord) {
            userRandomWord += myChar;
        }
    } else {
        gameOver++;
        if (gameOver > 6) {
            console.log("you lose!! " + randomWord);
            fail;
        }
    }
}

function getRandomWord(myList) { //--------------------------------------- YES
    randomWord = myList[Math.floor(Math.random() * myList.length)];
    return randomWord;
}

function wordToHashSet() { //---------------------------------------TO BE APPROVED
    for (let i = 0; i < randomWord.length(); i++) {
        wordCharsSet.add(randomWord.charAt(i));
    }
}

function threeRandoms() { //---------------------------------------TO BE APPROVED
    let arrRandomword = randomWord.split("");
    counter = 0;
    while (counter < 3) {
        randomLetter = arrRandomword[Math.floor(Math.random() * arrRandomword.length)]
        if (true == (userRandomsSet.add(randomLetter))) {
            counter++;
        }
    }
}

function storeCharIndexes() { //---------------------------------------TO BE APPROVED
    let counter;
    let currentLetter;

    let tempRandomWord = [];
    for (let myChar of randomWord.split("")) {
        tempRandomWord = tempRandomWord.push(myChar);
    }

    let wordCharsSet = [];
    for (let myChar of wordCharsSet) {
        wordCharsSetClone = wordCharsSetClone.push(myChar);
    }

    for (let i = 0; i < wordCharsSetClone.length(); i++) {
        let tempArrListIndex = [];
        //line 128, we will index hashset later and get (i)
        //currentLetter = wordCharsSetClone.ge
        while (true) {
            counter = tempRandomWord.indexOf(currentLetter);
            if (counter == -1) {
                charByIndexMap.set(currentLetter, tempArrListIndex);
                break;
            }
            tempRandomWord[counter] = "_";
            tempArrListIndex = tempArrListIndex.push(counter);
        }
    }
}

function dampenWord() { //---------------------------------------TO BE APPROVED
    userRandomWord = randomWord;
    for (let i of userRandomsSet) {
        temp = i;
        userRandomWord = userRandomWord.replaceAll(temp, "_");
    }
}
*/