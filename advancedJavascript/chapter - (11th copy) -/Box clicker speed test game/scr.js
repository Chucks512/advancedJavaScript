redBoxVar = document.getElementById("redBox");
redBoxVar.style.display = "block"; //"none"
startTime = Date.now();
counter = 0;
timesArr = [];

function startGame(){
    console.log("testing...");
}

function redPressed(params) {
    addTime();
    changePos();
    counter++;
    if (counter > 3) {
        redBoxVar.style.display = "none";
        endGame();
    }
}

function randomizer() {
    myString = Math.floor(Math.random() * 100);
    myString += "%";
    myString = String(myString);
    return myString;
}

function changePos() {
    redBoxVar.style.top = randomizer();
    redBoxVar.style.left = randomizer();
}

function addTime() {
    timesArr.push(Date.now());
}

function endGame() {
    averageFinder();
}

secondsList = [];
function averageFinder() {
    for (let index = 0; index < 3; index++) {
        temp = timesArr[index+1] - timesArr[index];
        temp = temp * 0.001;
        secondsList.push(temp);
    }
    temp = 0.0;
    temp += secondsList[0];
    temp += secondsList[1];
    temp += secondsList[2];
    temp = temp/3;
    
    console.log("on average it takes you "+temp+" seconds to press the button");
}
