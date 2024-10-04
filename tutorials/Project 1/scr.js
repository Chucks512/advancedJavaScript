var notes = [ //note names
    'B0',
    'C1',
    'Db1',
    'D1',
    'Eb1',
    'E1',
    'F1',
    'Gb1',
    'G1',
    'Ab1',
    'A1',
    'Bb1',
    'B1',
    'C2',
    'Db2',
    'D2',
    'Eb2',
    'E2',
    'F2',
    'Gb2',
    'G2',
    'Ab2',
    'A2',
    'Bb2',
    'B2',
    'C3',
    'Db3',
    'D3',
    'Eb3',
    'E3',
    'F3',
    'Gb3',
    'G3',
    'Ab3',
    'A3',
    'Bb3',
    'B3',
    'C4',
    'Db4',
    'D4',
    'Eb4',
    'E4',
    'F4',
    'Gb4',
    'G4',
    'Ab4',
    'A4',
    'Bb4',
    'B4',
    'C5',
    'Db5',
    'D5',
    'Eb5',
    'E5',
    'F5',
    'Gb5',
    'G5',
    'Ab5',
    'A5',
    'Bb5',
    'B5',
    'C6',
    'Db6',
    'D6',
    'Eb6',
    'E6',
    'F6',
    'Gb6',
    'G6',
    'Ab6',
    'A6',
    'Bb6',
    'B6',
    'C7',
];


var intervals = ['empty interval', //intervals from root note
    '0',
    '2',
    '4',
    '5',
    '7',
    '9',
    '11',
    '12'
];


//key selector----------------------------------------
var min = 1, //notes A till G will be used ... ascii A = 65
    max = 7,
    keySelect = document.getElementById('keySelector'); //retrieves frontend <select> element
for (var i = min; i <= max; i++) {
    var opt = document.createElement('option'); //an additional option created
    opt.value = String.fromCharCode(64 + i);     // converts ascii to string then assigns it
    opt.innerHTML = String.fromCharCode(64 + i); // converts ascii to string then assigns it
    keySelect.appendChild(opt); // option is included in the <select>
}
keySelect.addEventListener("change", keyValue); //to test key change
function keyValue(params) {
    //console.log(keySelect.value);
}


//octave selector--------------------------------------
var min = 1, //octaves 1 till 6 will be used
    max = 6,
    octaveSelect = document.getElementById('octaveSelector'); //retrieves frontend <select> element
for (var i = min; i <= max; i++) {
    var opt = document.createElement('option'); //an additional option created
    opt.value = i;     // assigns integer
    opt.innerHTML = i; // assigns integer
    octaveSelect.appendChild(opt); // option is included in the <select>
}
octaveSelect.addEventListener("change", octValue); //to test octave change
function octValue(params) {
    //console.log(octaveSelect.value);
}


// modulate button--------------------------------------------
var randomInterval = 0;
var modBtn = document.getElementById("modulateButton"); // modulate button set to object
modBtn.addEventListener('click', setNewKeyIndex); // event listener added to object
var keyIndex; //index of the key`s root note
var checkBox = document.getElementById("flatCheck"); //check box for flat note
function setNewKeyIndex() {
    getKey = keySelect.value + octaveSelect.value; //set natural key to a string
    keyIndex = notes.indexOf(getKey); //get index

    isFlat = checkBox.checked; //checkbox value to object
    if (isFlat == true) {
        keyIndex--; //drop by one semitone if flat is checked
    }
    setScales(); //new key intervals to new array
    pianorize(); // set button sounds to new scale

    randomInterval = randomIntFromInterval(1, 8);
}


// turns the index of the note to a filename
function indexToFileName(tempIndex) {
    fileName = notes[tempIndex] + ".mp3"; //name of src(source) file
    return fileName;
}

// play root button----------------------------------------
var playRootBtn = document.getElementById("playRootButton"); // playRootButton set to object
playRootBtn.addEventListener('click', playRoot); // eventListener added
function playRoot() {
    playAudio(indexToFileName(keyIndex)); //plays root note
}


