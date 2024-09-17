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


//key selector
var min = 1,
    max = 7,
    keySelect = document.getElementById('keySelector');
for (var i = min; i <= max; i++) {
    var opt = document.createElement('option');
    opt.value = String.fromCharCode(64 + i);
    opt.innerHTML = String.fromCharCode(64 + i);
    keySelect.appendChild(opt);
}

keySelect.addEventListener("change", keyValue);
function keyValue(params) {
    //console.log(keySelect.value);
}

//octave selector
var min = 1,
    max = 6,
    octaveSelect = document.getElementById('octaveSelector');
for (var i = min; i <= max; i++) {
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    octaveSelect.appendChild(opt);
}

octaveSelect.addEventListener("change", octValue);
function octValue(params) {
    //console.log(octaveSelect.value);
}


// activate flat note
var checkBox = document.getElementById("flatCheck");
checkBox.addEventListener("click", checkFunc)

function checkFunc() {
    if (checkBox.checked == true) {
        //console.log("checked");
    } else {
        //console.log("unchecked");
    }
}

// object.addEventListener("change", myScript);

// modulate button

var modBtn = document.getElementById("modulateButton");
modBtn.addEventListener('click', newKey);

function newKey() {
    
    getKey = keySelect.value + octaveSelect.value;
    isFlat = checkBox.checked;
    console.log(getKey + ""+ isFlat);
    console.log("------------above is good");
    
    var keyIndex = getKey;
    keyIndex = notes.indexOf(keyIndex);
    //keyIndex++;

    if (isFlat == true) {
        keyIndex--;
    }
    fileName = notes[keyIndex] + ".mp3";
    console.log(fileName);

    

    
    //array scale
}