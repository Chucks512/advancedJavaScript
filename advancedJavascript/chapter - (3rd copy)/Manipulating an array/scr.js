const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

//Manipulate your array using various methods, such as pop(), push(), shift(), and unshift(), and transform it into the following:

// list = ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"];

newList = theList;
newList.shift();
newList.pop();
newList.unshift("FIRST");
newList[3] = "hello world";
newList[2] = "MIDDLE";
newList.pop();
newList.pop();
newList.pop();
newList.push("LAST");

console.log(newList);
