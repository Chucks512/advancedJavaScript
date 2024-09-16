var min = 12,
    max = 100,
    select = document.getElementById('keySelector');

for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

/*----------------- */

// since 97 is the ascii value for 'a', and your value for 'a' is 3, you need to do this to get the value of the integer converted to a character:

if(i>=3){
    String.fromCharCode(94 + i);
}

//------------------

// You can use the String.fromCharCode(x) function for this, you just need to pass the proper index (eg: 97 = a, 98 = b)

const numberA = 1; // 1 = A, 2 = B,...., 26 = Z
const numberB = 2; 


//lowercase (start in CharCode 97)
console.log( String.fromCharCode(96 + numberA) ); //a
console.log( String.fromCharCode(96 + numberB) ); //b
   

console.log("------------");


//uppercase (start in CharCode 65)
console.log( String.fromCharCode(64 + numberA) ); //A
console.log( String.fromCharCode(64 + numberB) ); //B


