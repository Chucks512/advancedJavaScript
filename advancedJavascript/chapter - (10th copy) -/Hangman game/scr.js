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




