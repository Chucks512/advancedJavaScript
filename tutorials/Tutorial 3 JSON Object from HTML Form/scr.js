function convertToJson() {
    let form = document.getElementById("dataForm");//retrieve UI form
    let formData = {};
    for (let i = 0; i < form.elements.length; i++) {//exeute per element
        let element = form.elements[i];//assign inputs to array object
        if (element.type !== "submit") {//exclude submit button
            formData[element.name] = element.value;//element name-value pair assignment
        }
    }
    let jsonData = JSON.stringify(formData);//turn json to string format
    let jsonOutput = document.getElementById("jsonOutput");//retrieve UI output div
    jsonOutput.innerHTML = "<pre>" + jsonData + "</pre>"; // reset UI
}
/*
let btnSub = document.getElementById("btnSub");
btnSub.addEventListener("click", convertToJson);
*/