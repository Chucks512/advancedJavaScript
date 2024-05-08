titles = document.querySelectorAll(".title");
myTexts = document.querySelectorAll(".myText");

for (let index = 0; index < 3; ++index) {
    titles[index].addEventListener("click", event =>
    {
        titles[index].nextElementSibling.style.display = 'contents';
    })
}

for (let index = 0; index < 3; ++index) {
    myTexts[index].addEventListener("click", event =>
    {
        myTexts[index].style.display = 'none';
    })
    
}