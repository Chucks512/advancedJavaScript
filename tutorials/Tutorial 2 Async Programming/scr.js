//userInput = prompt("enter number input");
userInput = "4";

switch (userInput) {
    case "1":
        alert("delay is 3 seconds");
        setTimeout(funcCallback, 3000)
        break;
    case "2":
        myNum = prompt("provide random integer");
        isEven(myNum);
    case "3":
        async function f() {//yes this is bad code, i know, but me needs a nap & a meal
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("done!"), 1000)
            });
            let result = await promise; // wait until the promise resolves (*)
            alert(result); // "done!"
        }
        f();
        break;
    default:
        alert("input invalid - end of program")
        break;
}
//------------------------------------------------
function funcCallback() {
    alert("delay complete");
}
function isEven(myNum) {
    function myDisplayer(myOutput) {
        alert(myOutput);
    }
    let myPromise = new Promise(function (myResolve, myReject) {
        let x = myNum;

        if (x % 2 == 0) {
            myResolve("The number is even.");
        } else {
            myReject("The number is odd.");
        }
    });
    myPromise.then(
        function (value) { myDisplayer(value); },
        function (error) { myDisplayer(error); }
    );
}
