var myTable =  document.getElementById("output");
var textBox = document.getElementById("addFriend");
var addFriendBtn = document.getElementById("addNew");
var rowCount = -1;
addFriendBtn.addEventListener("click", event => {newEntry()});


function newEntry(toBeAdded)
{ 
    rowCount++;
    let clickCount = 0;
    
    let row = myTable.insertRow(rowCount);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = (rowCount+1);
    cell2.innerHTML = textBox.value;
    cell3.innerHTML = clickCount;
    
    row.addEventListener("click", function () {
        clickCount++;
        cell3.innerHTML = clickCount;
    })
}

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
    if (userRandomsSet.includes(input())){
        userRandomsSet.delete(input());
        counter = coordinates.length;

        for (let i of coordinates){
        	counter = copyRandomWord.indexOf(strUserInput);
        	copyRandomWord = copyRandomWord.replace(strUserInput, "_");
        	builderUserRandomWord[counter] = userInput;

        	arrUserRandomWord[counter] = userInput;
        }
        userRandomWord = "";
        for (let myChar of arrUserRandomWord){
        	userRandomWord += myChar;
        }

    }else{
    	gameOver++;
    	if (gameOver > 6) {
    		console.log("you lose!! " + randomWord);
    		fail;
    	}
    }
}

function getRandomWord(myList){
	randomWord = myList[Math.floor(Math.random() * myList.length)];
	return randomWord;
}

//set.add("c");
function wordToHashSet(){
	for (let i = 0; i < randomWord.length(); i++) {
		wordCharsSet.add(randomWord.charAt(i));
	}
}

function threeRandoms(){
	let arrRandomword = randomWord.split("");
	counter = 0;
	while(counter < 3){
		randomLetter = arrRandomword[Math.floor(Math.random() * arrRandomword.length)]
		if (true == (userRandomsSet.add(randomLetter)) ) {
			counter++;
		}
	}
}

function storeCharIndexes(){
	let counter;
	let currentLetter;

	let tempRandomWord = [];
	for(let myChar of randomWord.split("")){
		tempRandomWord = tempRandomWord.push(myChar);
	}

	let wordCharsSet = [];
	for(let myChar of wordCharsSet){
		wordCharsSetClone = wordCharsSetClone.push(myChar);
	}

	for ( let i = 0; i < wordCharsSetClone.length(); i++){
		let tempArrListIndex = [];
		//line 128, we will index hashset later and get (i)
		//currentLetter = wordCharsSetClone.ge
		while(true){
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

function dampenWord(){
	userRandomWord = randomWord;
	for( let i of userRandomsSet){
		temp = i;
		userRandomWord = userRandomWord.replaceAll(temp, "_");
	}


}

*/