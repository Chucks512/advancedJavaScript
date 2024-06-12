emailInput = document.getElementsByTagName("input")[0];
passwordInput = document.getElementsByTagName("input")[1];
usernameInput = document.getElementsByTagName("input")[2];

submitBtn = document.getElementsByTagName("input")[3];
submitBtn.addEventListener("click", submitFunc);

var myObject = {
};

function submitFunc() {
    console.log(
        emailInput.value + "\n" + 
        passwordInput.value + "\n" + 
        usernameInput.value
    );
    checkMailValidity();
    checkPswdValidity();
}

function checkMailValidity() {
    theEmail = emailInput.value;

    let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
    testAnswer = (theEmail.match(emailPattern));

    if (testAnswer != null) {
        alert(theEmail + " - email valid");

    } else {
        alert(theEmail + " -invalid email character match");
    }
}

function checkPswdValidity() {
    //alert("in func");
    password = passwordInput.value;

    let passwordPattern = /([a-zA-Z0-9])/g;
    testAnswer = (password.match(passwordPattern));
    alert(testAnswer);

    if (testAnswer != null) {
        //alert(password + " - password valid");
        //console.log(password + " - not null");
        //password check starts here
        if (password.length>2 && password.length<9) { // start here check email length
            alert(password + " - password valid");

            myObject +=  emailInput.value + " " +
            passwordInput.value + " " + 
            usernameInput.value;
        } else {
            alert(password + " -invalid password length match");
        }

    } else {
        alert(password + " -invalid password character match");
    }
    
}


