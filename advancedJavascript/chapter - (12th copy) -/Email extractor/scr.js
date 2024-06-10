let getEmailBtn = document.getElementById("getEmailBtn");
getEmailBtn.addEventListener("click", testFunc);

let textarea = document.getElementById("textarea");
let textarea2 = document.getElementById("textarea2");

emailSet = new Set();

function testFunc() {
    console.clear();
    textAreaArray = document.querySelectorAll("textarea");
    theEmail = textAreaArray[0].value;
    textAreaArray[0].value = "";

    let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
    testAnswer = (theEmail.match(emailPattern));

    if (testAnswer != null) {
        console.log(theEmail + " - not null");

        if (textAreaArray[1].value.includes(theEmail)) {
            console.log(theEmail + " - email already exists");
        } else {
            textAreaArray[1].value = theEmail + "\n" + textAreaArray[1].value;
        }

    } else {
        console.log(theEmail + " - is null");
    }
}
