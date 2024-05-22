//console.log("testing string...............");
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
wordCharsSetClone = [];
let strUserInput = "";
//----------------------------------------------------------------THE ABOVE IS ALL GOOD

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
            window.stop();
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

function checkUserCorrecttnesss() { //--------------------------------------- YES
    //strUserInput = "t"  //change back to userInput
    strUserInput = strUserInput.toUpperCase();
    userInput = strUserInput.toUpperCase();
    copyRandomWord = randomWord;

    builderUserRandomWord = userRandomWord;
    let arrUserRandomWord = [];
    arrUserRandomWord = userRandomWord.split("");
    let coordinates = [];
    coordinates = charByIndexMap.get(strUserInput);

    console.log(wordCharsSetClone.includes(strUserInput));
    if (wordCharsSetClone.includes(strUserInput)) {
        delete wordCharsSetClone[ wordCharsSetClone.indexOf(strUserInput) ];
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
        console.log("yessssssssss");
    } else {
        gameOver++;
        if (gameOver > 6) {
            console.log("you lose!! " + randomWord);
            window.stop();
        }
    }
} 

function getRandomWord(myList) { //--------------------------------------- YES
    randomWord = myList[Math.floor(Math.random() * myList.length)];
    randomWord = randomWord.toUpperCase();
    return randomWord;
}

function wordToHashSet() { //--------------------------------------- YES
    for (let i = 0; i < randomWord.length; i++) {
        wordCharsSet.add(randomWord.charAt(i));
    }
}

function threeRandoms() { //--------------------------------------- YES
    userRandomsSet.clear();
    let arrRandomword = randomWord.split("");
    while (userRandomsSet.size < 3) {
        randomLetter = arrRandomword[Math.floor(Math.random() * arrRandomword.length)]
        userRandomsSet.add(randomLetter);
    }
}

function storeCharIndexes() { //--------------------------------------- YES
    let counter;
    let currentLetter;

    let tempRandomWord = [];
    for (let myChar of randomWord.split("")) {
        tempRandomWord.push(myChar);
    }
    //console.log(tempRandomWord);

    wordCharsSetClone = [];
    for (let myChar of wordCharsSet) {
        wordCharsSetClone.push(myChar);
    }
    //console.log(wordCharsSetClone);

    for (let i = 0; i < wordCharsSetClone.length; i++) {
        let tempArrListIndex = [];
        currentLetter = wordCharsSetClone[i];
        while (true) {
            counter = tempRandomWord.indexOf(currentLetter);
            if (counter == -1) {
                charByIndexMap.set(currentLetter, tempArrListIndex);
                break;
            }
            tempRandomWord[counter] = "_";
            tempArrListIndex.push(counter);
        }
    }
    // console.log(charByIndexMap);
}

function dampenWord() { //--------------------------------------- YES
    userRandomWord = randomWord;
    for (let i of userRandomsSet) {
        temp = i;
        userRandomWord = userRandomWord.replaceAll(temp, "_");
    }
}
