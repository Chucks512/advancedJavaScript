mainArray = [];
tempArray = [];

for (let outer = 1; outer < 6; outer++) {  

    for (let inner = 1; inner < 6; inner++) {
        num = outer * inner;
        tempArray.push(num);
    }   
    mainArray.push(tempArray);
    tempArray = tempArray.slice(0,0);
}

console.log(mainArray)

