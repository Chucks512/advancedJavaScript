var myTable =  document.getElementById("output");
var textBox = document.getElementById("addFriend");
var addFriendBtn = document.getElementById("addNew");
var rowCount = -1;
addFriendBtn.addEventListener("click", event => {newEntry()});


function newEntry(toBeAdded)
{ 
    rowCount++;
    let clickCount = 0;
    
    let row = myTable.insertRow(rowCount);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = (rowCount+1);
    cell2.innerHTML = textBox.value;
    cell3.innerHTML = clickCount;
    
    row.addEventListener("click", function () {
        clickCount++;
        cell3.innerHTML = clickCount;
    })
}

