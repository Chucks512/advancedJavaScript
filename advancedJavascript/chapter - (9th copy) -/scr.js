let mainList = document.getElementsByTagName("div")[0].getElementsByTagName("ul");
mainList.id = "mainList";

tempDiv = document.getElementsByTagName("div");

myFlag = true;
for (let index = 0; index < 3; ++index) {

    console.log(tempDiv[index]);
    tempDiv[index].id = index;

    if (myFlag == true) {
        myFlag = false;
        tempDiv[index].style.color = 'red';
        continue;
    }
    else if (myFlag == false) {
        myFlag = true;

        tempDiv[index].style.color = 'blue';
        continue;
    }
    
    
}
