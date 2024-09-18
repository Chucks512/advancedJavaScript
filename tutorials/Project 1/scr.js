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


// activate flat note--------------------------------------- remove code block after completing proj
/*
var checkBox = document.getElementById("flatCheck");
checkBox.addEventListener("click", checkFunc)
function checkFunc() {
    if (checkBox.checked == true) {
        //console.log("checked");
    } else {
        //console.log("unchecked");
    }
}
*/


var checkBox = document.getElementById("flatCheck"); //check box for flat note
// modulate button--------------------------------------------
var modBtn = document.getElementById("modulateButton"); // modulate button set to object
modBtn.addEventListener('click', setNewKeyIndex); // event listener added to object
var keyIndex; //index of the key`s root note
function setNewKeyIndex() {
    getKey = keySelect.value + octaveSelect.value; //set natural key to a string
    keyIndex = notes.indexOf(getKey); //get index

    isFlat = checkBox.checked; //checkbox value to object
    if (isFlat == true) {
        keyIndex--; //drop by one semitone if flat is checked
    }
}

function indexToFileName(tempIndex) {
    fileName = notes[tempIndex] + ".mp3"; //name of src(source) file
    return fileName;
}

// play root button----------------------------------------
var rootSoundOff;
var playRootBtn = document.getElementById("playRootButton"); // playRootButton set to object
playRootBtn.addEventListener('click', playRoot); // eventListener added
function playRoot() {
    tempAudio(indexToFileName(keyIndex))
    setScales();
    /*
    rootSoundOff = document.getElementById("firstPlayer");
    rootSoundOff.src = fileName;
    rootSoundOff.play();
    */
    rootSoundOff.mute = true;
    pianorize();
    rootSoundOff.mute = false;
    myInterval = setInterval(start3secPlay(), 3000);
}


//use function to set array string to new file names

//steps ------- function for interval names, play function for test, randomizer if wrong

var scaleFiles = ['empty slot'];

function setScales() {
    //console.log(keyIndex);

    for (let index = 1; index <= 8; index++) {
        scaleFiles[index] = parseInt(keyIndex) + parseInt(intervals[index]);
        /*scaleFiles[index] = notes[scaleFiles[index]];
        scaleFiles[index] = scaleFiles[index] + ".mp3";*/
    }
    //console.log(scaleFiles);
}

//add async await from player controls, wait for it to pause before accepting inputs
var pianorizeArray = [];
function pianorize() {
    for (let index = 1; index <= 8; index++) {
        var tempButton = document.getElementById("note" + index);
        tempButton.addEventListener('click', playSound);
        function playSound() {
            newSound = scaleFiles[index]
            rootSoundOff.src = newSound;
            //rootSoundOff.play();
            var playPromise = rootSoundOff.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                    // We can now safely pause video...
                    rootSoundOff.play();
                })
                    .catch(error => {
                        rootSoundOff.play();
                    });
            }
            pianorizeArray[index] = tempButton;//why aint it working???????????
            //console.log(index + " ----pianorized");

            // i pressed the flat check button mid-testing and something changed, look into it
        }
        //tempButton.click();

    }
    //console.log(pianorizeArray);

}





// all works, just make the randomizer and scorekeeper
// how to make a html button press itself

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var randomInt = randomIntFromInterval(1, 8);
//console.log(rndInt);

//clearInterval(myInterval);
function start3secPlay() {
    pianorizeArray[randomIntFromInterval(1, 8)].click();


}



var testBtn = document.getElementById("testButton");
testBtn.addEventListener('click', tempAudio);

function tempAudio(sourceFile) {
    console.log("func launched");
    virtAudio = document.createElement("audio");
    virtAudio.controls = true;
    document.body.appendChild(virtAudio);
    virtAudio.src = sourceFile;
    virtAudio.play();
    setTimeout(() => {
        document.body.removeChild(document.body.lastElementChild);
        delete virtAudio;
    }, 3000);
}