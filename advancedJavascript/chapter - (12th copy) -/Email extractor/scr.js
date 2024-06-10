let getEmailBtn = document.getElementById("getEmailBtn");
getEmailBtn.addEventListener("click", testFunc);

let textarea = document.getElementById("textarea");
let textarea2 = document.getElementById("textarea2");

function testFunc() {
    console.dir(document.querySelectorAll("textarea"));
    x = document.querySelectorAll("textarea");
    x[0].innerText = "testing...";
    console.log(x[0].innerText);//try get methods
}