//assigns indexes to a new key
var scaleFiles = ['empty slot'];
function setScales() {
    for (let index = 1; index <= 8; index++) {
        scaleFiles[index] = parseInt(keyIndex) + parseInt(intervals[index]); // set new index per scale interval
    }
}


//provides sounds to interval buttons
var answerAttempt = 0;
var pianorizeArray = []; //instantiate array
function pianorize() {
    for (let index = 1; index <= 8; index++) {
        var tempButton = document.getElementById("note" + index); //get button
        tempButton.addEventListener('click', playSound); // add eventListener
        function playSound() {
            playAudio(indexToFileName(scaleFiles[index])); //play audio
            pianorizeArray[index] = tempButton; // add button to  array
            answerAttempt = index;//set user input to variable to be assessed
        }
    }
}


//-----------------plays a sourcefile
var audioDiv = document.getElementById("audioDiv"); // front end audio div to variable
audioDiv.style.backgroundColor = "blue"; // set div colour
incrementInt = 0; // auto-Increment player ID for future reference
function playAudio(sourceFile) {
    while (audioDiv.hasChildNodes()) { //checks if any players are active
        audioDiv.removeChild(audioDiv.children[0]); //removes players if present
    }
    virtAudio = document.createElement("audio"); //creates audio element
    virtAudio.controls = true; //activates audio UI controls

    tempID = "x" + incrementInt; //temporary with auto-increment ID
    virtAudio.id = tempID; //assigns ID to working object
    incrementInt++; // increment ID counter

    audioDiv.appendChild(virtAudio);//append to UI
    virtAudio.src = sourceFile; //assign audio file
    virtAudio.play(); //play file
    virtAudio.onended = function () { //at end of play/file
        audioDiv.removeChild(virtAudio); //remove given audio component
        delete virtAudio; // delete for memory management
    };
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min); //returns random int
}

var playRandomNote = document.getElementById("playRandomNote"); //UI play random note button
playRandomNote.addEventListener('click', funcPlayRandomNote);//add event listener

function funcPlayRandomNote() {
    playAudio(indexToFileName(scaleFiles[randomInterval])); //plays randomised note
}


var checkAnswer = document.getElementById("checkAnswer"); //check answer button
checkAnswer.addEventListener('click', funcCheckAnswer); //add event listener
var record = ""; //temporary record keeper
sessionCounter = 0;//counts number of score attempts
scoreUI = document.getElementById('scoreUI');//keep scores list
mark = document.getElementById('mark');//correct attempts out of total attempt
corrects = 0; // number of correct attempts

function funcCheckAnswer() {
    correctness = (answerAttempt == randomInterval);
    if (correctness) { //checks if they the same
        console.log("correct"); //if yes
        corrects++;
    } else {
        console.log("WRONG"); //if no
    }
    record = "attempt: " + answerAttempt + ", answer :" + randomInterval;// performance notes string
    /*
    if (correctness) {
        record.style.color = "green";//listItem
    } else {
        record.style.color = "red";//listItem
    }
    */
    sessionStorage.setItem(sessionCounter.toString(), record);// to session cache
    

    scoreUI.innerHTML = '';//clears sores list
    for (var i = 0; i <= sessionCounter; i++) {//for each score attempt
        const listItem = document.createElement('li');//inner list object element
        listItem.textContent = sessionStorage.getItem(i.toString());//element given text content   
        scoreUI.appendChild(listItem);//element sent to front end
    }
    sessionCounter++;//increment number of attempts
    mark.innerHTML = corrects.toString() + "/" + sessionCounter + " " + correctness;//correct mark over total mark
    
    randomInterval = randomIntFromInterval(1, 8);//assigns new random notes
}



//refactor
// comment code
//check classroom and build scorekeeper
// build scrollable scoreboard
// hide or unactivate modulate button for duration of quiz
