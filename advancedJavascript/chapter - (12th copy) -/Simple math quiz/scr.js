game = document.getElementsByTagName("span")
button = document.querySelector("button")
button.addEventListener("click", btnClicked);
game[3].firstElementChild.addEventListener("onchange", changed)

input = 0;
result = 0;

function loadQuestion() {
    //console.log(game);
    game[0].innerText = Math.floor(Math.random() * 10);
    game[2].innerText = Math.floor(Math.random() * 10);
    result = Number(game[0].innerText) + Number(game[2].innerText);
}

function btnClicked() {
    input = game[3].firstElementChild.value;

    (result == input) ? alert("yay") : alert("nah");
    (result == input) ? document.body.style.backgroundColor = "green" : document.body.style.backgroundColor = "red";
    
    game[3].firstElementChild.value = "";
}

function changed(s) {
    if (document.body.style.backgroundColor != "transparent") {
        document.body.style.backgroundColor = "transparent";
        loadQuestion();
    }
}