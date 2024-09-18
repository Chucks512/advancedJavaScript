var notes = [
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

var intervals = ['empty interval',
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
var min = 1,
    max = 7,
    keySelect = document.getElementById('keySelector');
for (var i = min; i <= max; i++) {
    var opt = document.createElement('option');
    opt.value = String.fromCharCode(64 + i);
    opt.innerHTML = String.fromCharCode(64 + i);
    keySelect.appendChild(opt);
}
keySelect.addEventListener("change", keyValue); //test key change
function keyValue(params) {
    //console.log(keySelect.value);
}



//octave selector--------------------------------------
var min = 1,
    max = 6,
    octaveSelect = document.getElementById('octaveSelector');
for (var i = min; i <= max; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    octaveSelect.appendChild(opt);
}
octaveSelect.addEventListener("change", octValue); //test octave change
function octValue(params) {
    //console.log(octaveSelect.value);
}


// activate flat note---------------------------------------
var checkBox = document.getElementById("flatCheck");
checkBox.addEventListener("click", checkFunc)
function checkFunc() {
    if (checkBox.checked == true) {
        //console.log("checked");
    } else {
        //console.log("unchecked");
    }
}


// modulate button--------------------------------------------
var modBtn = document.getElementById("modulateButton");
modBtn.addEventListener('click', newKey);
var keyIndex;
function newKey() {
    getKey = keySelect.value + octaveSelect.value;
    isFlat = checkBox.checked;

    keyIndex = getKey;
    keyIndex = notes.indexOf(keyIndex);

    if (isFlat == true) {
        keyIndex--;
    }
    fileName = notes[keyIndex] + ".mp3";
    //console.log(fileName);
}

// play root button----------------------------------------
var rootSoundOff;
var playRootBtn = document.getElementById("playRootButton");
playRootBtn.addEventListener('click', playRoot);
function playRoot() {
    rootSoundOff = document.getElementById("firstPlayer");
    rootSoundOff.src = fileName;
    rootSoundOff.play();
    setScales();
    rootSoundOff.mute = true;
    pianorize();
    rootSoundOff.mute = false;
}


//use function to set array string to new file names

//steps ------- function for interval names, play function for test, randomizer if wrong

var scaleFiles = ['empty slot'];

function setScales() {
    //console.log(keyIndex);

    for (let index = 1; index <= 8; index++) {
        scaleFiles[index] = parseInt(keyIndex) + parseInt(intervals[index]);
        scaleFiles[index] = notes[scaleFiles[index]];
        scaleFiles[index] = scaleFiles[index] + ".mp3";
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


myInterval = setInterval(function, milliseconds);
clearInterval(myInterval);
