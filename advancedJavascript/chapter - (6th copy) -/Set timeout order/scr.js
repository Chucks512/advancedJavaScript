console.log("meeeeee");
let onePrint = () => console.log("One");
let twoPrint = () => {console.log("Two")};

function print312() {
    console.log("Three");
    onePrint();
    twoPrint();
}
//--------------------------------------------------------
function finalPrint()
{
    console.log("Four");
    setTimeout(onePrint, 0);
    print312();
}
finalPrint();